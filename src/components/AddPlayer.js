// Add Player Form
import React, { useState } from "react";

const AddPlayerForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // console.log("What is name? ", name);

  const onSubmitForm = event => {
    // When using the onSubmit of a <form> tag, this prevents
    // the page from reloading
    event.preventDefault();

    if (!name || !age) {
      window.alert("Hey fill in the entire form!");
    } else {
      props.onCreateNewPlayer(name);
      setName("");
      setAge(0);
    }
  };

  return (
    <div style={{ marginTop: 40, border: "1px solid white", padding: 20 }}>
      <form onSubmit={onSubmitForm}>
        <div>
          <label>New player name:</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={event => {
              console.log("Event value", event.target);
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type='number'
            name='age'
            value={age}
            onChange={event => setAge(event.target.value)}
          />
        </div>
        <div>
          <button type='submit'>Create!</button>
        </div>
      </form>
    </div>
  );
};

export default AddPlayerForm;
