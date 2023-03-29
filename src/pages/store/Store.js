import React, { useContext } from "react";
import CardAlbum from "../../components/cardalbum/CardAlbum";
import { ItemsContext } from "../../ItemContext";
import "./Style.css";

const Store = () => {
  const items = useContext(ItemsContext);

  return (
    <div>
      <h1>Discos</h1>
      <div className="flex-container">
        {items.albumsData.map((item) => {
          return <CardAlbum key={item.id} dataAlbum={item} />;
        })}
      </div>
    </div>
  );
};

export default Store;
