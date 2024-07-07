# Team AyOkay: CorporaTea Mobile App

## Description
CorporaTea enables the everyday consumer to identify the history of brands they purchase from. By simply scanning the barcode of a product, CorporaTea returns the product name, the company behind the product, and the history of social ills, lawsuits, settlements, etc with sources listed, if those events exist and are known.

Built with React Native and Expo, it features a user-friendly interface and leverages AI to deliver the desired data to users.

## Prerequisites
Before running this app, make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [React Native](https://reactnative.dev/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [TailwindCSS](https://tailwindcss.com/)

## Installation
1. Clone the repository:
`git clone https://github.com/ttasnim5/AyOkay`

2. Install dependencies:
* `npm install`
* `npx create-expo-app ./` 
* `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`
* `npm install expo-barcode-scanner` 
* `npm install nativewind`
* `npm install --save-dev tailwindcss@3.3.2` 
* `npx tailwindcss init`    
* `npm install -S react-native-markdown-display`  

## Running the App
1. Start the Expo development server:
`npx expo start`


2. Use the Expo Go app on your mobile device to scan the QR code, or run on an emulator.

## Features
- User-friendly interface built with React Native
- Data retrieval for product and company information using BarcodeLookup API and and LLM
- Tailwind CSS for styling and customization

## Technologies Used
- React Native
- Expo
- TailwindCSS
- Node.js
- Custom AI LLM for data retrieval

## Contributing
This project was developed by a team of three people:
* Quoc Anh Nguyen
* Swen Tang
* Tahsin Tasnim

## Contact
* anhnguyen199819981998@gmail.com
* sventang1@gmail.com
* tahsintasnim6@gmail.com
