import React from 'react';
// import { fetchUsers } from '../../store/admin';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateProduct from './adminComponents/CreateProduct';

export class Admin extends React.Component {
  render() {
    return (
      <div>
        <Link to='/users'>View All Users</Link>
        <CreateProduct />
      </div>
    );
  }
}

export default connect(null, null)(Admin);
