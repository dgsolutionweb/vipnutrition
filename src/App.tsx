import { Box, Container, Paper, ThemeProvider, Typography, createTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import logo from './assets/logo.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D32F2F',
      light: '#FF5252',
    },
    secondary: {
      main: '#212121',
      light: '#484848',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#ffffff',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#ffffff',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const buttonVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const letterAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      type: "spring",
      stiffness: 200,
      damping: 12
    }
  })
};

function App() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5517991464147', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/vipnutrition_', '_blank');
  };

  const handleGroupWhatsApp = () => {
    window.open('https://chat.whatsapp.com/FEQjxsrHOGR2XUJWGWEfRM', '_blank');
  };

  const handleLocation = () => {
    window.open('https://maps.app.goo.gl/adWXfz528Pz8Xwo18', '_blank');
  };

  const handleWebsite = () => {
    window.open('https://ioursmid.github.io/vipnutrition/', '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
          background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated background elements */}
        <Box
          component={motion.div}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 0.1,
            background: 'radial-gradient(circle at 50% 50%, #D32F2F 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles effect */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            sx={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: 'rgba(211, 47, 47, 0.3)',
              zIndex: 0,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [i * 10, i * 15, i * 10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ width: '100%', maxWidth: 400, position: 'relative', zIndex: 1 }}
        >
          <Paper
            elevation={24}
            sx={{
              p: 4,
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, rgba(211, 47, 47, 0.8) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 30px rgba(211, 47, 47, 0.2)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 50% 0%, rgba(211, 47, 47, 0.2), transparent 70%)',
                opacity: 0.8,
              },
            }}
          >
            <AnimatePresence>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component={motion.img}
                  src={logo}
                  alt="VIP Nutrition"
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  transition={{ type: "spring", stiffness: 300 }}
                  sx={{
                    width: '100%',
                    maxWidth: 200,
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto 1.5rem',
                    filter: 'drop-shadow(0 0 10px rgba(211, 47, 47, 0.3))',
                  }}
                />

                <motion.div
                  initial="initial"
                  animate="animate"
                  style={{
                    position: 'relative',
                    marginBottom: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ 
                    position: 'relative',
                    padding: '0.5rem',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: -5,
                      right: -5,
                      bottom: 0,
                      background: 'linear-gradient(90deg, transparent, rgba(211, 47, 47, 0.1), transparent)',
                      animation: 'pulse 2s infinite',
                    }
                  }}>
                    <motion.div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <motion.div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                          gap: '4px'
                        }}
                      >
                        {"Sua Loja Especializada".split('').map((char, index) => (
                          <motion.span
                            key={index}
                            custom={index}
                            variants={letterAnimation}
                            style={{
                              display: 'inline-block',
                              fontSize: '1.1rem',
                              fontWeight: char === ' ' ? 'normal' : '600',
                              color: '#fff',
                              textShadow: '0 0 10px rgba(211, 47, 47, 0.5)',
                              whiteSpace: 'pre',
                            }}
                            whileHover={{
                              scale: 1.2,
                              color: '#FF5252',
                              transition: { duration: 0.2 }
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.div>

                      <motion.div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                          gap: '4px'
                        }}
                      >
                        {"em Suplementos".split('').map((char, index) => (
                          <motion.span
                            key={index}
                            custom={index + 20} // Offset para atrasar a animação da segunda linha
                            variants={letterAnimation}
                            style={{
                              display: 'inline-block',
                              fontSize: '1.2rem',
                              fontWeight: char === ' ' ? 'normal' : '700',
                              color: '#FF5252',
                              textShadow: '0 0 15px rgba(211, 47, 47, 0.6)',
                              whiteSpace: 'pre',
                            }}
                            whileHover={{
                              scale: 1.2,
                              color: '#fff',
                              transition: { duration: 0.2 }
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      style={{
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #FF5252, transparent)',
                        marginTop: '8px',
                        transformOrigin: 'left'
                      }}
                    />
                  </Box>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      bottom: -15,
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <Box
                      component={motion.div}
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      sx={{
                        width: '30px',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #FF5252, transparent)',
                        borderRadius: '2px',
                      }}
                    />
                  </motion.div>
                </motion.div>

                <Box sx={{ display: 'grid', gap: 2 }}>
                  {[
                    { icon: <WhatsAppIcon />, text: "Fale Conosco", onClick: handleWhatsApp, primary: true },
                    { icon: <InstagramIcon />, text: "Siga no Instagram", onClick: handleInstagram, primary: false },
                    { icon: <GroupIcon />, text: "Participe do Grupo VIP", onClick: handleGroupWhatsApp, primary: true },
                    { icon: <LanguageIcon />, text: "Nosso Site", onClick: handleWebsite, primary: false },
                    { icon: <LocationOnIcon />, text: "Nossa Localização", onClick: handleLocation, primary: true },
                  ].map((button, index) => (
                    <motion.div
                      key={index}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Paper
                        onClick={button.onClick}
                        sx={{
                          p: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          cursor: 'pointer',
                          bgcolor: button.primary ? 'primary.main' : 'secondary.main',
                          color: 'white',
                          borderRadius: '12px',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                          '&:hover': {
                            bgcolor: button.primary ? 'primary.light' : 'secondary.light',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                            '&::after': {
                              transform: 'translateX(100%)',
                            },
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)',
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.5s ease',
                          },
                        }}
                      >
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {button.icon}
                        </motion.div>
                        <Typography sx={{ fontWeight: 500 }}>{button.text}</Typography>
                      </Paper>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </AnimatePresence>
          </Paper>
        </motion.div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
