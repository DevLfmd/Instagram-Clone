import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Tab } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import UserPhotos from '../components/UserPhotos';

type TProps = {
};

const Stack = createStackNavigator();

const Component: React.FC<TProps> = () => {
    const [activeTab, setActiveTab] = React.useState<number>(0);
    const navigation: any = React.useRef(null);
    return (
        <React.Fragment>
            <View style={styles.socialInfoContainer}>
                <Avatar
                    size='large'
                    rounded
                    source={{ uri: 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1' }}
                />
                <View style={styles.mediaInfo}>
                    <View style={styles.socialInfo}>
                        <Text style={styles.socialInfoCount}>0</Text>
                        <Text style={styles.socialInfoText}>Publicações</Text>
                    </View>
                    <View style={styles.socialInfo}>
                        <Text style={styles.socialInfoCount}>0</Text>
                        <Text style={styles.socialInfoText}>Seguidores</Text>
                    </View>
                    <View style={styles.socialInfo}>
                        <Text style={styles.socialInfoCount}>0</Text>
                        <Text style={styles.socialInfoText}>Seguindo</Text>
                    </View>
                </View>
            </View>
            <View style={styles.socialDescriptionContainer}>
                <Text style={styles.socialDescriptionText}>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                </Text>
                <Button titleStyle={{ color: '#000' }} buttonStyle={{ borderColor: '#000' }} type="outline" title="Editar perfil" />
            </View>
            <View style={styles.photoContainer}>
                <Tab value={activeTab} style={styles.tabStyle} indicatorStyle={styles.indicatorStyle}>
                    <Tab.Item 
                        containerStyle={styles.tabItemContainer} 
                        onPressIn={() => { 
                            setActiveTab(0); 
                            navigation.current?.navigate('Photos'); 
                        }}
                        titleStyle={styles.titleStyle}
                        iconPosition="bottom"
                        icon={<FontAwesomeIcon name="table" size={22} />}
                    />
                    <Tab.Item 
                        containerStyle={styles.tabItemContainer} 
                        onPressIn={() => { 
                            setActiveTab(1); 
                            navigation.current?.navigate('Marked'); 
                        }}
                        titleStyle={styles.titleStyle}
                        iconPosition="bottom"
                        icon={<FontAwesomeIcon name="user-circle" size={22} />}
                    />
                </Tab>
                <NavigationContainer ref={navigation} independent={true}>
                    <Stack.Navigator>
                        <Stack.Screen 
                            options={{ headerShown: false }} 
                            name="Photos" 
                            component={UserPhotos} 
                        />
                        <Stack.Screen 
                            options={{ headerShown: false }}
                            name="Marked" 
                            component={UserPhotos} 
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    socialInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    mediaInfo: {
        display: 'flex',
        flexDirection: 'row'
    },
    socialInfo: { 
        display: 'flex', 
        alignItems: 'center'
    },
    socialInfoCount: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginRight: 12 
    },
    socialInfoText: { 
        fontSize: 16, 
        marginRight: 12 
    },
    socialDescriptionContainer: {
        marginTop: 20,
        padding: 10
    },
    socialDescriptionText: {
        marginBottom: 12
    },
    photoContainer: {
        flex: 1,
        marginTop: 10
    },
    indicatorStyle: { backgroundColor: '#000' },
    tabStyle: { backgroundColor: '#FFF', height: 500 },
    tabItemContainer: { backgroundColor: '#FFF' },
    titleStyle: { 
        color: '#000',
        fontSize: 9,
        textAlign: 'left'
    },
});

export default Component;