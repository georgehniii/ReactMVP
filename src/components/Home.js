import React from 'react'
import BlogBox from './BlogBox'

class Home extends React.Component {
    
    render() {
        return (
            this.props.blog.map((elem) => {
                return <BlogBox elem={elem} key={elem.id} setSingleBlog={this.props.setSingleBlog} home={this.props.home}/>
            })
        )
    }
}

export default Home