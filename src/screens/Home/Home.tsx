import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';
import {useLaunches} from '../../data/useLaunches';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {styles} from '../../styles';
import {useCrew} from '../../data/useCrew';
import {useLaunchCrew} from '../../data/useLaunchCrew';
import {Launch} from '../../network/modals/launch.modal';
import {Crew} from '../../network/modals/crew.modal';
import {useQueryClient} from '@tanstack/react-query';

const Home = () => {
  const [crewMembers, setCrewMembers] = React.useState<string[]>([]);

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
  let results = useLaunchCrew(crewMembers);
  const queryClient = useQueryClient();
  useEffect(() => {
    //delay the crewId update to simulate a slow network
    if (!data) {
      return;
    }
    const sub = setTimeout(() => {
      setCrewMembers(data.crew || []);
    }, 2000);
    return () => {
      clearTimeout(sub);
    };
  }, [data]);

  useEffect(() => {
    //invalidate crew queries when launch data changes
    if (!data) {
      return;
    }
    queryClient?.invalidateQueries(['crew/']);
  }, [data, isRefetchingByUser, queryClient]);

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
        {results && (
          <Text>
            {JSON.stringify(results.some(query => query.isRefetching))}
          </Text>
        )}
        {results.map((query, index) => {
          return <Text key={index}>{query.data?.name}</Text>;
        })}

        <View style={styles.spacer} />
      </View>
    </ScrollView>
  );
};

export default Home;
