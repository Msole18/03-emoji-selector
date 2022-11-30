import React, { useState } from 'react';
import { data as emojiList } from './data';
import EmojiSearch from "./EmojiSearch";


const EmojiPickerContiner = () => {
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

    return (
        <div>
            <EmojiSearch onSearch={handleSearch} />
            
            <div>
                {emojis.map( emoji => (
                    <div key={emoji.symbol}>{emoji.symbol}</div>
                ))}
            </div>
        </div>
    );
}

export default  EmojiPickerContiner;