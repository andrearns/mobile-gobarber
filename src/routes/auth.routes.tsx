import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Importa o Stack Navigator

import SignIn from '../pages/SignIn'; // Importa a page de SignIn
import SignUp from '../pages/SignUp'; // Importa a page de SignUp

const Auth = createStackNavigator(); // Cria a rota de autenticação

const AuthRoutes: React.FC = () => (
  // Cria o navegador no topo da tela que pode ser customizável
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
