import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper8 from 'react-native-swiper';

export default function SwiperComponent8() {
 return (
   <Swiper8
   style={styles.wrapper}
   dotStyle={{
     backgroundColor: '#000',
     borderColor: '#000',
     borderWidth: 1,
     width: 10,
     height: 10,
     borderRadius: 10,
   }}
   activeDotColor="#FFF"
   activeDotStyle={{
     borderColor: '#000',
     borderWidth: 1,
     width: 10,
     height: 10,
     borderRadius: 10,
   }}
   >

     <View style={styles.slide}>
      <Image
      source={require('../assets/mais51.jpg')}
      style={{ width: '100%', height: 400 }}
      />
     </View>

     <View style={styles.slide}>
      <Image
      source={require('../assets/mais52.jpg')}
      style={{ width: '100%', height: 400 }}
      />
     </View>

     <View style={styles.slide}>
      <Image
      source={require('../assets/mais53.jpg')}
      style={{ width: '100%', height: 400 }}
      />
     </View>

   </Swiper8>
  );
}

const styles = StyleSheet.create({
  wrapper:{

  },
  slide:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  }
})