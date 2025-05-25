import { Drawer } from 'expo-router/drawer';
export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{ title: 'Home', drawerLabel: 'Home' }}
      />
      <Drawer.Screen name="bookings" options={{ title: 'Bookings' , drawerLabel: 'Home' }} />
      <Drawer.Screen name="profile" options={{ title: 'Profile' , drawerLabel: 'Home1' }} />
      <Drawer.Screen name="settings" options={{ title: 'Settings' , drawerLabel: 'Home2' }} />
      <Drawer.Screen name="support" options={{ title: 'Support' , drawerLabel: 'Home3' }} />
    </Drawer>
  );
}