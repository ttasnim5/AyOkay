import { View, Text, FlatList, SafeAreaView, Image, ImageBackground } from 'react-native'
import React from 'react'
import StoryCard from './StoryCard';
import { images } from '../constants';

const PopularCompanies = () => {
  const data = [
    {company: 'pepsico', crime: 'child trafficking'},
    {company: 'cisco', crime: 'osha violations'},
    {company: 'pfizer', crime: 'tax evasion'}
  ];

  return (
      <View className="mt-4">
        <ImageBackground source={images.sagebg}>
        <View className="flex my-6 px-4 space-y-6">
          <View className="flex justify-between items-start flex-row">
            <View>
              <Text className="font-psemibold justify-center text-sm text-white">
                Prominent Companies
              </Text>
            </View>
          </View>
        </View>

          <FlatList 
            scrollEnabled={false}
            data={data}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
              <StoryCard
                company={item.company}
                crime={item.crime}
              />
            )}
          />

          </ImageBackground>
      </View> 
  )
}

export default PopularCompanies
