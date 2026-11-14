import React from 'react'

import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './styles/UserCard.css'
import Gravatar from '../components/Gravatar'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function UserCard (props){
    return (
        
        <div className='containerCard'>
            <Card as='article' className='containerCard__content'>
                {props.actions
                    &&
                    <div>
                        <Link to={`/badges/${props.id}/edit`} className='CardsList__link-actions'>
                            <div className='CardList__button-actions'>
                                <i className="far fa-edit"></i>                                            
                            </div>
                        </Link> 
                        <button className='CardsList__link-actions' onClick={props.onOpenModal}>
                            <div className='CardList__button-actions'>
                                <i className="far fa-trash-alt"></i>                                            
                            </div>
                        </button> 
                        <DeleteBadgeModal 
                            isOpen={props.isOpen} 
                            onClose={props.onCloseModal}
                            onDeleteBadge={props.onDeleteBadge}
                        />
                    </div>
                }
                <Card.Body className='containerCard__content--text'>
                    <p>{props.coverLetter}</p>
                    <p style={{marginBottom: '1rem'}}>
                        <i><strong>{props.firstName} {props.lastName}</strong></i> ~ {props.jobTitle}
                    </p>
                    <div className="containerCard__social-media">
                        <span><a href={"mailto:" + props.email}target="_blank" rel="noopener noreferrer"> <i className="far fa-envelope-open containerCard__social-media--icon mail-icon"></i></a></span>
                        <span><a href={props.linkedin} target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin-in containerCard__social-media--icon lkIn-icon"></i></a> </span>
                        <span><a href={props.gitHub} target="_blank" rel="noopener noreferrer"> <i className="fab fa-github containerCard__social-media--icon github-icon"></i></a></span>
                    </div>
                </Card.Body>
                <figure className='containerCard__content--fig'>
                    <Gravatar 
                        email={props.email} 
                        alt={props.imgAlt} 
                        className='containerCard__content--img'
                    />
                </figure>
            </Card>
        </div>
    ) 
    
}

export default UserCard 