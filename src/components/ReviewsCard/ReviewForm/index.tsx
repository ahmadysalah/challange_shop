
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { MainForm } from "./Form";
import { ContainerReviewsForm } from "./ReviewForm.styled";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: '1300px',
    background: 'black',
    padding: '30px'
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),

  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
 
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function FormReview() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ContainerReviewsForm>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ color: "#FCDD06", border: "1px solid gold" }}
      >
        Add another Review
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ width: "1300px", maxWidth: "1300px" }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
         <Typography variant="h2" fontSize='25px'  color='#FCDD06 ' sx={{textTransform: 'uppercase'}}> Add Another Review</Typography> 
        </BootstrapDialogTitle>
        <MainForm/>

      </BootstrapDialog>
    </ContainerReviewsForm>
  );
}
