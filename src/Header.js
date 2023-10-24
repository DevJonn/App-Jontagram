import {useEffect, useState} from 'react';
import {auth,storage,db} from './firebase';
import firebase from 'firebase';
function Header(props){

    const [progress,setProgress] = useState(0);
    const [file, setFile] = useState(null);

    //VIDEO PARADO EM 17MIN

    useEffect(() => {
        
    }, [])


    function criarConta(e){
        
        e.preventDefault();
        let email = document.getElementById('email-cadastro').value;
        let username = document.getElementById('username-cadastro').value;    
        let senha = document.getElementById('senha-cadastro').value;

        //criar conta firebase;
        auth.createUserWithEmailAndPassword(email,senha)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:username
            })
            alert('Conta criada com sucesso!');
                let modal = document.querySelector('.modalCriarConta');

                modal.style.display = 'none';
        }).catch((error)=>{
            alert('E-mail ou Senha Incorreta');
        })
        ;
    }

    function logar(e){
        e.preventDefault();
        let email = document.getElementById('email-login').value;
        let senha = document.getElementById('senha-login').value;

        auth.signInWithEmailAndPassword(email,senha)
        .then((auth)=>{
            props.setUser(auth.user.displayName);
            alert('logado com sucesso!');
        }).catch((err)=>{
            alert(err.message);
        })
    }


    
    function abrirModalCriarConta(e){
        e.preventDefault();

        let modal = document.querySelector('.modalCriarConta');

        modal.style.display = 'block';
        
    }

    function fecharModalCriar(){
        let modal = document.querySelector('.modalCriarConta');

        modal.style.display = 'none';
    }


    //Upload de Postagem

    function abrirModalUpload(e){
        e.preventDefault();

        let modal= document.querySelector('.modalUpload');
        modal.style.display = 'block';
    }


    function fecharModalUpload(){
        let modal = document.querySelector('.modalUpload');

        modal.style.display = 'none';
    }


    //POSTAGEM DE FOTOS:

    function uploadPost(e){
        e.preventDefault();
        let tituloPost = document.getElementById('titulo-upload').value;
        let progressEl = document.getElementById('progress-upload');

        const uploadTask = storage.ref(`images/${file.name}`).put(file);

        uploadTask.on('state_changed',function(snapshot){
            const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            setProgress(progress);
        },function(error){

        }, function(){
            
            storage.ref('images').child(file.name).getDownloadURL()
            .then(function(url){
                db.collection('posts').add({
                    titulo: tituloPost,
                    image: url,
                    userName: props.user,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

            setProgress(0);
            setFile(null);

            alert('Upload Realizado');


            document.getElementById('form-upload').reset();
        })
        
    })
    
    }




    return (

    <div className='header'>

        <div className='modalCriarConta'>
            <div className='formCriarConta'> 
                <div onClick={(e)=>fecharModalCriar(e)} className='close-modal-criar'>X</div>
                    <h2>Criar Conta</h2>
                        <form onSubmit={(e)=>criarConta(e)}>
                            <input id='email-cadastro' type='text' placeholder='Seu E-mail...'/>
                            <input id='username-cadastro' type='text' placeholder='Seu Username...'/>
                            <input id='senha-cadastro' type='password' placeholder='Sua Senha...'/>
                            <input type='submit' value='Criar Conta!' />
                        </form>
            </div>
        </div>
    
        <div className='modalUpload'>
            <div className='formUpload'> 
                <div onClick={()=>fecharModalUpload()} className='close-modal-criar'>X</div>
                    <h2>Fazer Upload</h2>
                        <form id='form-upload' onSubmit={(e)=>uploadPost(e)}>
                            <progress id='progress-upload' value={progress}></progress>
                            <input id='titulo-upload' type='text' placeholder='Descrição do Post...'/>
                            <input onChange={(e)=>setFile(e.target.files[0])} type='file' name='file' />
                            <input type='submit' value='Postar!' />
                        </form>
            </div>
        </div>

        

        <div className='header'>
            <div className='center'>
                <div className='header__logo'>
                    <a href=''><img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' /> </a>
                </div>
            {
            (props.user)?
            <div className='header__logadoInfo'>
                <span>Olá, <b>{props.user}</b></span>
                <a onClick={(e)=>abrirModalUpload(e)} href='#'>Postar!</a> 
            </div>
            :
            <div className='header__loginForm'>
                <form onSubmit={(e)=>logar(e)}>
                    <input id='email-login' type='text' placeholder='Login...' />
                    <input id='senha-login' type='password' placeholder='Senha...' />
                    <input type='submit' nama='acao' value='Logar!' />
                </form>
            <div className='btn__criarConta'>
            <a onClick={(e)=>abrirModalCriarConta(e)}  href='#'>Criar Conta!</a>
        </div> 
    </div>
    }
    </div>
</div>
</div>
    )

}


export default Header;
