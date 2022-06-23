// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import {useState} from 'react'

import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({addFood}) {
    const [ name, setName ] = useState('')
    const [image, setImage] =useState('http://fillmurray.com/200/200')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        console.log(name,image,calories,servings)
        addFood({
            name,image,calories,servings
        })
      }}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => {
        
        setName(event.target.value)
      }} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(event)=>{
        setImage(event.target.value)
      }}/>


      <label>Calories</label>
      <Input value={calories} type="number" onChange={(event)=>{
        setCalories(event.target.value)
      }}/>

      <label>Servings</label>
      <Input value={servings} type="number" onChange={(event)=>{
        setServings(event.target.value)
      }}/>

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
