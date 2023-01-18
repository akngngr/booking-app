import { createTheme } from "@mui/material";
import { blue, green, grey } from "@mui/material/colors";

export const theme = createTheme({
    palette:{
        primary:{
            main: blue[500],
            light: blue[300]
        },
        secondary:{
            main: green[500]
        },
        otherColor:{
           main: grey[500] 
        }
    }
})