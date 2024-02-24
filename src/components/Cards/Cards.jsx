import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';

export default function MediaCard({ title, image, desc, price,id }) {
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      component="img"
        sx={{ height: 240,objectFit: "contain"  }}
        
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Rs. {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>navigate('/productDetails/'+id)} size="small">Get Details</Button>
      </CardActions>
    </Card>
  );
}
