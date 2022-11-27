import {Component} from 'react'
import SuggestionsItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  getSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  insertSearch = (id, suggestion) => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="search-container">
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <input
            className="search-input"
            type="search"
            placeholder="Search Google"
            onChange={this.getSearchInput}
            value={searchInput}
          />
        </div>
        <ul className="suggestions-container">
          {searchResult.map(eachSug => (
            <SuggestionsItem
              suggestionDetails={eachSug}
              key={eachSug.id}
              insertSearch={this.insertSearch}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
