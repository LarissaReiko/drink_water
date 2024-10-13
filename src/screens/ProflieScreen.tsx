import { SafeAreaView } from 'react-native';
import React, { useState, useContext } from 'react';
import { Text } from 'react-native'
import { Avatar, Box, Divider, HStack, Slider } from 'native-base';

import { UserContext } from '../contexts/UserContext';


interface ProfileScreenProps {
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({

}) => {
    const { goal, setGoal } = useContext(UserContext);


    return (
        <SafeAreaView>
            <Avatar bg="purple.600" alignSelf="center" size="2xl" mt={20} justifyContent="center" source={{
                uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            }}>
                RB
            </Avatar>
            <Text
                style={{
                    fontSize: 24,
                    textAlign: 'center',
                    marginTop: 25
                }}
            >
                Larissa Reiko
            </Text>

            <Divider my={20}  />


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
                    onChange={(value) => setGoal(value)}
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
