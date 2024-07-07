import React from 'react'
import { router } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { images } from "../constants";

const StoryCard = ({company, crime}) => {
  return (
    <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/companycard")}
          className="w-full h-15 rounded-xl relative flex justify-center items-center"
        >
      <View className="bg-offwhite opacity-90 flex flex-col items-center px-4 mb-7 rounded-lg border border-lightgreen 
            flex items-center p-3 px-3 ml-3 mr-3">
        <View className="flex flex-row gap-3 items-start">
          <View className="flex justify-center items-center flex-row flex-1">
            <View 
            className="w-[46px] h-[46px] rounded-lg border border-salmon flex 
            justify-center items-center p-0.5">
              <Image
                source={images.logoSmall}
                className="w-full h-full rounded-lg"
                resizeMode="cover"
              />
            </View>

            <View className="opacity-100 flex justify-center flex-1 ml-3 gap-y-1">
              <Text
                className="font-psemibold text-sm text-forest"
                numberOfLines={1} >
                {company}
              </Text>
            </View>
          </View>
          
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default StoryCard