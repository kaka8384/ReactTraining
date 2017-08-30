import {connect} from 'react-redux';
import {toggleTodo,deleteTodo} from '../actions/index';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

//把从reducer中得到的state转为props
const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)  //返回props"todos"
});

//把action转为props
const mapDispatchToProps = {
    onTodoClick: toggleTodo,
    dleTodoClick:deleteTodo
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList


