import './App.css';
import {auth} from './firebase';
import {useEffect, useState} from 'react';
import Header from './Header'; 
/*Para executar o servidor: abrir o cmd e o seguinte comando: "cd\ >> C:\> cd Users\jonat\jontagram >> 
npm start */
/*Parei com  12min*/

function App() {

  const [user, setUser] = useState('Jonathan');

  useEffect(()=>{
    
  },[])


  return (
    <div className="App">

      <Header></Header>:
    
    </div>
  );
}

export default App;
