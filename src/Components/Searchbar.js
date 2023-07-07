import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import Searchres from './Searchres';
export class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            articles: [],
            loading: false,
        }
        document.title  = `Search Results > ${this.capitalizeFirstLetter(
            this.props.query
          )}`;
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    async updateNews() {
        let url = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=a4923e759fd4470b9cf6224db0bb62d9`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

  render() {
    return (
        <>
        <h1 className='text-center'> NewsApp</h1>
        {this.state.loading && <Spinner />}
            <div className='container'>
                <div className='row'>

                    {this.state.articles.map((elements) => {

                        return <div key={elements.url}>
                            <Searchres title={elements.title} description={elements.description} imageurl={elements.urlToImage} newsurl={elements.url} author={elements.author} timestamp={elements.publishedAt} />
                        </div>
                    })}
                </div>
            </div>
    </>
    )
  }
}

export default Searchbar
