import './App.css';
import Dropdown from './Dropdown';
import Api from './Api';
import {ToastContainer} from 'react-toastify';
import Pratice from './Pratice';

function App() {
  return (
    <div>
      <ToastContainer />
      <Pratice />
      <br /><br />
      <Dropdown />
      <Api />
    </div>
  );
}

export default App;
