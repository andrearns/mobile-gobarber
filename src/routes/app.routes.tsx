import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Importa o Stack Navigator

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator(); // Cria a rota de autenticação

const AppRoutes: React.FC = () => (
  // Cria o navegador no topo da tela que pode ser customizável
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
