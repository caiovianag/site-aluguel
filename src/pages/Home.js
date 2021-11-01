import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import New2 from '../components/New2';
import New3 from '../components/New3';
import New4 from '../components/New4';
import New5 from '../components/New5';
import New6 from '../components/New6';

import House from '../components/House';
import House2 from '../components/House2';
import House3 from '../components/House3';
import House4 from '../components/House4';
import House5 from '../components/House5';
import House6 from '../components/House6';

import Recommended from '../components/Recommended';
import Recommended2 from '../components/Recommended2';
import Recommended3 from '../components/Recommended3';
import Recommended4 from '../components/Recommended4';
import Recommended5 from '../components/Recommended5';
import Recommended6 from '../components/Recommended6';

export default function Home() {
 const navigation = useNavigation();

 return (
   <ScrollView
    showsVerticalScrollIndicator={false}
    style={{backgroundColor: '#fff',  }}
    >
       
     <View style={styles.header}>
         <View style={styles.inputArea}>
           <Feather name="search" size={24} color="black" />
           <TextInput
           placeholder="O que está procurando?"
           style={styles.input}
           />
     </View>
    </View>

     <View style={styles.contentNew}>
       <Text style={styles.title}>Novidades</Text>
     </View>

     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
       <New 
        cover={require('../assets/novidades11.jpg')}
        name="Aparta Meireles"
        description="Apartamento com vista mar."
        onPress={() => navigation.navigate('detail') }
       />

       <New2
        cover={require('../assets/novidades21.jpg')}
        name="Aparta Aldeota"
        description="Próxima ao aterro."
        onPress={() => navigation.navigate('detail2')}
       />

        <New3
        cover={require('../assets/novidades31.jpg')}
        name="Apart Mucuripe"
        description="Próxima a praia."
        onPress={() => navigation.navigate('detail3')}
       />

        <New4
        cover={require('../assets/p11.jpg')}
        name="Apart Cocó"
        description="Localização Ótima."
        onPress={() => navigation.navigate('detail16')}
       />

        <New5
        cover={require('../assets/p21.jpg')}
        name="Apart Messejana"
        description="Ótima Moradia!"
        onPress={() => navigation.navigate('detail17')}
       />

         <New6
        cover={require('../assets/p31.jpg')}
        name="Apart Aldeota"
        description="Próximo a Av. Barão de Studart."
        onPress={() => navigation.navigate('detail18')}
       />
    
     </ScrollView>

     <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
       <Text style={[styles.title, { marginTop: 20 } ]}>Mais para você</Text>
     </View>

     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
       <House
       cover={require('../assets/mais11.jpg')}
       name="Casa Lagoa Redonda"
       onPress={() => navigation.navigate('detail4') }
       />

       <House2
       cover={require('../assets/mais21.jpg')}
       name="Casa Cocó"
       onPress={() => navigation.navigate('detail5') }
       />

       <House3
       cover={require('../assets/mais31.jpg')}
       name="Casa Edson Queiroz"
       onPress={() => navigation.navigate('detail6') }
       />

        <House4
       cover={require('../assets/mais41.jpg')}
       name="Casa Dionísio Torres"
       onPress={() => navigation.navigate('detail7') }
       />

        <House5
       cover={require('../assets/mais51.jpg')}
       name="Casa Papicu"
       onPress={() => navigation.navigate('detail8') }
       />

        <House6
       cover={require('../assets/mais61.jpg')}
       name="Casa Luciano Cavalcante"
       onPress={() => navigation.navigate('detail9') }
       />


     </ScrollView>

     <Text style={[styles.title, { marginTop: 20 } ]}>
      Dica do dia
     </Text>

     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
       <Recommended
         cover={require('../assets/r1.jpg')}
         house="Casa Eusébio"
         offer="30%"
         onPress={() => navigation.navigate('detail10') }
       
       />
        <Recommended2
         cover={require('../assets/r12.jpg')}
         house="Casa Eusébio"
         offer="25%"
         onPress={() => navigation.navigate('detail11') }
       
       /> 
        <Recommended3
         cover={require('../assets/r21.jpg')}
         house="Casa Maraponga"
         offer="20%"
         onPress={() => navigation.navigate('detail12') }
       

       /> 
        <Recommended4
         cover={require('../assets/r31.jpg')}
         house="Casa Maraponga"
         offer="20%"
         onPress={() => navigation.navigate('detail13') }
       

       /> 
        <Recommended5
         cover={require('../assets/r41.jpg')}
         house="Casa Maraponga"
         offer="20%"
         onPress={() => navigation.navigate('detail14') }
       

       /> 
        <Recommended6
         cover={require('../assets/r51.jpg')}
         house="Casa Maraponga"
         offer="20%"
         onPress={() => navigation.navigate('detail15') }
       />
     </ScrollView>
   
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
   paddingHorizontal: 15,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   marginVertical: 20, 
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: "#FFF",
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  title:{
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  }
});

