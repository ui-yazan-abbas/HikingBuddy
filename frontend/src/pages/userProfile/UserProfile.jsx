import React, { useState } from 'react'

export default function UserProfile(props) {
    const [userForm, setUserForm]= useState({
        name:"",
        email:"",
        bio:"",
        image:"image_url"
    });

    const change= ({target:{name, value}}) =>{
        setUserForm({...userForm, 
        [name]: value,
        });
    }

    return (
        <div>
            <form>
                <div>
                <label htmlFor="name-input">Name:</label>
                <input type="text" id="name-input" name="name"
                value={userForm.name} onChange={change}/>
                </div>
                <div>
                <label htmlFor="email-input">Email:</label>
                <input type="text" id="email-input" name="email"
                value={userForm.name} onChange={change}/>
                </div>
                <div>
                <label htmlFor="bio-input">Bio:</label>
                <input type="text" id="bio-input" name="bio"
                value={userForm.name} onChange={change}/>
                </div>
                <div>
                <label htmlFor="img-input">Bio:</label>
                <input type="text" id="img-input" name="img"
                value={userForm.name} onChange={change}/>
                </div>
            </form>
            
        </div>
    )
}
