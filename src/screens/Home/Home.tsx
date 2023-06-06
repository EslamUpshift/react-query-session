import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React from 'react';
import {useLaunches} from '../../data/useLaunches';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {styles} from '../../styles';
import {useRefreshOnFocus} from '../../hooks/useRefreshOnFocus';

const Home = () => {
  const {
    isLoading,
    isRefetching,
    data,
    refetch,
    refetchByUser,
    isRefetchingByUser,
  } = useLaunches();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  useRefreshOnFocus(refetch);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefetchingByUser}
          onRefresh={refetchByUser}
        />
      }>
      <View>
        <Text>Home</Text>
        {isLoading && <Text>Loading...</Text>}
        {isRefetching && <Text>Refetching...</Text>}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Go to Settings</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => refetch()}>
          <Text style={styles.buttonText}>Refetch</Text>
        </Pressable>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
