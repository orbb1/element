import React from 'react';
import {
  View,
  Sphere,
  Animated
} from 'react-vr';

export default class CoreSphere extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
        <Sphere
          radius={1}
          widthSegments={20}
          heightSegments={12}
          style={{
            transform: [
              {translate: [0, 1.5, -5]}
            ]
          }}
        />
      </View>
    )
  }
}