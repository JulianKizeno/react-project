import React, {useState, useMemo} from 'react'

import './styles/CardsList.css'
// import '../pages/styles/UserCardList.css'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'

// Custom Hook -----

// function useIncreaseCount(max){
//     const [count, setCount] = React.useState(0)
//     if(count > max){
//         setCount(0)
//     }
//     return [count, setCount]
// }
function useSearchBadges(badges){
    const [query, setQuery] = useState('')
    const filteredBadges = useMemo(() => badges.filter(badge =>
        `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    ), [badges, query])

    return {query, setQuery, filteredBadges}
}
function CardsList (props){
    // const [count, setCount] = useIncreaseCount(4)
    const badges = props.badges.slice(0).reverse()

    const {query, setQuery, filteredBadges} = useSearchBadges(badges)

    if(filteredBadges.length === 0){
        return(
            <div>
                <form className='CardList__form'>
                    <input 
                        type="text" 
                        value ={query}
                        onChange={(e)=>setQuery(e.target.value)} 
                        className='CardList__form--input' 
                        placeholder='Search Badge'
                    />
                </form>
                <h3>No Badges were found</h3>
            </div>
        )
    }

    return (
        <React.Fragment>
            <form className='CardList__form'>
                <input 
                    type="text" 
                    value ={query}
                    onChange={(e)=>setQuery(e.target.value)} 
                    className='CardList__form--input' 
                    placeholder='Search'
                />
            </form>

            {/* Custom Hook ----- */}

            {/* <div className="UserCardList__buttons-container">
                <button className='UserCardList__buttons-container--NewCardBtn' onClick={()=>{
                    setCount(count + 1)
                }}>Increase Count: {count}</button>
            </div> */}
            
            <ul className='CardsList__list'>
                {filteredBadges.map((newCard)=>{
                    return(
                        <li key={newCard.id} className='CardsList__list--item'>
                            <Link to={`/badges/${newCard.id}`} className='CardsList__link'>
                                <Card as='article' className='CardsList__content'>
                                    <Card.Body className='CardsList__content--text'>

                                        <p>{newCard.coverLetter}</p>
                                        <p style={{marginBottom: '1rem'}}>
                                            <i><strong>{newCard.firstName} {newCard.lastName}</strong></i> ~ {newCard.jobTitle}
                                        </p>
                                        <div className="CardsList__social-media">
                                            <span><a href={"mailto:" + newCard.email} target="_blank" rel="noreferrer"> <i className="far fa-envelope-open CardsList__social-media--icon mail-icon"></i></a></span>
                                            <span><a href={newCard.linkedin} target="_blank" rel="noreferrer"> <i className="fab fa-linkedin-in CardsList__social-media--icon lkIn-icon"></i></a> </span>
                                            <span><a href={newCard.gitHub} target="_blank" rel="noreferrer"> <i className="fab fa-github CardsList__social-media--icon github-icon"></i></a></span>
                                        </div>
                                    </Card.Body>
                                    <figure className='CardsList__content--fig'>
                                        <Gravatar 
                                            // src={newCard.cardImage} 
                                            email={newCard.email}
                                            alt={newCard.imgAlt} 
                                            className='CardsList__content--img'
                                        />
                                    </figure>
                                </Card>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
    
}

export default CardsList