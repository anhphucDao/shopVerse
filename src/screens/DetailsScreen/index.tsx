import React, {useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import DetailHeader from '../../components/DetailHeader';
import Comment from '../../components/Comment';
import Footer from '../../components/Footer';
import AuthRequireDialog from '../../components/AuthRequireDialog';
import Loader from '../../components/Loader';
import {useQuery} from '@tanstack/react-query';
import styles from './styles';
import {fetchProductById} from '../../services/dataService';
import FastImage from 'react-native-fast-image';
import SnackBar from '../../components/SnackBar';
import {DetailsScreenProps} from '../../types/screen';

export default function DetailsScreen({navigation, route}: DetailsScreenProps) {
  //use this itemId to fetch data from the server

  const {itemId} = route.params;
  //state to manage dialog visibility
  const [visible, setVisible] = useState(false);

  //state to manage snackbar visibility
  const [snackBarVisible, setSnackBarVisible] = useState(false);

  const {isLoading, data} = useQuery({
    queryKey: ['product', itemId],
    queryFn: () => fetchProductById(itemId),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.screenContainer}>
      <SnackBar
        isVisible={snackBarVisible}
        setIsVisible={setSnackBarVisible}
        message={'Add to cart successfully!'}
      />
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
          <Comment rating={data?.rating || {rate: 0, count: 0}} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{data?.title}</Text>
            <Text style={styles.description}>{data?.description}</Text>
          </View>
        </View>
      </ScrollView>
      <Footer
        setVisible={setVisible}
        price={data?.price || '0'}
        setShowSnackBar={setSnackBarVisible}
      />
    </View>
  );
}
