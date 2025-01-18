import React from 'react';

const Element = (props) => {
    return (
        <div className="">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-pink-100 rounded-full">
                {props.svg}
            </div>
            <div>
                <h3 className="mt-8 text-lg font-semibold text-white">{props.title}</h3>
                <p className="mt-4 text-sm text-white/50">{props.description}</p>
            </div>

        </div>
    );
};

export default Element;