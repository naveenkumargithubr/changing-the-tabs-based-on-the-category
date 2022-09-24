import './index.css'

const TabItem = props => {
  const {tabDetails, updateActveTabid, isActive} = props
  const {displayText, tabId} = tabDetails

  const changeTab = () => {
    updateActveTabid(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`} // passing a template className to the the button
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
