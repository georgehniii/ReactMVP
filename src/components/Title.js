import React from 'react'

class Title extends React.Component {
    render() {
        return (
            <>
                <h1 class="title">Life's an Adventure</h1>
                <div class="navBar">
                    <div class="btn" id="home">Home</div>
                    <div class="btn" id="all">Blog</div>
                    <div class="btn" id="add">Search</div>
                </div>
            </>
        )
    }
}

export default Title