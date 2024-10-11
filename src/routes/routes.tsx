
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'native-base';
//import { Screen } from 'react-native-screens';

const Tab = createMaterialBottomTabNavigator();
const Screen = () => {
    return (
        <view>{/*style={(flex: 1, backgroundColor: 'red', justifyContent:'center', alignItems: 'center' )}*/} 
            <text>
                Screen111aaaaaaaaaaaaa
            </text>
        </view>
    )
}

export function MyTabs() {
    return (

        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Screen} />
                <Tab.Screen name="Settings" component={Screen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}