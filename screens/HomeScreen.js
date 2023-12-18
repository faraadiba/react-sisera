import * as React from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet, Dimensions, useWindowDimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../components/Search';
import Menu from '../components/Menu';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import DecoLines from '../assets/DecoLines.svg'
import DocumentIcon from '../assets/icons/Document.svg'
import TabelIcon from '../assets/icons/Tabel.svg'
import InfografisIcon from '../assets/icons/Infografis.svg'
import RilisDataIcon from '../assets/icons/RilisData.svg'
import BeritaIcon from '../assets/icons/Berita.svg'
import JadwalRilisIcon from '../assets/icons/JadwalRilis.svg'
import KonsultasiIcon from '../assets/icons/Konsultasi.svg'
import PPIDIcon from '../assets/icons/PPID.svg'
import DownloadIcon from '../assets/icons/Download.svg'
// import { Home } from 'react-native-iconly';
import WorkIcon from '../assets/icons/Work.svg'
import DecoEllipse from '../assets/icons/DecoEllipse.svg'
import ArrowRight from '../assets/icons/ArrowRight.svg'

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DMSans',
    color: 'white',
  },
  textIndikator: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'DMSansBold'

  },
  textWaktu: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'DMSans',
    marginVertical: '5%',
  },
  textStat: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'DMSansBold'
  },
  inf10: {
    fontSize: 10,
    fontFamily: 'DMSans'
  },
  infJudul: {
    fontSize: 14,
    fontFamily: 'DMSansBold'
  },
})

const PublikasiRoute = () => (
  <View style={{ flex: 1, height: 500 }}>
    <InformasiTerbaruCard />
    <InformasiTerbaruCard />
    <InformasiTerbaruCard />
    <TouchableOpacity><Text>Publikasi Selengkapnya</Text></TouchableOpacity>
  </View>
)

const TabelRoute = () => (
  <View style={{ flex: 1, height: 500 }}>
    <InformasiTerbaruCard />
    <InformasiTerbaruCard />
    <InformasiTerbaruCard />
  </View>
)

const BRSRoute = () => (
  <View style={{ flex: 1, height: 500 }}>
    <InformasiTerbaruCard />
    <InformasiTerbaruCard />
    <InformasiTerbaruCard />
  </View>
)

const BRSRoute1 = () => (
  <View style={{ flex: 1, height: 500 }}>
    <InformasiTerbaruCard />
    <InformasiTerbaruCard />
    <InformasiTerbaruCard />
  </View>
)

const renderScene = SceneMap({
  first: PublikasiRoute,
  second: TabelRoute,
  third: BRSRoute,
  fourth: BRSRoute1,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#b6b6b6' }}
    style={{ backgroundColor: '#f6f6f6' }}
    scrollEnabled={true}
    activeColor='#0d49a8'
    inactiveColor='#b6b6b6'
    tabStyle={{
      gap: 5,
      fontFamily: 'DMSans'
    }}
  />
)

const dimensionsWidth = Dimensions.get('window').width

function Card(props) {
  return (
    <View style={{
      width: 180,
      height: 210,
      backgroundColor: props.bgcolor,
      borderRadius: 16,
      flex: 1,
      margin: 10,
    }}>
      <View style={{
        position: 'absolute',
      }}>
        <DecoEllipse />
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '80%',
        top: '10%',
      }}>
        <WorkIcon />
        <ArrowRight />
      </View> 

      <View style={{
        height: '10%',
        width: '80%',
        position: 'relative',
        bottom: '5%',
        flex: 1,
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
      }}>
        <Text style={[ styles.textIndikator, ]}>{props.indikator}</Text>
        <Text style={[ styles.textWaktu]}>{props.waktu}</Text>
        <Text style={[ styles.textStat]}>{props.stat}</Text>
      </View>
    </View>
  
  )
}

function InformasiTerbaruCard() {
  return (

    <View style={{
      backgroundColor: 'white',
      flexDirection: 'row',
      padding: 10,
      margin: 10,
      borderRadius: 9,
      justifyContent: 'space-between',
    }}>
      <View style={{
        flexShrink: 1,
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <Text style={[styles.inf10, { marginRight: 10, color: '#6D6D6D' }]}>3 Oktober 2023</Text>
          <DownloadIcon />
          <Text style={[styles.inf10, { marginRight: 10, color: '#FC5A5A' }]}>20,23 MB</Text>
        </View>
        <Text style={[styles.infJudul, { flexWrap: 'wrap', flexShrink: 1 }]}>Lorem ipsum dolor sit amet</Text>
      </View>
      <Image source={require('../assets/cover_publikasi.png')}/>

    </View>
  )
}

function HomeScreen({navigation}) {

  const layout = useWindowDimensions()

  // const [fontsLoaded] = useFonts({
  //     "DMSans": require("../assets/fonts/DMSans.ttf")
  // })

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'Publikasi' },
    { key: 'second', title: 'Tabel' },
    { key: 'third', title: 'Berita Resmi Statistik' },
    { key: 'fourth', title: 'Infografis' }
  ])

  // useEffect(() => {
  //     async function prepare(){
  //       await SplashScreen.preventAutoHideAsync()
  //     }
  //     prepare()
  //   }, [])

  //   if(!fontsLoaded){
  //     return undefined
  //   } else {
  //     SplashScreen.hideAsync()
  //   }


  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: 'white'
    }}>

      <View style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#1B85F3',
        borderRadius: 14,
        paddingLeft: 15,
        width: '90%',
        alignSelf: 'center',
        flexWrap: 'wrap',
        
      }}>


        <View style={{
          alignSelf: 'flex-end',
          alignItems: 'flex-end',
          flex: 1,
          // margin: 0,
        }}>
          <DecoLines />
          <View style={{
            position: 'absolute',
            alignSelf: 'flex-start',
            justifyContent: 'center',
            paddingVertical: 30,
            width: '70%',
          }}>
            <Text
              style={{
                // position: 'absolute',
                fontFamily: 'DMSans',
                fontSize: 14,
                color: '#ECEFF2'
              }}
            >Selamat datang di SISERA!</Text>
            <Text
              style={{
                // position: 'absolute',
                fontFamily: 'DMSansBold',
                fontSize: 18,
                color: 'white'
              }}>Data Sulawesi Tenggara Dalam Genggaman</Text>
          </View>
        </View>
      </View>
      <View style={{
        alignSelf: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#CCE1F7',
        width: '70%',
        height: 10,
        position: 'relative',
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
      }}>
        {/* kotak biru shadow */}
      </View>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        paddingVertical: 15,
      }}>
        <Text style={{
          color: 'black',
          fontFamily: 'DMSansBold'
        }}>Pilih Wilayah:</Text>
        <Pressable>
          <Text style={{
            color: 'black',
          }}>Prov. Sulawesi Tenggara</Text>
        </Pressable>
      </View>
      <Search
        style={{
          // padding: 14,
          justifyContent: 'center',
          flex: 1,
          // width: '90%',
        }}
      />
      <Text
        style={{
          color: 'black',
          width: '90%',
          alignSelf: 'center',
          fontFamily: 'DMSansBold',
          paddingTop: 15,
        }}
      >Indikator Strategis: </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingLeft: '4%',
          
        }}
      >
        <Card
          bgcolor='#1B85F3'
          indikator='Tingkat Pengangguran Terbuka'
          waktu='Februari 2023'
          stat='3,66%'
        />
        <Card
          bgcolor='#ffa30a'
          indikator='Jumlah Penduduk'
          waktu='2021'
          stat='2.659.156 jiwa'
        />
        <Card
          bgcolor='#3ea95f'
          indikator='Gini Ratio'
          waktu='Februari 2023'
          stat='3,20'
        />
      </ScrollView>
      {/* <Document /> */}
      <View style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        length: 500,
        backgroundColor: '#0d49a8',
        borderRadius: 32,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingVertical: 20,
        // length: {dimensionsWidth},
      }}>
        <Menu navigation={navigation} name='Publikasi' menuIcon={<DocumentIcon />} />
        <Menu navigation={navigation} name='Tabel' menuIcon={<TabelIcon />} />
        <Menu navigation={navigation} name='Infografis' menuIcon={<InfografisIcon />} />
        <Menu navigation={navigation} name='Rilis Data' menuIcon={<RilisDataIcon />} />
        <Menu navigation={navigation} name='Berita' menuIcon={<BeritaIcon />} />
        <Menu navigation={navigation} name='Jadwal Rilis' menuIcon={<JadwalRilisIcon />} />
        <Menu navigation={navigation} name='Konsultasi' menuIcon={<KonsultasiIcon />} />
        <Menu navigation={navigation} name='PPID' menuIcon={<PPIDIcon />} />

      </View>
      <View style={{
        backgroundColor: '#f6f6f6',
        height: 450,
      }}>
        <Text style={{
          fontFamily: 'DMSansBold',
          fontSize: 20,
          padding: 20,
          paddingBottom: 5,
        }}>Informasi Terbaru</Text>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen