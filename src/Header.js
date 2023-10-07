import {useEffect, useState} from 'react';


function Header(props){

    useEffect(() => {
        
    }, [])
    
    function abrirModalCriarConta(e){
        e.preventDefault();
    }

    return (

    <div className='header'>

        <div className='modalCriarConta'>
            <div className='formCriarConta'> 
                <form>
                    <input type='text' placeholder='Seu E-mail...'/>
                    <input type='text' placeholder='Seu Username...'/>
                    <input type='password' placeholder='Sua Senha...'/>
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
