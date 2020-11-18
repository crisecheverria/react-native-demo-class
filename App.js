import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, actualizarData] = useState({
    clima: '',
    ciudad: '',
    temperatura: 0,
    icono: '',
  });
  useEffect(() => {
    async function fetchClima() {
      const id = await axios(
        'https://www.metaweather.com/api/location/search/?query=stockholm',
      );
      const {woeid} = id.data[0];
      const resp = await axios(
        `https://www.metaweather.com/api/location/${woeid}/`,
      );

      const result = resp.data.consolidated_weather[0];
      actualizarData({
        clima: result.weather_state_name,
        ciudad: resp.data.title,
        temperatura: result.the_temp,
        icono: result.weather_state_abbr,
      });
    }

    fetchClima();
  }, []);

  const {clima, temperatura, ciudad, icono} = data;

  return (
    <SafeAreaView style={styles.contenedor}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.contenedor}>
        <View style={styles.view}>
          <Text style={styles.textoLargo}>{ciudad}</Text>
          <Text style={styles.textoNormal}>{clima}</Text>
          <Text style={styles.textoMedio}>{`${Math.round(temperatura)}°`}</Text>
          <Image
            source={{
              uri: `https://www.metaweather.com/static/img/weather/png/${icono}.png`,
            }}
            style={styles.imagen}
          />
          <TextInput style={styles.textInput} />
        </View>
      </KeyboardAvoidingView>
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
    paddingVertical: 20,
  },
  textoLargo: {
    fontSize: 48,
  },
  textoMedio: {
    fontSize: 42,
  },
  textoNormal: {
    fontSize: 18,
  },
  imagen: {
    width: 200,
    height: 200,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default App;
