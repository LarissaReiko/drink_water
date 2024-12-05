import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { DashboardScreen } from '../screens/DashboardScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

type ITabRoutes = {
    Settings: undefined;
    Home: undefined;
    Profile: undefined;
};

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

export const Routes: React.FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="home" size={20} color={color} />
                    ),
                    
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={DashboardScreen}
                    options={{
                        title: 'Início',
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" size={20} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: 'Configurações',
                        tabBarIcon: ({ color }) => (
                            <Icon name="setting" size={20} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: 'Perfil',
                        tabBarIcon: ({ color }) => (
                            <Icon name="user" size={20} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
