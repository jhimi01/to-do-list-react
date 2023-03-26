import { useState } from 'react';
import './App.css';
import Common from './component/Common/Common';

function App() {

  const [inputlist, setInputList] = useState('');
  const [items, setItems] = useState([]);
  const ItemEvent = (event)=> {
    setInputList(event.target.value);
    console.log(event.target.value);
  }
  
  // onclick event
  const listitemadd= () =>{
    setItems((olditems) => {
      return [...olditems, inputlist]
    })
    setInputList('');
  }


  // keyPress events
  const handleKeyPress = (event) =>{
    if (event.key === 'Enter'){
      console.log('added item by keypress')
      setItems((olditems) => {
        return [...olditems, inputlist]
      })
      setInputList('');
    } 
  }
  const deleteItem = (id) =>{
    setItems((olditems) => {
      return olditems.filter((olditem, index) => {
        return index !== id;
      })
    })
     }
  return (
    <div className="App">
     <div className="main_div">
      <div className="center_div">
      <div className="searching_section">

       <h1>To Do List</h1>
       <input type="text" placeholder='add a Item' onKeyPress={handleKeyPress} value={inputlist} onChange={ItemEvent}/>
       <button onClick={listitemadd}>+</button>
      </div>
       
       <ol>
       {
        items.map((item, index) => <Common text={item} id={index} key={index} onSelect={deleteItem}></Common>)
       }
       </ol>

         
       
      </div>
     </div>
    </div>
  );
}


export default App;
