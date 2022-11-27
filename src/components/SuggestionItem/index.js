import './index.css'

const SuggestionsItem = props => {
  const {suggestionDetails, insertSearch} = props
  const {id, suggestion} = suggestionDetails

  const addToSearch = () => {
    insertSearch(id, suggestion)
  }

  return (
    <li type="none" className="suggestion-item">
      <p>{suggestion}</p>
      <img
        onClick={addToSearch}
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionsItem
