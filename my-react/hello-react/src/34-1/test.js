const usersReducer = (state=[], action)=>{
      switch (action.type) {
        case 'ADD_USER':
          return [...state,action.user]
        case 'DELETE_USER':
        return [...state.slice(0,action.index),...state.slice(action.index+1)]  
        //合并数组，合并index所对应数据的前面部分和后面部分，这样就去除了index对应的数据
          case 'UPDATE_USER':
        return  [...state.map((user, index) => {
            if (index === action.index) {
              return {...user, ...action.user}
            } else {
              return user 
            }
          })]  //循环原来的state,根据index找到要修改的数据
        default:
          return state
      }
}