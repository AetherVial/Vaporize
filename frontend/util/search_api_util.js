export const search = query_string => {
    return $.ajax({
        method: "GET",
        url: "/api/searches/search",
        data: {query_string}
    })
}