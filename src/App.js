import logo from './logo.svg';
import './App.css';
import "firebase/compat/auth";
import {useEffect, useState} from 'react';

function App() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    
  },[])


  return (
    <div className="App">
        <div className='header'>
      <div className='center'>
        <div className='header__logo'>
        <a href=''><img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' /> </a>
      </div>

        <div className='header__loginForm'>
        <form>
          <input type='text' placeholder='Login...' />
          <input type='password' placeholder='Senha...' />
          <input type='submit' nama='acao' value='Logar!' />
        </form>
      </div>
      </div>
      </div>

    </div>
  );
}
//terça!!

export default App;
