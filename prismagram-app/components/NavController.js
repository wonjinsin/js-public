import React from "react";
import { useIsLoggedIn } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";
import { AsyncStorage } from "react-native";


export default () => {
  const isLoggedIn = useIsLoggedIn();
  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};
