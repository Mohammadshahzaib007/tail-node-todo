import React from "react";

import { Box, useTheme } from "@material-ui/core";

type PropTypes = {
  children: React.ReactNode;
  onTagClick: () => void;
};

function Tag(props: PropTypes) {
  const { children, onTagClick } = props;

  const theme = useTheme();

  return (
    <Box
      component="span"
      onClick={(e) => {
        e.stopPropagation();
        onTagClick();
      }}
      //   display="inline-block"
      width="fit-content"
      bgcolor="#EDE8FB"
      color={theme.palette.primary.main}
      padding="5px 8px"
      style={{ cursor: "pointer" }}
      mx="8px"
    >
      {children}
    </Box>
  );
}

export default Tag;
