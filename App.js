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
        source={{uri: 'https://s3-us-west-2.amazonaws.com/melingoimages/Images/17425.jpg'}}
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
