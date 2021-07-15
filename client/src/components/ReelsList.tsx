import React from 'react';
import { StyleSheet, View, Image, FlatList, Dimensions } from 'react-native';
import image from '../__mocks__/images';

type TProps = {};

const Component: React.FC<TProps> = () => {
    const [images, setImages] = React.useState(image);

    return (
        <React.Fragment>
            <View style={styles.container}>
                <FlatList
                    data={images}
                    keyExtractor={(img) => `${img.id}`}
                    horizontal={false}
                    numColumns={3}
                    renderItem={(img: any) => (
                        <Image 
                            source={{ uri: img.item.uri }}
                            style={{ 
                                width: Dimensions.get('window').width / 3, 
                                height: 125
                            }}
                        />
                    )}
                    
                />
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10
    },
    textBold: { color: '#444', fontWeight: 'bold' }
});

export default Component;