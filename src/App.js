import React,{useState} from 'react';
import './App.css';

function App() {
  const [toDo,setTodo] = useState('')
  const [toDos,setTodos] = useState([])
  let [filter,setFilter] =useState('') 
  const remove = (id)=>{
    const newTodos = toDos.filter((obj)=>obj.id !==id )
    setTodos(newTodos)
  }
 

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List ..🌝 ☕</h1>
      </div>
      <div className="input mt-5">
        <input value={toDo} onChange={(e)=>{setTodo(e.target.value)}} type="text" autoFocus placeholder="🖊️ Add item..." />
        <i onClick={()=>{setTodos([...toDos,{id :Date.now()  ,text: toDo,Status: false }])}} className="fas fa-plus"></i>
      </div>
      <div className='d-flex justify-content-between pt-3'>
        <button id='all'  onClick={()=>{setFilter('all') 
           document.getElementById('all').className='active btn btn-outline-primary'   
           document.getElementById('complete').className=' btn btn-outline-primary'
           document.getElementById('pending').className=' btn btn-outline-primary' 
         }} className='btn btn-outline-primary '>All</button>

        <button id='pending' onClick={()=>{setFilter('pending')
         document.getElementById('pending').className='active btn btn-outline-primary'
         document.getElementById('all').className=' btn btn-outline-primary'
         document.getElementById('complete').className=' btn btn-outline-primary'
         }} className='btn btn-outline-primary'>pending</button>

        <button id='complete' onClick={()=>{setFilter('complete')
         document.getElementById('complete').className='active btn btn-outline-primary'
         document.getElementById('all').className=' btn btn-outline-primary'
         document.getElementById('pending').className=' btn btn-outline-primary'
        }} className='btn btn-outline-primary'>complete</button>

      </div>
      
      <div className="todos">
      {
        toDos.map((obj)=>{
         if (filter === "all" || filter === "" ) {
          return(
            <div className="todo">
            <div className="left">
              <input  type="checkbox" onChange={(e)=>{
                setTodos(toDos.filter(newObj=>{
                  if (newObj.id===obj.id) {
                    newObj.Status=e.target.checked;
                    document.getElementById('text').style.textDecoration='line-through'
                  }
                  return newObj
                }))
              }}value={obj.Status} checked={obj.Status} name="" id="" />
              <p className='mt-3' id='text'>{obj.Status=== true ? <p className='mt-3' style={{ textDecorationLine: 'line-through' }}>{obj.text}</p> : obj.text }</p>
            </div>
            <div className="right">
              <i onClick={()=>{remove(obj.id)}} className="fas fa-times"></i>
            </div>
          </div>  
          )
         } else if (filter === "pending" || filter === "complete" ) {
          let status = filter === 'complete' ? true : false ;
          if (obj.Status === status) {
           
            return(
              <div className="todo">
              <div className="left">
                <input  type="checkbox" onChange={(e)=>{
                  setTodos(toDos.filter(newObj=>{
                    if (newObj.id===obj.id) {
                      newObj.Status=e.target.checked;
                      document.getElementById('text').style.textDecoration='line-through'
                    }
                    return newObj
                  }))
                }}value={obj.Status} checked={obj.Status} name="" id="" />
                <p className='mt-3' id='text'>{obj.Status=== true ? <p className='mt-3' style={{ textDecorationLine: 'line-through' }}>{obj.text}</p> : obj.text } </p>
              </div>
              <div className="right">
                <i onClick={()=>{remove(obj.id)}} className="fas fa-times"></i>
              </div>
            </div>  
            )
          }
          
         }
         return null
        })
       
      }

         
      </div>
    </div>
  );
}

export default App;