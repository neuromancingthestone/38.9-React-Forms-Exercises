import React, {useState} from "react";

const NewBoxForm = ({addBox}) => {
  const INITIAL_STATE = {
    color: "",
    width: "",
    height: "",
  }
  
  const [boxFormData, setBoxFormData] = useState(INITIAL_STATE);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setBoxFormData(data => ({
      ...data,
      [name]: value
    }))    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
//    const {color, width, height} = boxForm;
    addBox({...boxFormData});
    setBoxFormData(INITIAL_STATE);
  } 

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="color">Color</label>
    <input 
      id="color"
      type="text"
      name="color"
      placeholder="Teal"
      value={boxFormData.color}
      onChange={handleChange}
    />     
    <label htmlFor="width">Width</label>
    <input 
      id="width"
      type="text"
      name="width"
      placeholder="50px"
      value={boxFormData.width}
      onChange={handleChange}
    />            
    <label htmlFor="height">Height</label>
    <input 
      id="height"
      type="text"
      name="height"
      placeholder="50px"
      value={boxFormData.height}
      onChange={handleChange}
    />           
    <button>Add Box</button>
  </form>
  )
}

export default NewBoxForm;