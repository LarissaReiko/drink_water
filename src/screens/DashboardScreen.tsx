import React, { useContext, useEffect, useState } from 'react';
import { Text, HStack, Button, VStack, Box } from 'native-base';
import { useToast } from 'native-base'
import { UserContext } from '../contexts/UserContext';
import { usePersistState } from '../hooks/usePersisteState';

interface IDashboardProps {

}

export const DashboardScreen: React.FC<IDashboardProps> = () => {
    const { goal } = useContext(UserContext);
    const [cupSize, setcupSize] = useState<number>(200);
    const [water, setWater] = usePersistState<number>(0, 'water');
    const toast = useToast();

    const handleWater = () => {
        setWater(water + cupSize);
        toast.show({
            description: `Você bebeu ${cupSize} de água`
        })
    }

    const handleChangeCupSize = (size: number) => {
        setcupSize(size)
    }

    useEffect(() => {
        if (water >= goal) {
            toast.show({
                description: "Você bateu sua meta",
                placement: 'top'
            })
        }
    }, [water]);

    return (
        <>
            <VStack flex={1}
                width='100%'
                justifyContent="space-between"
                alignItems={'center'}
                mt={10}>

                <Text fontSize="sm">

                    {'  '}Copo de {cupSize}ml
                </Text>

                <VStack space="5">
                    <HStack alignItems="center" justifyContent="center">
                        <Text fontSize="6xl">
                            {water}
                        </Text>
                        <Text fontSize="xl">
                            {'  '}/ {goal}
                        </Text>
                    </HStack>

                    
                </VStack>

                <Button
                    mt={5} colorScheme="primary" onPress={handleWater }>
                    Beber água
                </Button>

                <Box mb={10}>
                    <Button.Group >
                        <Button width={120} onPress={() => handleChangeCupSize(200)} colorScheme="teal">200ml</Button>
                        <Button width={120} onPress={() => handleChangeCupSize(300)} colorScheme="teal">300ml</Button>
                        <Button width={120} onPress={() => handleChangeCupSize(400)} colorScheme="teal">400ml</Button>
                    </Button.Group>
                </Box>

            </VStack>

        </>
    );
};