import { Grid } from "@mui/material";
import MenuItem from "./MenuItem";
import { foodList } from "../../lib/data/foodList";

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
        {foodList.map((item , index ) => (
          <Grid key={index} component="li" item xs={1}>
            <MenuItem data={item} />
            
          </Grid>
        ))}
      </Grid>
    </ul>
  );
}
