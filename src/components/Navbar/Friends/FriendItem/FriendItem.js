import React from 'react';

const FriendItem = (props) => {
    return (
        <div>
            <img style={
                {
                    width: '30px',
                    border: '1px solid black',
                    borderRadius: '50%',
                    marginRight: '10px'
                }
            } src={props.img} alt=""/>
            <span>{props.name}</span>
        </div>
    );
};

export default FriendItem;