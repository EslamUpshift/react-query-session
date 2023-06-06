import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {styles} from '../../styles';

const Settings = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Settings'>>();

  return (
    <View>
      <Text>Settings</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.replace('Home')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </Pressable>
    </View>
  );
};

export default Settings;
