import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopicListScreen from '../screens/TopicListScreen';
import TopicDetailScreen from '../screens/TopicDetailScreen';

const Stack = createNativeStackNavigator();

export default function TopicStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TopicList" component={TopicListScreen} />
      <Stack.Screen name="TopicDetail" component={TopicDetailScreen} />
    </Stack.Navigator>
  );
}
