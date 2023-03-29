import React from "react";
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";
import { collection,query,getDocs,where,documentId } from 'firebase/firestore';
import { db } from "../../firebase/FirebaseConfig";
import CartBuy from "../cartbuy/cartBuy";
import "./Syle.css"

const CardAlbumDetail = () => {
  const { id } = useParams();
  const [albumData,setAlbumData] = useState ([]);
  useEffect( () => {
    const getAlbums = async () => {
        const q = query(collection(db,"music"),where(documentId(),"==",id));
        const querySnapshot = await getDocs (q);
        const docs = []
        querySnapshot.forEach ((doc) => {
            docs.push({...doc.data(),id:doc.id})
        } );
        setAlbumData(docs);
    }
    getAlbums();
} , [id] )
  return(
    <div className='flex-container'>
    {albumData.map((album) => {
        return <CartBuy key={album.id} Album={album}/>   
    })}
</div>
  )
}
export default CardAlbumDetail