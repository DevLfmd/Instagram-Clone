import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Tab, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type TProps = {};

const MainScreen = () => (
    <React.Fragment>
        <View style={styles.headerStyle}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Recentes </Text>
            <Button titleStyle={{ fontSize: 14 }} type="clear" title="Ver tudo" />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' }}>
        </View>
    </React.Fragment>
);

const AccountsScreen = () => (
    <React.Fragment>
        <View style={styles.headerStyle}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Recentes </Text>
            <Button titleStyle={{ fontSize: 14 }} type="clear" title="Ver tudo" />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' }}>
        </View>
    </React.Fragment>
);

const TagsScreen = () => (
    <React.Fragment>
        <View style={styles.headerStyle}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Recentes </Text>
            <Button titleStyle={{ fontSize: 14 }} type="clear" title="Ver tudo" />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' }}>
        </View>
    </React.Fragment>
);

const LocalsScreen = () => (
    <React.Fragment>
        <View style={styles.headerStyle}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Recentes </Text>
            <Button titleStyle={{ fontSize: 14 }} type="clear" title="Ver tudo" />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' }}>
        </View>
    </React.Fragment>
);

const Stack = createStackNavigator();

const Component: React.FC<TProps> = () => {
    const [activeTab, setActiveTab] = React.useState<number>(0);
    const navigation: any = React.useRef(null);
    return (
        <React.Fragment>
            <Tab value={activeTab} style={styles.tabStyle} indicatorStyle={styles.indicatorStyle}>
                <Tab.Item containerStyle={styles.tabItemContainer} onPressIn={() => { setActiveTab(0); navigation.current?.navigate('Main'); }} titleStyle={ styles.titleStyle } title="Principais" />
                <Tab.Item containerStyle={styles.tabItemContainer} onPressIn={() => { setActiveTab(1); navigation.current?.navigate('Accounts'); }} titleStyle={ styles.titleStyle } title="Contas" />
                <Tab.Item containerStyle={styles.tabItemContainer} onPressIn={() => { setActiveTab(2); navigation.current?.navigate('Tags'); }} titleStyle={ styles.titleStyle } title="Tags" />
                <Tab.Item containerStyle={styles.tabItemContainer} onPressIn={() => { setActiveTab(3); navigation.current?.navigate('Locals'); }} titleStyle={ styles.titleStyle } title="Locais" />
            </Tab>
            <NavigationContainer ref={navigation} independent={true}>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} name="Main" component={MainScreen} />
                    <Stack.Screen options={{ headerShown: false }} name="Accounts" component={AccountsScreen} />
                    <Stack.Screen options={{ headerShown: false }} name="Tags" component={TagsScreen} />
                    <Stack.Screen options={{ headerShown: false }} name="Locals" component={LocalsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    indicatorStyle: { backgroundColor: '#000' },
    tabStyle: { backgroundColor: '#FFF', height: 500 },
    titleStyle: { 
        color: '#000',
        fontSize: 9,
        textAlign: 'left'
    },
    tabItemContainer: { backgroundColor: '#FFF' },
    headerStyle: { 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF'
    }
});

export default Component;