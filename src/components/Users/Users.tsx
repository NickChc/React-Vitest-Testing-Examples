import axios from "axios";
import { useEffect, useState } from "react";

interface TUser {
  username: string;
  age: number;
  id: string | number;
}

export function Users() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [error, setError] = useState<null | string>(null);

  async function getUsers() {
    setError(null);
    try {
      const res = await axios.get("https://dummyjson.com/users");
      setUsers(res.data.users);
    } catch (err: any) {
      console.log(err.message);
      setError("Error fetching users");
    }
  }

  useEffect(() => {
    setError(null);
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <div className="destructive-text">{error}</div>}
      <ul className="user-list">
        {users.map((user) => {
          return <li key={user.id}>{user.username}</li>;
        })}
      </ul>
    </div>
  );
}
