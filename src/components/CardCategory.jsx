import React, { useState } from 'react'
import '../css/TestCategory.css'
import { Link } from 'react-router-dom';

const CardCategory = ({id,urlPhoto,sub_name,description}) => {

    return (
        <div className="container">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <div className="img-subcategory">
                            <img src={urlPhoto} alt="about category group"/>
                        </div>
                            <h3>{sub_name}</h3>
                    </div>
                </div>
                        <div className="face face2">
                            <div className="content">
                                <p>{description}</p>
                                <Link  to={`/timeline/${sub_name}`} >Read More</Link>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default CardCategory


