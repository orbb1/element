import React from 'react';
import {
  AppRegistry,
  View,
  Sphere
} from 'react-vr';

export default class Satellite extends React.Component {

  render() {
    return (
      <View>
        <Sphere
          radius={0.2}
          widthSegments={20}
          heightSegments={12}
          style={{
            transform: [
              {translate: [2, 1.5, -5]}
            ]
          }}
        />
      </View>
    )
  }
}