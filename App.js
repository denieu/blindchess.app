import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from 'react-native';
import Routes from "./src/routes/Routes";

export default function App() {
  return (
    <>
      <StatusBar  backgroundColor='#000' barStyle="light-content" translucent />
      <Routes />
    </>
  );
}