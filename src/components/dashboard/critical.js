import React, { useEffect, useState } from "react";
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import { toNiceNumber } from "src/utils/toNiceNumber";

export function Critical (props) {
  
  return(
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            CRITICAL
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {toNiceNumber(props.critical)}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)};
