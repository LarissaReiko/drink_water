import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { MyTabs } from './src/routes/routes';
import {Dashboard} from './src/screens/Dashboard';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" /> 
      <MyTabs/>
      {/*<Dashboard\>*/}   
   </NativeBaseProvider>
  );
}
