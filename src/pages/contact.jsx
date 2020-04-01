import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles((theme) => ({
  formItem: {
    margin: theme.spacing(1, 1),
  },
  helperText: {
    minHeight: '1em',
    lineHeight: '1.0',
    color: theme.palette.error.main,
  },
}));

const ConfirmDialog = (props) => {
  const { open, onClose, value } = props;

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="confirm-dialog" open={open}>
      <DialogTitle>送信確認</DialogTitle>
      <DialogContent>
        <DialogContentText>
          お問い合わせを送信します。
          <br />
          よろしいですか？
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <form
          action="https://form.run/api/v1/r/2qbo2kxst2r6ymv2oojw86mh"
          method="post"
          style={{ width: '100%' }}
        >
          <input type="hidden" name="名前" value={value.name} readOnly />
          <input
            type="hidden"
            name="メールアドレス"
            value={value.email}
            readOnly
          />
          <input
            type="hidden"
            name="問い合わせ内容"
            value={value.body}
            readOnly
          />
          <Box display="flex" justifyContent="space-between" px={1} pb={1}>
            <Button onClick={handleClose}>キャンセル</Button>
            <Button variant="contained" color="primary" type="submit">
              送信
            </Button>
          </Box>
        </form>
      </DialogActions>
    </Dialog>
  );
};

ConfirmDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  value: PropTypes.object,
};

const Contact = () => {
  const classes = useStyles();

  const [error, setError] = useState({
    name: false,
    email: false,
    body: false,
  });

  const [helperText, setHelperText] = useState({
    name: '',
    email: '',
    body: '',
  });

  const [value, setValue] = useState({
    name: '',
    email: '',
    body: '',
  });

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChangeName = (event) => {
    const newValue = event.target.value;
    if (newValue !== '') {
      setError({ ...error, name: false });
      setHelperText({ ...helperText, name: '' });
    }
    setValue({ ...value, name: newValue });
  };

  const handleOnChangeEmail = (event) => {
    const newValue = event.target.value;
    if (newValue !== '') {
      setError({ ...error, email: false });
      setHelperText({ ...helperText, email: '' });
    }
    setValue({ ...value, email: newValue });
  };

  const handleOnChangeBody = (event) => {
    const newValue = event.target.value;
    if (newValue !== '') {
      setError({ ...error, body: false });
      setHelperText({ ...helperText, body: '' });
    }
    setValue({ ...value, body: newValue });
  };

  const handleOnClickSend = () => {
    if (validate()) {
      console.log('ok');
      setOpen(true);
      return;
    }
    console.log('ng');
  };

  const validate = () => {
    let error = { ...error };
    let helperText = { ...helperText };
    let isValidated = true;

    if (value.name === '') {
      error.name = true;
      helperText.name = '名前を入力して下さい。';
      isValidated = false;
    }

    if (value.email === '') {
      error.email = true;
      helperText.email = 'メールアドレスを入力して下さい。';
      isValidated = false;
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/.test(value.email)) {
      error.email = true;
      helperText.email = '正しいメールアドレスを入力して下さい。';
      isValidated = false;
    }

    if (value.body === '') {
      error.body = true;
      helperText.body = '問い合わせ内容を入力して下さい。';
      isValidated = false;
    }

    setError(error);
    setHelperText(helperText);
    return isValidated;
  };

  const submit = () => {
    console.log('submit');
  };

  return (
    <React.Fragment>
      <Head>
        <title>Contact | MLJP SCRIM</title>
      </Head>

      <Box px={1} my={2}>
        <Typography variant="h6" component="h2" color="primary">
          お問い合わせ
        </Typography>
      </Box>

      <form
        action="https://form.run/api/v1/r/2qbo2kxst2r6ymv2oojw86mh"
        method="post"
        onSubmit={submit}
        className={classes.form}
      >
        <div className={classes.formItem}>
          <TextField
            id="name"
            label="名前"
            variant="outlined"
            fullWidth
            error={error.name}
            value={value.name}
            onChange={handleOnChangeName}
            required
          />
          <FormHelperText id="name-helper-text" className={classes.helperText}>
            {helperText.name}
          </FormHelperText>
        </div>
        <div className={classes.formItem}>
          <TextField
            id="email"
            label="メールアドレス"
            variant="outlined"
            fullWidth
            error={error.email}
            value={value.email}
            onChange={handleOnChangeEmail}
            required
          />
          <FormHelperText id="email-helper-text" className={classes.helperText}>
            {helperText.email}
          </FormHelperText>
        </div>
        <div className={classes.formItem}>
          <TextField
            id="body"
            label="問い合わせ内容"
            variant="outlined"
            multiline
            fullWidth
            rows={8}
            error={error.body}
            value={value.body}
            onChange={handleOnChangeBody}
            required
            className={classes.body}
          />
          <FormHelperText id="body-helper-text" className={classes.helperText}>
            {helperText.body}
          </FormHelperText>
        </div>

        <ConfirmDialog open={open} onClose={handleClose} value={value} />
      </form>

      <Box my={4} mx={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOnClickSend}
          disabled={open}
        >
          送信
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
