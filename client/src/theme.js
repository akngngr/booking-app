import { createTheme, ImageListItem, Stack } from "@mui/material";
import {
    Button,
    styled,
    AppBar,
    Toolbar,
    Box,
} from "@mui/material";
import { blue, yellow, grey } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[900],
            light: blue[300]
        },
        secondary: {
            main: yellow[700]
        },
        otherColor: {
            main: grey[500],
            light: grey[100]
        }
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            // most basic recommended timing
            standard: 300,
            // this is to be used in complex animations
            complex: 375,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
        },
        easing: {
            // This is the most common easing curve.
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            // Objects enter the screen at full velocity from off-screen and
            // slowly decelerate to a resting point.
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            // Objects leave the screen at full velocity. They do not decelerate when off-screen.
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            // The sharp curve is used by objects that may return to the screen at any time.
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
    }
})

export const MainStack = styled(Stack)({
    alignItems: 'center',
    justifyContent: 'center',
}
)
export const ImageItem = styled(ImageListItem)({
    width: '270px',
    objectFit: "cover",
    zIndex: 1,
    transition: 'z-index 0.3s ease-in-out',
    "&:hover": {
        cursor: 'pointer',
        zIndex: 2,
    }
}
)

export const FeaturedStack = styled(Stack)(({ theme }) => ({
    position: 'relative',
    flexDirection: 'row',
    borderRadius: '20px',
    transition: 'transform 0.5s ease',
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    "&:hover": {
        transform: 'scale(1.1)',
        boxShadow: `0 0 0 3px ${theme.palette.secondary.main}`,
    },
    

}));
export const FeaturedBox = styled(Box)(({ theme }) => ({
    width: '80%',
    marginBottom: 50,
    gap: '30px',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
        marginTop: '40%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }

}));
export const FeaturedTextBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: "0px",
    width: "100%",
    color: "white",
    padding: "0 0 20px 20px",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: "0 0 20px 20px",
    transition: 'z-index, opacity 0.3s ease-in-out',
    zIndex: 1,
    opacity: 1,    
    "&:hover": {
        opacity: 0,  
    }
    
}));

export const PropertyBox = styled(Box)(({ theme }) => ({
    borderRadius: '20px',
    boxShadow: `0 0 0 2px ${theme.palette.otherColor.light}`,  
    padding: 8,
    transition: 'box-shadow 0.3s ease-in-out',
    "&:hover": {
        boxShadow: `0 0 0 3px ${theme.palette.secondary.main}`,  
    }
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    [theme.breakpoints.up("sm")]: {
        width: '80%',
    }
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
        backgroundColor: theme.palette.otherColor.main,
    },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: 15,
}));

export const IconsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));
export const TextBox = styled(Box)(({ theme }) => ({
    display: "none",
    padding: 5,
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));
export const HeaderBox = styled(Box)(({ theme }) => ({
    bgcolor: theme.palette.primary.light,
    width: "100%",
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    marginTop: 15,
    gap: 5,

    [theme.breakpoints.up("sm")]: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "80%",
        height: '100%',
    },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    display: { xs: "none", sm: "block" },
    backgroundColor: theme.palette.otherColor.main,
    borderRadius: theme.palette.borderRadius,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },

}));
export const HeaderButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    color: "white",
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    [theme.breakpoints.up("sm")]: {
        height: '100%',
        width: '300px',
        flexWrap: 'nowrap',
    },
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export const BookingButton = styled(Button)(({ theme }) => ({
    border: `2px solid ${grey[300]}`,
    borderRadius: 10,
    color: theme.palette.primary.light,
    height: 20,
    margin: 10,
    "&:hover": {
        backgroundColor: theme.palette.otherColor.light,
    },
    "&:disabled": {
        cursor: 'not-allowed'
    }
}));



