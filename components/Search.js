import * as React from 'react';
import { useCallback } from 'react';
import { SafeAreaView, Text, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'


function Search() {
    // const [fontsLoaded, fontsError] = useFonts({
    //     'DMSans-Regular': require('../assets/fonts/DMSans-Regular.ttf')
    // })

    // const onLayoutRootView = useCallback(async() => {
    //     if (fontsLoaded || fontsError) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded, fontsError])

    // if (!fontsLoaded && !fontsError) {
    //     return null;
    //   }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                height: 50,
                flexDirection: 'row',
                borderColor: '#ffa30a',
                borderWidth: 1,
                backgroundColor: "white",
                borderRadius: 14,
                marginHorizontal: 20,
            }}
        >
            <TextInput
                placeholder='Cari data di sini'
                style = {{
                    flex: 1,
                    paddingLeft: 10,
                    // fontFamily: 'DMSans-Regular'

                }}
            ></TextInput>
            <TouchableOpacity 
                style = {{
                    backgroundColor: '#ffa30a',
                    borderTopEndRadius: 12,
                    borderBottomEndRadius: 12,
                    width: 102,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '16,32,16,27'
                }}
            >
                <Text
                    style = {{
                        color: 'white',
                        // fontFamily: 'DMSans-Regular'
                    }}
                >Cari</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Search