import { Image, View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { images } from '../../constants'

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

              <View className="flex justify-center items-center flex-row flex-1 mt-4"
              // make colored border lines
              >
                <View style={{flex: 1, height: 1, backgroundColor: '#36563e'}} />
                <View style={{flex: 1, height: 1, backgroundColor: '#ffffff'}} />
              </View>
              <View className="flex justify-center items-center flex-row flex-1 mt-3">
                <View style={{flex: 1, height: 1, backgroundColor: '#ffffff'}} />
                <View style={{flex: 1, height: 1, backgroundColor: '#36563e'}} />
              </View>
            </View>

            <Text className="font-psemibold text-lg text-offwhite text-center mb-3">
                CorporaTea
            </Text>

            <Text className="text-offwhite text-sm font-psemibold text-center mb-5">
                Our CorporaTea Team is dedicated to delivering the truth behind all of our 
                purchases.
            </Text>
            
            <Text className="text-offwhite text-sm font-plight text-center mb-2 px-3 py-3">
                Our app works simply: scan your product by the barcode, and we will return to you
                a history of that manufacturer's/brand's wrongdoings. Our mission is to help everyone be
                more deliberate and conscientious about what they buy, and who exactly they are buying from.  
            </Text>

            <Text className="text-offwhite text-sm font-plight text-center mb-2 px-3 py-3">
                Our mission is to help everyone be more deliberate and conscientious about what 
                they buy, and who exactly they are buying from.  
            </Text>
            
      </ScrollView>
    </SafeAreaView>
  )
}

export default AboutUs