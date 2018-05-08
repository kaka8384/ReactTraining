import { connect } from 'react-redux'
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import UsersList from './UsersList'

class UsersListContainer extends Component {
    static propTypes = {
        users: PropTypes.array,
        onDelete: PropTypes.func,
        onAdd: PropTypes.func,
        initUsers: PropTypes.func
    }

    handleAdd(user) {
        if (this.props.onAdd) {
            this.props.onAdd(user)
        }
    }

    handleDelete(index) {
        if (this.props.onDelete) {
            this.props.onDelete(index)
        }
    }

    render() {
        return (
        <UsersList users={this.props.users}
            onDelete={this.handleDelete.bind(this)}
            onAdd={this.handleAdd.bind(this)} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initUsers: (users) => {
            dispatch({ type: 'INIT_USER', users })    //这里调用的是reducer中方法，去进行对state的操作
        },
        onAdd: (user) => { 
            dispatch({ type: 'ADD_USER', user })    //这里调用的是reducer中方法，去进行对state的操作
        },
        // 删除评论
        onDelete: (userIndex) => {
            dispatch({ type: 'DELETE_USER', userIndex })   //这里调用的是reducer中方法
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersListContainer)