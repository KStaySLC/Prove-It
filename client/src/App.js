import logo from './logo.svg';
import './App.css';
import Layout from './views/layout';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Layout><Login /></Layout>}/>
       <Route path = '/Login' element = {<Layout><Login/></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
