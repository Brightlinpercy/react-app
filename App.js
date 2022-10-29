import React, { useState, useEffect } from 'react';
import axios from 'axios';
const App = () => {
  const [userList, setUserList] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('https://randomuser.me/api')
    .then((res) => {
      console.log(res.data.results);
      setUserList(res.data.results);
      
    })
    .catch((err) => {
      console.log(err);
    });
};

function refreshPage() {
  window.location.reload(false);
}


return(
  <div className="container-fluid p-3">
    <button type="button"
      style={{ width: "120px", height: "30px" }}
      onClick={refreshPage}
    >
      Refresh
    </button>

    <table className="table table-sm mt-3">
      <thead className="thead-dark">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Avatar</th>
      </thead>
      <tbody>
        {userList .map((user) => (
          <tr>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.email}</td>
            <td>
              <img src={user.picture.thumbnail} width="50" height="50" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

};
export default App;
