import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ActionAreaCard = ({dictionary}) => {
    return (
        <Card sx={{ width: 300, height: 290}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image={dictionary.img}
                    alt={dictionary.english}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {dictionary.english}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {dictionary.russian}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export {ActionAreaCard};