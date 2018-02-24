import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
    //state a reserved object
    state = {
        usersArray: [
            {
                name: 'Cameliar'
            },
            {
                name: 'Janetto'
            }
        ],
        user: {
            name: 'Ben'
        }
    };

    //for function, don't have to define as a variable. So, const not needed
    clickToUpdateUserNameHandler = (replaceName) => {
        this.setState ({
            usersArray: [
                {
                    name: replaceName
                },
                {
                    name: 'Janetto'
                }
            ]
        })
    };

    //must always have setState when it comes to changing state
    updateUserNameOnChangeHandler = (event) => {
        this.setState({
            user: {
                    name: event.target.value
                }
        })
    };

    //for method reference, don't forget to .bind(this, 'theArgumentToUse')
  render() {
    return (
      <div className="App">
        <UserOutput clickToChange={this.clickToUpdateUserNameHandler.bind(this, 'JanetClick')} name={this.state.usersArray[0].name}/>
        <UserOutput name={this.state.usersArray[1].name}/>
        <UserInput namePlaceholder={this.state.user.name} changeAsType={this.updateUserNameOnChangeHandler}/>
      </div>
    );
  }
}

export default App;
