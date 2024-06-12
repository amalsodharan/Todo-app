import './App.css';
import { useState } from 'react';
function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  const deleteTodo = (idToDelete) => {
    setTodos(toDos.filter((todo) => todo.id !== idToDelete));
  };
  return (
    <div className="App">
      <div className="top">
        <h1>ToDo List</h1>
        <h3>Whoop,it's Wednessday</h3>
      </div>
      <div className="">
        <input type="text" value={toDo} onChange={(e)=>setTodo(e.target.value)} className='box' name="" id="" placeholder='Add Item' />&nbsp;
        <input type="button" onClick={()=>setTodos([...toDos,{ id:Date.now(), text : toDo,status : false}])} className='adBtn' value="Add" />
        <br /><br />
      </div>
      <div className="ctop">
        {  toDos.map((obj)=>{

        return(
          <center>
        <div className="cmain"><br />
          <div className="ctop1">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(obj);
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} type="checkbox" value={obj.status} className='cbox' name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="ctop2">
          
            <input type="button" onClick={()=>deleteTodo(obj.id)} className='cbox2' value="Delete" /><br /><br /><br />
          </div>
        </div> 
        </center>)   })  }
        {toDos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
    </div>
  );
}

export default App;
