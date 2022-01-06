import React from 'react'

const Profile = _ => {
    const names = ["Timi","Péter","László", "Gergő"]
    const [timi, peter, laszlo] = names;
    
    return <div>
        <h2>{timi}</h2>
        <h2>{peter}</h2>
        <h2>{laszlo}</h2>
        </div>
}

export default Profile
