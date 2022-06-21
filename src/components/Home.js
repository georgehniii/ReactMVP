import React from 'react'

class Home extends React.Component {
    
    render() {
        return (
            <div className="blog">
                <p>Welcome Home,</p>
                {this.props.user}
            </div>
        )
    }
}

export default Home