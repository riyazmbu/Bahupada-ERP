import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

// Assuming you have saved the previous components in separate files
// AppHeader.js and MastersScreen.js in the same directory
import AppHeader from './AppHeader';
import MastersScreen from './MastersScreen';
import AppFooter from './AppFooter';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      
      {/* Renders the full screen by combining the header and the content */}
      <AppHeader />
      <MastersScreen />
      <AppFooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
