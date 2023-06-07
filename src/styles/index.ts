import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#111',
  },
  spacer: {
    height: 200,
  },
});
