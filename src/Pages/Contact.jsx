import React from "react";
import Layout from "../components/Layout/Layout";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box 
      sx={{
        my:10,
        ml:10,
        "& h4":{
          fontWeight:'bold'
        },
        "@media (max-width:600px)":{
          marginTop:5,
          marginLeft:5,
          mr:6
        }
        }}>
        <Typography variant="h4">
          Contact My Restaurant
        </Typography>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            atque possimus ad est, perferendis pariatur laudantium ullam
            voluptate, optio quis ratione aut quidem doloribus dolorem aliquam
            dicta minima aliquid obcaecati.
          </p>
      </Box>
      <Box sx={{
        margin:"auto",
        width:"600px",
        marginBottom:3,
        "@media (max-width:600px)":{
            width:"80%"
        }
        }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black",color:"white"}} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                 <SupportAgentIcon sx={{color:"black",pt:1}}/> 123-456-7809 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                 <EmailIcon sx={{color:"black",pt:1}}/> rana@rona.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                 <LocalPhoneIcon sx={{color:"black",pt:1}}/> 7058212023
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
