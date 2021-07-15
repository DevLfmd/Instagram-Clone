import React from 'react';
import {
    StyleSheet, 
    Dimensions, 
    Image
} from 'react-native';

type TProps = {
    img: { uri: string };
};

const Component: React.FC<TProps> = ({ img }) => (
    <React.Fragment>
        <Image 
            source={ img } 
            style={styles.image} 
        />
    </React.Fragment>
);

const styles = StyleSheet.create({
    image: {
        padding: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height /3,
    },
});

export default Component;