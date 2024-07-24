import { Grid } from "@mui/material";
import MenuItem from "./MenuItem";

export default function MenuList() {
  return (
    <ul className="pb-20 pt-4 px-4 w-full">
      <Grid
        container
        columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
        spacing={{ xs: 2, md: 3 }}
        sx={{
          placeItems: "center",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
          <Grid key={item} component="li" item xs={1}>
            <MenuItem />
          </Grid>
        ))}
      </Grid>
    </ul>
  );
}
