import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

class RemoveDialog extends React.Component {
    state = {
        open:false,
    }
    handleClickOpen = () => {
        this.setState({open:true});
    };

    handleCloseNo = () => {
        this.setState({open:false});
    };

    handleCloseYes = () => {
        this.setState({open:false});
        this.props.onClick();
    };
  render() {
    return (
        <div>
          <Button variant="outlined" onClick={this.handleClickOpen}>
            Remove
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleCloseNo}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
             {"You try to remove task"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Do you want to remove this task?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseNo}>No</Button>
              <Button onClick={this.handleCloseYes} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
  } 
}

export default RemoveDialog;