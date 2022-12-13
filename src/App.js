import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';




function App() {
  const[data, setData] = useState(null);
  
  const url = "https://randomuser.me/api/"
  
  const getData = () =>{
    axios.get(url)
    .then(function (response) {
    
      
    
     console.log(response.data.results);
     console.log(response.data.results[0].email);
     setData(response.data.results[0])
     console.log(data);
    });
  }

  useEffect(()=>{
    getData()
    setData()
   
  },[])

  return (
    <div className="App">

      <div>{}</div>
      <div>name</div>
      <div>name</div>

     
    </div>
  );
}

export default App;
