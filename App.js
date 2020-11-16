import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const App = () => {
  const [ciudad, actualizarCiudad] = useState({
    title: '',
    location_type: '',
    woeid: 0,
    latt_long: ''
  });
  const [query, setQuery] = useState('stockholm');
  useEffect(() => {
    async function fetchClima() {
      const resp = await axios(
        'https://www.metaweather.com/api/location/search/?query=stockholm',
      );
 
      actualizarCiudad(resp.data);
    }

    fetchClima();
  }, []);
  console.log(query)

  return (
    <SafeAreaView
      style={styles.contenedor}
    >
      <View style={styles.view}>
        <Text style={styles.textoLargo}>Estocolmo</Text>
        <Text style={styles.textoNormal}>Nublado</Text>
        <Text style={styles.textoMedio}>10°</Text>
        <Image 
          source={{uri: 'https://cdn4.iconfinder.com/data/icons/weather-forecast-flat-1/64/rain_rainy_weather_weather_forecast-512.png'}}
          style={styles.imagen}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(e) => setQuery(e)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  textoLargo: {
    fontSize: 48
  },
  textoMedio: {
    fontSize: 42
  },
  textoNormal: {
    fontSize: 18
  },
  imagen: {
    width: 200, 
    height: 200
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    marginTop: 20,
    paddingHorizontal: 10
  }
})

export default App;
