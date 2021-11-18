import React from 'react';
import { fetchUsers } from '../../store/admin';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AllUsers extends React.Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return (
      <div>
        <h1>All Users</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Access Type</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.isAdmin ? 'Admin' : 'Customer'}</td>
                  <td>
                    <button>Update Access</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.admin.users,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapState, mapDispatch)(AllUsers);
