
import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface MiBotonProps {
  titulo: string;
  url: string;
  icono: keyof typeof Ionicons.glyphMap;
}

export default function MiBoton({
  titulo,
  url,
  icono,
}: MiBotonProps) {
  const abrirEnlace = async () => {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert(
        'No se pudo abrir',
        'No fue posible abrir esta opción en tu dispositivo.'
      );
    }
  };

  return (
    <Pressable
      style={styles.boton}
      onPress={abrirEnlace}
    >
      <Ionicons name={icono} size={21} color="#FFFFFF" />
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#6C3B9A',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 6,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
