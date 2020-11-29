import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from './Themed';

// https://reactjs.org/docs/state-and-lifecycle.html

// just as they want it ES6 class
// extend React.Component
// use this.props
// single render class
export default class ClockSimple extends React.Component {
    constructor(props) {
        super(props);  // calls the "upchain" constructor with props as argument
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
                1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {    this.setState({      date: new Date()    });  }
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>It is {this.state.date.toLocaleTimeString()}.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        fontWeight: 'bold',
    },
})
