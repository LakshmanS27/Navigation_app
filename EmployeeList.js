// EmployeeList.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const API_URL = 'https://dummy.restapiexample.com/api/v1';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees when the component mounts
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${API_URL}/employees`);
      setEmployees(response.data.data);
    } catch (error) {
      console.error('Error fetching employees', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/delete/${id}`);
      fetchEmployees(); // Refresh the employee list
    } catch (error) {
      console.error('Error deleting employee', error);
    }
  };

  return (
    <View>
      <Text>Employee List</Text>
      {employees.map((employee) => (
        <View key={employee.id}>
          <Text>{employee.employee_name}</Text>
          <Button
            title="Delete"
            onPress={() => deleteEmployee(employee.id)}
          />
        </View>
      ))}
    </View>
  );
}

export default EmployeeList;
