import { Box, Container, Grid } from "@mui/material";
import EmpanadaCard from "../components/EmpanadaCard";
import empanadas from "../data/empanadas";

const Store = ({addToCart}) => {
    const renderEmpanadas = empanadas.map((e, index) => {
        return (
            <EmpanadaCard
                key={index}
                empanada={e}
                addToCart={addToCart}
            />
        )
    });

    return (
        <Box className="mt-4">
            <Container maxWidth="lg">
                <h3 style={{marginLeft: '25px'}}>Catalogo Empanadas</h3>
                <Grid
                    container
                    justifyContent={"center"}
                    sx={{margin: '20px 4px 10px 4px'}}
                >
                        <Grid container className="mt-4">
                            {renderEmpanadas}
                        </Grid>
                </Grid>
            </Container>
        </Box>

    )
}

export default Store;