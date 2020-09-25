/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Typography, useTheme } from '@material-ui/core';

const Copyright = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Typography variant="body2">
      Copyright &copy; {currentYear} by{' '}
      <a
        href="https://markoni.codes"
        css={{
          color: theme.palette.secondary.light,
          textDecoration: 'none',
        }}
      >
        markoni.codes
      </a>
    </Typography>
  );
};

export default Copyright;
