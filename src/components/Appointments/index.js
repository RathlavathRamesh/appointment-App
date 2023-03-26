// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
// import {format} from 'date-fns'
import CommentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: ' ', date: ' ', initialLst: [], starbtn: false}

  gettitle = event => {
    this.setState({title: event.target.value})
  }

  getDate = event => {
    this.setState({date: event.target.value})
  }

  changeLike = id => {
    console.log('rameshClicked')
    const {initialLst} = this.state
    this.setState({
      initialLst: initialLst.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    })
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
      isLiked: false,
    }
    const result = [...initialLst, newItem]
    this.setState({initialLst: result, title: '', date: ' '})
  }

  starbtn = () => {
    const {starbtn} = this.state
    this.setState({starbtn: !starbtn})
  }

  render() {
    const {title, date, initialLst, starbtn} = this.state
    console.log(title, date, initialLst)
    const filterd = starbtn
      ? initialLst.filter(each => each.isLiked === true)
      : initialLst
    return (
      <div className="bgContainer">
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
            <h2 className="heading2">Appointments</h2>
            <button className="but2" type="button" onClick={this.starbtn}>
              Starred
            </button>
          </div>
          <ul className="items">
            {filterd.map(each => (
              <CommentItem info={each} key={each.id} change={this.changeLike} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
