import React, { createContext, useEffect, useState } from "react";
import { db } from "./firebase/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [albumsData, setAlbumsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const q = query(collection(db, "music"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAlbumsData(docs);
    };
    getAlbums();
  }, []);

  return (
    <ItemsContext.Provider value={{ albumsData, cartItems, setCartItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
