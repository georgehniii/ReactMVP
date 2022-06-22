import React from 'react'

class BlogBox extends React.Component {
    render() {
        
        const handleSetSingleBlog = (e) => {
            this.props.setSingleBlog(e); 
            //console.log(this.props);
            //console.log(e);
        }

        return(
            <h1 className="blogBox" id={this.props.elem.id} onClick={handleSetSingleBlog}>{this.props.elem.title}</h1>
        )
    }
}

export default BlogBox