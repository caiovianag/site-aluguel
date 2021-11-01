import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent6 from '../components/Swiper6';

export default function Detail() {
 return (
   <View style={styles.container}>
     <View style={styles.swiperContent}>
        <SwiperComponent6/>
     </View>

    <View style={styles.headerContent}>
      <View style={{ width: '65%' }}>
        <Text style={styles.house}>Casa Edson Queiroz</Text>
      </View>

      <View style={{ width: '35%' }}>
        <Text style={styles.rating}>CONTATO: 85 9999-0000</Text>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Stars
           default={4}
           count={5}
           half={true}
           starSize={20}
           fullStar={ <Ionicons nome="md-star" size={24} style={styles.myStarStyle} /> }
           emptyStar={ <Ionicons nome="md-star-outline" size={24} style={styles.myStarStyle} /> }
           halfStar={ <Ionicons nome="md-star-half" size={24} style={styles.myStarStyle} /> }
          />
        </View>
      </View>
    </View>

    <Text style={styles.price}>
      R$ 4.500,00
    </Text>
    <Text style={styles.description}>
    Excelente casa duplex, 3 suítes, living, lavabo, varanda social, armários, cozinha, área de serviço, DCE, deck/ churrasqueira, 2 vagas, localização privilegiada próximo da av Edilson Brasil Soares, ao lado do supermercado São Luis.

    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 35}}>
      <View style={styles.slide}>
        <Image
        source={require('../assets/mais34.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/mais35.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/mais36.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/mais37.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>
    </ScrollView>

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF'
  },
  swiperContent:{
    flexDirection: 'row',
    height: 340,
    width: '100%',
  },
  headerContent:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  house:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#000'
  },
  rating:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 12,
    color: '#000'
  },
  myStarStyle:{
    color: '#E7A74e',
    backgroundColor: '#000',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  price:{
    paddingHorizontal: 20,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 15,
    color: '#000'
  },
  description:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 20,
    color: '#000',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20,
  },
  slide:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 20,
  }
});