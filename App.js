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
  Button,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, actualizarData] = useState({
    clima: '',
    ciudad: '',
    temperatura: 0,
    icono: '',
  });
  const [query, actualizarQuery] = useState('stockholm');
  const [busqueda, actualizarBusqueda] = useState('stockholm');
  const [descargando, actualizarDescarga] = useState(false);
  useEffect(() => {
    async function fetchClima() {
      try {
        actualizarDescarga(true);
        const id = await axios(
          `https://www.metaweather.com/api/location/search/?query=${query}`,
        );
        const {woeid} = id.data[0];
        const resp = await axios(
          `https://www.metaweather.com/api/location/${woeid}/`,
        );

        actualizarData({
          clima: resp.data.consolidated_weather[0].weather_state_name,
          ciudad: resp.data.title,
          temperatura: resp.data.consolidated_weather[0].the_temp,
          icono: resp.data.consolidated_weather[0].weather_state_abbr,
        });
      } catch (error) {
        console.log(error);
      }
      actualizarDescarga(false);
    }

    fetchClima();
  }, [busqueda]);

  const {clima, temperatura, ciudad, icono} = data;

  return (
    <SafeAreaView style={styles.contenedor}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.contenedor}>
        <View style={styles.view}>
          {descargando && (
            <View style={[styles.contenedor, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
          <Text style={styles.textoLargo}>{ciudad}</Text>
          <Text style={styles.textoNormal}>{clima}</Text>
          <Text style={styles.textoMedio}>{`${Math.round(temperatura)}°`}</Text>
          <Image
            source={{
              uri: `https://www.metaweather.com/static/img/weather/png/${icono}.png`,
            }}
            style={styles.imagen}
          />
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={(e) => actualizarQuery(e)}
            />
            <Button
              onPress={() => actualizarBusqueda(query)}
              title="Buscar"
              color="#841584"
              accessibilityLabel="Boton de busqueda"
            />
          </View>
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
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;
