import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, FlatList, ImageBackground } from "react-native";
import { images } from "../../constants";

const CompanyCard = () => {
const data = [{company: 'jp morgan', crime: 'money laundering'}];

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
            <Text className="font-plight text-sm text-forest px-5">
                {item.crime}
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
                    {data[0].company}
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