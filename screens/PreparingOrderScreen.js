import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 4800);
  }, [])
    return (
    <View className="bg-theme-blue flex-1 items-center justify-center">
      <Animatable.Image 
      source={{uri:"https://media.giphy.com/media/kgUoG0kpDycjIRk3Af/giphy.gif"}}
      animation="slideInUp"
      iterationCount={1}
      className="h-64 w-64"
      />
      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-sm text-theme-white font-bold text-center"
      >Waiting for Restaurant to accept your order!</Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" className="pt-7"/>
    </View>
  )
}

export default PreparingOrderScreen