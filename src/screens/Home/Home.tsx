import {View, Text} from 'react-native';
import React from 'react';
import {useLaunches} from '../../data/useLaunches';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {styles} from '../../styles';

const Home = () => {
  const {isLoading, isRefetching} = useLaunches();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  return (
    <View>
      <Text>Home</Text>
      {isLoading && <Text>Loading...</Text>}
      {isRefetching && <Text>Refetching...</Text>}
      <Pressable
        style={styles.button}
        onPress={() => navigation.replace('Settings')}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.replace('Settings')}>
        <Text style={styles.buttonText}>Refetch</Text>
      </Pressable>
    </View>
  );
};

export default Home;
