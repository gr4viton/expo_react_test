import React from 'react';

import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';

import logo from '../assets/images/hi_hide.jpg';

export default class MemeImage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {rotated: 0}
        this.handleClick = this.handleClick.bind(this);
    }
        


    handleClick() {
        this.setState(state => ({
            rotated: state.rotated + 5
        }));
    }
    render () {

        //when state changes the width changes
        // from https://stackoverflow.com/a/37831144
        const img_style = {
            transform: [{translateX: this.state.rotated}]
        }

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={ this.handleClick }>
                    <Image 
                        source={logo} 
                        style={img_style}
                    />
                    <Text>{this.state.rotated}deg</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


        /* transform: [{translateX: -5}], */
const styles = StyleSheet.create({
    logo: {
        width: 305, height: 109,
        overflow: 'hidden',
        marginBottom: 10,
    },
})
