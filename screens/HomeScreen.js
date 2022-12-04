import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  RefreshControl,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect,useState, useEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories,setFeaturedCategories] = useState([]) 
  
 
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  } 

const [refreshing, setRefreshing] = useState(false)

const onRefresh = React.useCallback(()=>{
  setRefreshing(true);
  wait(200).then(()=>setRefreshing(false));
}
,[]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

useEffect(() => {
  sanityClient.fetch (`*[_type == "featured"]{
    ...,
    restaurants[] ->{
    ...,
    dishes[]->
    
  },
  }`)
    .then((data)=>{
      setFeaturedCategories(data);
    });
   
  }, 
  []);



  return (
    <SafeAreaView className="bg-white pt-7 ">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx4 space-x-2 px-4">
        <Image
          source={{
            uri: "https://img.freepik.com/free-psd/delivery-3d-illustration-with-man-scooter-with-backpack_23-2149442162.jpg?t=st=1669213428~exp=1669214028~hmac=9118a7c5f7573f0038da0a1b4f3139a07ef3274f84def095902d30efb95e0a2b",
          }}
          className="h-8 w-8 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1 items-center">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#FDBF50" />
          </Text>
        </View>

        {/* User Icon */}
        <UserIcon size={20} color="#FDBF50" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 px-4">
        <View className="flex-row flex-1 space-x-2 bg-orange-50 p-2 rounded-full items-center">
          <MagnifyingGlassIcon color="#FDBF50" size={20} />
          <TextInput
            placeholder="Restaurents and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={20} color="#FDBF50" />
      </View>

      {/* Body */}
      <ScrollView
      refreshControl={
        <RefreshControl 
        onRefresh={onRefresh}
        refreshing={refreshing}
        />
      }
        className="bg-gray-50"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows  */}
        
        {featuredCategories?.map((category)=>(
          <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
          />
        ))}
       
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
