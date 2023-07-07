import React, { Component } from 'react'

export class Searchres extends Component {
  render() {
    let {title,description,imageurl,newsurl,author,timestamp}= this.props;

    return (
            <div className="card mb-3">
            <img className="card-img-top" src={!imageurl?"https://www.videomeme.in/wp-content/uploads/2022/12/1671998060722.jpg":imageurl} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} at {new Date(timestamp).toGMTString()}</small></p>
                <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
    )
  }
}

export default Searchres
