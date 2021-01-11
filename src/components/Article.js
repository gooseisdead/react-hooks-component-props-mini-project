import React from 'react';
import Emoji from '../components/Emoji'

function Article({ title, date = "January 1, 1970", preview, time }) {

    return (
        <>
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <Emoji min={time}/> 
        </article>
        </>
    )

}

export default Article;