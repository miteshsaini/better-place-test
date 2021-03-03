
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ScotchInfoBar from './ScotchInfoBar';


  function App() {
    const [users, setUsers] = useState(null);
  
    const fetchData = async () => {
      const response = await axios.get(
        'https://randomuser.me/api?page=1&results=20&gender=female&nat=AU'
      );
  
      setUsers([response.data]);
    };
  
    return (
      <div className="App">
        <h1>Users</h1>
        <h2>Fetch a list from an API and display it</h2>
  
        {/* Fetch data from API */}
        <div>
          <button className="fetch-button" onClick={fetchData}>
            Fetch Data
          </button>
          <br />
        </div>
  
        {/* Display data from API */}
        <div className="userss">
          {users && 
          users.map((user) => {
              // const cleanedDate = new Date(book.released).toDateString();
              const authors = user.name.join(' ');
  
              return (
                <div className="user">
                  
  
                  <div className="details">
                    <p>👨: {authors}</p>
                    <p>{user.gender}</p>
                    <p>🏘️:{user.country}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                  </div>
                </div>
              );
            })}
        </div>
  
        <ScotchInfoBar seriesNumber="7" />
      </div>
    );
  }

export default App;
