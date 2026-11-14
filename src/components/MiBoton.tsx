
import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

interface MiBotonProps {
  titulo: string;
  url: string;
}

export default function MiBoton({ titulo, url }: MiBotonProps) {
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
    marginVertical: 6,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
