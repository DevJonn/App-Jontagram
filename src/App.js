import './App.css';
import "firebase/compat/auth";
import {useEffect, useState} from 'react';
import Header from './Header';

/*Para executar o servidor: abrir o cmd e o seguinte comando: "cd\ >> C:\> cd Users\jonat\jontagram >> 
npm start */

function App() {

  const [user, setUser] = useState('Jonathan');

  useEffect(()=>{
    
  },[])


  return (
    <div className="App">

      <Header setUser={setUser} user={user}></Header>
      
    
    </div>
  );
}

export default App;
