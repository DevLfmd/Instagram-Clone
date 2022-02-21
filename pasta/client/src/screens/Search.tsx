import React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchTabs from '../components/SearchTabs';
import Reels from '../components/ReelsList';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Search() {
    const [searchTab, setSearchTab] = React.useState<boolean>(false);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                {searchTab === true ? (
                    <TouchableOpacity onPress={() => setSearchTab(false)}>
                        <Icon size={22} style={styles.searchIcon} name="arrow-left" />
                    </TouchableOpacity>
                ) : (<></>)}
                <View style={styles.searchInput}>
                    {searchTab === false ? (
                        <Icon size={15} style={styles.searchIcon} name="search" />
                    ) : (<></>)}
                    <TextInput 
                        placeholder="Pesquisar"
                        style={styles.input}
                        keyboardType="default"
                        autoFocus={false}
                        value={''}
                        onChangeText={(search: string) => null}
                        onSubmitEditing={() => null}
                        onPressIn={() => setSearchTab(true)}
                    />
                </View>
            </View>
            {searchTab === true ? (<SearchTabs />) : (<Reels />)}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 100 + '%',
        height: 40,
        marginTop: 10,
        marginBottom: 10
    },
    searchInput: { 
        backgroundColor: '#dbdbdb42', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        borderRadius: 8,
        height: 40,
        width: 90 + '%',
    },
    searchIcon: { marginLeft: 15, marginRight: 15 },
    input: {
        paddingLeft: 8
    },
});