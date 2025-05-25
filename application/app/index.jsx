import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function LandingPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState('customer');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/images/logo.png')} // update with your correct path
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome to LensConnect</Text>
        <Text style={styles.description}>
          Find and book professional cameramen for your projects or join our network as a cameraman.
        </Text>

        <View style={styles.roleToggleWrapper}>
          <TouchableOpacity
            style={[
              styles.roleToggleButton,
              selectedRole === 'customer' && styles.roleToggleSelected,
            ]}
            onPress={() => setSelectedRole('customer')}
          >
            <Text
              style={[
                styles.roleToggleText,
                selectedRole === 'customer' && styles.roleToggleTextActive,
              ]}
            >
              Customer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.roleToggleButton,
              selectedRole === 'cameraman' && styles.roleToggleSelected,
            ]}
            onPress={() => setSelectedRole('cameraman')}
          >
            <Text
              style={[
                styles.roleToggleText,
                selectedRole === 'cameraman' && styles.roleToggleTextActive,
              ]}
            >
              Cameraman
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push(`/signup?role=${selectedRole}`)}
        >
          <Text style={styles.primaryButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push(`/login?role=${selectedRole}`)}
        >
          <Text style={styles.secondaryButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 220,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  roleToggleWrapper: {
    flexDirection: 'row',
    backgroundColor: '#E5E7EB',
    borderRadius: 50,
    padding: 4,
    marginBottom: 25,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  roleToggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
  },
  roleToggleSelected: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 4,
  },
  roleToggleText: {
    fontWeight: '600',
    color: '#6B7280',
  },
  roleToggleTextActive: {
    color: '#2563EB',
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#2563EB',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 14,
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  secondaryButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
    lineHeight: 18,
  },
});