import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from "uuid";
import "./BoxList.css"

const BoxList = () => {

  const INITIAL_STATE = []
 
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
  }

  const remove = (e) => {    
    setBoxes(boxes.filter((b) => b.id !== e.target.parentElement.id));    
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      <div className="Box-Container">
        {boxes.map(({id, color, width, height}) =>
          <Box
            id={id}
            color={color}
            width={width}
            height={height}
            remove={remove}
            key={id}
          />
        )}
      </div>          
    </div>
  )
}

export default BoxList;