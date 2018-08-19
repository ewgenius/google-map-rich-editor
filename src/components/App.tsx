import * as React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import { GoogleApiKeyDialog } from './google-api-key-dialog';
import { Map } from './map';

const styles = createStyles({
  root: {
    width: '100%',
    height: '100%'
  }
});

interface IAppProps extends WithStyles<typeof styles> {
}

export const App = withStyles(styles)(
  class AppComponent extends React.Component<IAppProps> {
    public render() {
      const { classes } = this.props;
      return (
        <>
          <GoogleApiKeyDialog />

          <Grid className={classes.root} container direction='row'>
            <Grid item xs={8}>
              <Map />
            </Grid>
            <Grid item xs={4}>
              item
            </Grid>
          </Grid>
        </>
      );
    }
  }
);