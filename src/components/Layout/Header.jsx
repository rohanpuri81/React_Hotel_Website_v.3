import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React,{useState} from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {NavLink} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen,setMobileOpen]= useState(false)

  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen)
  }

  // Drawer
  const drawer =(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
        <Typography 
        color={'goldenrod'} 
        variant='h6' 
        component='div' 
        sx={{flexGrow:1,textAlign:'center',my:2}}
        
        >
              <FastfoodIcon />
              Rohan's restra
              </Typography>
              <hr />
              
                <ul className='mobile-menu'>
                  <li className='bLi'>
                    <NavLink to={'/'}>Home</NavLink>
                  </li>
                  <li className='bLi'>
                    <NavLink to={'/menu'}>Menu</NavLink>
                  </li>
                  <li className='bLi'>
                    <NavLink to={'/about'}>About</NavLink>
                  </li>
                  <li className='bLi'>
                    <NavLink to={'/contact'}>Contact</NavLink>
                  </li>
                </ul>
              
    </Box>
  )
  return (
    <div>
        <Box>
          <AppBar component={'nav'} sx={{bgcolor:'black'}}>
            <Toolbar>
              <IconButton 
              color='inherit' 
              aria-label='open drawer' 
              edge='start'
              sx={{
                mr:2,display:{sm:'none'}
              }}
              onClick={handleDrawerToggle}
              >
                <MenuIcon/>
              </IconButton>

            <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1}}>
              <FastfoodIcon />
              <NavLink activeClassName='active' to="/" style={{textDecoration:"none",color:"goldenrod"}}>Rohan's restra</NavLink>
              </Typography>
              <Box sx={{display:{xs:'none',sm:'block'}}}> 
                <ul className='navigation-menu'>
                  <li className='bLi'>
                    <NavLink to={'/'}>Home</NavLink>
                  </li>
                  <li className='bLi'>
                    <NavLink to={'/menu'}>Menu</NavLink>
                  </li>
                  <li className='bLi'>
                    <NavLink to={'/about'}>About</NavLink>
                  </li>
                  <li className='bLi'>
                    <NavLink to={'/contact'}>Contact</NavLink>
                  </li>
                </ul>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component={'nav'}>
            <Drawer 
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{display:{xs:'block',sm:'none'},"& .MuiDrawer-paper":{
              boxSizing:'border-box',
              width:'240px',
              background:"black",
              color:"white"
            }}}
            >
              {drawer}
            </Drawer>

          </Box>
          <Box />

          <Toolbar />
        </Box>
    </div>
  )
}

export default Header