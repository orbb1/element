import React from 'react';
import {
  View,
  Sphere,
  Animated
} from 'react-vr';

export default class CoreSphere extends React.Component {
  constructor() {
    super()

    this.state = {color: 'red'};
  }

  render() {
    return (
      <View>
        <Sphere
          onEnter={() => this.setState({color: 'blue'})}
          onExit={() => this.setState({color: 'red'})}
          radius={1}
          widthSegments={20}
          heightSegments={12}
          style={{
            transform: [
              {translate: [0, 0, -5]}
            ],
            color: this.state.color
          }}
        />
      </View>
    )
  }
}