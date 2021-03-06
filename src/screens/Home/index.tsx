import {FlatList, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Container, PaddingH20} from '../../theme';
import {Blog, Header, Icon} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TopMenu} from '../../assets/icons';
import {getArticles$} from '../../services';
import {useQuery} from 'react-query';

const Home = () => {
  const {data} = useQuery(
    'featured',
    () => getArticles$({page: 1, per_page: 30}),
    {
      keepPreviousData: true,
    },
  );

  return (
    <SafeAreaView style={[Container, PaddingH20]}>
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
        data={data?.data}
        keyExtractor={item => item?.id.toString()}
        renderItem={({item}: {item: IFeatured}) => {
          return <Blog item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
