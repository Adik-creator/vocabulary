import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";

import styles from './IrregularCard.module.css'


const IrregularCard = ({dictionary}) => {
    return (
        <Card sx={{width: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 18}} color="text.secondary" gutterBottom>
                    {dictionary.BaseForm}
                </Typography>
                <Typography variant="h5" component="div">
                    {dictionary.PastSimple}
                </Typography>
                <Typography sx={{mb: 1.5}} color="#222">
                    {dictionary.Russian}
                </Typography>
                <Typography variant="body2">
                    ---------------------
                </Typography>
            </CardContent>
            <CardActions>
                <Box>
                    <a href={`https://www.google.com/search?q=how+to+pronounce+${dictionary.PastSimple}
                    &oq=how+to+prono&aqs=chrome.1.0i512l3j69i57j0i512l6.5384j0j7&sourceid=chrome&ie=UTF-8`}
                       rel="noreferrer"
                       target="_blank"
                       className={styles.pronounceLink}
                    >
                        how to pronounce
                    </a>
                </Box>
            </CardActions>
        </Card>
    );
};

export {IrregularCard};