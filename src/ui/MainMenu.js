import * as React from 'react';
//import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(theme => ({
  link:{
    color: theme.palette.text.primary,
    textDecoration: 'none',
    width: '100%'
  }
}))

export default function MainMenu() {

  const classes = useStyle()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu" 
        sx={{ mr: 2 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
            <MenuIcon />
        </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <h2>Login</h2>
        <MenuItem onClick={handleClose}>
          <Link to="/login" className={classes.link}> 
            Autenticar-se
          </Link>
        </MenuItem>
        <hr className={classes.link}/>
        <h2>Alunos</h2>
        <MenuItem onClick={handleClose}>
          <Link to="/aluno" className={classes.link}> 
            Listagem de aluno
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/aluno/novo" className={classes.link}>
            Cadastro de aluno
          </Link>
        </MenuItem>
        
        <h2>Professores</h2>

        <MenuItem onClick={handleClose}>
          <Link to="/professor" className={classes.link}>
            Listagem de professores
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/professor/novo" className={classes.link}>
            Cadastro de professores
          </Link>
        </MenuItem>

        <h2>Cursos</h2>

        <MenuItem onClick={handleClose}>
          <Link to="/cursos" className={classes.link}>
            Listagem de cursos
          </Link>
        </MenuItem>
        
        <MenuItem onClick={handleClose}>
          <Link to="/curso/novo" className={classes.link}>
            Cadastro de cursos
          </Link>
        </MenuItem>

        <h2>Site</h2>

        <MenuItem onClick={handleClose}>
          <Link to="/Sobre" className={classes.link}>
            Sobre mim
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}