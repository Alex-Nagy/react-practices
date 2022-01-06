import React from 'react'

const Profile2 = () => {
    const user = {
        firstName: "Kobe",
        lastName: "Bryant"
    }

/*     
    const firstName = user.firstName;
    const lastName = user.lastName;
 */    

    const {lastName, firstName} = user;
    
    return <div>
    <h2>{firstName}</h2>
    <h2>{lastName}</h2>
    </div>
}

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

export default Profile2
