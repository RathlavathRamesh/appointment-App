// Write your code here
import './index.css'
import {Component} from 'react'

class CommentItem extends Component {
  render() {
    const {info} = this.props
    const {title, date, star, filled, isStarred, change, id} = info
    const img = isStarred ? filled : star
    const changestar = () => {
      change(id)
    }
    return (
      <li className="item">
        <div className="star">
          <h1 className="hed">{title}</h1>
          <button
            data-testid="star"
            type="button"
            className="starbutton"
            onClick={changestar}
          >
            <img src={img} alt="star" className="stars" />
          </button>
        </div>
        <p className="date">{date}</p>
      </li>
    )
  }
}
export default CommentItem
