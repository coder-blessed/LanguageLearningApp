// /navigation/AppNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LessonsScreen from '../screens/LessonsScreens';
import QuizScreen from '../screens/QuizScreen';
import { ProgressScreen } from '../screens/ProgressScreen';  // Correct named import
import Explore from '../components/Explore'; // Replace with the correct file path
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'Lessons') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Quiz') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          } else if (route.name === 'Progress') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'compass' : 'compass-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Lessons" component={LessonsScreen} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
