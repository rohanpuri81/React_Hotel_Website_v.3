import { Box ,Typography} from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div>
        <Box sx={{textAlign:'center',bgcolor:"#1a1a19",color:"white",padding:3}}>

          <Box sx={{margin:3,"& svg":{
            fontSize:"60px",
            cursor:"pointer",
            mr:2,
            transition:"0.2s ease-in-out"
          },
          "& svg:hover":{
            color:'goldenrod',
            transition:"0.2s ease-in-out",
            transform:"translateY(-10px)",
          }
          }}>
            {/* icons */}
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
            <YouTubeIcon />
            
          </Box>
          <Typography variant='h5' sx={{"@media (max-width:600px)":{
            fontSize:"1rem"
          }}}>
            All Rights reserved &copy; by Rohan Puri;
          </Typography>
        </Box>
    </div>
  )
}

export default Footer