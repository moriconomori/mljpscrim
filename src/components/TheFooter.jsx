import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
    '&:active': { textDecorationLine: 'underline' },
  },
});

const TheFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography color="textSecondary" variant="body1">
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-around"
            my={2}
          >
            <Link href="/about">
              <span className={classes.link}>MPJP SCRIM とは</span>
            </Link>
            <Link href="/contact">
              <span className={classes.link}>お問い合わせ</span>
            </Link>
          </Box>
          <Box textAlign="center" my={1}>
            <Typography variant="caption">&copy; 2020 Morico</Typography>
          </Box>
        </Typography>
      </Container>
    </footer>
  );
};

export default TheFooter;
