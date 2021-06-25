import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {RootState} from '../store';
import {useSelector, useDispatch} from 'react-redux';
import {Isliked} from '../store/home';
const NewsDetailes = props => {
  const dispatch = useDispatch();
  const NewsOfTimeLine = useSelector(
    (state: RootState) => state.home.NewsIcons,
  );

  const IsLikedOrDisLike = () => {

console.log(NewsOfTimeLine[props.route.params.index]?.isLiked);

 
    dispatch(
      Isliked({
        index: props.route.params.index,
      }),
    );
  };

  return (
    <ScrollView>
      <View style={{margin: 10}}>
        <Image
          source={{uri: NewsOfTimeLine[props.route.params.index]?.uri}}
          style={styles.detailimage}
        />
        <View style={styles.detailBtnView}>
          <TouchableOpacity onPress = {()=> IsLikedOrDisLike()}>
            <Text style={ NewsOfTimeLine[props.route.params.index]?.isLiked ? styles.isLikeBtnText : styles.btnText}>
              Like{' '} {NewsOfTimeLine[props.route.params.index]?.isLiked}
              {NewsOfTimeLine[props.route.params.index]?.like === 0
                ? ''
                : NewsOfTimeLine[props.route.params.index]?.like}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btnText}>comment</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btnText}>Share</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 10}}>
          {NewsOfTimeLine[props.route.params.index]?.desc}
        </Text>
      </View>

      {NewsOfTimeLine[props.route.params.index]?.type === 'Audio' && (
        <View>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Music_player_logo.png',
            }}
            style={{height: 200, width: 200, resizeMode: 'stretch'}}></Image>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={styles.playerBtn}> play </Text>
            <Text style={styles.playerBtn}>pause </Text>
            <Text style={styles.playerBtn}>Stop </Text>
          </View>
        </View>
      )}

      {NewsOfTimeLine[props.route.params.index]?.type === 'video' && (
        <View>
          <Image
            source={{
              uri: 'https://www.pngkit.com/png/full/667-6675807_youtube-video-player-icon.png',
            }}
            style={{
              height: 200,
              width: 200,
              resizeMode: 'stretch',
              alignSelf: 'center',
              marginVertical: 10,
            }}></Image>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={styles.shareBtn}> Share </Text>
          </View>
        </View>
      )}

      {NewsOfTimeLine[props.route.params.index]?.type?.length > 8 && (
        <Text style={{marginHorizontal: 10}}>
          {NewsOfTimeLine[props.route.params.index]?.type}
        </Text>
      )}
    </ScrollView>
  );
};
export default NewsDetailes;

const styles = StyleSheet.create({
  detailimage: {width: '100%', height: 200, borderRadius: 5},
  detailBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    padding: 5,
  },
  btnText: {color: 'silver'},
  isLikeBtnText: {color: '#000'},
  playerBtn: {
    width: '32%',
    backgroundColor: '#3498DB',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: '#fff',
  },
  shareBtn: {
    width: '100%',
    backgroundColor: '#3498DB',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: '#fff',
  },
});
