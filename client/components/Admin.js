import React from 'react';
// import { fetchUsers } from '../../store/admin';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CreateProduct from './adminComponents/CreateProduct';
import EditProduct from './adminComponents/EditProduct';
import UpdateProducts from './adminComponents/UpdateProducts';

export class Admin extends React.Component {
  render() {
    return (
      <div>
        <Link to='/users'>View All Users</Link>
        <CreateProduct />
        <UpdateProducts />
        {/* <EditProduct /> */}
      </div>
    );
  }
}

export default connect(null, null)(Admin);
