import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Features = () => {
  return ( 
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">Features</Text>
      
        {/* CHAT GPT */}
        <View className="bg-emerald-200 p-4 rounded-xl space-y-4">
          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../assets/chatgptIcon.png")}
              style={{height: hp(4), width: hp(4)}}
            />
            <Text className="text-gray-700 font-semibold" style={{fontSize: wp(4.8)}}>ChatGPT</Text>
          </View>
          <Text className="text-gray-700 font-medium" style={{fontSize: wp(3.8)}}>
            ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
          </Text>
        </View>
        {/* DALL-E */}
        <View className="bg-purple-200 p-4 rounded-xl space-y-4">
          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../assets/dalle.png")}
              style={{height: hp(4), width: hp(4)}}
              className="rounded-md"
            />
            <Text className="text-gray-700 font-semibold" style={{fontSize: wp(4.8)}}>DALL-E</Text>
          </View>
          <Text className="text-gray-700 font-medium" style={{fontSize: wp(3.8)}}>
            DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.
          </Text>
        </View>
        {/* SMART AI */}
        <View className="bg-cyan-200 p-4 rounded-xl space-y-4">
          <View className="flex-row items-center space-x-2">
            <Image
              source={require("../assets/smartai.png")}
              style={{height: hp(4), width: hp(4)}}
              className="rounded-md"
            />
            <Text className="text-gray-700 font-semibold" style={{fontSize: wp(4.8)}}>Smart AI</Text>
          </View>
          <Text className="text-gray-700 font-medium" style={{fontSize: wp(3.8)}}>
            A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.
          </Text>
        </View>
      
    </View>
   );
}
 
export default Features;