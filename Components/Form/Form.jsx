import { useEffect, useState } from "react";

export default function Form({ onNameChange, name }) {
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
          onChange={onNameChange}
        />
      </div>
    </form>
  );
}
