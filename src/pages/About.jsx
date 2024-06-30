import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          "& h4": {
            fontWeight: "700",
            my: 2,
            p: 2,
            fontSize: "2rem",
          },

          "& p": {
            textAlign: "justify",
            px: 3,
            fontSize: "1.2rem",
          },

          "@media ( max-width:600px )": {
            fontSize: "0.8rem",
            mt: 0,
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          doloribus optio assumenda laudantium. Minima animi alias libero fuga
          ipsam, cum perspiciatis, praesentium, obcaecati aut aspernatur minus
          omnis eos architecto. Autem. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Ad natus maxime at dignissimos accusantium quos
          accusamus, magnam nam incidunt molestias voluptatibus temporibus, unde
          veritatis. Fugiat cum optio totam aspernatur! Praesentium! Officia
          sequi voluptatem molestiae sint repellat fuga quis doloribus facere
          nesciunt iure repellendus animi doloremque alias deleniti temporibus
          omnis porro quia obcaecati minus ab atque, laboriosam dolores
          reprehenderit. Nesciunt, eum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Repellendus et sed aut dicta enim vitae quidem,
          cupiditate soluta minus velit cum vel officiis consequuntur dolore
          doloribus sunt possimus vero non. Placeat repellat quae aliquid
          aperiam vitae quis itaque, non aut quaerat sunt, eum reiciendis
          pariatur ratione architecto sapiente qui quibusdam possimus totam.
          Commodi aliquam officia sed consectetur dolor consequuntur inventore!
          Recusandae impedit consequuntur praesentium aliquam! Numquam quisquam
          ab, soluta laborum delectus minima libero harum commodi maxime illo id
          accusantium aperiam doloribus voluptas, expedita quos laudantium
          obcaecati ad dolor tempora debitis. Assumenda vero molestias nulla
          ipsa? Beatae explicabo fugit at magnam. Consectetur officia illo
          accusamus excepturi autem modi voluptatibus eos vitae ut. Voluptatem
          fuga earum eveniet voluptate provident quidem debitis ut. Voluptas
          dolorem harum fugiat delectus beatae repudiandae maiores rem eligendi
          asperiores optio. Saepe sit eveniet deleniti maxime! Maxime provident,
          sunt laborum rem possimus illo veniam sapiente quam in dolor repellat.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, id
          consequuntur explicabo similique aspernatur tenetur modi, quasi
          consectetur amet reprehenderit ipsa! Ea sequi consequuntur eligendi
          laboriosam aliquam distinctio quas! Enim! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maiores, officia! Harum natus deleniti
          illo facere nihil debitis, modi accusantium veritatis, earum ipsam
          perspiciatis cum laudantium nesciunt. Reprehenderit non sint in!
          Tempora vero obcaecati enim praesentium ratione tenetur veritatis
          porro ipsa suscipit, similique laborum cum, dolore eaque, voluptatum
          ad adipisci architecto totam ex. Dolorum expedita quas ratione numquam
          id facere et! Laboriosam ullam soluta quasi rem modi officiis? Quos,
          quia neque? Maiores minima rem voluptatum repellat delectus,
          laudantium quisquam et, aspernatur perferendis ut magnam id quibusdam,
          reiciendis earum cumque provident quae.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
