import React from 'react';
import {
    StyleSheet, 
    View, 
    TouchableOpacity,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

type TProps = {
    imagesLength: number;
    index: number;
};

const Component: React.FC<TProps> = ({ imagesLength, index }) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <TouchableOpacity>
                <Icon name="heart" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="message-circle" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="send" size={24} />
            </TouchableOpacity>
        </View>
        <View style={styles.dotContainer}>
            {Array.from(Array(imagesLength+1).keys()).map((item: number, i: number) => (
                <FontAwesomeIcon 
                    solid 
                    key={i}
                    color={item === index ? '#0095f6' : '#a8a8a8'}
                    name="circle" 
                    size={6} 
                />
            ))}
        </View>
        <View style={styles.iconContainer}>
            <TouchableOpacity>
                <Icon name="bookmark" size={22} />
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
        marginTop: 4
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    dotContainer: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row' 
    }
});

export default Component;