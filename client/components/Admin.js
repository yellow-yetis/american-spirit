import React from 'react';
// import { fetchUsers } from '../../store/admin';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateProduct from './adminComponents/CreateProduct';
import EditProduct from './adminComponents/EditProduct';
import AdminProducts from './adminComponents/AdminProducts';

export class Admin extends React.Component {
  render() {
    return (
      <div>
        <Link to='/users'>View All Users</Link>
        <CreateProduct />
        <AdminProducts />
        {/* <EditProduct /> */}
      </div>
    );
  }
}

export default connect(null, null)(Admin);
