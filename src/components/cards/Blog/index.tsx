import {ImageSourcePropType, Text, View} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';

import {styles} from './styles';
import Avatar from '../../helper/Avatar';
import {AlignCenter, FlexRow, JustifyBetween} from '../../../theme';

interface IProps {
  title: string;
  author: string;
  avatar: ImageSourcePropType;
  date: Date;
  highlight: string;
}

const Blog: React.FC<IProps> = ({title, author, avatar, date, highlight}) => {
  return (
    <View style={styles.container}>
      <View style={[FlexRow, JustifyBetween, AlignCenter, styles.header]}>
        <View style={[FlexRow, AlignCenter]}>
          <Avatar source={avatar} />
          <Text style={styles.authorName}>{author}</Text>
        </View>
        <Text style={styles.date}>{dayjs(date).format('MMM D, YYYY')}</Text>
      </View>
      <Text style={styles.blogTitle}>{title}</Text>
      <Text style={styles.highlight}>{highlight}</Text>
    </View>
  );
};

export default Blog;
