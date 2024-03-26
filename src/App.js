
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [fact,setfact]=useState([]);
  const fetchdata=()=>{
    axios.get("https://api.quotable.io/random").then((res)=>{
      setfact([res.data]);
    });
  }
    useEffect(()=>{
      fetchdata();
    },[]);
  

 
  return (
    <div className="App">
     <button onClick={fetchdata}>change the quotes</button>
     {fact.map((data,key)=>(
        <div>
          {data.content}
          {data.author}
        </div>   
     )
     )}
    </div>
  );
}

export default App;
