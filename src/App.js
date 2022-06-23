import './App.css';
import { useState } from 'react';

import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Button } from 'antd';
import Oups from './components/Oups';

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [nameToSearch, setNameToSearch] = useState('');
  const [displayAddFoodForm, setDisplayAddFoodForm] = useState(false);
  const addFood = (food) => {
    setFoods([...foods, food]);
  };
  const deleteItem = (name) => {
    setFoods(foods.filter((food) => food.name != name));
  };
  const toggleDisplayAddFoodForm = () => {
    setDisplayAddFoodForm(!displayAddFoodForm);
  };

  return (
    <div className="App">
      {displayAddFoodForm && <AddFoodForm addFood={addFood} />}
      <Button onClick={() => toggleDisplayAddFoodForm()}
        class={displayAddFoodForm ? 'displayHideButton red' : 'displayHideButton blue'}>
        {displayAddFoodForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      <Search nameToSearch={nameToSearch} setNameToSearch={setNameToSearch} />
      <h2>Food List</h2>
      {foods.length===0 && <Oups/>}
      <ul className="list">
        {foods
          .filter((food) => {
            return nameToSearch != '' ? food.name === nameToSearch : true;
          })
          .map((item, i) => {
            item.deleteItem = deleteItem;
            return <FoodBox key={item.name} {...item} />;
          })}
      </ul>
    </div>
  );
}

export default App;
