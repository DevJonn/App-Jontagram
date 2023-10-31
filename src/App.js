import './App.css';
import {auth,db} from './firebase';
import {useEffect, useState} from 'react';
import Header from './Header'; 
import Post from './Post';

/*Para executar o servidor: abrir o cmd e o seguinte comando: "cd\ >> C:\> cd Users\jonat\jontagram >> 
npm start 
Ou abrir terminal e digitar npm start
*/
//AULA SISTEMA DE COMENTARIOS NAS POSTAGENS
//Caso persista erro de loggout, tirar da função o comando seguinte:window.location.href = "/"; encontra0se na function login e loggout

function App() {

  const [user, setUser] = useState('Jonathan');

  const [posts,setPosts] = useState([]);

  useEffect(()=>{

    auth.onAuthStateChanged(function(val){
      setUser(val.displayName);
    })
    
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(function(snapshot){
      setPosts(snapshot.docs.map(function(document){
        return{id:document.id,info:document.data()}
      }))
    })  //Função para ordenar os post como mais recentes

  },[])


  return (
    <div className="App">

      <Header setUser={setUser} user={user}></Header>

      {
        posts.map(function(val){

          return (
            <Post info={val.info} id={val.id} />
          )
        })
      }
    
    </div>
  );
}

export default App;
