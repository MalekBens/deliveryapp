import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import RestaurantInfo from '../components/RestaurantInfo';
import RestaurantDishes from '../components/RestaurantDishes';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from "react-redux";
import { setRestaurant } from '../features/restaurantSlice';
import { useEffect } from 'react';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        }
    } = useRoute();

    useEffect(() => {
      dispatch(setRestaurant({
        id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
      }))
    }, [dispatch])
    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View>
                    <Image
                        source={{
                            uri: urlFor(imgUrl).url(),
                        }}
                        className="h-56 w-full p-4 " />
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }} className="absolute top-10 left-5 p-2 bg-gray-100 rounded-full">
                        <ArrowLeftIcon
                            color="#FF724C" size={20}

                        />
                    </TouchableOpacity>
                </View>
                <RestaurantInfo
                    genre={genre}
                    address={address}
                    rating={rating}
                    short_description={short_description}
                    title={title}
                />
                <View className="pb-32">
                    <Text className="text-xl px-4 pt-6 mb-3 font-bold text-theme-blue">Menu</Text>
                    {/* DishRow */}

                    {dishes?.map((dish) => (
                        <RestaurantDishes key={dish._id} id={dish._id} imgUrl={dish.image} name={dish.name} short_description={dish.short_desscription} price={dish.price} />
                    ))}

                </View>

            </ScrollView>
        </>
    )
}

export default RestaurantScreen