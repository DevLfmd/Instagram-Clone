import React from 'react';
import { StyleSheet, Dimensions, View, FlatList, Image } from 'react-native';
import images from '../__mocks__/images';

type TProps = {};

const Component: React.FC<TProps> = () => (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: Dimensions.get('window').width }}>
        {images.map((img: any) => (
            <Image 
                key={img.id}
                source={{ uri: img.uri }}
                style={{ 
                    width: Dimensions.get('window').width / 3, 
                    height: 125
                }}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    textBold: { color: '#444', fontWeight: 'bold' }
});

export default Component;