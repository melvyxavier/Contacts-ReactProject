import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Header from './components/Header';
import SingleView from './pages/SingleView';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/view/:id' element={<SingleView></SingleView>}></Route>

      </Routes>


      <Footer></Footer>

    </div>
  );
}

export default App;
