import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import IndianCuis from './components/IndianCuis';
import { Route, Routes } from 'react-router-dom';
import ItalianCuis from './components/ItalianCuis';
import AddCuisine from './components/AddCuisine';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<IndianCuis/>}/>
        <Route path='/italian' element={<ItalianCuis/>}/>
        <Route path='/add' element={<AddCuisine data={{name:'',duration:'',noOfServing:'',cusineType:'',image:''}} method='post'/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
