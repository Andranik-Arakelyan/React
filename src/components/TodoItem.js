import React from "react";
import '../App.css';
import RemoveDialog from './RemoveDialog';
import EditDialog from './EditDialog';


class TodoItem extends React.Component {
    state = {
        isDone: false
    }
    onClickRemove = () => {
        this.props.onRemoveClick(this.props.id);
    };

    onClickEdit = (value) => {
        this.props.onEditClick(this.props.id, value);
    }

    onClickListItem = () => {
        this.setState({isDone: !this.state.isDone})
    }

    render() {
        return (
            <li onClick={this.onClickListItem}>
                <span onClick={this.onClickListItem} className={this.state.isDone ? "checked": "isNotChecked"}>{this.props.data} </span>
                <EditDialog data={this.props.data} onClick={this.onClickEdit}/>
                <RemoveDialog onClick={this.onClickRemove}/>         
            </li>
        )
    }
}

export default TodoItem;