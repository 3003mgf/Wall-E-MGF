import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from "../constants/index"
import Voice from '@react-native-community/voice';


const HomeScreen = () => {

  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);

  const clearMessages = () =>{
    setMessages([]);
  };

  const speechStartHandler = (e) =>{
    console.log("Start handler");
  }
  const speechEndHandler = (e) =>{
    setRecording(false);
    console.log("End handler");
  }
  const speechResultsHandler = (e) =>{
    console.log("Voice event ", e);
  }
  const speechErrorHandler = (e) =>{
    console.log("Error handler", e);
  }

  const startRecording = async() =>{
    setRecording(true);
    try{  
      await Voice.start("en-GB");
    }catch(error){
      console.log(error);
    }
  };

  const stopRecording = async() =>{
    try{  
      await Voice.stop();
      setRecording(false);

      // Fetch results fromm Chat GPT
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;

    // return ()=>{
    //   Voice.destroy().then(Voice.removeAllListeners);
    // }
  }, []);
  
  return ( 
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5 mt-10 pt-5">
        {/* Logo */}
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/logo.png")}
            style={{width: hp(15), height: hp(15)}}
          />
        </View>

        {/* Messages */}
        {
          messages.length > 0 ?  (
            <View className="space-y-2 flex-1 mt-4">
              <Text
                style={{fontSize: wp(5)}}
                className="text-gray-600 font-semibold ml-1"
              >
                Wally Assistant
              </Text>
              <View
                style={{height: hp(58)}}
                className="bg-neutral-200 rounded-3xl p-4"
              >
                <ScrollView
                  bounces={false}
                  className="space-y-4"
                  showsVerticalScrollIndicator={false}
                >
                  {
                    messages.map((msg, index) => {
                      
                      if(msg.role === "assistant"){
                        if(msg.content.includes("https")){
                          // It's an AI image
                          return (
                            <View key={index} className="flex justify-start">
                              <View>
                                <Image
                                  source={require("../assets/robot.png")}
                                  style={{width: hp(5), height: hp(5)}}
                                />
                              </View>
                              <View
                                style={{maxWidth: wp(62)}}
                                className="bg-teal-400 rounded-lg flex p-1 rounded-tl-none relative"
                              >
                                <Image
                                  source={{uri: msg.content}}
                                  style={{width: wp(60), height: wp(60)}}
                                  className="rounded-md"
                                />
                                <Text className="text-white mt-1 text-xs text-left absolute bottom-2 left-2">{msg.time}</Text>
                              </View>
                            </View>
                          )
                        }else{
                          // Text response
                          return(
                            <View key={index} className="flex-row justify-start">
                              
                              <View
                                style={{maxWidth: wp(70)}}
                                className="bg-teal-400 rounded-xl p-2 rounded-tl-none"
                              >
                                <Text className="text-white">{msg.content}</Text>
                                <Text className="text-teal-900 text-xs text-left">{msg.time}</Text>
                              </View>
                            </View>
                          )
                        }
                      }else{  
                        return(
                          <View key={index} className="flex-row justify-end">
                            <View
                              style={{maxWidth: wp(70)}}
                              className="bg-white rounded-xl p-2 rounded-tr-none"
                            >
                              <Text>{msg.content}</Text>
                              <Text className="text-gray-500 text-xs text-right">{msg.time}</Text>
                            </View>
                          </View>
                        )
                      }
                    })
                  }
                </ScrollView>
              </View>
            </View>
          ):(
            <Features/>
          )
        }
        <View className="flex-row justify-center items-center">
          {
            recording ? (
              <TouchableOpacity onPress={stopRecording}>
                <Image
                  source={require("../assets/voiceLoading.gif")}
                  style={{width: hp(10), height: hp(10)}}
                />
              </TouchableOpacity>
            ):(
              <TouchableOpacity onPress={startRecording}>
                <Image
                  source={require("../assets/voiceRecording.png")}
                  style={{width: hp(10), height: hp(10)}}
                />
              </TouchableOpacity>
            )
          }
          {
            messages.length > 0 && (
              <TouchableOpacity className="position absolute right-2" onClick={clearMessages}>
                <Image
                  source={require("../assets/reload.png")}
                  style={{width: wp(8.5), height: wp(8.5)}}
                />
              </TouchableOpacity>
            )
          }
        </View>
      </SafeAreaView>
    </View>
   );
}
 
export default HomeScreen;



/*
let date = new Date();
                      let currentTime = date.getHours() + ":" + date.getMinutes();
                      if(currentTime.length === 4){
                        currentTime = currentTime.slice(0, 2) + ":" + "0" + currentTime.slice(3);
                      };
*/