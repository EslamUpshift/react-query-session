import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';
import {useLaunches} from '../../data/useLaunches';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {styles} from '../../styles';
import {useQueryClient} from '@tanstack/react-query';

const Home = () => {
  const {
    isLoading,
    isRefetching,
    data,
    refetch,
    refetchByUser,
    isRefetchingByUser,
    isStale,
  } = useLaunches();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const queryClient = useQueryClient();

  // useEffect(() => {
  //   // invalidate the query after 10 seconds
  //   const sub = setTimeout(() => {
  //     queryClient?.invalidateQueries(['launches/latest']);
  //   }, 10000);

  //   return () => {
  //     clearTimeout(sub);
  //   };
  // }, [queryClient]);

  useEffect(() => {
    // invalidate the query after user pull to refresh by 3 seconds
    const sub = setTimeout(() => {
      queryClient?.invalidateQueries(['launches/latest']);
    }, 3000);
    return () => {
      clearTimeout(sub);
    };
  }, [isRefetchingByUser, queryClient]);

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
        <Text>{JSON.stringify(isStale)}</Text>
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
