import React from 'react';
import { Icon } from 'semantic-ui-react';

const UserInfo = () => {
    return <div className="info user-info">
        <div className="text">
            <div className="name">Kautuk Kundan</div>
            <div className="email">kautukkundan@gmail.com</div>
        </div>
        <div className="avatar">
            <Icon name="user"/>
        </div>
    </div>
}

export default UserInfo;