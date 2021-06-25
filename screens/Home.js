import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking
} from 'react-native';
import { useDispatch } from 'react-redux';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';
import {RootState} from '../store';
import {useSelector} from 'react-redux';
import { IniitialValueSetUp } from "../store/home";
import {AuthContext} from '../services/context';
const Home = (props) => {

  const NewsHeader = useSelector(
    (state: RootState) => state.home.News,
  );
  const NewsOfTimeLine  = useSelector(
    (state: RootState) => state.home.NewsIcons,
  );
  const dispatch = useDispatch();
  const {viewContext} = React.useContext(AuthContext);
  const [NewsIcons, setnewicon] = useState([
    {
      uri: 'https://picsum.photos/200/300?random=1',
      name: 'sports',
      desc: 'Provides additional metadata like index if you need it, as well as a more generic',
      like:0,
      isLiked:false,
      type:'video',
    },
    {
      uri: 'https://picsum.photos/200/300?random=2',
      name: 'sports',
      desc: 'Provides additional metadata like index if you need it, as well as a more generic',
      like:0,
      isLiked:false,
      type:'video'
    },
    {
      uri: 'https://picsum.photos/200/300?random=3',
      name: 'sports',
      desc: 'Provides additional metadata like index if you need it, as well as a more generic',
      like:0,
      isLiked:false,
      type:'Audio'
    },
    {
      uri: 'https://picsum.photos/200/300?random=4',
      name: 'sports',
      desc: 'Provides additional metadata like index if you need it, as well as a more generic',
      like:0,
      isLiked:false,
      type:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      uri: 'https://picsum.photos/200/300?random=5',
      name: 'sports',
      desc: 'Provides additional metadata like index if you need it, as well as a more generic',
      like:0,
      isLiked:false,
      type:'Audio'
    },
    {
      uri: 'https://picsum.photos/200/300?random=6',
      name: 'sports',
      desc: 'Provides additional metadata like index if you need it, as well as a more generic',
      like:0,
      isLiked:false,
      type:'Audio'
    },
    {
      uri: 'https://picsum.photos/200/300?random=7',
      name: 'sports',
      desc: 'Provides additional metadata like index if you need it, as well as a more generic',
      like:0,
      isLiked:false,
      type:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      uri: 'https://picsum.photos/200/300?random=8',
      name: 'sports',
      desc: 'Provides additional metadata like index if you need it, as well as a more generic',
      like:0,
      isLiked:false,
      type:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
  ]);
  const [News, setnews] = useState([
    {
      uri: 'https://picsum.photos/200/300?random=9',
      name: 'sports',
    },
    {
      uri: 'https://picsum.photos/200/300?random=10',
      name: 'Movies',
    },
    {
      uri: 'https://picsum.photos/200/300?random=11',
      name: 'crime',
    },
    {
      uri: 'https://picsum.photos/200/300?random=12',
      name: 'State',
    },
    {
      uri: 'https://picsum.photos/200/300?random=13',
      name: 'Covid',
    },
    {
      uri: 'https://picsum.photos/200/300?random=14',
      name: 'technology',
    },
    {
      uri: 'https://picsum.photos/200/300?random=15',
      name: 'science',
    },
    {
      uri: 'https://picsum.photos/200/300?random=16',
      name: 'world',
    },
  ]);
  React.useEffect(() =>{
dispatch(IniitialValueSetUp(
  {
    News:News,
    NewsIcons :NewsIcons

  }
))
  },[])

  const captureAndShareScreenshot = () => {
    console.log('called');

    try {
      viewContext.current.capture().then(uri => {
        RNFS.readFile(uri, 'base64').then(res => {
          let urlString = 'data:image/jpeg;base64,' + res;
          let options = {
            message: 'News App',
            url: urlString,
            type: 'image/jpeg',
          };
          Share.open(options)
            .then(res => {
            })
            .catch(err => {
            });
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <TouchableOpacity onPress = {() => props.navigation.navigate('NewsDetailes', {index :index})}>
        <Image
          source={{uri: item.uri}}
          style={styles.cartImage}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: 'silver',
            borderBottomWidth: 1,
          }}>
          <Text style={{color: 'silver'}}>{item.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'silver'}}>More infomation</Text>
            <Image
              source={require('../assets/icons8-share-3-24.png')}
              style={styles.shareIcon}></Image>
          </View>
        </View>
        <Text style={{fontSize: 10}}>{item.desc}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ViewShot
      ref={viewContext}
      options={{
        format: 'jpg',
        quality: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{marginVertical: 10}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {NewsHeader && NewsHeader?.map((item, index) => (
              <View
                style={styles.HeaderCartContainer}>
                <Image
                  style={styles.HeaderCard}
                  source={{uri: item.uri}}
                />

                <Text style={{alignSelf: 'center'}}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <FlatList data={NewsOfTimeLine} renderItem={renderItem} />
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}  onPress={ ()=>{ Linking.openURL('https://google.com')}}>
            <Image
              source={require('../assets/icons8-link-100.png')}
              style={styles.btnImage}></Image>
          </TouchableOpacity>
          <View style={styles.btnSparator}></View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => captureAndShareScreenshot()}>
            <Image
              source={require('../assets/icons8-share-96.png')}
              style={styles.btnImage}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </ViewShot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    width: '49.5%',
    alignItems: 'center',
  },
  btnView: {
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    paddingVertical: 10,
  },
  cartImage :{width: '100%', height: 100, borderRadius: 5},
  btnImage: {height: 25, width: 25, resizeMode: 'stretch'},
  btnSparator: {width: 1, height: '100%', backgroundColor: 'silver'},
  shareIcon :{height: 20, width: 20, marginHorizontal: 5},
  HeaderCard:{height: 80, width: 80, borderRadius: 50},
  HeaderCartContainer :{
    marginLeft: 10,
    borderRadius: 5,
  }
});
export default Home;
