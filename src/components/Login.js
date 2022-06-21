import React from 'react'

class Login extends React.Component {
    
    render() {
        const checkPass = () => {
            
        }
        return (
            <div className="blog">
                <p>Please Log in</p>
                <form>
                <label>
                   User Name:
                   <input id="userName" class="inputFeild" name="userName"/>
                </label>
                <label>
                    Password:
                    <input id="password" class="inputFeild" name="password"/></label>
                <input type="submit" value="Submit" />
                <button type="button" onClick={checkPass}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login