import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Estocolmo</Text>
      <Text>Nublado</Text>
      <Text>10°</Text>
      <Image 
        source={{uri: 'https://cdn4.iconfinder.com/data/icons/weather-forecast-flat-1/64/rain_rainy_weather_weather_forecast-512.png'}}
        style={{width: 200, height: 200}}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
      />
    </View>    
  );
};

export default App;
