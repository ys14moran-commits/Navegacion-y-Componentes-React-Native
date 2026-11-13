
import { View, Text, StyleSheet } from 'react-native';

interface TarjetaExperienciaProps {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: TarjetaExperienciaProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.cargo}>{cargo}</Text>

      <Text style={styles.empresa}>{empresa}</Text>

      <Text style={styles.periodo}>{periodo}</Text>

      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  cargo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6C3B9A',
  },
  empresa: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginTop: 8,
  },
  periodo: {
    fontSize: 13,
    color: '#777777',
    marginTop: 5,
  },
  descripcion: {
    fontSize: 14,
    color: '#555555',
    marginTop: 10,
    lineHeight: 21,
  },
});
