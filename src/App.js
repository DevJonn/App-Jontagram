import logo from './logo.svg';
import './App.css';
import "firebase/compat/auth";
import {useEffect, useState} from 'react';
/*Para executar o servidor: abrir o cmd e o seguinte comando: "cd\ >> C:\> cd Users\jonat\jontagram >> 
npm start */

function App() {

  const [user, setUser] = useState('Jonathan');

  useEffect(()=>{
    
  },[])


  return (
    <div className="App">
      <div className='header'>
        <div className='center'>
          <div className='header__logo'>
            <a href=''><img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' /> </a>
          </div>
          {
            (user)?
            <div className='header__logadoInfo'>
              <span>Olá, <b>{user} </b> </span>
              <a href='#'>Postar!</a> 
            </div>
            :
          <div className='header__loginForm'>
            <form>
            <input type='text' placeholder='Login...' />
            <input type='password' placeholder='Senha...' />
            <input type='submit' nama='acao' value='Logar!' />
          </form>
          <div className='btn__criarConta'>
            <a href='#'>Criar Conta!</a>
          </div> 
      </div>
      }
    </div>
    </div>
    
    </div>
  );
}

export default App;
