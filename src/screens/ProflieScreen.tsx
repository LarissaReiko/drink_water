import { SafeAreaView } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Text } from 'react-native'
import { Avatar, Box, Divider, HStack, Slider, Button } from 'native-base';

import { UserContext } from '../contexts/UserContext';


interface ProfileScreenProps {
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({

}) => {
    //const [local, setLocal] = useState<number>(9999); (ele excluiu)
    const { goal, storeData, user, getData } = useContext(UserContext);

    

    return (
        <SafeAreaView>
            <Avatar bg="purple.500" alignSelf="center" size="2xl" mt={20} justifyContent="center" source={{
                uri: user?.photo || undefined
            }}>
                {user?.name.substring(0, 1)} 

            </Avatar>
            <Text
                style={{
                    fontSize: 24,
                    textAlign: 'center',
                    marginTop: 25
                }}
            >
                {user?.name}
            </Text>

            <Divider my={20} />


            <Text style={{
                fontSize: 24,
                textAlign: 'center',
                marginTop: 25
            }}>
                Meta de água
            </Text>

            <Text style={{
                fontSize: 24,
                textAlign: 'center',
                marginTop: 25
            }}>
                {goal}ml
            </Text>

            <Box mx={50}>
                <Text>
                    {JSON.stringify(goal)}
                </Text>
                <Slider
                    defaultValue={goal}
                    value={goal}
                    minValue={0}
                    maxValue={4000}
                    onChange={(value) => storeData(value)}
                    step={100}>

                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>

            </Box>
        </SafeAreaView >
    );
};
