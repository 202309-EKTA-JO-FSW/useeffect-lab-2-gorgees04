import { useEffect, useState } from "react";

export default function Form({ onChangeName }) {
  const [name, setName] = useState("");
  useEffect(() => {
    const fetchhData = async () => {
      const res = await fetch(`https://api.github.com/users`);
      const data = await res.json();
      if (name.length > 0) {
        const filteredData = data.filter((data) => data.login.startsWith(name));
        onChangeName(filteredData);
      } else {
        onChangeName(data);
      }
    };
    fetchhData();
  }, [name]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  if (name > 0) {
    const filteredData = nameData.filter((data) => data.login.startsWith(name));
    onChangeName(filteredData);
  }

  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          value={name}
          onChange={handleChangeName}
        />
      </div>
    </form>
  );
}
