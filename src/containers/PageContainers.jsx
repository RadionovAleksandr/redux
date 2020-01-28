import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'


class PageContainer extends Component {
    render() {
        console.log('render PageContainer')
        const { page, getPhotos } = this.props
        return (
            <div className="app" >
                <Page photos={
                    page.photos}
                    year={page.year}
                    isFetching={page.isFetching}
                    error={page.error}
                    getPhotos={getPhotos}
                />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        page: store.page,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhotos: year => dispatch(getPhotos(year)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)