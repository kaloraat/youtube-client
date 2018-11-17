import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Search"
                        autoFocus
                        value={this.state.term}
                        onChange={event =>
                            this.onInputChange(event.target.value)
                        }
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;
