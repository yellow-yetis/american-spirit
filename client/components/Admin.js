import React from 'react';
// import { fetchUsers } from '../../store/admin';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Admin extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin Tools</h1>
        <Link to='/users'>View All Users</Link>
        <div></div>
        <Link to='/admin/createproduct'>Create New Product</Link>
        <div></div>
        <Link to='/admin/products'>Edit Products</Link>
      </div>
    );
  }
}

export default connect(null, null)(Admin);
