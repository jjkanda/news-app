import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://picsum.photos/id/10/200/200' }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            「2番・指名打者」で出場した大谷は、見逃し三振、三ゴロ、中飛で迎えた第4打席で、アストロズ3番手のガルシアから2球目を中堅へ運んだ。2―2の同点での場面で放った勝ち越し本塁打は、両リーグトップに並ぶ一撃で、大谷は一塁ベースを回ると左腕を突き上げ、喜びを表現した。9回の5打席目は空振り三振に終わった。5打数1安打1打点で打率2割8分6厘。
          </Text>
          <Text style={styles.subText}>React News</Text>
        </View>
      </View>
    </View>
  );
}
