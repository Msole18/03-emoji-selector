import React, { useState } from 'react';
import { data as emojiList } from './data';
import EmojiButton from './EmojiButton';
import EmojiSearch from "./EmojiSearch";
import stylesCLasses from "./EmojiPickerContainer.module.css";


const EmojiPickerContainer = ( { onCLickEmoji } ) => {
    const [emojis, setEmojis] = useState(emojiList);
  

    const handleSearch = (e) => {
        const val = e.target.value.toLowerCase();
        if(!!val) {
            const search = emojiList.filter( emoji => {
                return (
                    emoji.name.toLowerCase().includes(val) ||
                    emoji.keywords.toLowerCase().includes(val)
                )
            });
            setEmojis(search);
        } else {
            setEmojis(emojiList);
        }
    }

    const handleClickEmoji = (emoji) => {
        onCLickEmoji(emoji)
    }

    return (
        <div className={stylesCLasses.emojiPickerContainer } >
            <EmojiSearch onSearch={handleSearch} />
            <div className={stylesCLasses.emojisList } >  
                {emojis.map( emoji => (
                    <EmojiButton 
                        key={emoji.symbol}
                        emoji={emoji} 
                        onClick={handleClickEmoji}
                    />
                ))}
            </div>
        </div>
    );
}

export default  EmojiPickerContainer;