
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import { View, Text, StyleSheet } from 'react-native';
import { DashboardScreen } from '../screens/DashboardScreen';
import { ProfileScreen } from '../screens/ProflieScreen';
import { useState } from 'react';
//import { Screen } from 'react-native-screens';

type ITabRoutes ={
    Settings: undefined;
    Home: undefined;
    Profile: undefined;
}

const Tab = createMaterialBottomTabNavigator <ITabRoutes>();


interface Imytabs {

}

export const Routes: React.FunctionComponent<Imytabs> = props => {
    
    
        const [goal , setGoal] = useState<number>(1000);
    return (

        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen name="Home" component={DashboardScreen} options={{ title: 'Inicio', tabBarIcon: () => <Icon name="home" size={20} color="black" /> }} />
                <Tab.Screen name="Settings" component={Screen} options={{ title: 'Configurações', tabBarIcon: () => <Icon name="setting" size={20} color="black" /> }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil', tabBarIcon: () => <Icon name="user" size={20} color="black" /> }} />

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
