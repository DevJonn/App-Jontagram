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

    
    function abrirModalCriarConta(e){
        e.preventDefault();

        let modal = document.querySelector('.modalCriarConta');

        modal.style.display = 'block';

    }

    function fecharModalCriar(){
        let modal = document.querySelector('.modalCriarConta');

        modal.style.display = 'none';
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
    
        

    <div className='header'>
        <div className='center'>
            <div className='header__logo'>
                <a href=''><img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' /> </a>
            </div>
        {
        (props.user)?
        <div className='header__logadoInfo'>
            <span>Olá, <b>{props.user} </b> </span>
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
