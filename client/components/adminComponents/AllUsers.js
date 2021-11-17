import React from 'react';
import { fetchUsers } from '../../store/admin';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AllUsers extends React.Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const userData = this.props.users.map((user) => {
      return (
        <div key={user.id}>
          {/* <button
            className='delete'
            type='button'
            onClick={() => this.props.deleteProject(project.id)}
          >
            X
          </button> */}
          {/* <Link to={`/projects/${project.id}`} key={project.id}>
            <h2>{project.title}</h2>
          </Link> */}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.isAdmin ? 'Admin' : 'Customer'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
    return (
      <div>
        <h1>All Users</h1>
        <div>{userData}</div>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log(state);
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
