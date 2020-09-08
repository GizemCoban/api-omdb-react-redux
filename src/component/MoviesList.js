import React, {Component} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {
    Table,
    Input,
    Button,
    Container,
    Pagination,
    Dropdown
} from "semantic-ui-react";
import MoviesTable from "./MoviesTable";
import {connect} from 'react-redux';
import {MovieListCheck} from '../action/movieAction';


class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchMovies: "pokemon",
            activePage: 1,
            startItem: 0,
            endItem: 2,
            totalPage: 0,
            pageItem: 2,
            totalItem: 0,
        };
    }

    handlePaginationChange = (e, {activePage}) => {
        let oldPage = this.state.activePage;
        this.setState({activePage});
        let jumpItem = Math.abs(oldPage - activePage);
        if (oldPage > activePage) {
            // old page
            this.setState({
                startItem: this.state.startItem - jumpItem * this.state.pageItem,
                endItem: this.state.endItem - jumpItem * this.state.pageItem,
            });
        } else {
            this.setState({
                startItem: this.state.startItem + jumpItem * this.state.pageItem,
                endItem: this.state.endItem + jumpItem * this.state.pageItem,
            });
        }
        if (activePage === 1) {
            this.setState({
                startItem: 0,
                endItem: this.state.pageItem,
            });
        }
        let endPage = this.state.totalItem%this.state.pageItem;
        if (activePage === this.state.totalPage && endPage !== 0) {
            this.setState({
                startItem: this.state.totalItem - endPage, // 9 10 =>
                endItem: this.state.totalItem,
            });
        }
        if (activePage === this.state.totalPage-1) { // 10 =>
            this.setState({
                startItem: this.state.pageItem * activePage - this.state.pageItem,
                endItem: this.state.pageItem * activePage,
            });
        }
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.Movie.films.length > 0) {
            this.setState({
                totalPage: Math.ceil(nextProps.Movie.films.length / this.state.pageItem),
                totalItem: nextProps.Movie.films.length
            })
        }
    }

    onChangeSearch = (e) => {
        this.setState({
            searchMovies: e.target.value,
        });
    };
    onClickSearch = (e) => {
        e.preventDefault();
        this.props.MovieListCheck(this.state.searchMovies);
    };

    componentDidMount() {
        this.props.MovieListCheck(this.state.searchMovies);
    }

    moviesList() {
        return this.props.Movie.films.slice(this.state.startItem, this.state.endItem).map(function (obj, i) {
            return <MoviesTable obj={obj} key={i}/>;
        });
    }
    handleChange = (e, { value }) => {
        let val = parseInt(value);
        this.setState({
            pageItem: val,
            totalPage: Math.ceil(this.state.totalItem / val),
            startItem: 0,
            activePage: 1,
            endItem: val,
        })
    }

    render() {
        return (
            <Container style={{marginTop: "4em"}}>
                <form onSubmit={this.onClickSearch}>
                    <Input
                        className="InputDesing"
                        placeholder="Film Ara"
                        onChange={this.onChangeSearch}
                        value={this.state.searchMovies}
                    />
                    <Button
                        color="purple"
                        style={{float: "right"}}
                    >
                        Arama
                    </Button>

                </form>
                <Dropdown fluid selection placeholder='Select Number'
                          onChange={this.handleChange}
                          value={this.state.pageItem}
                          options={[
                              {key: '2', value: '2', text: '2'},
                              {key: '3', value: '3', text: '3'},
                              {key: '4', value: '4', text: '4'},
                              {key: '5', value: '5', text: '5'},
                              {key: '10', value: '10', text: '10'},
                          ]}/>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>IMDb ID</Table.HeaderCell>
                            <Table.HeaderCell>Filmin Adı</Table.HeaderCell>
                            <Table.HeaderCell>Yayınlandığı Tarih</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{this.moviesList()}</Table.Body>
                </Table>
                <Pagination
                    activePage={this.state.activePage}
                    onPageChange={this.handlePaginationChange}
                    totalPages={this.state.totalPage}
                />
            </Container>
        );
    }
}

const mapStateToProps = ({Movie}) => {
    return {
        Movie,
    };
};
const mapDispatchToProps = {
    MovieListCheck,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MoviesList)
);
