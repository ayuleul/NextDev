import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {Container, PaddingH20} from '../../theme';
import {Tag} from '../../components';
import {styles} from './styles';
import {useQuery} from 'react-query';
import {getTags$} from '../../services/tags';

const Tags = () => {
  const tags = useQuery('tags', () => getTags$({page: 1, per_page: 30}), {
    keepPreviousData: true,
  });
  return (
    <SafeAreaView style={[Container, PaddingH20, styles.container]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tags?.data?.data}
        renderItem={({item}) => <Tag data={item} />}
      />
    </SafeAreaView>
  );
};

export default Tags;
