
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link} from "react-router-dom"
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const SlideMenu = ({
    handleDrawerClose,
    open
}) => {
    const theme = useTheme();
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </DrawerHeader>

            <List onClick={handleDrawerClose}>
                <Link to="/" >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardRoundedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/transaction">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CreditCardIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Transaction"/>
                        </ListItemButton>
                    </ListItem>
                </Link >
                <Link to="/accounts">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountBalanceRoundedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Accounts"/>
                        </ListItemButton>
                    </ListItem>
                </Link >
                <Link to="/currency">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalAtmIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Currency"/>
                        </ListItemButton>
                    </ListItem>
                </Link >
            </List>
        </Drawer>
    );
}
