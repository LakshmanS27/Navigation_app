import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="GET"
          component={GetScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="get" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="POST"
          component={PostScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="addfile" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="PUT"
          component={PutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="edit" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="DELETE"
          component={DeleteScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="delete" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
