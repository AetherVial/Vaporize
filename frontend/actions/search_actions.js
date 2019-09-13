import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const receiveSearch = payload => {
    return {
        type: RECEIVE_SEARCH,
        payload
    }
}

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH,
    }
}

export const search = query_string => dispatch => {
    return SearchAPIUtil.search(query_string)
        .then(payload => {
            dispatch(receiveSearch(payload))
        });

}