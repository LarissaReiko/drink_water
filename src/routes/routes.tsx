
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import { View, Text, StyleSheet, Settings } from 'react-native';
import { DashboardScreen } from '../screens/DashboardScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
//import { CalendarScreen } from '../screens/CalendarScreen';
import { useState } from 'react';

type ITabRoutes ={
    Settings: undefined;
    Home: undefined;
    Profile: undefined;
    Calendario: undefined; 
}

const Tab = createMaterialBottomTabNavigator <ITabRoutes>();


interface Imytabs {

}

export const Routes: React.FunctionComponent<Imytabs> = props => {
    
    
    return (

        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen name="Home" component={DashboardScreen} options={{ title: 'Inicio', tabBarIcon: () => <Icon name="home" size={20} color="black" /> }} />
                <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configurações', tabBarIcon: () => <Icon name="setting" size={20} color="black" /> }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil', tabBarIcon: () => <Icon name="user" size={20} color="black" /> }} />
                {/*<Tab.Screen name="Calendario" component={CalendarScreen} options={{ title: 'Calendar', tabBarIcon: () => <Icon name="Calendar" size={20} color="black" /> }} />
*/}
            </Tab.Navigator>
        </NavigationContainer>
    );
}


const Screen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                 Tela 2

            </Text>
        </View>
    )
}
