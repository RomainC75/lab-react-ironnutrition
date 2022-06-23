// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import {useState} from 'react'

import { Divider, Input } from 'antd';

// Iteration 5
function Search({nameToSearch,setNameToSearch}) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={nameToSearch} type="text" onChange={(event) => {setNameToSearch(event.target.value)}} />
    </>
  );
}

export default Search;
