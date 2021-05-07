import React, { useState } from 'react';
import './App.css';
 
function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const getUserList = () => {
    setLoading(true);
    fetch('http://timeapi.kaaylabs.com/api/v1/project_view/')
      .then(res => res.json())
      .then(res => {
        setUserList(res.data);
        setLoading(false);
      });
  }
 
  return (
    <div className="container App">
 
      <h4 className="d-inline-block">Clue Mediator</h4>
      <button
        className="btn btn-info float-right"
        onClick={getUserList}
        disabled={loading}>
        {loading ? 'Loading...' : 'Get User List'}
      </button>
      <div className="clearfix"></div>
 
      <table class="table mt-3">
        <thead class="thead-dark">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </thead>
        <tbody>
          {userList.map(x => <tr>
            <td>{x.first_name}</td>
            <td>{x.last_name}</td>
            <td>{x.email}</td>
            <td><img src={x.avatar} width="50" height="50" /></td>
          </tr>)}
          {userList.length == 0 && <tr>
            <td className="text-center" colSpan="4">
              <b>No data found to display.</b>
            </td>
          </tr>}
        </tbody>
      </table>
 
    </div>
  );
}
 
export default App;