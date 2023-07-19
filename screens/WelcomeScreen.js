import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const WelcomeScreen = () => {

  const navigation = useNavigation();

  return ( 
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-4">
        <Text style={{fontSize: wp(10)}} className="text-center font-bold text-gray-700">
            Wall-E
        </Text>
        <Text style={{fontSize: wp(5)}} className="text-center text-lg font-semibold tracking-wider text-gray-500">
            Welcome to the future
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require("../assets/logo.png")}
          style={{width: wp(75), height: wp(75)}}
        />
      </View>
      <View className="space-y-5">
        <TouchableOpacity 
          className="bg-[#2dd4bf] mx-5 p-4 rounded-2xl"
          onPress={()=> navigation.navigate("Home")}
        >
          <Text style={{fontSize: wp(5)}} className="text-center font-bold text-white">
            Get Started
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: wp(3)}} className="text-center font-semibold tracking-wider text-gray-500">
          Powered by MGF inc.
        </Text>
      </View>
    </SafeAreaView>
   );
}

 
export default WelcomeScreen;