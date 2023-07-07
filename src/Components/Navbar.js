import React, { Component,useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  static propTypes = {

  }

  state = {
      query: "",
  };
  
//   setQuery = (query) => {
//       this.setState({ query: query });
//       console.log(query)
//     };
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {

    return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
            <img src="./news_logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-3"/>
                <a className="navbar-brand" href="/">NewsApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item"> 
                            <Link className="nav-link" to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                    
                    </ul>
                        <form className="form-inline my-2 my-lg-0 ms-auto" onSubmit={this.handleSubmit}>
                        <input className="form-control mr-sm-2" type="search" value={this.state.value} onChange={this.handleChange} placeholder="Search" aria-label="Search"/>
                        </form>
                        <Link to = "/search">
                            <button type="button" className="btn btn-primary mx-3">Search</button>
                        </Link>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
