import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border //
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData( name, calories, fat, carbs, protein ) {
  return { name, calories, fat, carbs, protein };
}



export default function CustomizedTables({orderedShoes, SetOrderedShoes, SetNumberArticleInCart}) {
  const deleteStudent=(id_Chaussures)=>{
    const filteredStudents=orderedShoes.filter((element,index)=>{
      return element.id_Chaussures !== id_Chaussures})
      localStorage.removeItem('panier')
      SetOrderedShoes(filteredStudents)
      SetNumberArticleInCart(orderedShoes.length - 1)
      console.log(filteredStudents)

  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 700, margin: 'auto ' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Article</StyledTableCell>
            <StyledTableCell align="right">
              Prix
            </StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {orderedShoes.map((row) => (
           
            <StyledTableRow key={row.id_Chaussures}>
              <StyledTableCell component="th" scope="row">
                {row.nom_chaussure}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.prix} FCFA 
                <IconButton color="primary"  component="label" onClick={()=>deleteStudent(row.id_Chaussures)}>
                <HighlightOffIcon />
                </IconButton>
                </StyledTableCell>
                
              
            </StyledTableRow>
            
         
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
