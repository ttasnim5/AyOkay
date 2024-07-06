import { Image, Text, SafeAreaView, View, Button } from 'react-native'
import React from 'react'
import { icons } from '../../constants'
import ProductScanner from '../search/productscanner.jsx'

const Scan = () => {


  return (
    <SafeAreaView className="bg-lightgreen h-full justify-center items-center px-5 py-5">
      <Text className="text-forest text-sm font-plight text-center mt-5 mb-5">
        What skeletons are in this company's closet?
      </Text>
      
      <Text className="text-forest text-sm font-pbold mb-5 text-center px-5 py-5">
        Scan your product now to find out!
      </Text>

      <ProductScanner />

    </SafeAreaView>
  )
}

export default Scan