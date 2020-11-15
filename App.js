import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.textoLargo}>Estocolmo</Text>
      <Text style={styles.textoNormal}>Nublado</Text>
      <Text style={styles.textoMedio}>10°</Text>
      <Image 
        source={{uri: 'https://s3-us-west-2.amazonaws.com/melingoimages/Images/17425.jpg'}}
        style={{width: 200, height: 200}}
      />
      <TextInput
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
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
