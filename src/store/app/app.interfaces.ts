import { AlertColor as AlertSeverity } from '@mui/material';
// import { } from '@mui/material/Alert'

export interface IPayloadSetAlert {
  show: boolean;
  messages: string | null;
  severity?: AlertSeverity;
  autoHideDuration?: number;
  variant?: 'filled' | 'outlined';
}
