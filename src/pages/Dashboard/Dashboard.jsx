import React, { useEffect, useState } from "react";
import { Table } from "./components/Table";
import useFetch from '../../hooks/useFetch';
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";



export const Dashboard = () => {

  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    serialnum: "",
    category: "",
    lastupd: "",
  })
  const {data, error, isLoading, get, post, put, del}  = useFetch('http://localhost:3000/');

  useEffect(() => {
    get('items')
  }, [])
  
  

  const addNewItem = () => {
    setIsActive(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    post('items', formData)
    setIsActive(false);
    
  }

  

  const handleChange = (e) => {
    setFormData( {
      ...formData, [e.target.name] : e.target.value
    });
  }


  return isLoading? (<p>Cargando...</p>) : (
  <div>
    <Button action={() => addNewItem()} txt="Añadir" type="button"/>
    <Table data={data}/>
    <Modal active={isActive} onClose={setIsActive}> 
      <form onSubmit={handleSubmit}>
        <Input txt="Nombre..." type="text" name="name" value={formData.name} onChange={handleChange}/> <br />
        <Input txt="Cantidad..." type="number" name="quantity" value={formData.quantity} onChange={handleChange}/><br />
        <Input txt="Núm. Serie..." type="text" name="serialnum" value={formData.serialnum} onChange={handleChange}/><br />
        <Input txt="Categoría..." type="text" name="category" value={formData.category} onChange={handleChange}/><br />
        <Input txt="Ult. Actualización..." type="date" name="lastupd" value={formData.lastupd} onChange={handleChange}/><br />
        <Button type="submit" txt="Crear" action={() => {}}/>
        
      </form>
      
    </Modal>

  </div>
  );
};
