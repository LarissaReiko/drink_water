import { SafeAreaView } from 'react-native';
import React, { useState, useContext } from 'react';
import { Text } from 'react-native';
import { Avatar, Box, Divider, HStack, Slider, Button, Input } from 'native-base';
import { UserContext } from '../contexts/UserContext';

interface ProfileScreenProps {}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  const { goal, user, setGoal, setUser } = useContext(UserContext);

  const [weight, setWeight] = useState<number | string>(''); // Peso da pessoa
  const [waterAmount, setWaterAmount] = useState<number | null>(null); // Quantidade de água recomendada
  const [exercise, setExercise] = useState<boolean>(false); // Estado para saber se a pessoa faz exercício

  // Função para calcular a quantidade de água
  const calculateWaterIntake = () => {
    if (weight) {
      const weightValue = Number(weight); // Converte o peso para número
      let water = weightValue * 35 / 1000; // Fórmula simples: 35ml de água por kg de peso

      if (exercise) {
        water += 0.5; // Se a pessoa faz exercício, adicionar 500ml (0.5 litros)
      }

      setWaterAmount(water); // Define a quantidade recomendada
    } else {
      setWaterAmount(null); // Se o peso não for informado, reseta o cálculo
    }
  };

  return (
    <SafeAreaView>
      {/* Avatar e nome do usuário */}
      <Avatar bg="purple.500" alignSelf="center" size="2xl" mt={20} justifyContent="center" source={{ uri: user?.photo || undefined }}>
        {user?.name.substring(0, 1)}
      </Avatar>
      <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 25 }}>
        {user?.name}
      </Text>

      <Divider my={20} />

     
      {/* Peso */}
      <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 25 }}>Peso (kg)</Text>
      <Input
        value={String(weight)}
        onChangeText={(value) => setWeight(value)}
        placeholder="Digite seu peso"
        keyboardType="numeric"
        style={{ marginBottom: 20 }}
      />

      {/* Seleção de Exercício */}
      <HStack space={4} alignItems="center" justifyContent="center">
        <Text >Você faz exercício?</Text>
        <Button onPress={() => setExercise(!exercise)}>
          {exercise ? 'Não faço exercício' : 'Faço exercício'}
        </Button>
      </HStack>

      {/* Botão para calcular a quantidade de água */}
      <Button onPress={calculateWaterIntake} mt={5} alignSelf="center">
        Calcular Quantidade de Água
      </Button>

      {/* Exibe o resultado do cálculo */}
      {waterAmount !== null && (
        <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 25 }}>
          Quantidade recomendada de água por dia: {waterAmount.toFixed(2)} Litros
        </Text>
      )}
       {/* Meta de água */}
       <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 25 }}>
        Meta de água
      </Text>
      <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 25 }}>
        {goal} ml
      </Text>

      <Box mx={50}>
        <Text>{JSON.stringify(goal)}</Text>
        <Slider
          defaultValue={goal}
          value={goal}
          minValue={0}
          maxValue={4000}
          onChange={(value) => setGoal(value)}
          step={100}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>

    </SafeAreaView>
  );
};
