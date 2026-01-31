import { Paper, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Información del Sistema
      </Typography>

      <Typography sx={{ mt: 2 }}>
      Este sistema permite gestionar productos y realizar cálculos básicos como valor total, IVA y descuentos. En la sección “Productos”, se consume una API 
      pública de Dragon Ball que incluye imágenes en el campo <text style={{color:'red'}}>image.</text>
      </Typography>
    </Paper>
  );
}