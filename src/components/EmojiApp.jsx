import React, { useRef } from 'react';
import EmojiPicker from "./EmojiPicker";

const EmojiApp = () => {
    const refInput = useRef(null)

  return (
    <div>
        <input ref={refInput} type='text'></input>
        <EmojiPicker ref={refInput}/>
    </div>
  )
}

export default EmojiApp;