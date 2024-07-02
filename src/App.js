import './App.css'
import {Component} from 'react'
import HistoryComponent from './Components/HistoryComponent'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {initialList: initialHistoryList, searchInput: ''}

  filterBasedOnInput = event => {
    this.setState(prevState => ({
      initialList: prevState.initialList,
      searchInput: event.target.value,
    }))
  }

  deleteEle = id => {
    this.setState(prevState => ({
      initialList: prevState.initialList.filter(x => x.id !== id),
      searchInput: prevState.searchInput,
    }))
  }

  render() {
    const {initialList, searchInput} = this.state
    const currList = initialList.filter(x =>
      x.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const len = currList.length
    return len > 0 ? (
      <div>
        <div className="cont-1">
          <img
            className="hist-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="cont-2">
            <img
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              className="inputer"
              type="search"
              onChange={this.filterBasedOnInput}
            />
          </div>
        </div>
        <div className="cont-3">
          <ul className="lister">
            {currList.map(x => (
              <HistoryComponent
                key={x.id}
                id={x.id}
                deleteEle={this.deleteEle}
                timeAccessed={x.timeAccessed}
                logoUrl={x.logoUrl}
                title={x.title}
                domainUrl={x.domainUrl}
              />
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <div>
        <div className="cont-1">
          <img
            className="hist-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="cont-2">
            <img
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              className="inputer"
              type="search"
              onChange={this.filterBasedOnInput}
            />
          </div>
        </div>
        <div className="copy-cont-3">
          <p>There is no history to show</p>
        </div>
      </div>
    )
  }
}

export default App
