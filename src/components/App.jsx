import React from "react";
import { contacts } from "../contacts";
import Card from "../components/Card";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://avatars.githubusercontent.com/u/92537456?v=4" />
      {contacts.map((contact) => {
        return (
          <Card
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        );
      })}
    </div>
  );
}

export default App;
