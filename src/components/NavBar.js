import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import pages from '../data/pages';
import { Badge } from '@mui/material';

function NavBar({openCart, cart}) {

    const [anchorNav, setAnchorNav] = useState(null);

    const handleOpenNavMenu = (event) => {setAnchorNav(event.currentTarget);};
    const handleCloseNavMenu = () => {setAnchorNav(null);};

    return (
        <AppBar position="static" style={{ background: '#2E3B55' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Responsive Title XL */}
                    <BakeryDiningIcon sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 600,
                            letterSpacing: ".1rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        Empanadas
                    </Typography>
                    {/* Responsive XS */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.href}
                                    href={page.href}
                                    onClick={handleCloseNavMenu}
                                >
                                <Typography textAlign="center">{page.text}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* Responsive Title XS*/}
                    <BakeryDiningIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 600,
                        letterSpacing: ".1rem",
                        color: "inherit",
                        textDecoration: "none"
                        }}
                    >
                        Empanadas
                    </Typography>
                    {/* Responsive XL */}
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        mr: 20
                    }}>
                        {pages.map((page) => (
                        <Button
                            key={page.href}
                            href={page.href}
                            sx={{ my: 2, px: 2,color: "white", display: "block" }}
                        >
                            {page.text}
                        </Button>
                        ))}
                    </Box>
                    {/* Carrito de compras */}
                    <Box sx={{ flexGrow: 0 }} onClick={() => openCart()}>
                        <Tooltip title="Carrito de compras">
                            <Badge badgeContent={cart && cart.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
