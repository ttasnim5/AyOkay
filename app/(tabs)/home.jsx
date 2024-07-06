import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl, Text, View, ScrollView, ImageBackground } from "react-native";

import { images } from "../../constants";
import PopularCompanies from "../../components/PopularCompanies";
import CustomButton from "../../components/CustomButton";

const Home = () => {
  return (
    <SafeAreaView className="flex:1 bg-offwhite h-full">
      <ScrollView> 
        <ImageBackground 
          source={images.teacupbg} 
          imageStyle= {{opacity:0.4}}
          className="mb-2">
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mr-6">
              <View>
                <Text className="font-pmedium text-sm text-black mt-3 mb-5">
                  Welcome to CorporaTea!
                </Text>
                <Text className="text-2xl font-psemibold text-forest mb-3">
                  Let's spill some corporate tea.
                </Text>
              </View>
            </View>
            
          </View> 

          </ImageBackground>

          <View className="flex justify-center items-center flex-row flex-1 mt-1 mb-2">
                <View style={{flex: 1, height: 1, backgroundColor: 'salmon'}} />
                <View style={{flex: 1, height: 1, backgroundColor: '#7f886e'}} />
          </View>
          
          <View className="flex items-center mb-12">
            <CustomButton
              title="Scan a product"
              handlePress={() => router.push("/scan")}
              containerStyles="w-[250px] h-[10px]"
            />
          </View>

          <View className="flex justify-center items-center flex-row flex-1 mt-3">
                <View style={{flex: 1, height: 1, backgroundColor: 'salmon'}} />
                <View style={{flex: 1, height: 1, backgroundColor: '#7f886e'}} />
          </View>

          <PopularCompanies />
       </ScrollView>
    </SafeAreaView>
  );
};

export default Home;