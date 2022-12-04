import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import RestaurendCard from "./RestaurendCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
const [featuredRestaurant, setFeatureRestaurant] = useState([])
// console.log(id);

useEffect(() => {
  sanityClient.fetch(`*[_type == "featured" && _id ==  $id]{
    ...,
    restaurants[] ->{
    ...,
      dishes[]-> 
  },
  }[0]`,{id}).then((data)=>{
    setFeatureRestaurant(data?.restaurants);
  });
}, [])


  return (
    <View>
      <View className="flex-row justify-between mx-4 mt-4 ">
        <View>
          <Text className="font-bold text-lg text-regal-blue">{title}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>
        <ArrowRightIcon color="#FDBF50" />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurent Cards */}
        {featuredRestaurant?.map(restaurant=>(
          <RestaurendCard
          key={restaurant._id}
          id={restaurant._id}
          imgUrl={restaurant.image}
          title={restaurant.name}
          rating={restaurant.rating}
          genre="Offers"
          address={restaurant.address}
          short_description={restaurant.short_description}
          dishes={restaurant.dishes}
          long={restaurant.long}
          lat={restaurant.lat}
        />
        ))}
       
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
