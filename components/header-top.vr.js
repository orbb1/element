import React from 'react';
import {
  View,
  Text
} from 'react-vr';

export default class TopHeader extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
        <Text style={{
            color: '#000',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0],
            paddingVertical: 0.1,
            paddingHorizontal: 0.3,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
                {translate: [0, 2, -5]}
            ],
            backgroundColor: '#fff'
        }}>Visit Venice</Text>
      </View>
    )
  }
}