import { AppBar, Box, Button, CssBaseline, ThemeProvider, Toolbar, Typography,createTheme } from '@mui/material'
import React from 'react'
import logo from '../images/logo.png'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const darkTheme = createTheme({
        palette: {
          
          primary: {
            light: '#757ce8',
            main: '#009688',
            dark: '#002884',
            contrastText: '#fff',
          },
        },
      });
  return (
    <div>
        <Box sx={{display:'flex',backgroundColor:'#00695f'}}>
            
            <CssBaseline/>
            <ThemeProvider theme={darkTheme}>
            <AppBar component={'nav'} color='primary'>
                <Toolbar>
                <img src={logo} alt="Logo" style={{height:'4rem',width:'4rem'}} /> &nbsp;&nbsp;
                    <Typography 
                    variant='h4'
                    component='div'>
                       Remy's Recipes
                    </Typography>
                    <Box sx={{marginLeft:'auto'}}>
                        <Button variant='contained' sx={{borderRadius:'12px'}}>
                            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                                Indian
                            </Link>
                        </Button>&nbsp;&nbsp;
                        <Button variant='contained' sx={{borderRadius:'12px'}}>
                            <Link to={'/italian'} style={{textDecoration:'none',color:'white'}}>
                                Italian
                            </Link>
                        </Button>&nbsp;&nbsp;
                        <Button variant='contained' startIcon={<AddIcon/>} sx={{borderRadius:'12px'}}>
                            <Link to={'/add'}style={{textDecoration:'none',color:'white'}}>
                                Cuisine
                            </Link>
                        </Button>

                    </Box>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>

        
    </div>
  )
}

export default NavBar