import React from "react";

/* 
    function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return `
        ${this.firstName} ${this.lastName}
        `
    }
}
 */

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullname() {
    return `
    ${this.firstName} ${this.lastName}
    `;
  }
}

const Profile4 = () => {
  const newUser = new User("Gáspár", "Győző");
  console.log(newUser);

  return (
    <div>
      {newUser.fullname()}
    </div>
  );
};

export default Profile4;
