// Write your code here
import './index.css'
import {Component} from 'react'

class CommentItem extends Component {
  render() {
    const {info, change} = this.props
    const {title, date, star, filled, isLiked, id} = info
    const img = isLiked ? filled : star
    const changestar = () => {
      change(id)
    }
    return (
      <li className="item">
        <div className="star">
          <p className="hed">{title}</p>
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
