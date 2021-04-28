import React, { useState } from 'react'
import imgPlaceholder from "../../assets/placeholder.jpeg"
import ImgUpload from './ImgUpload';

export default function UserProfile(props) {
    const [userForm, setUserForm]= useState({
        name:"",
        email:"",
        bio:"",
        image: imgPlaceholder
    });

    const change= ({target:{name, value}}) =>{
        setUserForm({...userForm, 
        [name]: value,
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <img className="img" src={userForm.image} alt=""/> <br/>
                <ImgUpload uploadImg={change}/>
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
               <button type="submit">Save Changes </button>
            </form>
            
        </div>
    )
}
