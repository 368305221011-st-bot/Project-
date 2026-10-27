import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import MainTabs from './MainTabs';
import HowToUseScreen from '../screens/HowToUseScreen';
import AboutProjectScreen from '../screens/AboutProjectScreen';
import styles, { COLORS } from '../styles/ProjectStyles';

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerStyle: styles.navigationHeader,
        headerTintColor: COLORS.white,
        drawerActiveTintColor: COLORS.primary,
        drawerInactiveTintColor: COLORS.textSecondary,
        drawerIcon: ({ color, size }) => {
          let iconName = 'apps-outline';
          if (route.name === 'MainApp') iconName = 'home-outline';
          if (route.name === 'HowToUse') iconName = 'help-circle-outline';
          if (route.name === 'AboutProject') iconName = 'information-circle-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen
        name="MainApp"
        component={MainTabs}
        options={{ title: 'CAREER EXPLORER HUB' }}
      />
      <Drawer.Screen
        name="HowToUse"
        component={HowToUseScreen}
        options={{ title: 'วิธีใช้งาน' }}
      />
      <Drawer.Screen
        name="AboutProject"
        component={AboutProjectScreen}
        options={{ title: 'เกี่ยวกับโปรเจกต์' }}
      />
    </Drawer.Navigator>
  );
}
