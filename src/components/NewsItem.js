import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;  
    return (
      <div className = "my-3">
        <div className="card">
            <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2021/06/2021-06-10T144821Z_1_LYNXNPEH590RY_RTROPTP_4_IMF-WORLDBANK-OUTLOOK-653x435.jpg":imageUrl} className="card-img-top" alt="Unknown image"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
