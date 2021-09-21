import React from 'react';
import Iframe from 'react-iframe';

const LiveStream = () => { 
    return (
    <div>
        <Iframe url="http://www.youtube.com/embed/sMm124bvxWU"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
    )
};

export default LiveStream;