import React, { useState, useEffect } from 'react'
import "../css/Banner.css";
import Typist from "react-typist";



function Banner() {

    const [count, setCount] = useState(1);

    useEffect(() => {
    setCount(1);
    }, [count]);

    return (
        <div>
            <p className="PBanner2">Learn</p>
            <p className="PBanner">anywhere</p>
            {count ? (
            <Typist avgTypingDelay={150} onTypingDone={() => setCount(0)}>
            <span className="PBanner"> Share anything</span>
            </Typist>
                ) : (
                ""
                )}
        </div>
    )
}

export default Banner