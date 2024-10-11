import React, { useEffect, useState } from 'react';
import { Text, HStack, Button, VStack, Box } from 'native-base';
import { useToast } from 'native-base'




interface IDashboardProps {

}

export const Dashboard: React.FC<IDashboardProps> = () => {
    const [cupSize, setcupSize] = useState<number>(200);
    const [water, setWater] = useState<number>(0)
    const [goal, setGoal] = useState<number>(2000)
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
                    mt={5} colorScheme="primary" onPress={handleWater}>
                    Beber água
                </Button>

                <Box mt={10}>
                    <Button.Group >
                        <Button onPress={() => handleChangeCupSize(200)} colorScheme="teal">Copo americano</Button>
                        <Button onPress={() => handleChangeCupSize(300)} colorScheme="teal">Copo de 300ml</Button>
                        <Button onPress={() => handleChangeCupSize(400)} colorScheme="teal">Copo de 400ml</Button>
                    </Button.Group>
                </Box>

            </VStack>

        </>
    );
};