const ADD_USER = "ADD_USER"
const DELETE_USER = "DELETE_USER"
const UPDATE_USER = "UPDATE_USER"

//需要引入16题的usersReducer
const usersReducer =(state=[],action) => {
  switch(action.type){
    case ADD_USER:
      return [...state, action.user]
    case DELETE_USER:
      return [...state.slice(0,action.index), ...state.slice(action.index+1)]
    case UPDATE_USER:
      return [...state.map((user, index) => {
        if (index === action.index) {
          return {...user, ...action.user}
        } else {
          return user 
        }
      })]
    default:
      return state
  }
}

class User extends Component {
  render () {
    const { user, deleteUser, index} = this.props
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button onClick={()=> {deleteUser(index)}}>删除</button>
      </div>
    )
  }
}

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      age: '',
      gender: ''
    }
  }
  
  render () {
    const { username, age, gender } = this.state
    const { addUser, deleteUser, users } = this.props
    return (
      <div>
        <div className='add-user'>
          <div>Username: <input type='text' value={username} onChange={e=>{this.setState({username: e.target.value})}} /></div>
          <div>Age: <input type='number' value={age} onChange={e=>{this.setState({age: parseInt(e.target.value)})}} /></div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male' onChange={e=>{this.setState({gender: e.target.value})}} /></label>
            <label>Female: <input type='radio' name='gender' value='female' onChange={e=>{this.setState({gender: e.target.value})}} /></label>
          </div>
          <button onClick={()=>addUser(this.state)}>增加</button>
        </div>
        <div className='users-list'>
          {users.map((user, index)=>
            <User user={user} deleteUser={deleteUser} index={index} key={index}/>
          )}
        </div>
      </div>
    )
  }
}

//需要注入的props
const mapStateToProps = (state) => {
  return {
    users: state   
  }
}

//需要注入的函数
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch({
        type: ADD_USER,
        user
      })
    },
    deleteUser: (index) => {
      dispatch({
        type: DELETE_USER,
        index: index
      })
    }
  }
}

//通过connect高阶组件，将需要的值或者函数作为props传入
UsersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)