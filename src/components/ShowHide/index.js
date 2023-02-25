// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, LastName: false}

  firstNameClick = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  LastNameClick = () => {
    this.setState(prevState => ({LastName: !prevState.LastName}))
  }

  render() {
    const {firstName, LastName} = this.state
    return (
      <div className="bg">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              onClick={this.firstNameClick}
              className="button"
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.LastNameClick}
            >
              Show/Hide Lastname
            </button>
            {LastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
