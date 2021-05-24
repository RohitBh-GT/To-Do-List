import React,{Component} from 'react';
import TodoList from './TodoList.js';

export default class SingleList extends Component {

    render() {
      return(
          <>
           <TodoList listId={this.props.match.params.id} />
          </>
      )
    }
}