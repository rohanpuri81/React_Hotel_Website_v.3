import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        padding:2,
        textAlign:'center',
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:'2rem'
        },
        "& p":{
          textAlign:"justify"
        },
        "@media (max-width:600px)":{
          marginTop:"0px",
          marginBottom:"30px",
          "& h4":{
            fontSize:"1.3rem"
          }
        }
        
        }}>
        <Typography variant="h4">Welcome to my restaurant</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nihil
          animi optio, quaerat debitis doloremque saepe quidem, molestiae
          aliquam eligendi sit. Saepe, vero voluptatem distinctio optio non unde
          vitae aliquam tempora neque sint cupiditate obcaecati ut? Optio sed,
          deleniti eveniet reprehenderit eligendi nobis maiores quod cumque
          vitae doloribus quo error autem est nihil veniam iure rerum veritatis
          corrupti officia! Architecto beatae ipsam alias dicta hic dolorum!
          Accusamus cupiditate quasi voluptatum, doloremque, perferendis odio
          doloribus ad atque maxime tempora natus? Quia accusamus aut odio
          repudiandae aperiam aspernatur, earum exercitationem minima eum porro
          quaerat quibusdam laboriosam eos explicabo reiciendis praesentium est
          mollitia.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quos itaque qui, cum velit dicta inventore facere a ab. Distinctio
          soluta voluptatibus inventore beatae odit eos hic, dolor libero
          reiciendis vitae esse pariatur necessitatibus veritatis. Fugiat,
          velit. Dolore molestias quibusdam nobis! Nam accusantium quisquam
          tempore fugiat autem! Sequi iure omnis laborum pariatur quo quod eius
          exercitationem quibusdam, numquam ipsum reiciendis laboriosam facere
          ipsam? Laborum, omnis reprehenderit. Vero, delectus nisi magnam minus
          ad quae consequuntur nulla ratione nobis natus repellendus voluptas
          necessitatibus temporibus perspiciatis architecto et, deserunt ex odio
          obcaecati ducimus in ipsa. Laborum consectetur, consequatur esse nihil
          illo fugiat reprehenderit?
        </p>
      </Box>
    </Layout>
  );
};

export default About;
