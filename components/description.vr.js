import React from 'react';
import {
  View,
  Text
} from 'react-vr';

export default class Description extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
        <Text style={{
            color: '#000',
            fontSize: 0.3,
            layoutOrigin: [0.5, 0],
            paddingVertical: 0.1,
            paddingHorizontal: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
                {translateX: 0}, 
                {translateY: 0}, 
                {translateZ: -5}
            ],
            backgroundColor: '#fff'
        }}>Visit Venice or die in pain!</Text>
      </View>
    )
  }
}