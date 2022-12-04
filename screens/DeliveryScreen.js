import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/outline';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import MapView, { MapMarker } from 'react-native-maps';
import * as Location from 'expo-location';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const [location, setLocation] = useState([]);
    const [errorMsg, setErrorMsg] = useState([]);
    // {We will add it later}
useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

    return (
        
        <View className="bg-theme-orange/60 flex-1">
            <View className="pt-8 px-4 pb-4 flex-row justify-between items-center z-50">
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <XMarkIcon size={38} color="white" />
                </TouchableOpacity>
                <Text className="font-light text-white text-lg">Order Help</Text>
            </View>
            <View className="bg-white py-2 rounded-lg p-4 my-2 mx-4 z-50 shadow-md flex-row items-center">
                <View className="w-5/6">
                    <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                    <Text className="text-4xl text-theme-blue font-bold">45-55 Minutes</Text>
                    <Progress.Bar progress={0.3} width={170} indeterminate={true} className="mt-2" color='orange'/>
                    <Text className="text-gray-400 text-xs mt-2">Your order at {restaurant.title} is  being prepared</Text>
                </View>
                <Animatable.Image 
      source={{uri:"https://media.giphy.com/media/IcoMr7mD2nOR2pS0bl/giphy.gif"}}
      animation="slideInUp"
      iterationCount={1}
      className="h-24 w-24"
      />
            </View>
            <MapView
            initialRegion={{
                latitude:restaurant.lat,
                longitude: restaurant.long,
                latitudeDelta:0.3,
                longitudeDelta:0.3,
            }}
            className="flex-1 -mt-10 z-0"
            mapType='mutedStandard'>
            <MapMarker 
            coordinate={{
                latitude:restaurant.lat,
                longitude:restaurant.long,
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="#2A2C41"
            />
            {text!=errorMsg?
             <MapMarker 
            coordinate={{
                latitude:location.coords.latitude,
                longitude:location.coords.latitude,
            }}
            title={restaurant.title}
            description="My location"
            identifier="destination"
            pinColor="#FF724C"
            
            />: <></>}
            </MapView>
            
        </View>
        
        
    )
}

export default DeliveryScreen