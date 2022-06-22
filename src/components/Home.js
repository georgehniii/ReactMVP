import React from 'react'

class Home extends React.Component {
    
    render() {
        return (
            <div className="blog">
                <p>Welcome Home,</p>
                {this.props.blog}
            </div>
        )
    }
}

export default Home