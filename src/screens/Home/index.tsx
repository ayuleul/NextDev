import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Container, PaddingH20} from '../../theme';
import {Blog, Header, Icon} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TopMenu} from '../../assets/icons';
import {useFeaturedArticles} from '../../services';

const Home = () => {
  const {featured} = useFeaturedArticles({
    page: 1,
    per_page: 20,
  });
  return (
    <View style={[Container, PaddingH20]}>
      <SafeAreaView style={Container}>
        <Header
          leftComponent={
            <Icon
              onPress={() => console.log('Pressed')}
              children={<Image style={styles.topMenu} source={TopMenu} />}
            />
          }
          centerComponent={<Text style={styles.logo}>Next Dev</Text>}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={featured}
          keyExtractor={item => item?.id.toString()}
          renderItem={({item}: {item: IFeatured}) => {
            const {user, title, description, created_at} = item;
            return (
              <Blog
                title={title}
                author={user?.name}
                avatar={{uri: user.profile_image}}
                date={created_at}
                highlight={description}
              />
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;
