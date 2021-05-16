import React, {Component, useState} from "react";
import { useHistory } from "react-router-dom";

import "./Input.css";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import events from "../../../pages/events/EventsCard";


const Input = ({message, setMessage, sendMessage}) => {
    const [text, setText] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);

    const showEmojii = () => {
        if (showEmoji) {
            return (
                <Picker
                    title="Emoji"
                    onSelect={addEmoji}
                    style={{ position: 'absolute', bottom: '20px', right: '20px' }}
                    i18n={{ search: 'Search', categories: { search: 'Search Results', recent: 'Recents' } }}

                />
            );
        }
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

   const onSubmit = (e) => {
        e.preventDefault();
        //this.setState({text: ""});
        //this.setState({showEmoji: false});
        //this.props.sendMessage(this.state.text);
       setText("")
       setShowEmoji(false)
       sendMessage(text)
   }

    const addEmoji = (emoji) => {
        console.log("ADD EMOJII", message + emoji.native);

        setText(message + emoji.native)
        setMessage(message + emoji.native)
        //sendMessage(text + emoji.native)
        setShowEmoji(false)
    };

    const onClickEmoji = (e) => {
        e.preventDefault();
        console.log("teste");
        if (showEmoji) {
            //this.setState({showEmoji: false});
            setShowEmoji(false)
        } else {
            //this.setState({showEmoji: true});
            setShowEmoji(true)
        }
    }


        const history = useHistory();

        const changeRoute = () =>{
            history.push('events');
        }


        return (
        <form2 className="form" onSubmit={() => onSubmit()}>
            {showEmojii()}
            <input
                className="inputp2"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={({target: {value}}) => setMessage(value)}
                onKeyPress={(event) =>
                    event.key === "Enter" ? sendMessage(text) : null
                }

            />
            <button
                className="sendButton"
                onClick={() => onClickEmoji()}
            >
                Emoji
            </button>
            <button className="sendButton" onClick={() => sendMessage(text)}>
                SEND
            </button>


    <button type="button" className='sendButton' onClick= {changeRoute}>
        Leave Chat
    </button>

        </form2>


    );
}
export default Input;
