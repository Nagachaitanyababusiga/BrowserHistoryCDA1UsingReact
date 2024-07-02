import './index.css'

const HistoryComponent = props => {
  const {id, timeAccessed, key, logoUrl, deleteEle, title, domainUrl} = props
  const deleteItem = () => {
    console.log(id)
    deleteEle(id)
  }
  console.log(id)
  console.log(key)
  return (
    <li className="historyItem">
      <p className="timer">{timeAccessed}</p>
      <div className="new-one">
        <div className="middler">
          <img className="logo-icon" alt="domain logo" src={logoUrl} />
          <p className="website-name">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>

        <button
          className="delete-button"
          onClick={deleteItem}
          data-testid="delete"
          type="button"
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryComponent
