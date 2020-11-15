import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

const App = () => {
  return (
      <SafeAreaView>
        <ScrollView
          style={{ 
            paddingHorizontal: 20,
            paddingVertical: 20   
          }}>
          <View>
            <Text>Estocolmo</Text>
            <Text>Nublado</Text>
            <Text>10°</Text>
            <Image 
              source={{uri: 'https://s3-us-west-2.amazonaws.com/melingoimages/Images/17425.jpg'}}
              style={{width: 200, height: 200}}
             />
          </View>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
          />
        </ScrollView>
      </SafeAreaView>
  );
};

export default App;
