import React from 'react';

const BlocInfo = ({Title1 , text1 , Title2 , text2}) => {

    return (
        <div className='info'>
            <div className="top-bloc-info">
                <h2>{ Title1 }</h2>
                <div className="text-content">
                    { text1 }
                </div>
            </div>
            <div className="bottom-bloc-info">
                <h2>{ Title2 }</h2>
                <div className="text-content">
                    { text2 }
                </div>
            </div>
        </div>
    );
};

export default BlocInfo;