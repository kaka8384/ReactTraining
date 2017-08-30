/**
 * Created by 0easy-23 on 2017/8/15.
 */
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (state) => ({
    props: state
});

const mapDispatchToProps = {
        addTodo: addTodo
    };
export default connect(null,mapDispatchToProps)(AddTodo);