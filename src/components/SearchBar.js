import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };

    // this next method must be an (ES15) ARROW FUNCTION to automatically bind this otherwise state will not work
    onFormSubmit = event => {
        event.preventDefault();

        // to reference props in a class use this.props
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label>Image search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
