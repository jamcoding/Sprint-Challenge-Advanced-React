import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Players from "./components/Players"

class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(playerData => this.setState({ players: playerData }))
      .then(playerData => console.log("fetched data", playerData))
      .catch(error => {
          console.log('errors', error)
          // this.setState({ players: [] });
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {this.state.players.map(player => {
          return <Players key={player.id} player={player} />
        })}
      </div>
    )
  }
}

export default App;
