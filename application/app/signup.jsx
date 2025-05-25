import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';

export default function SignupScreen() {
  const router = useRouter();
  const { role } = useLocalSearchParams(); // comes from navigation (customer/cameraman)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [aadharDoc, setAadharDoc] = useState(null);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf', 'image/*'],
    });
    if (result.assets && result.assets.length > 0) {
      setAadharDoc(result.assets[0]);
    }
  };

  const handleSignup = () => {
    if (!name || !email || !password || !phone) {
      return Alert.alert('Please fill all fields');
    }

    if (role === 'cameraman' && !aadharDoc) {
      return Alert.alert('Please upload Aadhar document');
    }

    Alert.alert('Signup Success (mock)', `As ${role}`);
    // POST data to your backend here
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Sign Up as {role === 'cameraman' ? 'Cameraman' : 'Customer'}</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your name"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Choose password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="10-digit phone"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          {role === 'cameraman' && (
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Upload Aadhar (PDF or Image)</Text>
              <TouchableOpacity style={styles.uploadBtn} onPress={pickDocument}>
                <Text style={styles.uploadBtnText}>
                  {aadharDoc ? aadharDoc.name : 'Choose File'}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity style={styles.primaryButton} onPress={handleSignup}>
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.loginLink}>
              Already have an account? <Text style={{ color: '#2563EB' }}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 24, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 30, textAlign: 'center' },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, color: '#374151', marginBottom: 6 },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontSize: 16,
  },
  uploadBtn: {
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  uploadBtnText: {
    color: '#374151',
    fontSize: 15,
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#2563EB',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  primaryButtonText: { color: '#FFF', fontSize: 16, fontWeight: '700' },
  loginLink: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
    color: '#6B7280',
  },
});