import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsurl,author,timestamp}= this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imageUrl?"https://www.videomeme.in/wp-content/uploads/2022/12/1671998060722.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} at {new Date(timestamp).toGMTString()}</small></p>
                <a href={newsurl} target="_blank" className="btn btn-sm btn-primary" >Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
