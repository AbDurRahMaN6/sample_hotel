import "./offer.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      height: 500,
      background: "#fff",
      boxShadow: "2px 2px 2px grey",
      cursor: "none"
    },
    media: {
      height: 200,
    },
    button: {
        border: "1px solid #876a20",
        width: "150px",
        textAlign: "center",
        color: "#876a20"
    },
    heads: {
        fontSize: "16px",
        textAlign: "center",
        cursor: "none",
        color: "#333",
        marginTop: "4px", 
        fontWeight: "200"
    }

  });

const Offers = () => {
    
      const classes = useStyles();
  return (
    <div className="offers">
      <div className="ofHeader">
        <h4>Offers</h4>
      </div>
      <div className="row">
        <div className="cards">
          <div className="first">
            <div className="col-md-4">
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia style={{cursor: "none"}}
          className={classes.media}
          image="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/%7B32926B10-8EE8-4639-B2DD-AC55F70CB76D%7Dslcwithbreakfast.jpg?w=360&h=175&mode=crop&quality=100&scale=both"
          title="Contemplative Reptile"
        />
        <p style={{color: '#333', textAlign: "center", fontSize: "14px", fontWeight: "500"}}>Rooms & Suites</p>
        <CardContent style={{cursor: "none"}}>
          <Typography className={classes.heads}>
          Shangri–La Circle Exclusive Member Rate with Breakfast
          </Typography>
          <Typography style={{fontSize: "14px", textAlign: "center", color: "#666", marginTop: "4px"}} variant="body4" color="textSecondary" component="p">
          Exclusive Member Rate with Breakfast for Shangri-La Circle member.
          </Typography>
        </CardContent>
        <CardContent>
        <Typography style={{fontSize: "14px", textAlign: "center", color: "#666", marginTop: "4px"}} variant="body2" color="textSecondary" component="p">
        From LKR 65,788.20 Average Per Night
          </Typography>
        </CardContent>
        <CardContent style={{fontSize: "14px", textAlign: "center", color: "#666", marginTop: "4px"}}>
            <Button className={classes.button}>View Details</Button>
        </CardContent>
      </CardActionArea>
    </Card>
            </div>
            <div className="col-md-4">
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia style={{cursor: "none"}}
          className={classes.media}
          image="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/8/B/%7BA8B2E679-6D4A-497F-95C4-A905821952F5%7Dslcmemberrate.jpg?w=360&h=175&mode=crop&quality=100&scale=both"
          title="Contemplative Reptile"
        />
        <p style={{color: '#333', textAlign: "center", fontSize: "14px", fontWeight: "500"}}>Rooms & Suites</p>
        <CardContent style={{cursor: "none"}}>
          <Typography className={classes.heads}>
          Shangri–La Circle Exclusive Member Rate
          </Typography>
          <Typography style={{fontSize: "14px", textAlign: "center", color: "#666", marginTop: "30px"}} variant="body4" color="textSecondary" component="p">
          Exclusive Member Rate for Shangri-La Circle member.
          </Typography>
        </CardContent>
        <CardContent>
        <Typography style={{fontSize: "14px", textAlign: "center", color: "#666", marginTop: "20px"}} variant="body2" color="textSecondary" component="p">
        From <b>LKR 58,478.40</b> Average Per Night
          </Typography>
        </CardContent>
        <CardContent style={{fontSize: "14px", textAlign: "center", color: "#666", marginTop: "4px"}}>
            <Button className={classes.button}>View Details</Button>
        </CardContent>
      </CardActionArea>
    </Card>
            </div>
            <div className="col-md-4">
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia style={{cursor: "none"}}
          className={classes.media}
          image="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/%7B32926B10-8EE8-4639-B2DD-AC55F70CB76D%7Dslcwithbreakfast.jpg?w=360&h=175&mode=crop&quality=100&scale=both"
          title="Contemplative Reptile"
        />
        <p style={{color: '#333', textAlign: "center", fontSize: "14px", fontWeight: "500"}}>Rooms & Suites</p>
        <CardContent style={{cursor: "none"}}>
          <Typography className={classes.heads}>
          Book Early and Save with Flexibility
          </Typography>
          <Typography style={{fontSize: "14px", textAlign: "center", color: "#666", marginTop: "30px"}} variant="body4" color="textSecondary" component="p">
          Book in advance and save up to 15% with complimentary date changes.
          </Typography>
        </CardContent>
        <CardContent>
        <Typography style={{fontSize: "14px", textAlign: "center", color: "#666", marginTop: "4px"}} variant="body2" color="textSecondary" component="p">
        From LKR 67,615.65 Average Per Night
          </Typography>
        </CardContent>
        <CardContent style={{fontSize: "14px", textAlign: "center", color: "#666", marginTop: "4px"}}>
            <Button className={classes.button}>View Details</Button>
        </CardContent>
      </CardActionArea>
    </Card>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;


// const Offers = () => {
//   return(
//     <div>Offers</div>
//   )
// }

// export default Offers