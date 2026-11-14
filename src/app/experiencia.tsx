
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
          Proyectos académicos y conocimientos adquiridos durante mi
          formación en Análisis y Desarrollo de Software.
        </Text>

        <TarjetaExperiencia
          cargo="Desarrollador de ONUFAST"
          empresa="Proyecto de formación SENA"
          periodo="2026 - Actualidad"
          descripcion="Participación en el desarrollo de una aplicación web de logística para gestionar envíos, consultar estados de paquetes y administrar rutas. Trabajo con React, Python, FastAPI y bases de datos PostgreSQL."
        />

        <TarjetaExperiencia
          cargo="Desarrollo de API REST"
          empresa="Proyecto de formación"
          periodo="2026 - Actualidad"
          descripcion="Creación y gestión de servicios backend utilizando Node.js, Express, Prisma y PostgreSQL. Implementación de operaciones para registrar, consultar, actualizar y eliminar información."
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
    paddingBottom: 40,
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
    lineHeight: 22,
  },
});
