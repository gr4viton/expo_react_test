import * as React from 'react';

import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../assets/images/hi_hide.jpg';
import img_blank from '../assets/images/hi_hide.jpg';

import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import ToggleButton from '../components/toggle_button';


import { Gyroscope } from 'expo-sensors';

export default function TabOneScreen() {  
    // App function - called by default
    // returns the html constructed by react elements?
    // went through expo docs

    const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if (pickerResult.cancelled === true) {
            alert("Are you scared to click a foo bar image?");

            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    let openShareDialogAsync = async () => {
        if (!(await Sharing.isAvailableAsync())) {
            alert(`Uh oh, sharing isn't available on your platform`);
            return;
        };


        await Sharing.shareAsync(selectedImage.localUri);
    };

    // var selected_image_uri = 

    return (
        <View style={styles.container}>


        {/* img selector */}
        <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button2}>
        <Text style={styles.buttonText}>IMAGE DESTRUCTION</Text>
        </TouchableOpacity>

        {/* selected one */}

        {
            selectedImage !== null
                ? <Image source={{uri: selectedImage.localUri }} style={styles.thumbnail} />
                : <Image source={logo} style={styles.thumbnail} />
        }

        {/* 
            <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} /> 
        */}
        {/* nullator */}
        <TouchableOpacity
        onPress={() => setSelectedImage(null)}
        style={styles.button}>
        <Text style={styles.buttonText}>NULL IT!</Text>
        </TouchableOpacity>

        {/* clickbait */}
        <TouchableOpacity
        onPress={() => alert('I am NOT YOUR PAL, BODY!')}
        style={styles.button}>
        <Text style={styles.buttonText}>CLICK ON ME PAL!</Text>
        </TouchableOpacity>

        {/* harold */}
        <Image source={logo} style={styles.logo} />

        <ToggleButton/>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 5,
        width: '10%',
    },
    logo: {
        width: 305, height: 109,
        overflow: 'hidden',
        marginBottom: 10,
        transform: [{translateX: -5}, {rotate: '2deg'}],
    },
    button: { backgroundColor: 'green' },
    button2: { backgroundColor: 'blue' },
    buttonText: { fontSize: 22, color: '#acdc42' },
    thumbnail: {
        width: 142,
        height: 42,
        overflow: 'hidden',
        /* resizeMode: "contain" */
    }
});
