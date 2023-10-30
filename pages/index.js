import { useState, useEffect } from "react";
import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (name) {
      fetch(`https://api.github.com/users/${name}`)
        .then((response) => response.json())
        .then((user) => {
          console.log(user);
          setUsers([user]);
        })
        .catch((error) => {
          console.error("Error fetching user data: " + error);
        });
    } else {
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((user) => {
          console.log(user);
          setUsers(user);
        })
        .catch((error) => {
          console.error("Error fetching user data: " + error);
        });
    }
  }, [name]);

  if (isLoading) return <p>Loading...</p>;

  // handle changes
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="card">
      <Form onNameChange={handleChangeName} name={name} />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
