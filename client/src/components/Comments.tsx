import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TComment } from '../types';

type TProps = {
    comments: TComment[];
};

const Component: React.FC<TProps> = ({ comments }) => (
    <View style={styles.container}>
        <Text style={styles.seeAllComments}>Ver todos os 11 comentários </Text>
        {comments.map((item: TComment, i: number) => (
            <View style={styles.commentContainer} key={i}>
                <Text style={styles.nickname}>{item.nickname} </Text>
                <Text style={styles.comment}>{item.comment}</Text>
            </View>
        ))}
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 4
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    nickname: {
        fontWeight: 'bold',
        color: '#444'
    },
    seeAllComments: {
        color: '#80808091'
    },
    comment: {
        color: '#555'
    },
});

export default Component;