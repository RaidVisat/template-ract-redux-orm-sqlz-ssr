import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../../actions/index';
class UsersList extends Component{

    componentDidMount(){
        this.props.fetchUsers();
    }
    renderUsers(){
        //console.log('P',this.props);
        return this.props.users.map(user=>{
            return <li key={user.id}>{user.name}</li>
        });
    }
    render() {
        return (
            <div>
                Here's list users:
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}
const loadData = (store) => {
    return store.dispatch(fetchUsers());
};
const mapStateToProps = state =>({users: state.users});
export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
