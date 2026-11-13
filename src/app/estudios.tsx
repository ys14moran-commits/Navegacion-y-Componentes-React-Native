
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Mi formación académica</Text>

        <Text style={styles.subtitulo}>
          Estos son mis estudios y procesos de formación.
        </Text>

        <TarjetaEstudio
          titulo="Técnico en Análisis y Desarrollo de Software"
          institucion="Servicio Nacional de Aprendizaje - SENA"
          periodo="2026 - En formación"
          enCurso={true}
        />

        <TarjetaEstudio
          titulo="Formación académica anterior"
          institucion="Nombre de la institución"
          periodo="Año de inicio - Año de finalización"
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Educación complementaria"
          institucion="Nombre de la institución"
          periodo="Año de realización"
          enCurso={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F4F2F7',
  },
  contenido: {
    padding: 20,
    paddingTop: 35,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#25212B',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: '#77717F',
    marginBottom: 20,
  },
});
