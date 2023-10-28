import React from "react";
import { View, Image, Button, Text, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { DATAPUBLIKASI } from "../assets/data/dataPublikasi";
import { FlatList } from "react-native";

const Item = ({item}) => (
  // <TouchableOpacity style={{
  //   // height: 50,
  //   backgroundColor: 'lightyellow',
  //   borderRadius: 16,

  // }}>
    // {/* <View style={{
    //   flexDirection: "row",
    // }}>
    //   <Text>{item.tanggal}</Text>
    //   <Text>{item.ukuranFile}</Text>
    // </View>
    // <Text>{item.title}</Text> */}

  <TouchableOpacity style={{
      backgroundColor: 'white',
      flexDirection: 'row',
      padding: 10,
      margin: 10,
      borderRadius: 9,
      justifyContent: "space-between",
    }}>
      <View style={{
        flexShrink: 1,
      }}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <Text style={[ { marginRight: 10 }]}>{item.tanggal}</Text>
          <Text style={[ { marginRight: 10 }]}>{item.ukuranFile}</Text>
        </View>
        <Text style={[ {flexWrap: 'wrap', flexShrink: 1}]}>{item.title}</Text>
      </View>
      <Image source={require('../assets/cover_publikasi.png')} />
    </TouchableOpacity>
)

export default function PublikasiScreen({navigation}) {
  const renderItem = ({item}) => {
    return (
      <Item 
        item={item}
      />
    )
  }
  
  return (
    <View style={{ 
      flex: 1, 
      paddingVertical: 40,
      paddingHorizontal: 24, 
      }}>
      <Text style={{
        fontSize: 20,
      }}>Publikasi</Text>
      <View style={{
        borderColor: 'black',
        flexDirection: "row",
        backgroundColor: 'lightblue',
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: 'aquamarine',
        }}>
          <TextInput placeholder="Masukkan kata kunci"></TextInput>
          <TouchableOpacity>
            <Text>Cari</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          
        }}>
          <Text>Pilih tahun</Text>
        </View>
      </View>
      <SafeAreaView>
        <FlatList 
          data={DATAPUBLIKASI}
          renderItem={renderItem}
          keyExtractor={item=>item.id}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}
