import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Input, Text, VStack } from "native-base";
import { CustomImageBackground } from "../components/ImageBackground";

interface SettingsScreensProps { }

export const SettingsScreen: React.FC<SettingsScreensProps> = ({ }) => {

    const { user, setUser } = useContext(UserContext);
    const background = require('../../assets/agua_fundo2.jpg');

    return (
        <CustomImageBackground background={background}>
            <VStack space={4} pt={20} px={10}>
                {/* Texto acima do input */}
                <Text fontSize="md" fontWeight="bold">
                    Nome
                </Text>
                <Input
                    defaultValue={user?.name}
                    onChangeText={(value) => {

                        setUser({
                            name: value,
                            photo: String(user?.photo),
                            age: 0
                        });
                    }}
                    placeholder="Seu nome"
                />

                <Text fontSize="md" fontWeight="bold">
                    Idade
                </Text>

                <Input
                    defaultValue={user?.age !== undefined ? String(user.age) : ""} 
                    onChangeText={(value) => {
                        setUser({
                            name: user?.name || "", 
                            photo: user?.photo || "", 
                            age: Number(value) || 0, 
                        });
                    }}
                    placeholder="Sua idade"
                    keyboardType="numeric"
                />

            </VStack>
        </CustomImageBackground>

    );
};