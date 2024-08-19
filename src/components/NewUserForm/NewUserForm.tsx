import { useState } from "react";

export function NewUserForm() {
  const [newName, setNewName] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        console.log(newName);
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button
        type="submit"
        role="button"
        disabled={newName.trim().length === 0}
      >
        Create
      </button>
    </form>
  );
}
