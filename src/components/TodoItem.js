import React from "react";
import '../App.css';
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';




class TodoItem extends React.Component {
    
    state = {
        openRemove: false,
        openEdit: false,
        editValue: this.props.data
    }

    handleClose = () => {
        this.setState({openRemove: false, openEdit: false})
    }

    onClickRemove = () => {
        this.setState({openRemove: true})
    }

    onClickEdit = () => {
        this.setState({openEdit: true})
    }

    onEditChange = (e) => {
        this.setState({editValue: e.target.value})
    }

    render() {
        return (
            <li>
                <span onClick={this.props.onClickListItem} className={this.props.status ? "checked": "isNotChecked"}>{this.props.data} </span>
                <Dialog onKeyUp={(e) => {
                            if(e.key==="Enter") {
                                this.props.onEditClick(this.state.editValue)
                                this.setState({openEdit: false});    
                            }
                            // this.setState({openEdit: false});
                        }}
                        open={this.state.openEdit} 
                        onClose={this.handleClose}>
                    <DialogTitle>Edit task</DialogTitle>
                    <DialogContent>
                        <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                onChange={this.onEditChange}
                                type="text"
                                fullWidth
                                variant="standard"
                                value = {this.state.editValue}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={() => {
                                            this.props.onEditClick(this.state.editValue)
                                            this.setState({openEdit: false});
                                        }}>Save</Button>
                    </DialogActions>
                </Dialog>
                <Button variant="outlined" onClick={this.onClickEdit}>Edit</Button>  

                <Dialog
                    onKeyDown={this.props.onKeyDownRemove}
                    open={this.state.openRemove}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">
                        Delete task
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        {`Are you sure you want to delete ${this.props.data}?`}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>No</Button>
                        <Button onClick={this.props.onRemoveClick} autoFocus>Yes</Button>
                    </DialogActions>
                </Dialog>
                <Button variant="outlined" onClick={this.onClickRemove}>Remove</Button>      
            </li>
        )
    }
}

export default TodoItem;