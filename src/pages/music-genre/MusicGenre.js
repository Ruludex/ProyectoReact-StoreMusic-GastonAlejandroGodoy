import React from 'react'
import CardAlbum from '../../components/cardalbum/CardAlbum';
import { db } from '../../firebase/FirebaseConfig';
import { collection,query,getDocs,where } from 'firebase/firestore';
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";


const MusicGenre = () => {
    const [albumsData,setAlbumData] = useState ([]);
    const { genero } = useParams();
    useEffect( () => {
        const getAlbums = async () => {
            const q = query(collection(db,"music"), where("genero","==",genero));
            const querySnapshot = await getDocs (q);
            const docs = []
            querySnapshot.forEach ((doc) => {
                docs.push({...doc.data(),id:doc.id})
            } );
            setAlbumData(docs);
        }
        getAlbums();
    } , [genero] )

    return (
        <div>
        <h1>{genero[0].toUpperCase()+genero.slice(1)}</h1>
        <div className='flex-container'>
            {albumsData.map((albums) => {
                return	<CardAlbum key={albums.id} dataAlbum={albums}/>
            })}
        </div>
    </div>
)
}

export default MusicGenre