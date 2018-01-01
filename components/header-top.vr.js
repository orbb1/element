import React from 'react';
import {
  View,
  Text,
  Animated
} from 'react-vr';

export default class TopHeader extends React.Component {
  constructor() {
    super()

    this.state = {
      textPosition: new Animated.Value(1.8)
    }
  }

  render() {
    return (
      <View>
        <Animated.Text style={{
            color: '#000',
            fontSize: 0.5,
            layoutOrigin: [0.5, 0],
            paddingVertical: 0.1,
            paddingHorizontal: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
                {translateX: 0}, 
                {translateY: this.state.textPosition}, 
                {translateZ: -5}
            ],
            backgroundColor: '#fff'
        }}>Visit Venice</Animated.Text>
      </View>
    )
  }

  componentDidMount() {
    this.state.textPosition.setValue(2.5);
    Animated.spring(
      this.state.textPosition,
      {
        toValue: 1.8,
        friction: 1,
      }
    ).start();
  }
}