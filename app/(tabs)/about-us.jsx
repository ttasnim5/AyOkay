import { Image, View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { icons, images } from '../../constants'

const AboutUs = () => {
  return (
    <SafeAreaView className="bg-sage h-full justify-center items-center px-5 py-5">
        <ScrollView>
        <View className="flex flex-col items-center px-4 mb-3 mt-5">
              <View className="flex justify-center items-center flex-row flex-1">

                <View className="w-[100px] h-[100px] rounded-lg border border-salmon 
                flex justify-center items-center p-0.5">
                    <Image
                        source={images.logoSmall}
                        className="w-full h-full rounded-lg"
                        resizeMode="cover"
                    />
                </View>

                <View className="flex justify-center items-center flex-1 ml-3">
                  <Text className="font-psemibold text-md text-lightgreen text-center">
                    Learn all about our dream and vision:
                  </Text>
                </View>
              </View>

              <View className="flex justify-center items-center flex-row flex-1 mt-4">
                <View style={{flex: 1, height: 1, backgroundColor: '#36563e'}} />
                <View style={{flex: 1, height: 1, backgroundColor: '#ffffff'}} />
              </View>
              <View className="flex justify-center items-center flex-row flex-1 mt-3">
                <View style={{flex: 1, height: 1, backgroundColor: '#ffffff'}} />
                <View style={{flex: 1, height: 1, backgroundColor: '#36563e'}} />
              </View>
            </View>

            <Text className="font-psemibold text-lg text-offwhite text-center mb-3">
                Libel App
            </Text>

            <Text className="text-offwhite text-sm font-pregular text-center mb-5">
                Our Libel Team is dedicated to delivering the truth behind all of our 
                purchases.
            </Text>
            
            <Text className="text-offwhite text-sm font-plight mb-5 px-3 py-3">
                Details about how we started and what we want for the future of this app 
                and our world.
            </Text>

      </ScrollView>
    </SafeAreaView>
  )
}

export default AboutUs