import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    paddingBottom: 56,
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 0,
    },
  },
  link: {
    padding: theme.spacing(0, 2),
    '&:active': { textDecorationLine: 'underline' },
  },
}));

const FooterLink = ({ href, text }) => {
  const classes = useStyles();
  const router = useRouter();
  const scroll = router.pathname === href ? false : true;

  return (
    <Link href={href} scroll={scroll}>
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

FooterLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

const TheFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Paper elevation={0} square>
        <Container maxWidth="sm" disableGutters>
          <Box display="flex" flexWrap="wrap" justifyContent="center" py={1}>
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
