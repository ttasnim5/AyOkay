import { Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import ProductScanner from '../search/productscanner.jsx'

const Scan = () => {

  return (
    <SafeAreaView className="bg-offwhite h-full justify-center items-center">
    <ScrollView>
      <Text className="text-forest text-sm font-plight text-center mt-5 mb-5">
        What skeletons are in this company's closet?
      </Text>
      
      <Text className="text-forest text-sm font-pbold mb-5 text-center px-5 py-5">
        Scan your product now to find out!
      </Text>

      <ProductScanner 
      // generate camera to scan barcode
      />

    </ScrollView>
    </SafeAreaView>
  )
}

export default Scan