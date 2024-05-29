import React, {useState} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import DetailHeader from '../../components/DetailHeader';
import Comment from '../../components/Comment';
import Footer from '../../components/Footer';
import AuthRequireDialog from '../../components/AuthRequireDialog';
import Loader from '../../components/Loader';
import {useQuery} from '@tanstack/react-query';
import styles from './styles';
import {fetchProductById} from '../../services/dataService';
import FastImage from 'react-native-fast-image';

export default function DetailsScreen({navigation, route}) {
  //use this itemId to fetch data from the server
  const {itemId} = route.params;
  //state to manage dialog visibility
  const [visible, setVisible] = useState(false);

  const {isLoading, data} = useQuery({
    queryKey: ['product', itemId],
    queryFn: () => fetchProductById(itemId),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.screenContainer}>
      <AuthRequireDialog visible={visible} setVisible={setVisible} />
      <DetailHeader navigation={navigation} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.imageContainer}>
            <FastImage
              source={{uri: data?.image, priority: FastImage.priority.high}}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.image}
            />
          </View>
          <Comment rating={data?.rating} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{data?.title}</Text>
            <Text style={styles.description}>{data?.description}</Text>
          </View>
        </View>
      </ScrollView>
      <Footer setVisible={setVisible} />
    </View>
  );
}
