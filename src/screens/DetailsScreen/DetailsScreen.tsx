import React from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import DetailHeader from '../../components/DetailHeader';
import Comment from '../../components/Comment';
import Footer from '../../components/Footer';
import styles from './styles';

export default function DetailsScreen({navigation, route}) {
  //use this itemId to fetch data from the server
  const {itemId} = route.params;

  console.log('Details Screen, route: ', route);
  console.log('Details Screen, itemId: ', itemId);

  return (
    <View style={styles.screenContainer}>
      <DetailHeader navigation={navigation} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/product/bag.png')}
              style={styles.image}
            />
          </View>
          <Comment />
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              MBJ Women's Solid Short Sleeve Boat Neck V
            </Text>
            <Text style={styles.description}>
              95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach,
              Lightweight fabric with great stretch for comfort, Ribbed on
              sleeves and neckline / Double stitching on bottom hem 95% RAYON 5%
              SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight
              fabric with great stretch for comfort, Ribbed on sleeves and
              neckline / Double stitching on bottom hem 95% RAYON 5% SPANDEX,
              Made in USA or Imported, Do Not Bleach, Lightweight fabric with
              great stretch for comfort, Ribbed on sleeves and neckline / Double
              stitching on bottom hem 95% RAYON 5% SPANDEX, Made in USA or
              Imported, Do Not Bleach, Lightweight fabric with great stretch for
              comfort, Ribbed on sleeves and neckline / Double stitching on
              bottom hem
            </Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
