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
import BarIcon_Beranda from './assets/icons/BarIcon_Beranda'
import BarIconInactive_Publikasi from './assets/icons/BarIconInactive_Publikasi'
import BarIconActive_Publikasi from './assets/icons/BarIconActive_Publikasi'
import BarIcon_Tabel from './assets/icons/BarIcon_Tabel'
import BarIcon_Bookmark from './assets/icons/BarIcon_Bookmark'
import BarIcon_Lainnya from './assets/icons/BarIcon_Lainnya'

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()

function LogoBPS() {
    return (
      <Image 
        source={require('./assets/logoBPS.png')}
        style = {
            {marginHorizontal: 10}
        }
      />
    )
}
  
function RightHeader() {
    return (
      <View
        style = {{
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
          <Image source={require('./assets/Iconly.png')}/>
          {/* <Image source={require('./assets/language_badge.png')}/> */}
          <Badge value='ID' status='success'/>
        </Pressable>
  
        <Pressable 
          onPress={() => alert('Notification clicked!')}
          style={{
            flexDirection: 'row',
          }}
        >
          <Image source={require('./assets/Iconly_notification.png')}/>
          {/* <Image source={require('./assets/number_badge.png')}/> */}
          <Badge value='99' status='error'/>
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
                options={{headerShown: false}}    
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
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

const TabelStack = () => {
    return (
        <Stack.Navigator initialRouteName="TabelScreen">
            <Stack.Screen name="TabelScreen" component={TabelScreen}/>
        </Stack.Navigator>
    )
}

const BookmarkStack = () => {
    return (
        <Stack.Navigator initialRouteName="BookmarkScreen">
            <Stack.Screen name="BookmarkScreen" component={BookmarkScreen}/>
        </Stack.Navigator>
    )
}

const LainnyaStack = () => {
    return (
        <Stack.Navigator initialRouteName="LainnyaScreen">
            <Stack.Screen name="LainnyaScreen" component={LainnyaScreen}/>
        </Stack.Navigator>
    )
}

function TabBar({ state, descriptors, navigation}) {
  console.log('state', state)
  console.log('descriptors', descriptors)
  console.log('navigation', navigation)
  return (
    <View style={{
      flexDirection: "row",
    }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = 
          options.tabBarLabel !== undefined 
          ? options.tabBarLabel 
          : options.title !== undefined
          ? options.title
          : route.name;
        
          const isFocused = state.index === index

          const tabIcon = isFocused ? route.activeIcon : route.inactiveIcon

          const onPress = () =>{
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented){
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
            accessibilityState={isFocused? {selected: true} : {}}
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

export default function TabNavigator(props) {
    return (
      <Tab.Navigator
          tabBar={(props) => <TabBar {...props}/>} 
          screenOptions={{
            // tabBarActiveTintColor: 'black',
            // tabBarStyle: {
            //   backgroundColor: '#E3ECFC',
            //   shadowColor: 'black'
            // },
            // tabBarBadgeStyle: {
            //   backgroundColor: '#e3ecfc'
            // },
          }}
        
        >
          <Tab.Screen 
              name="Beranda" 
              component={HomeScreen} 
              options={{
                  headerShadowVisible: false,
                  headerTitle: () => <LogoBPS />,
                  headerRight: () => <RightHeader />,
                  tabBarStyle: {color: '#093C88', backgroundColor:'#e3ecfc'},
                  }}
              params = {{
                activeIcon : () => <BarIcon_Tabel />,
                inactiveIcon : () => <BarIcon_Tabel />
              }}
          />
          <Tab.Screen 
            name="Publikasi"
            component={PublikasiScreen}
            options={{
              // headerShown: false,
            // tabBarIcon: () => {
            //   return (
            //     <BarIcon_Publikasi />
            //   )
            // },
            }}
            params = {{
              activeIcon: () => <BarIconActive_Publikasi />,
              inactiveIcon: () => <BarIconInactive_Publikasi />
            }}
            />
          <Tab.Screen 
          name="Tabel" 
          component={TabelScreen} 
          options={{
            // tabBarIcon: () => {
            //   return (
            //     <BarIcon_Tabel />
            //   )
            // }
          }}
          params = {{
            activeIcon : () => <BarIcon_Tabel />,
            inactiveIcon : () => <BarIcon_Tabel />
          }}
          />
          <Tab.Screen name="Bookmark" component={BookmarkScreen} options={{
            // tabBarIcon: () => {
            //   return (
            //     <BarIcon_Bookmark />
            //   )
            // }
          }}
          params = {{
            activeIcon : () => <BarIcon_Tabel />,
            inactiveIcon : () => <BarIcon_Tabel />
          }}
          />
          <Tab.Screen name="Lainnya" component={LainnyaScreen} options={{
            // tabBarIcon: () => {
            //   return (
            //     <BarIcon_Lainnya />
            //   )
            // }
          }}
          params = {{
            activeIcon : () => <BarIcon_Tabel />,
            inactiveIcon : () => <BarIcon_Tabel />
          }}
          />
        </Tab.Navigator>
        // <Tab.Navigator 
        //   screenOptions={{
        //     tabBarActiveTintColor: 'black',
        //     tabBarStyle: {
        //       backgroundColor: '#E3ECFC',
        //       shadowColor: 'black'
        //     },
        //     tabBarBadgeStyle: {
        //       backgroundColor: '#e3ecfc'
        //     },
        //   }}
        
        // >
        //     <Tab.Screen 
        //         name="Beranda" 
        //         component={HomeStack} 
        //         options={{
        //             headerShadowVisible: false,
        //             headerTitle: () => <LogoBPS />,
        //             headerRight: () => <RightHeader />,
        //             tabBarStyle: {color: '#093C88', backgroundColor:'#e3ecfc'},
        //             tabBarIcon: () => {
        //               return (
        //                 <BarIcon_Beranda />
        //               )
        //             }
        //             }}/>
        //     <Tab.Screen name="Publikasi" component={PublikasiStack} options={{
        //       tabBarIcon: () => {
        //         return (
        //           <BarIcon_Publikasi />
        //         )
        //       },
        //       headerShown: false,
        //     }}/>
        //     <Tab.Screen name="Tabel" component={TabelStack} options={{
        //       tabBarIcon: () => {
        //         return (
        //           <BarIcon_Tabel />
        //         )
        //       }
        //     }}/>
        //     <Tab.Screen name="Bookmark" component={BookmarkStack} options={{
        //       tabBarIcon: () => {
        //         return (
        //           <BarIcon_Bookmark />
        //         )
        //       }
        //     }}/>
        //     <Tab.Screen name="Lainnya" component={LainnyaStack} options={{
        //       tabBarIcon: () => {
        //         return (
        //           <BarIcon_Lainnya />
        //         )
        //       }
        //     }}/>
        // </Tab.Navigator>
      
      
    )
}