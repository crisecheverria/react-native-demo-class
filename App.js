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
            <Text>Más texto</Text>
            <Image 
              source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'}}
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
