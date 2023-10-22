import React from 'react';

const Loading = () => {
    return (
        <div className='flex  justify-center items-center align-middle'>
                <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
                </div>
        </div>
    );
};

export default Loading;