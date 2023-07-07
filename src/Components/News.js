import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        category: "general",
        pageSize: 1,
        country: "in"
    }
    static propTypes = {
        category: PropTypes.string,
        pageSize: PropTypes.number,
        country: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = this.props.category ? this.capitalizeFirstLetter(this.props.category) : "Top Headlines"
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    async updateNews() {
        //this.props.setProgress(20);
        //console.log(this.props.apiKey)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4923e759fd4470b9cf6224db0bb62d9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        //this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4923e759fd4470b9cf6224db0bb62d9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({ page: this.state.page + 1 });


        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,

        });
    };
    render() {
        return (
            <>
                <h1 className='text-center' style={{margin:"35px 0px", marginTop: "90px" }}> NewsApp</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className='container'>
                        <div className='row'>

                            {this.state.articles.map((elements) => {

                                return <div className='col-md-4' key={elements.url}>
                                    <NewsItem title={elements.title} description={elements.description} imageUrl={elements.urlToImage} newsurl={elements.url} author={elements.author} timestamp={elements.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News
