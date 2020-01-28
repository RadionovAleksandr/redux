import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'

import { handleLogin } from '../actions/UserActions'

class App extends Component {
    render() {
        console.log('render UserContainer');
        const { user, handleLogin } = this.props
        return (<div className="app" >

            <User name={user.name}
                error={user.error}
                isFetching={user.isFetching}
                handleLogin={handleLogin}
            />
        </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: () => dispatch(handleLogin()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)