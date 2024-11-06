import React from "react";
import { Table } from "./components/Table";
import useFetch from '../../hooks/useFetch';
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/button/Button";
import { useState } from "react";
import { Input } from "../../components/input/Input";
import { useEffect } from "react";



export const Dashboard = () => {

  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    serialnum: "",
    category: "",
    lastupd: "",
  })
  const {data, error, isLoading} = useFetch('http://localhost:3000/items');

  const addNewItem = () => {
    setIsActive(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleChange = (e) => {
    setFormData( {
      ...formData, [e.target.name] : e.target.value
    });
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])
  

  return isLoading? (<p>Cargando...</p>) : (
  <div>
    <Button action={() => addNewItem()} txt="Añadir" type="button"/>
    <Table data={data}/>
    <Modal active={isActive} onClose={setIsActive}> 
      <form onSubmit={event => handleSubmit(event)}>
        <Input txt="Nombre..." type="text" name="name" value={formData.name} onChange={handleChange}/> <br />
        <Input txt="Cantidad..." type="number" name="quantity" value={formData.quantity} onChange={handleChange}/><br />
        <Input txt="Núm. Serie..." type="text" name="serialnum" value={formData.serialnum} onChange={handleChange}/><br />
        <Input txt="Categoría..." type="text" name="category" value={formData.category} onChange={handleChange}/><br />
        <Input txt="Ult. Actualización..." type="date" name="lastupd" value={formData.lastupd} onChange={handleChange}/><br />

        <Button type="submit" txt="Crear"></Button>

      </form>
      
    </Modal>

  </div>
  );
};
