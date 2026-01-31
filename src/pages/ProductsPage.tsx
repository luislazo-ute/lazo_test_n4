import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function ProductsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        // Sin paginación en UI: pedimos un page_size grande y mostramos lo que venga
        const url =
          "https://dragonball-api.com/api/characters?page=1&limit=10";
        const res = await fetch(url);
        const data = await res.json();

        // La API suele devolver { count, next, previous, items: [] }
        const list = Array.isArray(data?.items) ? data.items : Array.isArray(data) ? data : [];
        setItems(list);
      } catch (e: any) {
        console.error(e);
        setError("No se pudo cargar productos (revisa consola / red).");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Productos
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 2 }}>
        API: /products/?page=1&page_size=100 (sin paginación en la interfaz)
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
      )}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          <CircularProgress />
        </Box>
      ) : items.length === 0 ? (
        <Alert severity="info">No hay productos para mostrar.</Alert>
      ) : (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">KI</TableCell>
              <TableCell align="right">MAXIMO KI</TableCell>
              <TableCell>Imagen</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((p, idx) => (
              <TableRow key={p?.id ?? idx} hover>
                <TableCell>{p?.id ?? "-"}</TableCell>
                <TableCell>{p?.name ?? "-"}</TableCell>
                <TableCell align="right">{p?.ki ?? "-"}</TableCell>
                <TableCell align="right">{p?.maxki ?? "-"}</TableCell>
                <TableCell>
                  {p?.url_image ? (
                    <img
                      src={p.image}
                      alt={p?.name ?? "personaje"}
                      style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 8, border: "1px solid rgba(0,0,0,.15)" }}
                    />
                  ) : (
                    <span style={{ color: "#667085" }}>—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}