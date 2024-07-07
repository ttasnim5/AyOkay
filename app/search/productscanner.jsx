import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native'

import CustomButton from '../../components/CustomButton';

const ProductScanner = () => {
  
  const navigation = useNavigation();
  const isInitialRender = useRef(true);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState('');
  const [scannerVisible, setScannerVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    
    (async () => {
      console.log(`Barcode: ${barcodeData}`);
      navigation.navigate('companycard', {barcode: barcodeData});
    })();
  }, [barcodeData]); // Only re-run the effect if count changes

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcodeData(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!scannerVisible && (
        <CustomButton
              title="Scan a product"
              containerStyles="w-[250px] h-[10px]"
              handlePress={() => setScannerVisible(true)}
        />
      )}
      {scannerVisible && (
        <View style={styles.scannerContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.scanner}
          />
        </View>
      )}
      {scanned && (
        <CustomButton
              title='Tap to Scan Again'
              containerStyles="w-[250px] h-[10px]"
              handlePress={() => setScanned(false)}
        />
      )}
      {scannerVisible && (
        <CustomButton
              title='Stop Scanning'
              containerStyles="w-[250px] h-[10px]"
              handlePress={() => setScannerVisible(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannerContainer: {
    width: 400,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  scanner: {
    width: '100%',
    height: '100%',
  },
  result: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
  },
  barcodeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductScanner;