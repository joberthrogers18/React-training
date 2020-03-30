import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import MapView from 'react-native-maps';

// i18n.fallbacks = true;

export default function App() {

  state = {
    location: null,
    errorMessage: null,
  };

  const [location, setLocation] = useState({});
  const [errorMessage, setError] = useState('');


  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setError('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync();
    return location;
  };

  useEffect(() => {

    async function handleActivites() {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setError('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
      } else {
        const response = await this._getLocationAsync();
        console.log(response.coords);
        setLocation(response.coords);
      }
    }

    handleActivites();

  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}> 
        <Text >{location.longitude}</Text>
        <Text >{location.latitude}</Text>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

