import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Author from './Author';
import PostLikes from './PostLikes';
import Comments from './Comments';
import AddComment from './AddComment';
import ImageCarousel from './ImageCarousel';
import { TPost } from '../types';

const Component: React.FC<TPost> = ({ images }) => (
    <View style={styles.container}>
        <Author email="lfmd.1@outlook.com" nickname="Luiz Fernando" />
        <ImageCarousel images={images} />
        <PostLikes />
        <Comments comments={[
            { nickname: 'taok', comment: 'taokok' },
            { nickname: 'taok', comment: 'taokok' },
            { nickname: 'taok', comment: 'taokok' },
            { nickname: 'taok', comment: 'taokok' }
        ]} />
        <AddComment />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default Component;