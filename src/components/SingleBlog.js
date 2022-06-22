import React from 'react'

class SingleBlog extends React.Component {
    render() {
        console.log("inSingleBlog");
        const goBack = () => {
            console.log("going back");
            console.log(this.props);
            this.props.changeSingleState();
        }

        return(
            <>
                <h1 className="Blog" >{this.props.singleBlog[0].title}</h1>
                <button type="button" className="backButton" onClick={goBack}>{"Back"}</button>
            </>
        )
    }
}

export default SingleBlog