import './App.css';
import {auth,db} from './firebase';
import {useEffect, useState} from 'react';
import Header from './Header'; 
import Post from './Post';

/*Para executar o servidor: abrir o cmd e o seguinte comando: "cd\ >> C:\> cd Users\jonat\jontagram >> 
npm start 
Ou abrir terminal(Ctrl +  ") e digitar npm start
*/
//AULA REGRAS DE SEGURANÇA 9min
//Caso persista erro de loggout, tirar da função o comando seguinte:window.location.href = "/"; encontrasse na function login e loggout

function App() {

  const [user, setUser] = useState();

  const [posts,setPosts] = useState([]);

  useEffect(()=>{

    auth.onAuthStateChanged(function(val){
      if(val!=null){
      setUser(val.displayName);
      }
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

            <Post user={user} info={val.info} id={val.id} />
          )
        })
      }
    
    </div>
  );
}

export default App;
