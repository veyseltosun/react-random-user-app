import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import emailSvg from "./assets/email.svg";
import phoneSvg from "./assets/phone.svg";
import locationSvg from "./assets/location.svg";

 



function App() {
  const[user, setUser] = useState();
  
  const url = "https://randomuser.me/api/"
  
  const getData = () =>{
    axios.get(url)
    .then(function (response) {
    
      
    
     console.log(response.data.results);
     console.log(response.data.results[0].email);
     setUser(response.data.results)
     
     
    });
  }

  useEffect(()=>{
    getData()
   
  },[])

  return (
    <div className="App">
     

      {user?.map((person, index) => {
        return(

          <div key={index} className="card-container">
            <div className='header-container'>
              <img src={person.picture.large} alt="user pic"  />
              <p className="header" >{person.name.title} {person.name.first} {person.name.last}</p>
            </div>
            <div className='email-container'>
              <img src={emailSvg} alt="email icon" className='icon'/>
              <p className='email' >{person.email}</p>
            </div>
            <div className='phone-container'>
              <img src={phoneSvg} alt='icon phone' className='icon'/>
              <p className='phone-number' >{person.phone}</p>
            </div>
            <div className='location-container'>
              <img src={locationSvg} className='icon'/>
              <p className='location'>{person.location.state} {person.location.country}</p>
            </div>
            <div className='age-container'>
              <p className='age'>Age:{person.dob.age}</p>
            </div>
            <div className='registered-container'>
              <p className='registered'>Resgister Date:{person.registered.date.slice(0,10)}</p>
            </div>
          </div>
        
        )

      })}

      <button onClick={getData}>Radom User</button>



    </div>
  );
}

export default App;
