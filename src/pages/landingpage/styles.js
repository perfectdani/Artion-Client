export const register = () => ({
  main: {
    width: '100vw',
    position: 'absolute',
    bottom: '48px',
    top: '64px',
  },
  paper: {
    // position: 'relative',
    // height: '100%',
    width: '100vw',
    position: 'fixed',
    bottom: '48px',
    top: '64px',
    '&:hover': {
      boxShadow: '0px 24px 36px rgba(131,153,167,0.99)',
    },
  },
  image: {
    backgroundColor: 'rgb(255, 255, 255)',
    height: '12% !important',
    position: 'fixed',
    width: '-webkit-fill-available',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'none',
    zIndex: 100,
    left: '50%',
    transform: 'translateX(-50%)',
    top: '60px',
    position: 'absolute',
  },
  largeFont: {
    fontFamily: 'cursive',
    fontSize: 'xxx-large',
  },
  smallFont: {
    fontFmily: 'cursive',
    fontSize: 'unset',
  },
  carouselContainer: {
    marginTop: '120px',
  },
});