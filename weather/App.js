import React from 'react';
import {Alert} from "react-native";
import Weather from "./Weather";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";


const API_KEY = "2f485183998f498a4eb6928806a7ecf9";


export default class App extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data:
      {
        main: {temp},
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({isLoading: false,condition: weather[0].main, temp});
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      // coords = await 뒤의 값 중 coords 가져오는
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      await this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (e) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
    // return isLoading ? <Loading /> : <Loading />;
  };
}
