import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SpinnerStyled = styled(CircularProgress)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));
