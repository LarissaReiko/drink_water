import React from 'react';
import { StyleSheet, ImageBackground, View, StyleProp, ViewStyle } from 'react-native';

interface ImageBackgroundProps {
  children: React.ReactNode; // Conteúdo a ser renderizado dentro do fundo
  background: any; // Caminho da imagem de fundo (require ou URI)
  style?: StyleProp<ViewStyle>; // Estilos opcionais para o container
}

export const CustomImageBackground: React.FC<ImageBackgroundProps> = ({
  children,
  background,
  style,
}) => {
  return (
    <ImageBackground source={background} style={[styles.background, style]} resizeMode="cover">
      <View style={styles.overlay} />
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%', // A largura vai ocupar 100% da tela
    height: '120%', // A altura vai ocupar 100% da tela
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Adiciona um filtro escuro opcional (opacidade ajustável)
  },
  content: {
    flex: 1,
    padding: 20, // Padding interno para o conteúdo
  },
});
