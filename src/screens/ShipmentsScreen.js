import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ShipmentsScreen() {
  const shipments = [
    { id: '1', tracking: 'LT001', status: 'Em Trânsito' },
    { id: '2', tracking: 'LT002', status: 'Entregue' },
    { id: '3', tracking: 'LT003', status: 'Pendente' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Remessas</Text>
      <FlatList
        data={shipments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.shipmentCard}>
            <Text style={styles.tracking}>{item.tracking}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
      />
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
    marginBottom: 16,
  },
  shipmentCard: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  tracking: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    color: '#666',
    marginTop: 4,
  },
});
