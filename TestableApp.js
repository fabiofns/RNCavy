import React from 'react';
import {Tester, TestHookStore} from 'cavy';
import MySpec from './login-spec';
import PropTypes from 'prop-types';

const testHookStore = new TestHookStore();

const TestableApp = ({children}) => (
  <Tester
    clearAsyncStorage
    specs={[MySpec]}
    store={testHookStore}
    waitTime={4000}
    startDelay={1000}
  >
    {children}
  </Tester>
);

TestableApp.propTypes = {
  children: PropTypes.node.isRequired
};

export default TestableApp;