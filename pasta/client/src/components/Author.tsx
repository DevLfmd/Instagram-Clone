import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

type TProps = {
    email: string;
    nickname: string;
};

const Component: React.FC<TProps> = ({ email, nickname }) => (
    <View style={styles.container}>
        <View style={styles.avatarContainer}>
            <Avatar 
                onPress={() => null}
                size='small'
                rounded
                avatarStyle={styles.avatar}
                source={{ uri: 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1' }}
            />
            <Text style={styles.nickname}>{nickname}</Text>
        </View>
        <TouchableOpacity>
            <Icon name="more-vertical" size={20} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        height: 64,
        padding: 4,
    },
    avatar: {
        width: 100 + '%',
        height: 100 + '%',
        borderRadius: 100,
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    nickname: {
        color: '#444',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default Component;