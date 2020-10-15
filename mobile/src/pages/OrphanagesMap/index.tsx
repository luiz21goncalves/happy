import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../../assets/map-marker.png';

import { Container } from './styles';

const OrphanagesMap: React.FC = () => (
  <Container>
    <SafeAreaView style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -19.4707569,
          longitude: -42.548012,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{ latitude: -19.4707569, longitude: -42.548012 }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
        >
          <Callout tooltip onPress={() => {}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Menidas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>

        <TouchableOpacity style={styles.createOrphanage}>
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -19.4707569,
          longitude: -42.548012,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{ latitude: -19.4707569, longitude: -42.548012 }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
        >
          <Callout tooltip onPress={() => {}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Menidas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>

        <TouchableOpacity style={styles.createOrphanage}>
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: StatusBar.currentHeight,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'nunito700',
  },

  footer: {
    bottom: 64,

    width: Dimensions.get('window').width - 48,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    color: '#8fa7b3',
    fontFamily: 'nunito700',
  },

  createOrphanage: {
    width: 54,
    height: 54,
    backgroundColor: '#12c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OrphanagesMap;
