import React from 'react'

const info = (props) => {
    return (
        <div className="info">
            <p>{props.provinceName}</p>
            <p>{props.casesReported? props.casesReported : ''}</p>
        </div>
    );
}

export default info