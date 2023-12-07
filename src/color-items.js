const ColorItem = ({ color, setColor }) => <div onClick={setColor} className="color-item" style={{'--bg-color': color }}>Title </div>

export default ColorItem;