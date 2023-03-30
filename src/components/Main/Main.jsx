import React, {useContext} from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'; 
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import infoCard from '../infoCard';

const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by speechly"/>
        <CardContent >
            <Typography align="center" variant="h5">Total balance ${balance}</Typography>
            <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px'}}>
                {/* <infoCard /> */}
                 <div style={{textAlign: "center", padding: '0 10%'}}>Try saying: Add Income for $100 in category bills for monday.</div>
            </Typography>
            <Divider className={classes.divider} />
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacig={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}

export default Main
