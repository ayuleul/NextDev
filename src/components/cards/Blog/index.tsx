import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';

import {styles} from './styles';
import Avatar from '../../helper/Avatar';
import {AlignCenter, FlexRow, JustifyBetween} from '../../../theme';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  item: IFeatured;
}

const Blog: React.FC<IProps> = ({item}) => {
  const {user, title, description, created_at} = item;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Reader', {
      item: item,
    });
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[FlexRow, JustifyBetween, AlignCenter, styles.header]}>
        <View style={[FlexRow, AlignCenter]}>
          <Avatar source={{uri: user?.profile_image}} />
          <Text style={styles.authorName}>{user?.name}</Text>
        </View>
        <Text style={styles.date}>
          {dayjs(created_at).format('MMM D, YYYY')}
        </Text>
      </View>
      <Text style={styles.blogTitle}>{title}</Text>
      <Text style={styles.highlight}>{description}</Text>
    </TouchableOpacity>
  );
};

export default Blog;
