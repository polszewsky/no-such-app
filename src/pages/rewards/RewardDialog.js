import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function RewardDialog({ open, handleClose }) {

  const codes = [
    "133FI-QDMRG-QT7QO",
    "6829P-NC828-E1M9C",
    "65BG7-RG4N4-424JR",
    "A96P7-9RJP7-15I83",
    "PCPN5-2K8O3-P9ODJ",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) {
      setIndex(Math.floor(Math.random() * 5));
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Claim reward</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>{codes[index]}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Copied to clipboard {<CheckBoxIcon style={{fill: "blue"}}/>}</Button>
      </DialogActions>
    </Dialog>
  );
}
