import React from 'react';
import {
  AppRegistry,
  View,
  Plane,
  Sphere,
  Animated,
  Pano,
  asset
} from 'react-vr';

import CoreSphere from './components/core-sphere';
import Satellite from './components/satellite';
import TopHeader from './components/header-top.vr';

export default class Element extends React.Component {

  render() {
    return (
      <View>
        <Pano source={asset('Venice360.jpeg')}/>
        <TopHeader/>
        <View style={{
          layoutOrigin: [0.5, 0]
        }}>
          <CoreSphere/>
          <Satellite/>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('element', () => Element);
