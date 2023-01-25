import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import Feedback from './components/Feedback';
import { Route,Routes} from 'react-router'
// import { Route, Routes } from 'react-router';
import Service from './components/Service';
import { Divider } from '@mui/material';
function App() {
  return (
   <div>
    <Users/>
    <Feedback/>
    <h1 display="inline-block">Types of Service Form</h1>
    <Service/>
  
      
    
    </div>

  );
}

export default App;
