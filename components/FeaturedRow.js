import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  ArrowRightIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import RestaurendCard from "./RestaurendCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="flex-row justify-between mx-4 mt-4">
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
        <RestaurendCard
          id={123}
          imgUrl="https://img.freepik.com/free-photo/top-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board_176474-3466.jpg?w=996&t=st=1669291448~exp=1669292048~hmac=00986c6248065fe57b4a2d0184045c3e452167854551009e2edfc085bd4bb017"
          title="Yo! Sushi"
          rating={4.5}
          genre="tunisian"
          address="123 Main St"
          short_description="This is a | description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurendCard
          id={123}
          imgUrl="https://img.freepik.com/free-photo/top-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board_176474-3466.jpg?w=996&t=st=1669291448~exp=1669292048~hmac=00986c6248065fe57b4a2d0184045c3e452167854551009e2edfc085bd4bb017"
          title="lorem"
          rating={4.5}
          genre="tunisian"
          address="123 Main St"
          short_description="This is a | description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurendCard
          id={123}
          imgUrl="https://img.freepik.com/free-photo/top-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board_176474-3466.jpg?w=996&t=st=1669291448~exp=1669292048~hmac=00986c6248065fe57b4a2d0184045c3e452167854551009e2edfc085bd4bb017"
          title="lorem"
          rating={4.5}
          genre="tunisian"
          address="123 Main St"
          short_description="This is a | description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
