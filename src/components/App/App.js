import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
export default App;