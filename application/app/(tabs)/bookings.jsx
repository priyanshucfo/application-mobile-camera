import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Bookings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Bookings</Text>
      <Text style={styles.text}>This screen will show upcoming, past, or pending bookings.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, color: '#6B7280' },
});