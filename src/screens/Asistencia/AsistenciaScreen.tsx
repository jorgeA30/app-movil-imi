import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, useWindowDimensions, Image, Alert } from 'react-native';
import { styles } from 'src/styles/AsistenciaStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const AsistenciaScreen = () => {
  const [descuento, setDescuento] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const { width, height } = useWindowDimensions();

  const handleDescuentoChange = (value) => {
    setDescuento(value);
  };

  const handleUploadJustificante = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      alert('Permiso de acceso a la galería es requerido!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setSelectedImage(pickerResult.uri);
      alert('Justificante subido exitosamente.');
    }
    setMenuOpen(false);
  };

  const handleLogout = () => {
    alert('Cerrar sesión');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ImageBackground
      source={require('assets/page1.jpg')}
      style={[styles.background, { width, height }]}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
              <MaterialCommunityIcons name="menu" size={30} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Datos del Usuario</Text>
          </View>

          {menuOpen && (
            <View style={styles.menuDropdown}>
              <TouchableOpacity style={styles.menuItem} onPress={handleUploadJustificante}>
                <Text style={styles.menuText}>Subir Justificante</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                <Text style={styles.menuText}>Cerrar Sesión</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.tableContainer}>
            <Text style={styles.sectionHeader}>Asistencia de Profesor</Text>
            <Text style={styles.sectionHeader}>Nombre: Nephtalí Mata de la Cruz</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.tableHeader]}>Fecha</Text>
                <Text style={[styles.tableCell, styles.tableHeader]}>Asistencia</Text>
              </View>
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
          </View>

          {selectedImage && (
            <View style={styles.imagePreviewContainer}>
              <Text style={styles.imagePreviewLabel}>Justificante Subido:</Text>
              <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
            </View>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AsistenciaScreen;
