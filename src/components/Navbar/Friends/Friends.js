import React from 'react';
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
    return (
        <div
            style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                }
            }
        >
            {
                props.data.dialogData.map(v => <FriendItem img={v.img} name={v.name} id={v.id}/>)
            }
        </div>
    );
};

export default Friends;