import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/wired-lineal-497-truck-delivery.json'; // Importez votre fichier d'animation JSON

const Valider = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleFermerClick = () => {
    setIsVisible(false);
  };

  return (
    <center>
      <motion.div 
        className="main"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <svg id="exit" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>

          <center>
            <div className="heading">
              <div>
                <Lottie animationData={animationData} loop autoplay speed={1.5} style={{ width: 70, height: 70 }} />
              </div>
            </div>
          </center>
          <center>
            <div className="heading">
              <div>
                <h1>✨Recyclez c'est nettoyer✨</h1>
              </div>
            </div>
          </center>
          <center>
            <div className="containers">
              <button className="btns" style={{ alignItems: "center", justifyContent: "center" }} onClick={handleFermerClick}>
                Fermer
              </button>
            </div>
          </center>
        </div>
      </motion.div>
    </center>
  );
};

export default Valider;
