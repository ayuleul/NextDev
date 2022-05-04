import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Container, Padding20} from '../../theme';
import {Blog} from '../../components';
import {avatar} from '../../assets/images';

const Home = () => {
  return (
    <View style={[Container, Padding20]}>
      <Text style={styles.logo}>Next Dev</Text>
      <Blog
        title="The best way to predict the future is to create it."
        author="John Doe"
        avatar={avatar}
        date="Today"
        highlight="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facilis quas modi mollitia voluptate aspernatur, ab reiciendis nemo officiis repellendus velit aut iure veritatis nulla accusantium numquam natus dignissimos pariatur!"
      />
      <Blog
        title="The best way to predict the future is to create it."
        author="John Doe"
        avatar={avatar}
        date="2 days ago"
        highlight="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facilis quas modi mollitia voluptate aspernatur, ab reiciendis nemo officiis repellendus velit aut iure veritatis nulla accusantium numquam natus dignissimos pariatur!"
      />
    </View>
  );
};

export default Home;
