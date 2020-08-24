import React, { Component, Fragment } from 'react'
import axios from 'axios'



export class Stores extends Component {

  state = {
    stores: []
  }

  componentDidMount() {
    axios.get('/stores/api/store')
      .then(res => {
        const stores = res.data;
        this.setState({ stores });
      })
  }

  
  render() {
    return (
      <Fragment>
        <h1>Stores</h1>
        <table className="default">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Bio</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stores.map( store => (
              <tr key={store.id}>
                <td>{store.name}</td>
                <td>{store.shop_type}</td>
                <td>{store.bio}</td>
                <td>{store.Phone}</td>
                <td>{store.address}</td>
                <td><button className="btn btn-danger btn-sm">Profile</button></td>
                <td><button className="btn btn-default btn-sm">Edit</button></td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </Fragment>
    )
  }
}

export default Stores

