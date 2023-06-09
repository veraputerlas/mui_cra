 import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";


import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useService from "../helpers/service";
import Cell from "../components/ui/Cell";
import "../../src/css/character.css"

function SingleCharacterPage() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const { getCharacterById } = useService();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === 0) return;
    getCharacterById(id).then((res) => {
      setCharacter(res);
    });
  }, [id]);
  useEffect(() => {
    if (!character) return;
    dispatch({
      type: "UPDATE_TITLE",
      payload: character.name,
    });
  }, [character]);

  return (
    <div className="character">
  
      {character ? (
        <>
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "34px",
              padding: "20px 0",
              fontWeight: "bold",
              color: "#050398",
              width: "100px"
            }}
          >
            {character.name}
          </Typography>
          <div className="character_title">
          <img width="200px"
    src="https://gamerwall.pro/uploads/posts/2021-07/1627056530_50-gamerwall-pro-p-bronya-elfov-art-kartinki-52.png"
    srcSet="https://gamerwall.pro/uploads/posts/2021-07/1627056530_50-gamerwall-pro-p-bronya-elfov-art-kartinki-52.png"
    alt=""
  />
          <Paper
            sx={{
              p: 2,
              flexGrow: 1,
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              backgroundColor: "inherit", 
              border: "none",
              color: "#050398"
            }}
          >
            <Grid  >
               
              <Cell header="Имя" textContent={character.name} />
              <Divider
                sx={{
                  h: "1px",
                }}
              />
              <Cell header="Раса" textContent={character.race} />
              <Cell header="Пол" textContent={character.gender} />
              <Cell header="Дата рождения" textContent={character.death ? character.death : "Не указано"}
 />
              <Cell header="Дата смерти" textContent={character.death ? character.death : "Не указано"}
 />
            
            </Grid>
            
          </Paper>
          </div>
          <Button
                variant="outlined"
                color="primary"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 10px ",
                }}
              >
                <Link href={character.wikiUrl} underline="none" color="#fff" border="none">
                  Посетить страницу на Википедии
                </Link>
              </Button>
        </>
      ) : (
        <Stack
          spacing={3}
          sx={{
            width: "100%",
            height: "80vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <CircularProgress color="inherit" />
        </Stack>
      )}
    </div>
  );
}

// const Cell = ({ header, textContent }) => {
//   return (
//     <>
//       <Grid
//         item
//         xs={12}
//         container
//         direction="row"
//         justifyContent="flex-start"
//         alignItems="flex-end"
//       >
//         <Typography
//           variant="h2"
//           sx={{
//             textAlign: "center",
//             fontSize: "24px",
//             padding: "10px 0",
//           }}
//         >
//           {header}: &nbsp;
//         </Typography>

//         <Typography
//           variant="h2"
//           sx={{
//             textAlign: "center",
//             fontSize: "30px",
//             padding: "10px 0",
//           }}
//         >
//           {textContent}
//         </Typography>
//       </Grid>
//     </>
//   );
// };

export default SingleCharacterPage;
