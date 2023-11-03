import {db} from './firebase';
import {useEffect, useState} from 'react';
import firebase from 'firebase';


function Post(props){

    const [comentarios,setComentarios] = useState([]);

    useEffect(() => {
        db.collection('posts').doc(props.id).collection('comentarios').orderBy('timestamp','asc').onSnapshot(function(snapshot){
            setComentarios(snapshot.docs.map(function(document){
                return{id:document.id,info:document.data()}
            }))
        })
    }, [])


    function comentar(id,e){
        e.preventDefault();

        let comentarioAtual = document.querySelector('#comentario-'+id).value;

        db.collection('posts').doc(id).collection('comentarios').add({
            nome: props.user,
            comentario: comentarioAtual,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })



        alert('Comentário feito com Sucesso!');
    }


    return (
        <div className='postSingle'>
            <img src={props.info.image} />
            <p><b> {props.info.userName} </b>:  {props.info.titulo} </p>

            <div className='coments'>

                {
                    comentarios.map(function(val){
                        return(
                            <div className='coment-single'>
                                <p><b>{val.info.nome}</b>:  {val.info.comentario}</p>
                            </div>
                        )
                    })
                }

            </div>



            <form onSubmit={(e)=>comentar(props.id,e)}>
                <textarea id={'comentario-'+props.id}></textarea>
                <input type='submit' value='Comentar' />
                </form>
        </div>


    )

}


export default Post;