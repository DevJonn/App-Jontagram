import {db} from './firebase';
import {useEffect, useState} from 'react';


function Post(props){


    function comentar(id,e){
        e.preventDefault();

        let comentarioAtual = document.querySelector('#comentario-'+id).value;

        db.collection('posts').doc(id).collection('comentarios').add({
            nome: 'jtorres',
            comentario: comentarioAtual
        })



        alert('Comentário feito com Sucesso!');
    }


    return (
        <div className='postSingle'>
            <img src={props.info.image} />
            <p><b> {props.info.userName} </b>:{props.info.titulo} </p>
            <form onSubmit={(e)=>comentar(props.id,e)}>
                <textarea id={'comentario-'+props.id}></textarea>
                <input type='submit' value='Comentar' />
                </form>
        </div>


    )

}


export default Post;