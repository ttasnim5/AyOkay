import { View, Text, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';

function GetApiData({ barcode_number }) {
    const [title, setTitle] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [brand, setBrand] = useState('');
    const [productData, setData] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const api_key = "d8temu1h736sjsxivrib357onq8ie";
            // const url = `https://api.barcodelookup.com/v3/products?barcode=${barcode_number}&formatted=y&key=${api_key}`;
            const url = `https://us-central1-ayokay-8d564.cloudfunctions.net/api/lookup?barcodeNumber=${barcode_number}`
            try {
                const response = await fetch(url);
                console.log("Response status:", response.status);
                console.log("Response headers:", JSON.stringify(Object.fromEntries(response.headers)));
                
                const textResponse = await response.text();
                console.log("Raw response:", textResponse);

                if (textResponse.trim().length === 0) {
                    setError("Empty response received");
                    return;
                }

                let data;
                try {
                    data = JSON.parse(textResponse.trim());
                } catch (parseError) {
                    console.error("JSON Parse Error:", parseError);
                    setError(`Invalid JSON response: ${textResponse.substring(0, 100)}...`);
                    return;
                }

                if (data && data.products && data.products[0]) {
                    setTitle(data.products[0].title || '');
                    setManufacturer(data.products[0].manufacturer || '');
                    setBrand(data.products[0].brand || '');

                    setData({ manufacturer: {manufacturer}, brand: {brand}, title: {title} });
                    console.log("data result:", productData);
                    
                } else {
                    setError("No product data found");
                }
            } catch (err) {
                console.error("Fetch Error:", err);
                setError(`Failed to fetch data: ${err.message}`);
            }
        };

        fetchData();
    }, [barcode_number]);

    return (
        <View>
            {error ? (
                <Text>Error: {error}</Text> 
            ) : (
                <>  
                    <Text>Barcode Number: {barcode_number}</Text>
                    <Text>Title: {title}</Text>
                    <Text>Manufacturer: {manufacturer}</Text>
                    <Text>Brand: {brand}</Text>
                </>
            )}
        </View>
    
    );
}

export default GetApiData;