import { useState, useEffect } from "react";
import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  // handle changes
  const onChangeName = (name) => {
    setUsers(name);
  };
  console.log(users);
  return (
    <div className={`card ${inter.className}`}>
      <Form onChangeName={onChangeName} />
      {users.length > 0 ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
}
