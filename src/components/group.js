import React from 'react';

import GroupMember from './group-member';

const Group = (props) => {

    const groupMemberList = props.group.map((member, index) => {
        return (<li className="group__list--item" key={index}>
            <GroupMember
                fullname={member.fullname}
                incomingdepartureairport={member.incomingdepartureairport}
                incomingarrivalairport={member.incomingarrivalairport}
                incomingarrivaltime={member.incomingarrivaltime}
                incomingflightnum={member.incomingflightnum}
            // incomingdeparturelatitude={member.incomingdeparturelatitude}
            // incomingdeparturelongitude={member.incomingdeparturelongitude}
            // incomingarrivallatitude={member.incomingarrivallatitude}
            // incomingarrivallongitude={member.incomingarrivallongitude}
            />
        </li>);
    });

    return (
        <div className="group">
            {/* <p>Group Members</p> */}
            <ul className="group__list">
                {groupMemberList}
            </ul>
            <button className="group__button">Add traveler</button>
        </div>
    );
};

export default Group;