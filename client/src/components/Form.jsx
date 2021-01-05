import React from 'react'
import '../CSS/Form.css';

const Form = (props) => {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="search"><h2 className="title-input">Search for your favorite book and save if you like it:</h2></label>
                        <input
                            onChange={props.handleInputChange}
                            value={props.search}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search a Book"
                            id="search"
                            style={{width: "30%"}}
                        />
                        <button onClick={props.handleFormSubmit} className="btn-search mt-4">
                            Search
                            </button>
        </div>
            </form>
                </div>
    )
}

export default Form;