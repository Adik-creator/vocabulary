import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

const ActionAreaCard = ({dictionary}) => {
    return (
        <a href={`https://www.google.com/search?q=how+to+pronounce+${dictionary.english}
                    &oq=how+to+prono&aqs=chrome.1.0i512l3j69i57j0i512l6.5384j0j7&sourceid=chrome&ie=UTF-8`}
           rel="noreferrer"
           target="_blank"
           style={{textDecoration: 'none'}}
        >
            <Card sx={{width: 300, height: 290}}>
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
        </a>
    );
}

export {ActionAreaCard};