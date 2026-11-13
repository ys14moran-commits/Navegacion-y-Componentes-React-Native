
import { View, Text, StyleSheet } from 'react-native';

interface TarjetaEstudioProps {
  titulo: string;
  institucion: string;
  periodo: string;
  enCurso?: boolean;
}

export default function TarjetaEstudio({
  titulo,
  institucion,
  periodo,
  enCurso = false,
}: TarjetaEstudioProps) {
  return (
    <View style={styles.tarjeta}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>{titulo}</Text>

        {enCurso && (
          <View style={styles.etiqueta}>
            <Text style={styles.textoEtiqueta}>En curso</Text>
          </View>
        )}
      </View>

      <Text style={styles.institucion}>{institucion}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
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
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#242424',
    flex: 1,
  },
  institucion: {
    fontSize: 15,
    color: '#555555',
    marginTop: 8,
  },
  periodo: {
    fontSize: 13,
    color: '#777777',
    marginTop: 5,
  },
  etiqueta: {
    backgroundColor: '#6C3B9A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  textoEtiqueta: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
