
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import MiBoton from '../components/MiBoton';

export default function Inicio() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.contenido}>
        <View style={styles.perfil}>
          <View style={styles.avatar}>
            <Text style={styles.iniciales}>YM</Text>
          </View>

          <Text style={styles.nombre}>
            Yahir Santiago Moran Ch
          </Text>

          <Text style={styles.profesion}>
            Aprendiz SENA | Análisis y Desarrollo de Software
          </Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.titulo}>Sobre mí</Text>

          <Text style={styles.descripcion}>
            Soy una persona responsable, comprometida y con disposición
            para aprender. Me adapto a diferentes entornos de trabajo y
            estoy interesado en fortalecer mis conocimientos en desarrollo
            de software, bases de datos y programación backend.
          </Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.titulo}>Mis conocimientos</Text>

          <Text style={styles.habilidad}>• JavaScript</Text>
          <Text style={styles.habilidad}>• Python</Text>
          <Text style={styles.habilidad}>• SQL y bases de datos</Text>
          <Text style={styles.habilidad}>• Desarrollo backend</Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.titulo}>Contacto</Text>

          <MiBoton
            titulo="Correo electrónico"
            mensaje="Agrega aquí tu correo electrónico."
          />

          <MiBoton
            titulo="Teléfono"
            mensaje="Agrega aquí tu número de contacto."
          />

          <MiBoton
            titulo="LinkedIn"
            mensaje="Agrega aquí tu perfil de LinkedIn."
          />
        </View>
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
    paddingBottom: 40,
  },
  perfil: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#6C3B9A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  iniciales: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
  nombre: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#25212B',
    textAlign: 'center',
  },
  profesion: {
    fontSize: 14,
    color: '#6C3B9A',
    textAlign: 'center',
    marginTop: 8,
  },
  seccion: {
    marginBottom: 25,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C3B9A',
    marginBottom: 12,
  },
  descripcion: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 23,
    textAlign: 'justify',
  },
  habilidad: {
    fontSize: 15,
    color: '#444444',
    marginVertical: 5,
  },
});
