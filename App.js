import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {persistStore} from 'redux-persist';
import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {store} from './src/store';
import NavigatorSwitch from './src/router/Navigator';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

const persistor = persistStore(store);
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigatorSwitch />
          </PersistGate>
        </ReduxProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
