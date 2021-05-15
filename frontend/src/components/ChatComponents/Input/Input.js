import React, {Component, useState} from "react";

import "./Input.css";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";


const Input = ({message, setMessage, sendMessage}) => {
    const [text, setText] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);

    //state = {
    //    text: "",
    //    showEmoji: false
    //};

   const showEmojii = () => {
        if (showEmoji) {
            return (
                <Picker
                    title="Escolha o emoji"
                    onSelect={addEmoji}
                    style2={{position: "absolute", bottom: "80px", left: "20px"}}
                />
            );
        }
    }

    const onChange = (e) => {
        //this.setState({text: e.target.value});
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
        console.log(emoji.native);
        //this.setState({
        //    text: this.state.text + emoji.native
        //});
        setText(text + emoji.native)
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
    //const Input = ({setMessage, sendMessage, message}) => (
    return (
        <form2 className="form" onSubmit={() => onSubmit()}>
            {showEmojii}
            <input
                className="inputp2"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={({target: {value}}) => setMessage(value)}
                onKeyPress={(event) =>
                    event.key === "Enter" ? sendMessage(event) : null
                }

            />
            <button2
                style={{backgroundColor: "blue"}}
                onClick={e => onClickEmoji(e)}
            >
            </button2>
            <button2 className="sendButton" onClick={(e) => sendMessage(e)}>
                SEND
            </button2>
        </form2>

    );
}
export default Input;
