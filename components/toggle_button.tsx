import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';

export default class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);  }

        handleClick() {
            this.setState(state => ({
                isToggleOn: !state.isToggleOn
            }));
        }
        render() {
            return (
                <TouchableOpacity onPress={ this.handleClick }>
                <Text style={{ fontSize: 22 }}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
                </Text>
                </TouchableOpacity>
            );
        }
}
