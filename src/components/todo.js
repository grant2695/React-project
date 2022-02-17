import React from "react";

const Todo = ({text, todos, setTodos , todo}) =>{
    const deleteHandler = ()=>{
        setTodos(todos.filter((el)=> el.id !== todo.id ));
        
    }
    const completeHandler = () => {
        setTodos(todos.map(function(item){
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed,
                }
            }
            return item;
        }))
    }
          
    return(

        <div>
        <div className={'flex justify-between px-4 mt-1 bg-gray-100'}>
<div>
  <span className={`ml-2 text-sm font-semibold ${todo.completed ? "completed" : " "}`}>{text}</span>
</div>
<div>
<button onClick={completeHandler}><i className="fa-solid fa-circle-check text-blue-500 p-1"></i></button>
    <button onClick={deleteHandler} ><i className="fa-solid fa-trash text-sm text-red-500 p-1"></i></button>
   

                
    
    </div>
        </div>
            </div>
     
    )
    
}
export default Todo;