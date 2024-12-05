import React, { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Box, Divider, HStack, Slider, Button, Input } from 'native-base';
import { UserContext } from '../contexts/UserContext';
import { CustomImageBackground } from '../components/ImageBackground';

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const { goal, user, setGoal } = useContext(UserContext);

  const [weight, setWeight] = useState<number | string>(''); // Peso da pessoa
  const [waterAmount, setWaterAmount] = useState<number | null>(null); // Quantidade de água recomendada
  const [exercise, setExercise] = useState<boolean>(false); // Estado para saber se a pessoa faz exercício
  const background = require('../../assets/agua_fundo2.jpg');

  const calculateWaterIntake = () => {
    if (weight) {
      const weightValue = Number(weight);
      let water = (weightValue * 35) / 1000;
      if (exercise) {
        water += 0.5;
      }
      setWaterAmount(water);
    } else {
      setWaterAmount(null);
    }
  };

  return (
    <CustomImageBackground background={background}>
      <SafeAreaView style={styles.container}>
        {/* Avatar e nome */}
        <Avatar
          bg="blue.500"
          alignSelf="center"
          size="2xl"
          mt={50}
          justifyContent="center"
          source={{ uri: user?.photo || undefined }}
        >
          {user?.name?.substring(0, 1)}
        </Avatar>
        <Text style={styles.name}>{user?.name}</Text> {/* Nome diretamente abaixo do avatar */}

        <Divider my={20} />

        {/* Elementos na parte inferior */}
        <View style={styles.bottomSection}>
          {/* Peso e botão lado a lado */}
          <HStack space={4} alignItems="center" justifyContent="center" mt={4}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Informe seu peso</Text>
              <Input
                value={String(weight)}
                onChangeText={(value) => setWeight(value)}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
            <Button onPress={calculateWaterIntake} colorScheme="blue" style={styles.calculateButton}>
              Calcular
            </Button>
          </HStack>

          {/* Seleção de Exercício */}
          <HStack space={4} alignItems="center" justifyContent="center" mt={4}>
            <Text style={styles.exerciseText}>Você faz exercício regularmente?</Text>
            <Button
              onPress={() => setExercise(!exercise)}
              colorScheme={exercise ? 'green' : 'blue'}
              style={styles.exerciseButton}
            >
              {exercise ? 'Sim, faço' : 'Não, não faço'}
            </Button>
          </HStack>

          {/* Exibe o resultado do cálculo */}
          {waterAmount !== null && (
            <Text style={styles.result}>
              Quantidade recomendada de água por dia: {waterAmount.toFixed(2)} Litros
            </Text>
          )}

          {/* Meta de água */}
          <Text style={styles.label}>Meta de água diária</Text>
          <Text style={styles.goal}>{goal} ml</Text>

          <Box mx={50}>
            <Slider
              defaultValue={goal}
              value={goal}
              minValue={0}
              maxValue={4000}
              onChange={(value) => setGoal(value)}
              step={50}
            >
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </Box>
        </View>
      </SafeAreaView>
    </CustomImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
  },
  label: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  calculateButton: {
    height: 50,
    alignSelf: 'center',
  },
  exerciseText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  exerciseButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 8,
  },
  result: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 25,
    fontStyle: 'italic',
    color: '#444',
  },
  goal: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 15,
    color: '#000',
    fontWeight: '700',
  },
});
