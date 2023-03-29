import React, { useState } from 'react'
import { Alert } from '../../components/alert/Alert';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/FirebaseConfig'
import "./Style.css"

const initialState = {
    name:"",
    lastName:"",
    email:"",
    tel:"",
    consult:"",
}
const Contact = (e) => {
    const [values,setvalues] = useState(initialState);
    const [purchasesID,setPurchaseID] = useState ();

    const handleOnChange = (e) => {
        const {value,name} = e.target;
        setvalues({...values,[name]:value})
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), values,);
        setPurchaseID(docRef.id);
        setvalues(initialState);
    };

    return (
    <div className='flex-container'>                
        <form className="row" onSubmit={handleOnSubmit}>
            <div className="col-6">
                <label htmlFor="name" className="form-label">Nombres:</label>
                <input type="text" onChange={handleOnChange} value={values.name} name="name" id="name" className="form-control" required placeholder="Requerido"></input>
            </div>
            <div className="col-6">
                <label htmlFor="lastName" className="form-label">Apellido:</label>
                <input type="text" onChange={handleOnChange} value={values.lastName} name="lastName" id="lastName" className="form-control" required placeholder="Requerido"></input>
            </div>
            <div className="col-6">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" onChange={handleOnChange} value={values.email} name="email" id="email" className="form-control" required placeholder="Requerido"></input>
            </div>
            <div className="col-6">
                <label htmlFor="tel" className="form-label">Telefono:</label>
                <input type="number" onChange={handleOnChange} value={values.tel} name="tel" id="tel" className="form-control" placeholder="Opcional"></input>
            </div>
            <div className="col-12">
                <label htmlFor="consult" className="form-label">Deja tu consulta:</label>
                <textarea  className="consult" onChange={handleOnChange} name='consult' value={values.consult} placeholder="Escribe tu comentario *requerido" required></textarea>
            </div>
            <input className="enviar" type="submit"></input>
            {purchasesID ? <Alert purchasesID = {purchasesID} />:null}
        </form>
    </div>
    )
}

export default Contact