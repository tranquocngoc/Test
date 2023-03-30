/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AxiosInstanceProvider from './components/AxiosContext';
import {API_URL} from './apis';
import {RouterContainer} from './navigation/router';

const App = () => {
  return (
    <AxiosInstanceProvider config={{baseURL: API_URL}}>
      <RouterContainer />
    </AxiosInstanceProvider>
  );
};

export default App;
