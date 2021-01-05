import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../Results";

import '../../CSS/Results.css'

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2 className="saved-books">Here your saved books.</h2>
                <Results books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;