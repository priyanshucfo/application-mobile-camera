import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRouter, useSegments } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomHeader({ title = "Home" }) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const router = useRouter();
  const segments = useSegments();

  const isRoot = segments[1]?.length === 1; 

  return (
    <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => {
          if (isRoot) {
            navigation.openDrawer?.(); 
          } else {
            router.back(); 
          }
        }}>
          <Ionicons name={isRoot ? "menu" : "arrow-back"} size={24} color="#111" />
        </TouchableOpacity>

        <View style={styles.centerContent}>
          <Image
            source={require('../assets/images/newimg.jpg')} 
            style={styles.avatar}
          />
          <Text style={styles.title}>{title}</Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="settings-outline" size={22} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    shadowColor: 'transparent', 
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
