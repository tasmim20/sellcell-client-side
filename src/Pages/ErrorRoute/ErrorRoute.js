import React from 'react';
import images from "../../assets/images/404in.jpg"

const ErrorRoute = () => {
    return (
        <div className='flex justify-center align-center'>
            <img src={images} alt="" />
        </div>
    );
};

export default ErrorRoute;