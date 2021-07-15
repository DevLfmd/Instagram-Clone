import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { 
    StyleSheet, 
    View, 
    Platform, 
    TouchableOpacity, 
    Text,
    FlatList,
    SafeAreaView
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import likes from '../__mocks__/likes';

export function Likes() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.rowContainer}>
                <TouchableOpacity style={{ marginRight: 15 }}>
                    <Icon name="arrow-back" size={25} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Atividade</Text>
            </View>
            <View style={styles.likesContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 20 }}>
                    Este mês
                </Text>
                <FlatList 
                    data={likes}
                    renderItem={({ item }) => (
                        <View key={item.id} style={styles.likeItem}>
                            <Avatar key={item.id}
                                size='small'
                                rounded
                                source={{ uri: item.user.uri }}
                                avatarStyle={styles.avatar}
                            />
                            <Text style={{ maxWidth: 250 }}> 
                                <Text style={{ fontWeight: 'bold' }}>{ item.user.name }</Text> começou a seguir você. <Text style={{ color: 'gray' }}>12 horas</Text>
                            </Text>
                            <Button
                                title="Mensagem"
                                type="outline"
                                titleStyle={{ fontSize: 12, fontWeight: 'bold', color: '#000' }}
                                buttonStyle={{ borderColor: '#000', height: 35 }}
                            />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 8,
        flex: 1,
        backgroundColor: '#FFF'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    likesContainer: {
        marginTop: 20,
        flex: 1
    },
    likeItem: { 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        margin: 5 
    },
    avatar: { 
        width: 100 + '%', 
        height: 100 + '%', 
        borderRadius: 500, 
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#FFFF',
    }
});
