import React from 'react';
import {
  AppRegistry,
  View,
  Plane,
  Sphere,
  Animated
} from 'react-vr';

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
      </View>
    );
  }
};

AppRegistry.registerComponent('element', () => element);
