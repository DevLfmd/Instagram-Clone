import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import UserProfile from '../components/UserProfile';

export function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>_lfmd_ <FontAwesomeIcon name="chevron-down" /></Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 65 }}>
                        <FontAwesomeIcon style={styles.icon} name="plus-square" size={25} />
                        <FontAwesomeIcon style={styles.icon} name="bars" size={25} />
                    </View>
                </View>
                <View style={styles.userInfoContainer}>
                    <UserProfile />
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    headerContainer: { 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 10 
    },
    userInfoContainer: {
        flex: 1,
        padding: 0,
        marginTop: 10
    },
    button: { 
        width: 100 + '%', 
        padding: 12, 
        display: 'flex', 
        justifyContent: 'flex-start', 
        flexDirection: 'row'
    },
    icon: {}
});