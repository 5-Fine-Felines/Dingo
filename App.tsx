import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './src/Main';
import ScreenSplash from './src/app/screen/ScreenSplash'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); //delay time
  }, []);

  if (loading) {
    return <ScreenSplash />;
  }

  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;