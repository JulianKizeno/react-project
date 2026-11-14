import React from 'react'
import md5 from 'md5'

function Gravatar (props){
    const email = props.email
    const hash = md5(email)

    return(
        <img 
            src={`https://www.gravatar.com/avatar/${hash}?s=500&d=identicon`} 
            alt={props.imgAlt} 
            className={props.className}
        />
    )
}

export default Gravatar