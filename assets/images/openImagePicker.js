import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const openImagePicker = () => {
    const [selectedImage, setSelectedImage] = useState('')
    const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
            setSelectedImage('User cancelled image picker');
        } else if (response.error) {
            console.log('Image picker error: ', response.error);
            setSelectedImage(response.error);
        } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
        }
        return selectedImage;
    });
};

export default openImagePicker();
