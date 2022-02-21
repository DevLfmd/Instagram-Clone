import React from 'react';
import {
    StyleSheet,
    View,
    Platform,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

type TProps = {};

const Component: React.FC<TProps> = () => (
    <View style={styles.container}>
        <View style={styles.rowContainer}>
            <Image 
                source={require('../assets/imgs/icon.png')} 
                style={styles.image} 
            />
            <View style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity style={{ marginRight: 15 }}>
                    <Icon name="send" size={25} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: Dimensions.get('window').width - 15
    },
    image: {
        height: 32,
        width: 128,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    }
});

export default Component;