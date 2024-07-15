import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { styles } from 'src/styles/AsistenciaStyles'

const AsistenciaScreen = () => {
  const [descuento, setDescuento] = useState('');

  const handleDescuentoChange = (value) => {
    // Validación u otros cambios necesarios antes de actualizar el estado
    setDescuento(value);
  };

  const handleUploadJustificante = () => {
    // Lógica para subir justificante
    // Aquí puedes implementar la lógica para subir el justificante
    alert('Subir justificante');
  };

  return (
    <ImageBackground
      source={require('assets/page1.jpg')} // Ruta de la imagen de fondo
      style={styles.background}
      resizeMode="cover" // Ajuste de la imagen de fondo
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Datos Personales del Usuario</Text>

          <View style={styles.tableContainer}>
            <Text style={styles.sectionHeader}>Asistencia de Profesor</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.tableHeader]}>Fecha</Text>
                <Text style={[styles.tableCell, styles.tableHeader]}>Asistencia</Text>
              </View>
              {/* Add rows as needed */}
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>01/01/2024</Text>
                <Text style={styles.tableCell}>Presente</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>02/01/2024</Text>
                <Text style={styles.tableCell}>Ausente</Text>
              </View>
            </View>
          </View>

          <View style={styles.tableContainer}>
            <Text style={styles.sectionHeader}>Nómina Completa</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.tableHeader]}>Mes</Text>
                <Text style={[styles.tableCell, styles.tableHeader]}>Salario</Text>
              </View>
              {/* Add rows as needed */}
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Enero</Text>
                <Text style={styles.tableCell}>$2000</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Febrero</Text>
                <Text style={styles.tableCell}>$2000</Text>
              </View>
            </View>
            <View style={styles.descuentoContainer}>
              <Text style={styles.descuentoLabel}>Descuento por faltas:</Text>
              <TextInput
                style={styles.descuentoInput}
                placeholder="Ingrese el descuento"
                value={descuento}
                onChangeText={handleDescuentoChange}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleUploadJustificante}>
              <Text style={styles.buttonText}>Subir Justificante</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AsistenciaScreen;