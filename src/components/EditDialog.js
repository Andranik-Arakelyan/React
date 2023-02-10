import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

class EditDialog extends React.Component {
    state = {
        open:false,
        value: this.props.data,
    }
    handleClickOpen = () => {
        this.setState({open:true});
    };

    handleCloseCancel = () => {
        this.setState({open:false});
    };

    onInputChange = (e) => {
        this.setState({value:e.target.value});
       
    };

    handleCloseSave = () => {
        this.setState({open:false});
        this.props.onClick(this.state.value);
        
    };
    render() {
        return (
            <div>
              <Button variant="outlined" onClick={this.handleClickOpen}>
                Edit
              </Button>
              <Dialog open={this.state.open} onClose={this.handleCloseCancel}>
                <DialogContent>
                  <DialogContentText>
                    Edit your task
                  </DialogContentText>
                  <TextField 
                    value={this.state.value}
                    onChange={this.onInputChange}
                    autoFocus
                    margin="dense"
                    id="name"
                    label={this.props.data}
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleCloseCancel}>Cancel</Button>
                  <Button onClick={this.handleCloseSave}>Save Changes</Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }
}


export default EditDialog;
  