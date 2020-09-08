import axios from "axios";
export const MOVIELIST_PENDING = "MOVIELIST_PENDING";
export const MOVIELIST_FULFILLED = "MOVIELIST_FULFILLED";
export const MOVIELIST_REJECTED = "MOVIELIST_REJECTED";

export const MOVIEDETAILLIST_PENDING = "MOVIEDETAILLIST_PENDING";
export const MOVIEDETAILLIST_FULFILLED = "MOVIEDETAILLIST_FULFILLED";
export const MOVIEDETAILLIST_REJECTED = "MOVIEDETAILLIST_REJECTED";

export function MovieListCheck2( searchMovies) {
    return (dispatch) => {
        dispatch({
            type: "MOVIELIST",
            payload: axios.get(
                `http://www.omdbapi.com/?s=${searchMovies}&apikey=db875066`
            ),
        });
        return Promise.resolve();
    };
}

export function MovieListCheck( searchMovies ) {
    return (dispatch) => {
        axios.get(`http://www.omdbapi.com/?s=${searchMovies}&apikey=db875066`)
            .then(r => {
                dispatch({
                    type: "MOVIELIST_FULFILLED",
                    payload: r.data.Search,
                })
            })
    };
}

export function MovieDetailList() {
    return (dispatch) => {
        dispatch({
            type: "MOVIEDETAILLIST",
            payload: axios.get(
                "http://www.omdbapi.com/?i=${this.props.match.params.imdbID}&apikey=db875066"
            ),
        });
    };
}