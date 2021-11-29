const Search = (props) => {
    return(
        <form>
            <input type="search" placeholder="Enter a city name" onChange={props.handleChange}></input>
        </form>
    )
}

export default Search;