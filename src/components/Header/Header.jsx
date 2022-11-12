import * as React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from './../../utils/routes';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import GroupLogo from '../../assets/images/17ki.svg';

const settings = [
  { name: 'Настройки', url: ROUTES.SETTINGS },
  { name: 'Посещаемость', url: ROUTES.ATTENDACE },
  { name: 'Пользователи', url: ROUTES.USERS },
  { name: 'Расписание', url: ROUTES.TIMETABLE },
  { name: 'Предметы', url: ROUTES.LESSONS },
  { name: 'Новости', url: ROUTES.NEWS },
  { name: 'Выход', url: ROUTES.MAIN_PAGE },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{ backgroundColor: '#ffffff' }}>
        <Toolbar disableGutters>
          <Link to="/">
            <img
              src={GroupLogo}
              alt="GroupLogo"
              style={{ maxHeight: '70px', marginRight: '20px' }}
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            ></Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ color: '#000000' }}
              >
                {process.env.REACT_APP_WEBSITE_NAME}
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => {
                const { name, url } = setting;
                return (
                  <Link
                    to={url}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'rgba(0, 0, 0, 0.87)',
                      '&:hover': {
                        color: 'rgba(0, 0, 0, 0.87)',
                      },
                    }}
                  >
                    <MenuItem key={name} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{name}</Typography>
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
