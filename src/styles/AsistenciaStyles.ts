import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.1)', 
      paddingVertical: 20,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      width: '90%',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#34495e',
    },
    tableContainer: {
      width: '100%',
      marginBottom: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
    },
    sectionHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#2980b9',
    },
    table: {
      width: '100%',
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ecf0f1',
    },
    tableCell: {
      fontSize: 16,
      color: '#2c3e50',
    },
    tableHeader: {
      fontWeight: 'bold',
      color: '#8e44ad',
    },
    descuentoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    descuentoLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
      color: '#2c3e50',
    },
    descuentoInput: {
      flex: 1,
      padding: 10,
      backgroundColor: '#ecf0f1',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#bdc3c7',
      fontSize: 16,
      color: '#2c3e50',
    },
    button: {
      backgroundColor: '#800000',
      padding: 15,
      borderRadius: 40,
      marginTop: 20,
      width: '60%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.9,
      shadowRadius: 30,
      elevation: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });