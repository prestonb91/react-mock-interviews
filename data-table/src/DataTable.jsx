import { useState, useEffect } from "react";
import users from "./data/users.json";

export default function DataTable() {
  const [message, setMessage] = useState("Data Table");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [pageResult, setPageResult] = useState(5);

  const totalPages = Math.ceil(users.length / pageResult);

  useEffect(() => {
    const start = (page - 1) * pageResult;
    const end = start + pageResult;
    const filtered = users.slice(start, end);
    setFilteredUsers(filtered);
  }, [page, pageResult]);

  const pageResultChange = (e) => {
    setPageResult(Number(e.target.value));
  };

  return (
    <div>
      <h1>{message}</h1>
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <select onChange={pageResultChange}>
          <option value="5">Show 5</option>
          <option value="10">Show 10</option>
          <option value="15">Show 15</option>
        </select>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <div>
          Page {page} of {totalPages}
        </div>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
