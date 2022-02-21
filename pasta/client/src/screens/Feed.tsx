import React from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import { TPost } from '../types';
import Header from '../components/Header';
import Post from '../components/Post';
import Story from '../components/Story';
import storyes from '../__mocks__/images';
import post from '../__mocks__/post';

export function Feed() {
    const [defaultImages, setDefaultImages] = React.useState(storyes);
    const [posts, setPosts] = React.useState<TPost[]>(post);
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Story images={defaultImages} />
            <FlatList 
                data={posts}
                style={{ padding: 0, margin: 0}}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => <Post key={item.id} {...item} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});