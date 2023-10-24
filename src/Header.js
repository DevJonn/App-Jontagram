import {useEffect, useState} from 'react';
import {auth} from './firebase';
function Header(props){

    

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

        let modal = document.querySelector('.modalUpload');

        modal.style.display = 'block';
    }

    function uploadPost(e){
        e.preventDefault();
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
                <div onClick={(e)=>fecharModalUpload(e)} className='close-modal-criar'>X</div>
                    <h2>Fazer Upload</h2>
                        <form onSubmit={(e)=>uploadPost(e)}>
                            <progress value={progress}></progress>
                            <input id='titulo-upload' type='text' placeholder='Poste Agora...'/>
                            <input type='file' name='file' />
                            <input type='submit' value='Criar Conta!' />
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
