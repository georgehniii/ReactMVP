import React from 'react'
import Loading from './components/Loading'
import Home from './components/Home'
import Login from './components/Login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true,
      user: null,
      loading: true,
      loadingMessage: 'App is loading...'
    }
  }

  componentDidMount() {
   this.setState({loading: false});
  }

  render() {

    // const setSingleTodo = (e) => {
    //   fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.id}`)
    //   .then((response) => response.json())
    //   .then((data) => this.setState({singleTodo: data}))
    // }
    // const changeSingleState = () => {
    //   this.setState({singleTodo: null})
    // }

    if(this.state.loading) {
      return (
        <Loading loadingMessage={this.state.loadingMessage}/>
      )
    }
    if (this.state.user == null){
      return (
        <Login user={this.state.user}/>
      )
    }
    
    return (
      <Home home={this.state.home}/>
      // this.state.user ? <Home home={this.state.home}/>
      // : <Login user={this.state.user}/>
    )
  }
}

export default App;