import {useWindowDimensions, ScrollView, Text, View, Image} from 'react-native';
import React from 'react';
import RenderHtml from 'react-native-render-html';
import {styles} from './styles';
import {
  AlignCenter,
  Container,
  FlexRow,
  JustifyBetween,
  PaddingH20,
} from '../../theme';
import {getArticles$} from '../../services';
import {useQuery} from 'react-query';
import {Avatar, Header, Icon} from '../../components';
import {Download, GoBack} from '../../assets/icons';

interface IProps {
  route: any;
  navigation: any;
}

const Reader: React.FC<IProps> = ({navigation, route}) => {
  const {id, title, cover_image, user, reading_time_minutes} =
    route.params.item;
  const {width} = useWindowDimensions();

  const {data, isLoading} = useQuery(
    'oneArticle',
    () => getArticles$({page: 1, per_page: 30, extraURI: id}),
    {
      keepPreviousData: true,
    },
  );

  return (
    <View style={[Container, PaddingH20, styles.container]}>
      <Header
        leftComponent={
          <Icon
            onPress={() => navigation.goBack()}
            children={<Image style={styles.topIcon} source={GoBack} />}
          />
        }
        rightComponent={
          <Icon
            onPress={() => navigation.goBack()}
            children={<Image style={styles.topIcon} source={Download} />}
          />
        }
      />
      {isLoading ? (
        <Text>...Loading</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <View style={[FlexRow, JustifyBetween, AlignCenter, styles.header]}>
              <View style={[FlexRow, AlignCenter]}>
                <Avatar source={{uri: user?.profile_image}} size="xSmall" />
                <Text style={styles.authorName}>{user?.name}</Text>
              </View>
              <Text style={styles.readingTime}>{reading_time_minutes} min</Text>
            </View>
            <Image style={styles.coverImage} source={{uri: cover_image}} />
          </View>
          {data?.data?.body_html ? (
            <RenderHtml
              baseStyle={styles.viewContainer}
              contentWidth={width}
              source={{
                html: data?.data?.body_html,
              }}
            />
          ) : null}
        </ScrollView>
      )}
    </View>
  );
};

export default Reader;
