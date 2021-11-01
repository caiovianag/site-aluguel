import React from  'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Home from './pages/Home';

import Detail from './pages/Detail';
import Detail2 from './pages/Detail2';
import Detail3 from './pages/Detail3';
import Detail4 from './pages/Detail4';
import Detail5 from './pages/Detail5';
import Detail6 from './pages/Detail6';
import Detail7 from './pages/Detail7';
import Detail8 from './pages/Detail8';
import Detail9 from './pages/Detail9';
import Detail10 from './pages/Detail10';
import Detail11 from './pages/Detail11';
import Detail12 from './pages/Detail12';
import Detail13 from './pages/Detail13';
import Detail14 from './pages/Detail14';
import Detail15 from './pages/Detail15';
import Detail16 from './pages/Detail16';
import Detail17 from './pages/Detail17';
import Detail18 from './pages/Detail18';


const Stack = createStackNavigator();

function Routes(){
  
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="home" 
          component={Home}
          options={{
            title: 'ALUGUEL',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
          <Stack.Screen 
          name="detail" 
          component={Detail}
          options={{
            title: 'Meireles',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                onPress={() => navigation.navigate('purchase') }
                />
              </TouchableOpacity> 
            )
          }}
          />
          <Stack.Screen 
          name="detail2" 
          component={Detail2}
          options={{
            title: 'Aldeota',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
          <Stack.Screen 
          name="detail3" 
          component={Detail3}
          options={{
            title: 'Mucuripe',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
            <Stack.Screen 
          name="detail4" 
          component={Detail4}
          options={{
            title: 'Lagoa Redonda',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
           <Stack.Screen 
          name="detail5" 
          component={Detail5}
          options={{
            title: 'Cocó',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
            <Stack.Screen 
          name="detail6" 
          component={Detail6}
          options={{
            title: 'Edson Queiroz',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
            <Stack.Screen 
          name="detail7" 
          component={Detail7}
          options={{
            title: 'Dionísio Torres',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
            <Stack.Screen 
          name="detail8" 
          component={Detail8}
          options={{
            title: 'Papicu',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
            <Stack.Screen 
          name="detail9" 
          component={Detail9}
          options={{
            title: 'Luciano Cavalcante',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
              <Stack.Screen 
          name="detail10" 
          component={Detail10}
          options={{
            title: 'Porto das Dunas',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
              <Stack.Screen 
          name="detail11" 
          component={Detail11}
          options={{
            title: 'Sapiranga',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
          <Stack.Screen 
          name="detail12" 
          component={Detail12}
          options={{
            title: 'Edson Queiroz',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
          <Stack.Screen 
          name="detail13" 
          component={Detail13}
          options={{
            title: 'Farias Brito',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
          <Stack.Screen 
          name="detail14" 
          component={Detail14}
          options={{
            title: 'Papicu',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
          <Stack.Screen 
          name="detail15" 
          component={Detail15}
          options={{
            title: 'Sapiranga',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
          <Stack.Screen 
          name="detail16" 
          component={Detail16}
          options={{
            title: 'Cocó',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
           <Stack.Screen 
          name="detail17" 
          component={Detail17}
          options={{
            title: 'Messejana',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />
           <Stack.Screen 
          name="detail18" 
          component={Detail18}
          options={{
            title: 'Aldeota',
            headerTitleStyle:{
               fontFamily: 'Montserrat_700Bold'
            },

            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="shopping-bag"
                size={24}
                color="black"
                />
              </TouchableOpacity> 
            )
          }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Routes;