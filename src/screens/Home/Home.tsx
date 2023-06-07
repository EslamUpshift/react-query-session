import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';
import {useLaunches} from '../../data/useLaunches';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {styles} from '../../styles';
import {useCrew} from '../../data/useCrew';

const Home = () => {
  const [crewId, setCrewId] = React.useState('');

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
  const {data: crew} = useCrew(crewId);

  useEffect(() => {
    //delay the crewId update to simulate a slow network
    setTimeout(() => {
      setCrewId(data?.crew[0] || '');
    }, 2000);
  }, [data]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefetchingByUser}
          onRefresh={refetchByUser}
        />
      }>
      <View>
        {isLoading && <Text>Loading...</Text>}
        {isRefetching && <Text>Refetching...</Text>}
        <Text style={styles.header}>Launch Details</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Go to Settings</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => refetch()}>
          <Text style={styles.buttonText}>Refetch</Text>
        </Pressable>
        <Text>{JSON.stringify(data)}</Text>
        <Text style={styles.header}>Crew Details</Text>
        <Text>{JSON.stringify(crew)}</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
