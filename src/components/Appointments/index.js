// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import CommentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: ' ', date: ' ', initialLst: []}

  gettitle = event => {
    this.setState({title: event.target.value})
  }

  getDate = event => {
    const instant = event.target.value
    console.log(format(new Date(instant, 'EEEE')))
    this.setState({date: event.target.value})
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      initialLst: prevState.initialLst.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isStarred: !eachContact.isStarred}
        }
        return eachContact
      }),
    }))
  }

  addbtn = event => {
    event.preventDefault()
    const {title, date} = this.state
    const {initialLst} = this.state
    const newItem = {
      id: uuidv4(),
      title,
      date,
      star:
        'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png',
      filled:
        'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png',
      isStarred: true,
    }
    const result = [...initialLst, newItem]
    this.setState({initialLst: result})
  }

  render() {
    const {title, date, initialLst} = this.state
    return (
      <div className="Card">
        <div className="hori">
          <div className="fhalf">
            <h1 className="heading">Add Appointments</h1>
            <label htmlFor="Title" className="lab">
              Title
            </label>
            <input
              id="Title"
              type="text"
              placeholder="title"
              value={title}
              className="input"
              onChange={this.gettitle}
            />
            <label placeholder="Date" htmlFor="date" className="lab">
              Date
            </label>
            <input
              placeholder="Date"
              id="date"
              value={date}
              type="date"
              className="input"
              onChange={this.getDate}
            />
            <button className="but" type="submit" onClick={this.addbtn}>
              Add
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
            alt="appointments"
            className="image"
          />
        </div>
        <hr className="line" />
        <div className="hedbtn">
          <h1 className="heading2">Appointments</h1>
          <button className="but2" type="button">
            Starred
          </button>
        </div>
        <ul className="items">
          {initialLst.map(each => (
            <CommentItem
              info={each}
              key={each.id}
              change={this.toggleIsFavorite}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Appointments
