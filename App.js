import React from "react";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { AppLoading } from "expo";

import navigator from "./routes/drawer";

export default function App() {
  let [fontsLoaded] = useFonts({
    nunito_bold: Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return navigator();
}
