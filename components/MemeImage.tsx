import React from 'react';

import { Image, StyleSheet } from 'react-native';
import { Text, View } from './Themed';

import logo from '../assets/images/hi_hide.jpg';

export default class MemeImage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {rotated: 0}
    }
    render () {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    logo: {
        width: 305, height: 109,
        overflow: 'hidden',
        marginBottom: 10,
        transform: [{translateX: -5}],
    },
})
