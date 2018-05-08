const usersReducer = (state, action) => {
    if (!state) {
        state = { users: [] }
    }
    switch (action.type) {
        case 'INIT_USER':
            return { users: action.users }
        case 'ADD_USER':
            return { users: [...state.users, action.user] }
        case 'DELETE_USER':
            return {
                users:
                [...state.users.slice(0, action.userIndex), ...state.users.slice(action.userIndex + 1)]
            }
        //合并数组，合并index所对应数据的前面部分和后面部分，这样就去除了index对应的数据
        case 'UPDATE_USER':
            return {
                users:
                [...state.users.map((user, index) => {
                    if (index === action.index) {
                        return { ...user, ...action.user }
                    } else {
                        return user
                    }
                })]
            }   //循环原来的state,根据index找到要修改的数据
        default:
            return state
    }
}

export default usersReducer
