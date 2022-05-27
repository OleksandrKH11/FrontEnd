import React,{useEffect,useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import { makeStyles} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, withStyles } from '@material-ui/core/styles';
import {updateUser} from '../../Api/Api.js' 

const styles = (theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    box: {
        textAlign:'center',
        padding: '10px',
        alignContent:"center",
        background: '#303030',
        borderRadius:"20px",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
      },
      field :{
        width: '90%',
        margin :theme.spacing(2),
      }
  });

const useStyles = makeStyles((theme) => ({
    box: {
        textAlign:'center',
        padding: '10px',
        alignContent:"center",
        background: '#303030',
        borderRadius:"20px",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
      },
      field :{
        width: '90%',
        margin :theme.spacing(2),
      }
  }));

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

export const EditeUser = ({openProps, initial, updateList})=> 
 {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [formData, updateFormData] = React.useState();

    useEffect(() => {
        setOpen(openProps);
        updateFormData(initial);
      }, [openProps, initial])

      const handleChange = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim()
        });
      };
    
      const onSubmit = (e) => {
        updateList(initial.Id, formData);
        formData.Id = initial.Id;
        Number(formData.Age);
        updateUser(initial.Id, formData)
        handleClose();
      };
      
    return (
    <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
      <Box className={classes.box} >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        { "Редагування користувача"}
        </DialogTitle>
      <form>
        <TextField
          name="UserName"
          variant="outlined"
          className={classes.field}
          placeholder="UserName"
          onChange={handleChange}
          defaultValue={formData?.UserName}
        />
        <br />
        <TextField
          name="Age"
          variant="outlined"
          className={classes.field}
          placeholder="Age"
          onChange={handleChange}
          defaultValue={formData?.Age}
        />
        <br />
        <TextField
          variant="outlined"
          className={classes.field}
          placeholder="Gender"
          name="Gender"
          onChange={handleChange}
          defaultValue={formData?.Gender}
        />
        <br />
        <TextField
          variant="outlined"
          className={classes.field}
          placeholder="Email"
          name="email"
          onChange={handleChange}
          defaultValue={formData?.Email}
        />
        <br />
        <Button onClick={onSubmit} type="submit" variant="contained" color="primary" >Submit</Button> 
      </form>
          </Box>
        </Modal>
      </div>

    );
  }
