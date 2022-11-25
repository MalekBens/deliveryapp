import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

const RestaurendCard = ({
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
}) => {
  return (
    <TouchableOpacity className="bg-theme-white mr-3 rounded-lg">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-lg"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2 text-theme-blue">{title}</Text>
        <View className="flex-row space-x-3 items-center">
          <View className="flex-row space-x-1 items-center">
            <StarIcon color="#FF724C" size={20} opacity=".5" />
            <Text className="text-theme-orange">{rating}</Text>
          </View>

          <Text className="text-gray-500 text-xs">{genre}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <MapPinIcon size={20} opacity=".5" color="#FF724C" />
          <Text className="text-gray-500 text-xs">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurendCard;
