import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes/routes';
import {DashboardScreen } from './src/screens/DashboardScreen';
import { UserProvider } from './src/contexts/UserContext';

export default function App() {
  return (
    <NativeBaseProvider>
      <UserProvider>

      <StatusBar style="auto" /> 
      <Routes/>
      </UserProvider>
         
   </NativeBaseProvider>
  );
}
