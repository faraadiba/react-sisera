import React from "react";
import { View, Image, Pressable, TouchableOpacity, Text } from "react-native";
import { Badge } from "@rneui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PublikasiScreen from "./screens/PublikasiScreen";
import TabelScreen from "./screens/TabelScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import LainnyaScreen from "./screens/LainnyaScreen";
import BarIconActive_Beranda from './assets/icons/BarIconActive_Beranda'
import BarIconInactive_Beranda from './assets/icons/BarIconInactive_Beranda'
import BarIconActive_Publikasi from './assets/icons/BarIconActive_Publikasi'
import BarIconInactive_Publikasi from './assets/icons/BarIconInactive_Publikasi'
import BarIconActive_Tabel from './assets/icons/BarIconActive_Tabel'
import BarIconInactive_Tabel from './assets/icons/BarIconInactive_Tabel'
import BarIconActive_Bookmark from './assets/icons/BarIconActive_Bookmark'
import BarIconInactive_Bookmark from './assets/icons/BarIconInactive_Bookmark'
import BarIconActive_Lainnya from './assets/icons/BarIconActive_Lainnya'
import BarIconInactive_Lainnya from './assets/icons/BarIconInactive_Lainnya'

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()

function LogoBPS() {
  return (
    <Image
      source={require('./assets/logoBPS.png')}
      style={
        { marginHorizontal: 10 }
      }
    />
  )
}

function RightHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        columnGap: 10,
        marginHorizontal: 20
      }}
    >

      <Pressable
        onPress={() => alert('Language setting clicked!')}
        style={{
          flexDirection: 'row',
        }}
      >
        <Image source={require('./assets/Iconly.png')} />
        {/* <Image source={require('./assets/language_badge.png')}/> */}
        <Badge value='ID' status='success' />
      </Pressable>

      <Pressable
        onPress={() => alert('Notification clicked!')}
        style={{
          flexDirection: 'row',
        }}
      >
        <Image source={require('./assets/Iconly_notification.png')} />
        {/* <Image source={require('./assets/number_badge.png')}/> */}
        <Badge value='99' status='error' />
      </Pressable>

    </View>
  )
}



// function MainTabBar({state, descriptors, navigation}) {
//   return (
//     <View style = {{
//       flexDirection: "row",
//     }}>
//       {/* {state.routes.map((route, index) => )} */}
//     </View>
//   )
// }


const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const PublikasiStack = () => {
  return (
    <Stack.Navigator initialRouteName="PublikasiScreen">
      <Stack.Screen
        name="PublikasiScreen"
        component={PublikasiScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const TabelStack = () => {
  return (
    <Stack.Navigator initialRouteName="TabelScreen">
      <Stack.Screen name="TabelScreen" component={TabelScreen} />
    </Stack.Navigator>
  )
}

const BookmarkStack = () => {
  return (
    <Stack.Navigator initialRouteName="BookmarkScreen">
      <Stack.Screen name="BookmarkScreen" component={BookmarkScreen} />
    </Stack.Navigator>
  )
}

const LainnyaStack = () => {
  return (
    <Stack.Navigator initialRouteName="LainnyaScreen">
      <Stack.Screen name="LainnyaScreen" component={LainnyaScreen} />
    </Stack.Navigator>
  )
}

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{
      flexDirection: "row",
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index

        const tabIcon = isFocused ? route.activeIcon : route.inactiveIcon

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.taBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {isFocused ? route.params.activeIcon : route.params.inactiveIcon}
            <Text style={{
              color: isFocused ? 'black' : 'red'
            }}>
              {label}
            </Text>
          </TouchableOpacity>)
      })}
    </View>
  )
}

export default function TabNavigator() {
  return (
    <Tab.Navigator

      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          return focused 
          ?
          <Text style={{
            fontFamily: 'DMSansBold',
            fontSize: 14,
            color: '#093C88',
            alignSelf: "center",
            justifyContent: "center",
          }}>{route.name}</Text> 
          :
          <Text style={{
            fontFamily: 'DMSansRegular',
            fontSize: 14,
            color: '#093C88',
            alignSelf: "center",
            justifyContent: "center",
          }}>{route.name}</Text> 
        },
        tabBarStyle: {
          height: 70,
          backgroundColor: '#E3ECFC',
          // flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
        }
      })}

    >
      <Tab.Screen
        name="Beranda"
        component={HomeScreen}
        options={{
          headerShadowVisible: false,
          headerTitle: () => <LogoBPS />,
          headerRight: () => <RightHeader />,
          // tabBarStyle: { color: '#093C88', backgroundColor: '#e3ecfc' },
          tabBarIcon: ({focused, color}) => {
            return focused ? < BarIconActive_Beranda/> : <BarIconInactive_Beranda />
          },
        }}

      />
      <Tab.Screen
        name="Publikasi"
        component={PublikasiScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            return focused ? <BarIconActive_Publikasi /> : <BarIconInactive_Publikasi />    
          },
        }}
      />
      <Tab.Screen
        name="Tabel"
        component={TabelScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return focused ? <BarIconActive_Tabel /> : <BarIconInactive_Tabel />
          }
        }}
      />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} options={{
        tabBarIcon: ({focused, color}) => {
          return focused ? <BarIconActive_Bookmark /> : <BarIconInactive_Bookmark />
        }
      }}
      />
      <Tab.Screen name="Lainnya" component={LainnyaScreen} options={{
        tabBarIcon: ({focused, color}) => {
          return focused ? <BarIconActive_Lainnya /> : <BarIconInactive_Lainnya />
        }
      }}
      />
    </Tab.Navigator>
  )
}