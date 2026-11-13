
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import TarjetaHobby from '../components/TarjetaHobby';

export default function Hobbies() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Mis pasatiempos</Text>

        <Text style={styles.subtitulo}>
          Actividades que disfruto realizar en mi tiempo libre.
        </Text>

        <TarjetaHobby
          nombre="Videojuegos"
          descripcion="Disfruto jugar videojuegos en mis tiempos libres."
          detalle="Los videojuegos me permiten entretenerme, desarrollar habilidades de estrategia y compartir momentos con amigos."
        />

        <TarjetaHobby
          nombre="Ejercicio"
          descripcion="Me gusta mantenerme activo y hacer actividad física."
          detalle="El ejercicio me ayuda a mantener una buena condición física, cuidar mi salud y desarrollar disciplina."
        />

        <TarjetaHobby
          nombre="Compartir con amigos"
          descripcion="Disfruto pasar tiempo con mis amigos."
          detalle="Compartir con amigos me permite aprender de otras personas, divertirme y fortalecer las relaciones personales."
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
