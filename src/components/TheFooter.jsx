import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';

const useStyles = makeStyles({
  footer: {
    marginTop: 'auto',
    paddingBottom: 56,
    '@media  (min-width: 600px)': {
      paddingBottom: 0,
    },
  },
  link: {
    padding: '0 8px',
    '&:active': { textDecorationLine: 'underline' },
  },
});

const FooterLink = ({ href, text }) => {
  const classes = useStyles();

  return (
    <Link href={href}>
      <Typography
        color="textSecondary"
        variant="body1"
        component="span"
        className={classes.link}
      >
        {text}
      </Typography>
    </Link>
  );
};

const TheFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Paper elevation={0} square>
        <Container maxWidth="sm" disableGutters>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-around"
            pt={1}
            mb={1}
          >
            <FooterLink href="/about" text="MLJP SCRIM とは" />
            <FooterLink href="/contact" text="お問い合わせ" />
          </Box>
          <Box textAlign="center" pb={1}>
            <Typography color="textSecondary" variant="body2">
              &copy; 2020 Morico
            </Typography>
          </Box>
        </Container>
      </Paper>
    </footer>
  );
};

export default TheFooter;
