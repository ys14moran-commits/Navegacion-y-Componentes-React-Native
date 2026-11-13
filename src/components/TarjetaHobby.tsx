
import { Alert, Pressable, Text, StyleSheet } from 'react-native';

interface TarjetaHobbyProps {
  nombre: string;
  descripcion: string;
  detalle: string;
}

export default function TarjetaHobby({
  nombre,
  descripcion,
  detalle,
}: TarjetaHobbyProps) {
  const mostrarDetalle = () => {
    Alert.alert(nombre, detalle);
  };

  return (
    <Pressable
      style={styles.tarjeta}
      onPress={mostrarDetalle}
    >
      <Text style={styles.nombre}>{nombre}</Text>

      <Text style={styles.descripcion}>{descripcion}</Text>

      <Text style={styles.indicacion}>
        Toca para conocer más
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6C3B9A',
  },
  descripcion: {
    fontSize: 15,
    color: '#555555',
    marginTop: 8,
  },
  indicacion: {
    fontSize: 12,
    color: '#888888',
    marginTop: 12,
    fontStyle: 'italic',
  },
});
