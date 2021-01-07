import React from 'react';
import {Provider} from './Context';
import AllUsers from './Components/GetUsers';
import AddUser from './Components/AddUser';
import Actions from './Actions/Actions';

class App extends Actions {
  render(){
    const contextValue = {
        all_users:this.state.users,
        get_users:this.fetchUsers,
        editMode:this.editMode,
        cancelEdit:this.cancelEdit,
        handleUpdate:this.handleUpdate,
        handleDelete:this.handleDelete,
        insertUser:this.insertUser
    }
    return (
      <Provider value={contextValue}>
        <div className="container-fluid bg-light">
              <div className="container p-5">
                  <div className="card shadow-sm">
                      <h1 className="card-header text-center text-uppercase text-muted">React WITH PHP</h1>
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-12">
                                  <AddUser/>
                              </div>
                              <div className="col-md-12">
                                <AllUsers/>
                              </div>
                          </div>
                      </div>
                  </div>
      
              </div>
              </div>
      </Provider>
    );
  }
}

export default App;