import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'

const RestaurantInfo = ({rating, genre, address, short_description,title}) => {
  return (
    <View className="bg-white">
    <View className="px-4 pt-4">
        <Text className="text-3xl font-bold text-theme-blue">{title}</Text>
        <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
                <StarIcon color="#FDBF50" size={22} opacity={.5}/>
                <Text className="text-xs text-gray-400">
                    <Text className="text-theme-yellow" >{rating}</Text>  {genre}
                </Text>
            </View>
    
            <View className="flex-row items-center">
                <MapPinIcon color="#2A2C41" size={22}/>
                <Text className="text-xs text-gray-400">Nearby . {address}</Text>
            </View>
        </View>
    <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
    </View>
    <TouchableOpacity>

    <View className="flex-row justify-between p-5 border-t-2 border-gray-50 items-center">
            <View className="flex-row space-x-2 items-center">
            <QuestionMarkCircleIcon size={22} color="#2A2C41" opacity={.6}/>
            <Text className="text-gray-400">Have a food allergy?</Text>
            </View>
            <ChevronRightIcon size={22} color="#2A2C41" opacity={.45}/>
        </View>
    </TouchableOpacity>
            </View>
  )
}

export default RestaurantInfo