import React from 'react';
import {
  AppRegistry,
  View,
  Plane,
  Sphere,
  Animated
} from 'react-vr';

import {CoreSphere} from './components/core-sphere';
import Satellite from './components/satellite';

export default class element extends React.Component {

  render() {
    return (
      <View>
        <View>
          <Plane
            dimWidth={6}
            dimHeight={6}
            style={{
              transform: [
                  {translate: [0, -1, -4]},
                  {rotateX : -90}
                ],
              color: 'lightblue'
            }}
          />
        </View>
        <View>
          <CoreSphere/>
          <Satellite/>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('element', () => element);
