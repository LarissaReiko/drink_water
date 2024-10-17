import { SafeAreaView } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Text } from 'react-native'
import { Avatar, Box, Divider, HStack, Slider, Button, Input } from 'native-base';
import { UserContext } from '../contexts/UserContext';
import { usePersistState } from '../hooks/usePersisteState';

interface ProfileScreenProps {
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
    

    const { goal, user, setGoal, setUser } = useContext(UserContext);
    const [ goal2, setGoal2] = usePersistState(2,'@goal2');

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

            <Input defaultValue={user?.name}
                onChangeText={(value) => {
                    setUser({
                        name: value,
                        photo: String(user?.photo),
                    });
                }}
                placeholder="Default Input" />



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

            <Text style={{
                fontSize: 24,
                textAlign: 'center',
                
            }}>
                Goal2{goal2}ml
            </Text>
            <Button
                onPress={()=>{
                    setGoal2(Number(goal)+1)
                }}>
                    set Goal2
            </Button>

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
