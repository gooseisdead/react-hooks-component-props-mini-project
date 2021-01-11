import React from 'react';

function Emoji({ min }) {

    //work in progress, maybe barking up wrong tree, but close
    //needs a forEach method somewhere? hmmmm

    const covfefe = "☕️"
    const bento = "🍱"

    if (min <= 30) {
        return <p>{covfefe} {min} min read</p>
    } else {
        return <p>{bento} {min} min read</p>
    }
}

export default Emoji;