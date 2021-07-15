import React from 'react';
import {
    StyleSheet, 
    Dimensions, 
    Image,
    FlatList,
    Text,
    View
} from 'react-native';
import PostBottomOptions from './PostBottomOptions';

import { TImageCarousel } from '../types/index';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Component: React.FC<TImageCarousel> = ({ images }) => {
    const [index, setIndex] = React.useState<number>(0);

    const onScroll = React.useCallback((event:any) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        setIndex(roundIndex);
    }, []);

    return (
        <React.Fragment>
            <Text style={styles.paginatorTxt}>{index + 1} / {images.length}</Text>
            <FlatList
                data={images}
                keyExtractor={(img) => `${img.id}`}
                style={{ marginTop: -30 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}  
                onScroll={onScroll}        
                renderItem={(img) => (
                    <Image
                        key={img.item.id}
                        source={{ uri: img.item.uri }} 
                        style={styles.image} 
                    />
                )}
            />
            <PostBottomOptions 
                index={index}
                imagesLength={images.length-1}
            />
        </React.Fragment>
);
}
const styles = StyleSheet.create({
    image: {
        padding: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height /3,
    },
    paginator: { 
        display: 'flex',
        alignContent: 'flex-end', 
    },
    paginatorTxt: { 
        backgroundColor: '#2a2b2d', 
        color: '#FFF', 
        borderRadius: 12, 
        padding: 4, 
        fontSize: 12,
        width: 45,
        zIndex: 999,
        alignSelf: 'flex-end',
        marginRight: 2
    }
});

export default Component;