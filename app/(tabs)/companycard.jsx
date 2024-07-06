import React, { useState, useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, FlatList, ImageBackground } from "react-native";
import { images } from "../../constants";
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import Markdown from 'react-native-markdown-display';

const CompanyCard = () => {
  const route = useRoute();
  const { barcode } = route.params; 

  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [crime, setCrime] = useState(""); // TODO: Connect it to Quoc's LLM

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`https://us-central1-ayokay-8d564.cloudfunctions.net/api/lookup?barcodeNumber=${barcode}`)
        .then(response => {
          // Format JSON output
          
          const res = JSON.parse(JSON.stringify(response.data, null, 2))["products"][0]; // 2-space indentation
          // Update all fields
          setProduct(res["title"]);
          setDescription(res["description"]);
          if (res["brand"] != ""){
            setCompany(res["brand"]);
          }
          else {
            setCompany(res["manufacturer"]);
          }
        })       

      } catch (error) {
        console.error('Error fetching Barcode data from Firebase:', error);
      }
    };

    fetchData();
  }, [barcode]); // The effect will run when `itemId` changes



  useEffect(() => {
    const fetchLLMData = async () => {
      try {
        const body = { input: company };
        await axios.post(`https://us-central1-ayokay-8d564.cloudfunctions.net/api/llmprocess`, body)
        .then(response => {
          // Format JSON output
          const res = JSON.parse(JSON.stringify(response.data, null, 2))["output"];
          // Update all fields
          setCrime(res);
        })       

      } catch (error) {
        console.error('Error fetching LLM data from Firebase:', error);
      }
    }

    fetchLLMData();
  }, [company])


const data = [{
  barcode: '000000000000',
  product: 'meth',
  description: 'literal drugs',
  company: 'jp morgan', 
  crime: 'money laundering',
 }]; // Hard coded values for testing.

  return (
    <SafeAreaView className="bg-offwhite h-full">
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            <Text className="font-psemibold text-sm text-sage px-3 mb-3">
                Here's what we found:
            </Text>

            <Text className="px-5 mb-2">
              <Text className="font-pmedium text-sm text-sage">
                  Barcode: 
              </Text>
              <Text>{' '}</Text>
              <Text className="font-plight text-sm text-forest px-5">
                <Markdown>
                {barcode}
                </Markdown>
              </Text>
            </Text>

            <Text className="px-5 mb-2">
              <Text className="font-pmedium text-sm text-sage">
                  Product: 
              </Text>
              <Text>{' '}</Text>
              <Text className="font-plight text-sm text-forest px-5">
                {product}
              </Text>
            </Text>

            <Text className="px-5 mb-2">
              <Text className="font-pmedium text-sm text-sage">
                  Manufacturer: 
              </Text>
              <Text>{' '}</Text>
              <Text className="font-plight text-sm text-forest px-5">
                {company}
              </Text>
            </Text>

            <Text className="font-pmedium text-sm text-center text-sage">
                  Crimes of Company:
            </Text>

            <Text className="font-plight text-sm text-forest px-5">
            <Markdown>
                {crime} 
            </Markdown> 
            </Text>
            
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="flex flex-col items-center mb-7 mt-5">
            <ImageBackground 
              className="flex w-full" 
              source={images.companybg}
              imageStyle= {{opacity:0.4}}
            >
              <View className="flex justify-center items-center flex-row flex-1 mb-3 mt-3">
                <View className="w-[100px] h-[100px] rounded-lg border border-salmon 
                flex justify-center items-center p-0.5 ml-3">
                    <Image
                        source={images.logoSmall}
                        className="w-full h-full rounded-lg"
                        resizeMode="cover"
                    />
                </View>

                <View className="flex justify-center items-center flex-1 ml-3">
                  <Text
                    className="font-psemibold text-lg text-forest">
                    {company}
                  </Text>
                </View>
              </View>
              </ImageBackground>
              <View className="flex justify-center items-center flex-row flex-1 mt-5">
                <View style={{flex: 1, height: 1, backgroundColor: 'salmon'}} />
                <View style={{flex: 1, height: 1, backgroundColor: '#7f886e'}} />
              </View>
              <View className="flex justify-center items-center flex-row flex-1 mt-3">
                <View style={{flex: 1, height: 1, backgroundColor: '#7f886e'}} />
                <View style={{flex: 1, height: 1, backgroundColor: 'tan'}} />
              </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CompanyCard