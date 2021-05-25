import React from 'react';
import { SingIn } from '../src/pages/SignIn'
import { SingUp } from './pages/SignUp';
import GlobalStyles from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <SingUp />
      <GlobalStyles />
    </>
  );
}

export default App;
