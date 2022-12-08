import Box from '@mui/material/Box';
import {Grid, Container, Link}  from '@mui/material';

function Footer() {
    return (
        <footer>
        <Box
            px={{xs:2, sm: 10}}
            py={{xs:5, sm: 7}}
            bgcolor="text.secondary"
            color="white"
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Menu</Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Inicio
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/store">
                                Catalogo de empanadas
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/weapon">
                                Arma tu empanada
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Ayuda</Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Contacto
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Preguntas
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Despacho
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Ubicación</Box>
                        <Box>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.614295078378!2d-70.67280184809988!3d-33.64124151462304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d8f56dab383d%3A0x8f252578eb0b09a0!2sCam.%20Padre%20Hurtado%2026-112%2C%20San%20Bernardo%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1670275676222!5m2!1ses-419!2scl" 
                                width="352"
                                height="100"
                                style={{border: 0}}
                                loading="lazy"
                                title='map'
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </footer>
    )
}

export default Footer;