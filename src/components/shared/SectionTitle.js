import { Typography, useTheme } from '@material-ui/core';
import React from 'react';
import styled from '@emotion/styled';

const StyledTitle = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-h3': {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
}));

const SectionTitle = (props) => {
  const theme = useTheme();

  return (
    <StyledTitle variant="h3" theme={theme}>
      {props.children}
    </StyledTitle>
  );
};

export default SectionTitle;
