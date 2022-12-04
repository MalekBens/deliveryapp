import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useEffect, useState } from 'react';
import {urlFor} from "../sanity";
import {
  XCircleIcon
} from "react-native-heroicons/outline";
const BasketScreen = () => {
  const navigation = useNavigation();
  const totalprice = useSelector(selectBasketTotal)
  const items = useSelector(state=>selectBasketItems(state));
  const restaurant = useSelector(selectRestaurant);

  const [groupedItemInBasket, setGroupedItemInBasket] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results
    }, {});
    setGroupedItemInBasket(groupedItems)
  }, [items])
  console.log(groupedItemInBasket);

  return (
    <>

      <View className="pt-5 bg-white flex-row justify-end space-x-20 px-6 py-8 items-center">
        <View>
          <Text className="text-lg font-bold text-center text-theme-blue">Basket</Text>
          <Text className="text-center text-gray-400">{restaurant.title}</Text>
        </View>
        <TouchableOpacity onPress={navigation.goBack}>
          <XCircleIcon size={40} color="#2A2C41" />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-between rounded-br-3xl rounded-bl-3xl bg-white p-3">
        <View className="flex-row items-center space-x-2">
          <Image
            source={{
              uri: "https://img.freepik.com/free-psd/delivery-3d-illustration-with-man-scooter-with-backpack_23-2149442162.jpg?t=st=1669213428~exp=1669214028~hmac=9118a7c5f7573f0038da0a1b4f3139a07ef3274f84def095902d30efb95e0a2b",
            }}
            className="h-10 w-10 rounded-full"
          />
          <Text className="text-sm">Deliver in 50-75 min.</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-theme-yellow">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="divide-y divide-gray-50 mt-5">
        {Object.entries(groupedItemInBasket).map(([key,items])=>(
          <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5 rounded-lg">
            <Text className="text-theme-orange opacity-60 font-bold">{items.length} x</Text>
            <Image 
            source={{
              uri:urlFor(items[0]?.imgUrl).url(),
            }}
            className="h-12 w-12 rounded-lg"/>
            <Text className="text-theme-blue flex-1">{items[0].name}</Text>
            <Text className="text-gray-500">{items[0].price} TND</Text>
            <TouchableOpacity onPress={()=>dispatch(removeFromBasket({id:key}))}>
            <Text className="text-theme-yellow text-xs">Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View className="bg-white rounded-tl-3xl rounded-tr-3xl space-y-4 mt-5 p-5">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">
            Subtotal
          </Text>
          <Text className="text-gray-400">{totalprice} TND</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-400">
            Delivery Fee
          </Text>
          <Text className="text-gray-400">8 TND</Text>
        </View>
        <View className="flex-row justify-between">
          <Text>
            Order Total
          </Text>
          <Text className="font-extrabold">{totalprice === 0 ?totalprice: totalprice+8} TND</Text>
        </View>
        <TouchableOpacity 
        onPress={()=> navigation.navigate("PreparingOrderScreen")}
        className={totalprice === 0 ? "items-center bg-gray-200 p-3 rounded-3xl":"items-center bg-theme-orange/50 p-3 rounded-3xl"}
         disabled={totalprice === 0 ? true:false} >
          <Text>Place Order</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default BasketScreen