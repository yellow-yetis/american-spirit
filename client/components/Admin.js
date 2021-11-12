import React from 'react';
import { fetchUsers } from '../store/admin';
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
          <ul style={{ listStyle: 'none' }}>
            {this.props.users.map((user) => {
              return (
                <li key={user.id}>
                  <div>
                    <h2>
                      {user.id}. {user.username}
                    </h2>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapState, mapDispatch)(AllUsers);
