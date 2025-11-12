import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>Usuário LogiTrack</Text>
        
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>usuario@logitrack.com</Text>
        
        <Text style={styles.label}>Empresa:</Text>
        <Text style={styles.value}>Logística XYZ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  profileInfo: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
  },
  label: {
    fontWeight: '600',
    marginTop: 12,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});
