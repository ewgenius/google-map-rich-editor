import * as React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { observer } from 'mobx-react';

import { apiKeyStore } from '@stores';
// AIzaSyBUW7lTUlZZijmlDevUwriFvsH7T42Ofu0

const styles = createStyles({
  fullSize: {
    width: '100%',
    height: '100%'
  }
});

const WrappedMap = withScriptjs(withGoogleMap(
  class WrappedMapComponent extends React.Component {
    public render() {
      return (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }} />
      );
    }
  }
));

interface IMapProps extends WithStyles<typeof styles> { }

export const Map = withStyles(styles)(observer(
  class MapComponent extends React.Component<IMapProps> {
    public render() {
      const { classes } = this.props;
      return apiKeyStore.ready ? (
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKeyStore.key}`}
          loadingElement={<div className={classes.fullSize} />}
          containerElement={<div className={classes.fullSize} />}
          mapElement={<div className={classes.fullSize} />}
        />
      ) : null;
    }
  }
));