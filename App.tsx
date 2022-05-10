import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/navigation';
import {QueryClient, QueryClientProvider} from 'react-query';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <MainNavigation />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
