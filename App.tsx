import { StyleSheet, Text, View } from 'react-native';
import Router from './src/navigation/Router';
import { AppProvider } from './src/provider';

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}
