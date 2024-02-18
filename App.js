import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { PaperProvider, Button} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Post from './Post';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </PaperProvider>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <Button icon="camera" mode="contained" onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }>
      Press me
      </Button>

    <Post />
    </ScrollView>
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
