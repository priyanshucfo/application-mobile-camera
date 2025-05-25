import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Support() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.text}>Contact our support team or read FAQs and guides.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, color: '#6B7280' },
});