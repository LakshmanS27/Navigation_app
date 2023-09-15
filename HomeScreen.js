// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Employee App</Text>
      <Button
        title="Fetch Employees"
        onPress={() => navigation.navigate('EmployeeList')}
      />
    </View>
  );
}

export default HomeScreen;
