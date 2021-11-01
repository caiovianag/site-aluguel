import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

import SwiperComponent5 from '../components/Swiper5';

export default function Detail() {
 return (
   <View style={styles.container}>
     <View style={styles.swiperContent}>
        <SwiperComponent5/>
     </View>

    <View style={styles.headerContent}>
      <View style={{ width: '65%' }}>
        <Text style={styles.house}>Casa Cocó</Text>
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
      R$ 3.390,00 /mês
    </Text>
    <Text style={styles.description}>
   
Comodidade e segurança são os pontos principais na escolha de uma nova moradia. Isso porque uma boa localização faz toda a diferença. Dessa forma, a 7Cantos lhe apresenta uma belíssima casa, próxima a grandes avenidas do bairro Cocó. A casa está pronta para acomodar sua família da maneira mais confortável possível, contando com uma estrutura grande, sofisticada e moderna. São 637 m² de área construída, divididos em 3 quartos dos quais 3 são suítes, sala ampla com dois espaços integrados e uma iluminação excelente, 6 banheiros, 6 vagas de garagem, depósito, área de serviço, dependência completa de empregada, varanda, espaço para 6 carros na garagem.

    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 35}}>
      <View style={styles.slide}>
        <Image
        source={require('../assets/mais24.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/mais25.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/mais26.jpg')}
        style={{width: 90, height: 90, borderRadius: 8}}
        />
      </View>

      <View style={styles.slide}>
        <Image
        source={require('../assets/mais26.jpg')}
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