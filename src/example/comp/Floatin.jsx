import { Fab,AddIcon,EditIcon,FavoriteIcon,NavigationIcon,Box } from '@mui/material'
import React from 'react'

function Floatin() {
  return (
    <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}></Box>
      <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
<Fab color="secondary" aria-label="edit">
  <EditIcon />
</Fab>
<Fab variant="extended">
  <NavigationIcon sx={{ mr: 1 }} />
  Navigate
</Fab>
<Fab disabled aria-label="like">
  <FavoriteIcon />
</Fab>
    </div>
  )
}

export default Floatin