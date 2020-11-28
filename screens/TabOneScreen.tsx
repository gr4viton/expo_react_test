import * as React from 'react';

import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../assets/images/hi_hide.jpg';
import img_blank from '../assets/images/hi_hide.jpg';

import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { Gyroscope } from 'expo-sensors';

export default function TabOneScreen() {
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

    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
            <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
            <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
            <Text style={styles.buttonText}>Share this photo</Text>
            </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>

        <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button2}>
        <Text style={styles.buttonText}>IMAGE DESTRUCTION</Text>
        </TouchableOpacity>


        <TouchableOpacity
        onPress={() => alert('GOT YA PAL!')}
        style={styles.button}>
        <Text style={styles.buttonText}>click me!</Text>
        </TouchableOpacity>

        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>FOO</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo label="really the path is" path="/screens/TabOneScreen.tsx" />
        <Text>1AAAAAAfter TabOneScreen</Text>

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
        width: 305, height: 139,
        overflow: 'hidden',
        marginBottom: 10,
        transform: [{translateX: -5}, {rotate: '2deg'}],
    },
    button: { backgroundColor: 'green' },
    button2: { backgroundColor: 'gray' },
    buttonText: { fontSize: 42, color: '#acdc42' },
    thumbnail: {
        width: 42,
        height: 42,
        resizeMode: "contain"
    }
});
