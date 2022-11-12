import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/routes';
import './styles/fonts.scss';
import './styles/index.scss';

import Spinner from './components/Spinner';
import Attendance from './pages/Attendance';
import Timetable from './pages/Timetable';
import Settings from './pages/Settings';
import MainPage from './pages/MainPage';
import Error from './pages/ErrorPage';
import Lessons from './pages/Lessons';
import Users from './pages/Users';
import News from './pages/News';

const App = props => {
  const { loading } = props;

  return (
    <>
      {!!loading && <Spinner />}
      <Routes>
        <Route path={ROUTES.MAIN_PAGE} exact element={<MainPage />} />
        <Route path={ROUTES.ATTENDACE} exact element={<Attendance />} />
        <Route path={ROUTES.TIMETABLE} exact element={<Timetable />} />
        <Route path={ROUTES.SETTINGS} exact element={<Settings />} />
        <Route path={ROUTES.LESSONS} exact element={<Lessons />} />
        <Route path={ROUTES.USERS} exact element={<Users />} />
        <Route path={ROUTES.NEWS} exact element={<News />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
