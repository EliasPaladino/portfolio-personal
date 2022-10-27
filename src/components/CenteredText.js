import { Grid, Typography } from '@mui/material';
import './CenteredText.scss';

export function CenteredText() {
  return (
    <Grid
      className='centeredText'
      container
      direction='column'
      justify='space-around'
      alignItems='center'
    >
      <Grid item xs={8}>
        <Typography variant='body1' align='center' gutterBottom='true'>
          Hola
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant='body1' align='center' gutterBottom='true'>
          <b>asdasddsasda</b>
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant='body1' align='center' gutterBottom='true'>
          asdsdasdaasd
        </Typography>
      </Grid>
    </Grid>
  );
}
