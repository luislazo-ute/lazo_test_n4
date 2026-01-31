import { Typography, Box, Grid, Card, CardContent, Alert, Paper } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <Paper sx={{ p: 4, bgcolor: '#f1f3f4', textAlign: 'left', mb: 3, borderRadius: 2 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Bienvenido a la Gestión de Inventarios
        </Typography>
        <Typography variant="h6" color="text.secondary">
            Consulta, registra y realiza cálculos sobre los productos del inventario.
        </Typography>
      </Paper>
      <Box 
        component="img" 
        src="https://picsum.photos/id/1080/800/300" 
        sx={{ 
          width: '100%', 
          borderRadius: 2, 
          height: 350, 
          objectFit: 'cover', 
          mb: 4 
        }} 
      />
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">Listado de Productos</Typography>
              <Typography variant="body2" color="text.secondary">
              Ahora se llena dinámicamente con personajes de Dragon Ball (con fotos).
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">Registrar Producto</Typography>
              <Typography variant="body2" color="text.secondary">
                Agrega nuevos productos (locales) al arreglo.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">Cálculos de Inventario</Typography>
              <Typography variant="body2" color="text.secondary">
              Calcula valores comerciales básicos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

        <Alert 
          severity="info" 
          icon={false}
          sx={{ 
            bgcolor: '#d1ecf1', 
            color: '#0c5460', 
            border: '1px solid #bee5eb',
            fontSize: '0.875rem'
          }}
        >
          Recuerda: Mantén actualizado el stock de productos.
        </Alert>
      </Box>
    </Box>
  );
}