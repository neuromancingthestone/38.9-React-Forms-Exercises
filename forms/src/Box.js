import "./Box.css"

const Box = ({id, color, width, height, remove}) => {
  return (
    <div 
      className='Box'
      id={id}
      style={{
        backgroundColor: color,
        width: width,
        height: height
      }}>
      <button onClick={remove}>X</button>
    </div>
  )
}

export default Box;