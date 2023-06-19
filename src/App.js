import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import './style.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');
  const setKey = (key, id) =>{
    setData(data.map( item =>{

      if (item.id === id){
        return {
          ...item,
          [key]: !item[key]
        }       
      } else{
        return item
      }
    }))

  }

  useEffect(()=>{

    switch(status) {

      case 'completed' : {
        return  setTodoList(data.filter(item =>{
          return !item.deleted && item.completed
        }))
      }

      case 'active' : {
        return  setTodoList(data.filter(item =>{
          return !item.deleted && !item.completed
        }))
      }
      case 'cart' : {
        return  setTodoList(data.filter(item =>{
          return item.deleted
        }))
      }

      default :{
        setTodoList(data.filter(item =>{
          return !item.deleted
        }))
      }

    }
  }, [data, status])

  return (
    <div className="todo">

      <Header data={data} setData={setData}/>
      <Main status={status} setKey={setKey} todoList={todoList} />
      <Footer todoList={todoList} status={status} setStatus={setStatus} />

    </div>
  );
}

export default App;
