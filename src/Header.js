import React from 'react'
import Loading from './components/Loading'
import Title from './components/Title'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      loadingMessage: 'App is loading...'
    }
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //   .then((response) => response.json())
  //   .then((data) => this.setState({todos: data, loading: false}))
  // }

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
    
    return (
      <Title/>
      // !this.state.home ? <Home home={this.state.home}/>
      // : <SingleTodo singleTodo={this.state.singleTodo} changeSingleState={changeSingleState}/>
    )
  }
}

export default Header;