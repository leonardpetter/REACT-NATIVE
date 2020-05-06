import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListCovidIndonesia from './src/component/ListCovidIndonesia';
import ListGlobal from './src/component/ListGlobal';

class App extends Component {
  componentDidMount() {

  }
  
  render() {
    return (
      
      <View style={styles.container}>
        <View style={{position: 'relative', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Text>                                                                             </Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', textDecorationLine : 'underline'}}> DATA COVID-19 GLOBAL & INDONESIA </Text>
          <Text>                                                                             </Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', textDecorationLine : 'underline'}}>GLOBAL</Text>
          <Text>                                                                             </Text>
          <Text>                                                                             </Text>
        </View>

        <View>
          <ListGlobal style = {styles.box1}></ListGlobal>
        </View>

        <View style={{position: 'relative', top: 0, left: 20, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Text>                                                    </Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', textDecorationLine: 'underline',right : 19}}>INDONESIA</Text>
          <Text>                                                    </Text>
        </View>

        <View style={styles.container}>
        <ListCovidIndonesia style={styles.box2}></ListCovidIndonesia>
        </View>
        
    </View>
      
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'gray'
  },
  box1 : {
    flex: 1,
    backgroundColor : 'white',
  },
  box2 : {
    flex: 1,
    backgroundColor : 'black',
  },
  box3 : {
    flex : 1,
  }
});


export default App;

