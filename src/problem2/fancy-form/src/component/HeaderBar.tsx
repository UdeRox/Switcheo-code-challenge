import {
  Avatar,
  Box,
  Brightness4Icon,
  Brightness7Icon,
  Grid,
  IconButton,
  useTheme,
} from "@/lib/ui";

interface HeaderBar {
  buttonClick: () => void;
}

export const HeaderBar = ({ buttonClick }: HeaderBar) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ p: 1 }}>
        <Grid
          container
          direction={"row"}
          alignItems="center"
          justifyContent="flex-end"
          spacing={1}
        >
          <Grid item>
            <IconButton sx={{ ml: 1 }} onClick={buttonClick} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Grid>
          <Grid item>
            <Avatar sx={{ width: 24, height: 24 }} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
