import { Container } from '@mui/material';
import Menu from '../Header';

const PageWrapper = ({ children }) => {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  );
};
export default PageWrapper;
