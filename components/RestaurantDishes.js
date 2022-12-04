import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItemID, selectBasketTotal, } from '../features/basketSlice';

const RestaurantDishes = ({ id, name, short_description, imgUrl, price }) => {

    const [isPressed, setIsPressed] = useState(false)
    const totalprice = useSelector(selectBasketTotal)
    const items = useSelector(state => selectBasketItemID(state, id))
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, short_description, imgUrl, price }));
    }
    
    const itemRemoveFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({ id, price }));
    }

    return (
        <>
            <View className="border border-gray-100">

                <TouchableOpacity onPress={() => {
                    setIsPressed(!isPressed)
                }} className="bg-white">

                    <View className="flex-row p-4 items-center">
                        <View className="flex-1 pr-2">
                            <View>
                                <Text className="text-xl text-theme-blue">{name}</Text>
                                <Text className="text-xs text-gray-400 mt-1">{short_description}{short_description}{short_description}{short_description}</Text>
                            </View>
                            <Text className="text-xs text-gray-400 mt-2">{price} TDN</Text>

                        </View>
                        <View>

                            <Image
                                source={{
                                    uri: urlFor(imgUrl).url()
                                }}
                                className="h-20 w-20 rounded-xl"
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                {isPressed && (
                    <View className="bg-white px-4 py-2 mb-4">
                        <View>

                            <View className="flex-row space-x-2 items-center">
                                <TouchableOpacity 
                                disabled={!items.length>0}
                                className={items.length > 0 ? 'bg-theme-orange rounded-full' : 'bg-gray-300 rounded-full'}
                                 onPress={itemRemoveFromBasket}>
                                    <MinusIcon size={25} color="white" />
                                </TouchableOpacity>
                                <Text className="text-sm text-gray-500">{items.length}</Text>
                                <TouchableOpacity className={`
                                bg-theme-orange rounded-full`}
                                    onPress={addItemToBasket} >
                                    <PlusIcon size={25} color="white" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                )}
            </View>
          
        </>
    );
}

export default RestaurantDishes