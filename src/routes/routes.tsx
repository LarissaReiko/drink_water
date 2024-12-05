import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { DashboardScreen } from '../screens/DashboardScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { CustomImageBackground } from '../components/ImageBackground'; // Certifique-se de importar o CustomImageBackground
import { useState } from 'react';

type ITabRoutes = {
    Settings: undefined;
    Home: undefined;
    Profile: undefined;
    Calendario: undefined;
}

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

export const Routes: React.FunctionComponent = () => {
    const background = require('../../assets/agua_fundo2.jpg'); // Caminho da imagem

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    options={{
                        title: 'Inicio',
                        tabBarIcon: () => <Icon name="home" size={20} color="black" />
                    }}>
                    {() => (
                        <CustomImageBackground background={background}>
                            <DashboardScreen />
                        </CustomImageBackground>
                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="Settings"
                    options={{
                        title: 'Configurações',
                        tabBarIcon: () => <Icon name="setting" size={20} color="black" />
                    }}>
                    {() => (
                        <CustomImageBackground background={background}>
                            <SettingsScreen />
                        </CustomImageBackground>
                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="Profile"
                    options={{
                        title: 'Perfil',
                        tabBarIcon: () => <Icon name="user" size={20} color="black" />
                    }}>
                    {() => (
                        <CustomImageBackground background={background}>
                            <ProfileScreen />
                        </CustomImageBackground>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
