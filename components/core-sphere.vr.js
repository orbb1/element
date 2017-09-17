import React from 'react';
import {
  AppRegistry,
  View,
  Sphere
} from 'react-vr';

export const CoreSphere = () => {

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