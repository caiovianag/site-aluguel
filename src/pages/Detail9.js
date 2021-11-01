import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent9 from '../components/Swiper9';

export default function Detail() {
 return (
   <View style={styles.container}>
     <View style={styles.swiperContent}>
        <SwiperComponent9/>
     </View>

    <View style={styles.headerContent}>
      <View style={{ width: '65%' }}>
        <Text style={styles.house}>Casa Luciano Cavalcante</Text>
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
      R$ 8.000,00 /mês
    </Text>
    <Text style={styles.description}>
    Linda casa, muito ventilada, alto padrão, muito bem construída, todos os ambientes amplos, arejados, muito ventilados.
    Suítes na parte superior do imóvel e no térreo, muitos móveis fixos que ficarão na casa.
    Casa possuí 3 pavimentos.
    Ampla área de lazer, com piscina, deck com churrasqueira e forno, wc social, piso todo na pedra cariri e porcelanato.
    6 vagas de veículos.
    Localização espetacular, comércio próximo, restaurantes, academia, colégios e faculdades, a 5 minutos do shopping Iguatemi e a 5 min. do shopping ViaSul.    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 35}}>
      <View style={styles.slide}>
        <Image
        source={require('../assets/mais64.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/mais65.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/mais66.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/mais67.jpg')}
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
    fontFamily:'Montserrat_700Bold',
    fontSize: 12,
    color: '#000'
  },
  myStarStyle:{
    color: '#E7A74e',
    backgroundColor: 'transparent',
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