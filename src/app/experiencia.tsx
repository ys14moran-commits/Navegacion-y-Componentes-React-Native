
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Mi experiencia</Text>

        <Text style={styles.subtitulo}>
          Experiencias y actividades relacionadas con mi formación.
        </Text>

        <TarjetaExperiencia
          cargo="Proyectos académicos"
          empresa="Formación SENA"
          periodo="2026 - Actualidad"
          descripcion="Desarrollo de proyectos de software, creación de aplicaciones, manejo de bases de datos y aprendizaje de tecnologías de programación."
        />

        <TarjetaExperiencia
          cargo="Experiencia de ejemplo"
          empresa="Por definir"
          periodo="Por definir"
          descripcion="Este espacio se actualizará con información de experiencia laboral real."
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
