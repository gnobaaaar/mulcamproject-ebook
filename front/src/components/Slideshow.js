import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { makeStyles } from '@material-ui/core/styles';

const slideImages = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg'
];

// image slide url css
const useStyles = makeStyles({
  img1: {
    backgroundImage: `url(${slideImages[0]})`
  },
  img2: {
    backgroundImage: `url(${slideImages[1]})`
  },
  img3: {
    backgroundImage: `url(${slideImages[2]})`
  },
  quoteBox: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0.3
  },
  quoteTitle: {
    fontSize: '30px',
    fontFamily: 'quicksand'
  },
  // footerBranch: {
  //   marginTop: '340px',
  //   background: '#101010',
  //   height: '200px'
  // }
});

const Slideshow = () => {
  const classes = useStyles();
  return (
        <div className="slide-container">
            <Slide className={classes.root}>
                <div className="each-slide">
                    <div className={classes.img1}>
                        {/* <span>Slide 1</span> */}
                    </div>
                </div>
                <div className="each-slide">
                    <div className={classes.img2}>
                        {/* <span>Slide 2</span> */}
                    </div>
                </div>
                <div className="each-slide">
                    <div className={classes.img3}>
                        {/* <span>Slide 3</span> */}
                    </div>
                </div>
            </Slide>
            <footer className={classes.footerBranch}>

            </footer>
             {/* <div className={classes.quoteBox}> */}
             {/*   <div className={classes.quoteTitle}> */}
             {/*       What I cannot create, I do not understand */}
             {/*   </div> */}
             {/*   <div className={classes.quoteWho}> */}
             {/*       - Richard P. Feynman */}
             {/*   </div> */}
             {/* </div> */}
        </div>
  );
};

export default Slideshow;
