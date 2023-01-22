import React from 'react';

const BlocImage = ({ img }) => {
    return (
        <div className='image-body'>
            <div className="img-content">
                <img className='img' src={ img } alt="chipadi padoum" />
            </div>
        </div>
    );
};

export default BlocImage;