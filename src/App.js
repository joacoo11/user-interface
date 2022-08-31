import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './Login/SignUp'
import Login from './Login/Login'
import Login2 from './Login/Login2';
import Login3 from './Login/Login3';
import Login4 from './Login/Login4';
import Login5 from './Login/Login5';
import Home from './Screens/Home';
import Beauty from './Screens/Beauty';
import Queue1 from './Screens/Queue1';




function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Login2' element={<Login2 />} />
          <Route path='/Login3' element={<Login3 />} />
          <Route path='/Login4' element={<Login4 />} />
          <Route path='/Login5' element={<Login5 />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Beauty' element={<Beauty />} />
          <Route path='/Queue1' element={<Queue1 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
