import React from 'react';
import {
  AppRegistry,
  View,
  Sphere,
  Animated
} from 'react-vr';

export default class Satellite extends React.Component {

  constructor() {
    super();

    this.state = { 
      sphereMoveX: new Animated.Value(2),
      sphereMoveZ: new Animated.Value(-5)
    }
  }

  render() {
    return (
      <Animated.View style={{
        transform: [
          {translateX: this.state.sphereMoveX},
          {translateY: 0},
          {translateZ: this.state.sphereMoveZ}
        ]
      }}>
        <Sphere
          radius={0.2}
          widthSegments={20}
          heightSegments={12}
          style={{
            color: 'blue'
          }}
        />
      </Animated.View>
    )
  }

  animateSphere() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.sphereMoveX,
          {
            toValue: -2,
            duration: 4000
          }
        ),
        Animated.sequence([
          Animated.timing(
            this.state.sphereMoveZ,
            {
              toValue: -7,
              duration: 2000
            }
          ),
          Animated.timing(
            this.state.sphereMoveZ,
            {
              toValue: -5,
              duration: 2000
            }
          )
        ])
      ]),
      Animated.parallel([
        Animated.timing(
          this.state.sphereMoveX,
          {
            toValue: 2,
            duration: 4000
          }
        ),
        Animated.sequence([
          Animated.timing(
            this.state.sphereMoveZ,
            {
              toValue: -3,
              duration: 2000
            }
          ),
          Animated.timing(
            this.state.sphereMoveZ,
            {
              toValue: -5,
              duration: 2000
            }
          )
        ])
      ])
    ]).start(() => this.animateSphere())
  }

  componentDidMount() {
    this.animateSphere();
  }
}