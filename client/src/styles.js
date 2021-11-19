import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },

  body: {
    background : "repeat",
    background: "#f5f5f5",
    fontfamily: "sans-serif",
    color: "#5b626b",
    fontSize: "13px",
  },

  appBar: {
    borderRadius: 15,
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));
