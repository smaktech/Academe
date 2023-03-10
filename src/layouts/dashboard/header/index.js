import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
import useCollapseDrawer from '../../../hooks/useCollapseDrawer';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import {
  DASHBOARD_NAVBAR_WIDTH,
  DASHBOARD_NAVBAR_COLLAPSE_WIDTH,
  DASHBOARD_HEADER_MOBILE,
  DASHBOARD_HEADER_DESKTOP,
} from '../../../config';
// components
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import ContactsPopover from './ContactsPopover';
import NotificationsPopover from './NotificationsPopover';
import useSettings from '../../../hooks/useSettings';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse',
})(({ isCollapse, theme }) => ({
  boxShadow: 'none',
  ...cssStyles(theme).bgBlur(),
  transition: theme.transitions.create('width', {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DASHBOARD_NAVBAR_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${DASHBOARD_NAVBAR_COLLAPSE_WIDTH}px)`,
    }),
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: DASHBOARD_HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(0, 5),
    minHeight: DASHBOARD_HEADER_DESKTOP,
  },
}));

// ----------------------------------------------------------------------

DashboardHeader.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardHeader({ onOpenSidebar }) {
  const { isCollapse } = useCollapseDrawer();

  const isDesktop = useResponsive('up', 'lg');
  const { themeMode, onToggleMode } = useSettings();
  return (
    <RootStyle isCollapse={isCollapse}>
      <ToolbarStyle>
        {!isDesktop && (
          <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButtonAnimate>
        )}

        {/* <Searchbar /> */}
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {/* <LanguagePopover />
          <NotificationsPopover />
          <ContactsPopover /> */}

          <IconButtonAnimate color="inherit" onClick={onToggleMode} sx={{ color: 'text.primary' }}>
            <Iconify icon={themeMode === 'light' ? 'il:moon' : 'uil:sun'} color="#b29603" width={20} height={20} />
          </IconButtonAnimate>
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
