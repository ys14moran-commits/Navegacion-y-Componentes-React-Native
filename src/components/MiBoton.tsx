
import { Alert, Pressable, StyleSheet, Text } from 'react-native';

interface MiBotonProps {
  titulo: string;
  mensaje: string;
}

export default function MiBoton({ titulo, mensaje }: MiBotonProps) {
  const mostrarMensaje = () => {
    Alert.alert(titulo, mensaje);
  };

  return (
    <Pressable
      style={styles.boton}
      onPress={mostrarMensaje}
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
