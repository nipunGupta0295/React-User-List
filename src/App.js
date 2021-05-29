import React, { useState } from 'react';
import User from './Components/User';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css'
function App() {
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(false);


  const clickHandler = () => {
    setLoader(true);
    fetch('https://reqres.in/api/users?page=1')
      .then(function (response) {
        let data = response.json();
        return data;
      }).then(function (data) {
        setLoader(false);
        setUsers(data.data);
      })
  }

  return (
    <div className='container'>

      <div className='navbar'>
        <p>Advertyzement</p>
        <button className='send-data' onClick={clickHandler}>Get Users</button>
      </div>

      <div className='loader'>
        {loader ? <Loader
          type="Puff"
          color="#00BFFF"
          height={400}
          width={400}
          timeout={3000} //3 secs
        /> : null}
      </div>
      
      <div className='user-list'>
        {users != null ? users.map((user, index) => {
          return <User id={index} userdata={user} />
        }) : null}
      </div>

    </div>
  );
}

export default App;
