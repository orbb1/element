import React from 'react';
import {
  AppRegistry,
  View,
  Plane,
  Sphere,
  Animated,
  Pano,
  asset,
  VrButton,
  Text
} from 'react-vr';

import CoreSphere from './components/core-sphere';
import Satellite from './components/satellite';
import TopHeader from './components/header-top.vr';
import Description from './components/description.vr';

export default class Element extends React.Component {

  render() {
    return (
      <View>
        <Pano source={asset('Venice360.jpeg')}/>
        <TopHeader/>
        <VrButton 
          style={{
            layoutOrigin: [0.05, 0],
            transform: [
              {translate: [0, 1.3, -4]}
            ]
          }} 
          onClick={() => {console.log('click')}}>
        <Text>Click me!</Text>
        </VrButton>
        <Description/>
        <View style={{
          layoutOrigin: [0.5, 0],
          transform: [
            {rotateY: 180},
            {translateY: 3}
          ]
        }}>
          <CoreSphere/>
          <Satellite/>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('element', () => Element);
