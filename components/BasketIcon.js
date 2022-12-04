import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
const BasketIcon = () => {
  const navigation = useNavigation();
    const totalprice = useSelector(selectBasketTotal)
    const selectedItemsBasket = useSelector(state=>selectBasketItems(state));
if(selectedItemsBasket.length === 0) return null;
  return (
    <View className="absolute bottom-8 w-full z-50">
      <TouchableOpacity className="bg-orange-300 opacity-95 rounded-lg mx-5 flex-row p-2 flex justify-between items-center"
      onPress={()=> navigation.navigate("Basket")}
      >
        <View className="h-10 w-10 bg-orange-400/50  items-center justify-center rounded-xl">
        <Text className="font-extrabold text-lg text-white">{selectedItemsBasket.length}</Text>
        </View>
        <Text className="text-lg font-extrabold text-theme-white">View Basket</Text>
        <Text className="text-lg text-theme-white font-extrabold">{totalprice} TND</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon