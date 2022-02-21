import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

type TProps = {};

const Component: React.FC<TProps> = () => (
    <React.Fragment>
        <View style={styles.txtContainer}>
            <Text> 
                Curtido por
                <Text style={styles.textBold}> _paralyzer </Text>
                e
                <Text style={styles.textBold}> outras pessoas </Text>
            </Text>
        </View>
        <View style={styles.txtContainer}>
            <Text>
                <Text style={styles.textBold}> michaelangelobatioofficial &nbsp; </Text>
                Excerpt of "holy Diver!" See the full version on the GoDps Music Live app! 
            </Text>
        </View>
    </React.Fragment>
);

const styles = StyleSheet.create({
    txtContainer: { 
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 4,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start'
    },
    textBold: { color: '#444', fontWeight: 'bold' }
});

export default Component;