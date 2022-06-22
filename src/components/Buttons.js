import React from 'react'

class Buttons extends React.Component {
    // const setHome = () => {
    //     this.props.setHomeTrue();
    // }
    render() {
        return (
            <div class="navBar">
                        <div class="btn" id="home" /*onClick={setHome}*/>Home</div>
                        <div class="btn" id="all">Blog</div>
                        <div class="btn" id="add">Search</div>
                    </div>
        )
    }
}

export default Buttons