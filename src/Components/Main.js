import React from 'react'
import {Provider} from '../Context';
import AllUsers from './GetUsers';
import AddUser from './AddUser';
import Actions from '../Actions/Actions';

export class Main extends Actions {
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
            <div class="page-title-area">
              <div class="row align-items-center">
                <div class="col-sm-6">
                  <div class="breadcrumbs-area clearfix">
                    <h4 class="page-title pull-left">React WITH PHP</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-content-inner">
              <div class="row">
                <div class="col-12 mt-5">
                <AddUser/>
                  <div class="card">
                    <div class="card-body">
                      <h4 class="header-title">Data</h4>
                      <div class="data-tables">
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

export default Main
