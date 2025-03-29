import { useState, useEffect } from 'react'
import User from './User';
import './App.css'

const API_URL = "https://jsonplaceholder.typicode.com/users";
const RESULTS_PER_PAGE = 5;

function App() {

  const [userList, setUserList] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const fetchUsers = async () => {
    const response = await fetch(API_URL);
    const users = await response.json();

    const usersArray = [...users]
    const filteredUsers = usersArray.slice(0, RESULTS_PER_PAGE);

    setUserList(usersArray);
    setFilteredUsers(filteredUsers);
  }

  useEffect(() => {
    fetchUsers();
  },[])

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);

    if (searchValue === "") {
      setFilteredUsers(userList);
    } else {
      const filteredUsers = userList.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredUsers(filteredUsers);
    }
  }

  useEffect(() => {
    const startIndex = pageNumber * RESULTS_PER_PAGE;
    const endIndex = startIndex + RESULTS_PER_PAGE;

    const paginatedUsers = userList.slice(startIndex, endIndex);

    const filtered = searchValue 
      ? paginatedUsers.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
      : paginatedUsers;

    setFilteredUsers(filtered);
  },[pageNumber, searchValue, userList])

  return (
    <>
    <input
      placeholder='Search Name'
      value={searchValue}
      onChange={handleSearch}
    >
    </input>

    {filteredUsers.map((user) => 
        <User key={user.id} {...user}/>
      )
    }

    <button
      onClick={()=>setPageNumber(pageNumber - 1)}
      disabled={pageNumber===0}
    >Previous</button>
    <span>{pageNumber + 1}</span>
    <button
      onClick={()=>setPageNumber(pageNumber + 1)}
      disabled={userList.length <= RESULTS_PER_PAGE * (pageNumber + 1)}
    >Next</button>
    </>
  )
}

export default App
