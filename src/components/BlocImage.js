import React from 'react';

const BlocImage = ({ img }) => {
    return (
        <div className='image-body'>
            <div className="img-content">
                <img src={ img } alt="" />
            </div>
        </div>
    );
};

export default BlocImage;