import * as React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';

import { apiKeyStore } from '@stores/api-key-store';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = createStyles({});

interface IGoogleApiKeyDialogProps extends WithStyles<typeof styles> {}

interface IGoogleApiKeyDialogState {
  showConfigDialog?: boolean;
}

export const GoogleApiKeyDialog = withStyles(styles)(observer(
  class GoogleApiKeyDialogComponent extends React.Component<IGoogleApiKeyDialogProps, IGoogleApiKeyDialogState> {
    constructor(props: IGoogleApiKeyDialogProps) {
      super(props);

      this.state = {
        showConfigDialog: false
      };
    }

    public componentWillMount() {
      if (!apiKeyStore.key) {
        this.openConfigDialog();
      }
    }

    public render() {
      // const { classes } = this.props;
      return (
        <Dialog
          open={!!this.state.showConfigDialog}
          onClose={this.cacnelConfig}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>Google Maps API key</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Set your API key for Google maps
              </DialogContentText>
            <TextField label='API key' value={apiKeyStore.key} onChange={this.handleKeyInput} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.cacnelConfig} color="primary">
              Cancel
              </Button>
            <Button onClick={this.saveConfig} color="primary" autoFocus>
              Save
              </Button>
          </DialogActions>
        </Dialog>
      );
    }

    private openConfigDialog = () => {
      this.setState({
        showConfigDialog: true
      });
    }

    private cacnelConfig = () => {
      this.setState({
        showConfigDialog: false
      });
    }

    private saveConfig = () => {
      apiKeyStore.save();
      this.setState({
        showConfigDialog: false
      });
    }

    private handleKeyInput = (event: any) => {
      apiKeyStore.setKey(event.target.value);
    }
  }
));