import React from 'react'
import Buttons from './Buttons'

class Title extends React.Component {
    render() {
        return (
            <>
                <div id="header">
                    <h1 class="title">Life's an Adventure</h1>
                    <Buttons/>
                </div>
            </>
        )
    }
}

export default Title