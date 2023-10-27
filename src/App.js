import './App.css';
import {auth} from './firebase';
import {useEffect, useState} from 'react';
import Header from './Header'; 
/*Para executar o servidor: abrir o cmd e o seguinte comando: "cd\ >> C:\> cd Users\jonat\jontagram >> 
npm start 
Ou abrir terminal e digitar npm start
*/

function App() {

  const [user, setUser] = useState('Jonathan');

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(function(snapshot){
      setPosts(snapshot.docs.map(function(document){
        return{id:document.id,info:document.data()}
      }))
    })  //Função para ordenar os post como mais recentes

  },[])


  return (
    <div className="App">

      <Header setUser={setUser} user={user}></Header>:
    
    </div>
  );
}

export default App;
