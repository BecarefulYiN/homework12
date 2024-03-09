import { Box, Container, borderBottom } from "@mui/system"
import Avatar  from '@mui/material/Avatar';
import Dota from './../assets/Dota2.jpg'
import { styled } from "@mui/system";
import Typography  from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import Genshin from './../assets/GenshinImpact.jpg'
import Apex from './../assets/ApexLegends.jpg'
import StarRail from './../assets/StarRail.jpg'
import Valorant from './../assets/Valorant.jpg'

function ListOfGame() {
  const StyledAvatar = styled(Avatar)({
    width: '30%',
    height: '15vh'
    
  });

  const StyledCompoentOfItem = styled(Container) ({
    width: '100%',
    height: 'auto',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottom: '1px solid black'
  });

  const TextContaiiner = styled(Container) ({
    width: '50%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '30px'
  })
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      bgcolor: '#202020',
      paddingTop: '20px'
    }}>
      <StyledCompoentOfItem>
        <StyledAvatar alt="Dota2" src={Dota} variant="square"/>
        <TextContaiiner>
          <Typography variant="h5" color={"white"}>Dota 2</Typography>
          <Typography variant="p" color={"white"}>Play Time: 50hours</Typography>
          <Typography variant="p" color={"white"}>Last Play: 13mimutes</Typography>
          <Typography variant="p" color={"white"}>Space requirement: 37.13 GB</Typography>
        </TextContaiiner>
        <Button variant="contained" sx={{backgroundColor: 'white', color: 'black', '&:hover': {
          backgroundColor: 'Black',
          color: 'white'
        },}}>launch</Button>
      </StyledCompoentOfItem>

      <StyledCompoentOfItem>
        <StyledAvatar alt="Genshin" src={Genshin} variant="square"/>
        <TextContaiiner>
          <Typography variant="h5" color={"white"}>Genshin Impact</Typography>
          <Typography variant="p" color={"white"}>Play Time: 40hours</Typography>
          <Typography variant="p" color={"white"}>Last Play: 10mimutes</Typography>
          <Typography variant="p" color={"white"}>Space requirement:  30GB</Typography>
        </TextContaiiner>
        <Button variant="contained" sx={{backgroundColor: 'white', color: 'black', '&:hover': {
          backgroundColor: 'Black',
          color: 'white'
        },}}>launch</Button>
      </StyledCompoentOfItem>

      <StyledCompoentOfItem>
        <StyledAvatar alt="Apex" src={Apex} variant="square"/>
        <TextContaiiner>
          <Typography variant="h5" color={"white"}>Apex Legends</Typography>
          <Typography variant="p" color={"white"}>Play Time: 20hours</Typography>
          <Typography variant="p" color={"white"}>Last Play: one day ago</Typography>
          <Typography variant="p" color={"white"}>Space requirement: 22GB</Typography>
        </TextContaiiner>
        <Button variant="contained" sx={{backgroundColor: 'white', color: 'black', '&:hover': {
          backgroundColor: 'Black',
          color: 'white'
        },}}>launch</Button>
      </StyledCompoentOfItem>

      <StyledCompoentOfItem>
        <StyledAvatar alt="StarRail" src={StarRail} variant="square"/>
        <TextContaiiner>
          <Typography variant="h5" color={"white"}>Star Rail</Typography>
          <Typography variant="p" color={"white"}>Play Time: 40hours</Typography>
          <Typography variant="p" color={"white"}>Last Play: 4 minutes</Typography>
          <Typography variant="p" color={"white"}>Space requirement: 40GB</Typography>
        </TextContaiiner>
        <Button variant="contained" sx={{backgroundColor: 'white', color: 'black', '&:hover': {
          backgroundColor: 'Black',
          color: 'white'
        },}}>launch</Button>
      </StyledCompoentOfItem>

      <StyledCompoentOfItem>
        <StyledAvatar alt="Valorant" src={Valorant} variant="square"/>
        <TextContaiiner>
          <Typography variant="h5" color={"white"}>Valorant</Typography>
          <Typography variant="p" color={"white"}>Play Time: 60hours</Typography>
          <Typography variant="p" color={"white"}>Last Play: one day ago</Typography>
          <Typography variant="p" color={"white"}>Space requirement: 22GB</Typography>
        </TextContaiiner>
        <Button variant="contained" sx={{backgroundColor: 'white', color: 'black', '&:hover': {
          backgroundColor: 'Black',
          color: 'white'
        },}}>launch</Button>
      </StyledCompoentOfItem>
    </Box>
  )
}

export default ListOfGame
