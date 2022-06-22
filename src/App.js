import React from 'react'
import Loading from './components/Loading'
import Home from './components/Home'
import Login from './components/Login'
import BlogBox from './components/BlogBox'
const port = process.env.PORT || 5555;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true,
      user: "john",
      loading: true,
      blog: null,
      singleBlog: null,
      loadingMessage: `Connected to port:${port} App is loading...`
    }
  }

  componentDidMount() {
  fetch(`localhost:${port}/home`)
  .then((response) => response.json())
  .then((data) => this.setState({blog: data, loading: false}));
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
    // const getBlog = () => {
    //   fetch(`localhost5555/home`)
    //   .then((response) => response.json())
    //   .then((data) => this.setState({blog: data}))
    // }
    const changeSingleBlog = () => {
      this.setState({singleBlog: null})
    }

    const setSingleBlog = (e) => {
      fetch(`localhost:${port}/blog/${e.target.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({singleBlog: data}))
    }

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
      this.state.home ? <Home blog={this.state.blog}/>
      : <BlogBox singleBlog={this.state.singleBlog} changeSingleState={changeSingleBlog}/>
      // this.state.user ? <Home home={this.state.home}/>
      // : <Login user={this.state.user}/>
    )
  }
}

export default App;