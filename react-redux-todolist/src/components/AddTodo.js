/**
 * Created by 0easy-23 on 2017/8/15.
 */
import React, {Component} from 'react';
//import {addTodo} from '../actions/index';

export default class extends Component {
    render() {
        const {addTodo} = this.props;
        function AddTodo(txt) {
            if(!txt.trim())
            {
                alert("请先填写要添加的任务");
            }
            addTodo(_input.value);
            _input.value="";
        }

        let _input;
        return (
            <div className="inner">

                    <input type="text" placeholder="请添加待办任务" ref={node => {
                        _input = node
                    }}/>
                    <button type="submit" onClick={()=>AddTodo(_input.value)}>
                        添加任务
                    </button>
            </div>
        )
    }
}
