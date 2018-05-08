import React, { Component } from 'react';
import PropTypes from 'prop-types'

class User extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        onDelete: PropTypes.func,
        index: PropTypes.number
    }

    handleDelete() {
        if (this.props.onDelete) {
            this.props.onDelete(this.props.index)
        }
    }

    render() {
        const { user } = this.props
        return (
            <div>
                <div>Name: {user.username}</div>
                <div>Age: {user.age}</div>
                <div>Gender: {user.gender}</div>
                <button onClick={this.handleDelete.bind(this)}>删除</button>
            </div>
        )
    }
}

class UsersList extends Component {
    static propTypes = {
        users: PropTypes.array,
        onDelete: PropTypes.func,
        onAdd: PropTypes.func
    }

    static defaultProps = {
        users: []
    }

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            age: 20,
            gender: 'male'
        }
    }

    handleAdd() {
        if (this.props.onAdd) {
            this.props.onAdd({
                username: this.state.username,
                age: this.state.age,
                gender: this.state.gender
            })
        }
    }

    handleDelete(index) {
        if (this.props.onDelete) {
            this.props.onDelete(index)
        }
    }

    handleChangeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleChangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        return (
            <div>
                {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
                <div className='add-user'>
                    <div>Username: <input type='text' value={this.state.username}
                        onChange={this.handleChangeUsername.bind(this)} /></div>
                    <div>Age: <input type='number' value={this.state.age}
                        onChange={this.handleChangeAge.bind(this)} /></div>
                    <div>Gender:
              <label>Male: <input type='radio' name='gender' value='male' /></label>
                        <label>Female: <input type='radio' name='gender' value='female' /></label>
                    </div>
                    <button onClick={this.handleAdd.bind(this)}>增加</button>
                </div>
                {/* 显示用户列表 */}
                <div className='users-list'>{this.props.users.map((user, i) =>
                    <User key={i} user={user} index={i}
                        onDelete={this.handleDelete.bind(this)} />
                )}</div>
            </div>
        )
    }
}

export default UsersList