import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '../LanguageLearningApp/Navigation/AppNavigation';
import AuthNavigation from '../LanguageLearningApp/Navigation/AuthNavigation';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Use actual auth logic

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default App;
