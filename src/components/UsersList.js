import React from 'react';
import {withRouter} from 'react-router'

const UsersList = (props) => {
    console.log(props);
    return (
        props.users.map(user => <div key={user.id}>{user.name}</div>)
    );
}

export default withRouter(UsersList);
