import React from 'react';
import { useRedux } from '../hooks/useRedux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import { StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Host } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';
import { TRoute } from '../types';

import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Feed } from '../screens/Feed';
import { Search } from '../screens/Search';
import { Login } from '../screens/Login';
import { AddPost } from '../screens/AddPost';
import { Likes } from '../screens/Likes';
import { Profile } from '../screens/Profile';

const routes: TRoute[] = [
    {
        name: 'Feed',
        Component: Feed,
        navigationOptions: {
            title: '',
            icon: 'home'
        }
    },
    {
        name: 'Search',
        Component: Search,
        navigationOptions: {
            title: '',
            icon: 'search'
        }
    },
    {
        name: 'AddPost',
        Component: Feed,
        navigationOptions: {
            title: '',
            icon: 'duplicate'
        }
    },
    {
        name: 'Likes',
        Component: Likes,
        navigationOptions: {
            title: '',
            icon: 'heart'
        }
    },
    {
        name: 'Profile',
        Component: Profile,
        navigationOptions: {
            title: '',
            icon: ''
        }
    },
];

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigator = () => {
    const [currentRoute, setCurrentRoute] = React.useState<string>('Feed');
    const modalizeRef = React.useRef<Modalize>(null);
    
    const { useAppSelector, useAppDispatch } = useRedux();
    const dispatch = useAppDispatch()
    const loggedIn = useAppSelector((state) => state.auth.loggedIn);

    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            {loggedIn === true ? (
                <Stack.Navigator initialRouteName="Login" headerMode="none">
                    <Stack.Screen 
                        name="Login" 
                        component={() => <Login />} 
                    />
                </Stack.Navigator>
            ) : (
                <Host>
                    <AddPost modalizeRef={modalizeRef} />
                    <Tab.Navigator initialRouteName="Feed" tabBarOptions={{ showLabel: false }}>
                        {routes.map(({ name, Component, navigationOptions }: TRoute) => (
                            <Tab.Screen 
                                key={name}
                                name={name}
                                component={Component}
                                listeners={({ navigation, route }: any) => ({
                                    tabPress: e => { 
                                        if(route.name !== 'AddPost')
                                            setCurrentRoute(route.name);
                                        else {
                                            e.preventDefault();
                                            modalizeRef.current?.open();
                                        };
                                    }
                                })}
                                options={{ 
                                    title: '',
                                    tabBarIcon: () => (
                                        (name !== 'Profile') ? (
                                            <Icon 
                                                name={currentRoute === name ? `${navigationOptions.icon}-sharp` : `${navigationOptions.icon}-outline`}
                                                size={24} 
                                                color="#262626"
                                            />
                                        ) : (
                                            <Avatar 
                                                size='small'
                                                rounded
                                                avatarStyle={currentRoute === name ? styles.avatarActive : styles.avatar}
                                                source={{ uri: 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1' }}
                                            />
                                        )
                                    )
                                }}
                            />
                        ))}
                    </Tab.Navigator>
                </Host>
            )}
        </NavigationContainer>
    );
};
const styles = StyleSheet.create({
    avatar: {
        width: 100 + '%',
        height: 100 + '%',
        borderRadius: 100,
    },
    avatarActive: {
        width: 100 + '%',
        height: 100 + '%',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'black'
    }
});

export default Navigator;