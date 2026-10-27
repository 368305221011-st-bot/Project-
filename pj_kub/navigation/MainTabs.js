import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import TopicStack from './TopicStack';
import ExploreScreen from '../screens/ExploreScreen';
import TeamworkScreen from '../screens/TeamworkScreen';
import { COLORS } from '../styles/ProjectStyles';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'ellipse-outline';
          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'KnowledgeTab') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'ExploreTab') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'TeamTab') {
            iconName = focused ? 'people' : 'people-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ title: 'หน้าหลัก' }}
      />
      <Tab.Screen
        name="KnowledgeTab"
        component={TopicStack}
        options={{ title: 'สาระน่ารู้' }}
      />
      <Tab.Screen
        name="ExploreTab"
        component={ExploreScreen}
        options={{ title: 'สายอาชีพ' }}
      />
      <Tab.Screen
        name="TeamTab"
        component={TeamworkScreen}
        options={{ title: 'ผู้จัดทำ' }}
      />
    </Tab.Navigator>
  );
}
