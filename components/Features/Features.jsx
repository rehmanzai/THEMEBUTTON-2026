import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';
import { FaChartLine, FaComments, FaPenRuler, FaMagnifyingGlassChart, FaRocket, FaBullhorn, FaHeadset } from 'react-icons/fa6';

const steps = [
  { id: 1, title: "Analyse Requirement", icon: <FaChartLine />, desc: "Get a clear understanding and analyzing the client's requirements." },
  { id: 2, title: "Consult", icon: <FaComments />, desc: "Comprehend data and present it in a formal Project Action Plan." },
  { id: 3, title: "Design & Dev", icon: <FaPenRuler />, desc: "Final responsive design and development with SEO implementation." },
  { id: 4, title: "Quality Analysis", icon: <FaMagnifyingGlassChart />, desc: "Testing process to make sure our solution fits the requirements." },
  { id: 5, title: "Project LIVE", icon: <FaRocket />, desc: "Transferring files to the live server, and your website is live." },
  { id: 6, title: "Digital Marketing", icon: <FaBullhorn />, desc: "Promote your brand to reach and target your correct audience." },
  { id: 7, title: "Maintenance", icon: <FaHeadset />, desc: "Make sure everything works accurately and the client is satisfied." }
];

export default function Features() {
  return (
    <section className="process-section">
      
      {/* 🎬 REPEATING SCROLL ANIMATION FOR HEADING */}
      <motion.div 
        className="heading-wrapper-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} // FIX: once: false kiya taaki har baar chale
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="process-heading">Web Development Process</h2>
        <div className="process-divider"></div>
      </motion.div>

      <div className="desktop-process-container">
        {/* Wavy Vector Line Path */}
{/* --- FILE LOCATION: Features.jsx --- */}
<div className="wavy-line-wrapper">
  <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 1200 200" fill="none">
    <path 
      d="M 50,40 Q 140,165 230,40 T 410,40 T 590,40 T 770,40 T 950,40 T 1130,40" 
      
      /* 🎨 FIX: Isko alpha value .25 se badha kar .60 (60% Solid Dark Green) kar diya hai */
      stroke="rgba(32, 204, 104, 0.6)" 
      strokeWidth="2.5" /* 📐 Line thodi aur clear aur smooth dikhne ke liye width 2.5 ki */
      strokeDasharray="5 5"
    />
  </svg>
</div>


        <div className="process-grid-layout">
          {steps.map((step, index) => {
            const isTop = step.id % 2 !== 0;
            
            return (
              /* 🎬 REPEATING SCROW ANIMATION FOR EACH CARD */
              <motion.div 
                key={step.id} 
                className={`step-node-box ${!isTop ? 'reverse-flow' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }} // FIX: once: false kiya har card ke liye
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }} // Staggered entry delay curve
              >
                
                {/* Deep Navy Blue Shape Blocks */}
                <div className={`custom-infographic-card ${isTop ? 'card-pointing-down move-down-hover' : 'card-pointing-up move-up-hover'}`}>
                  <span className="icon-amber-glow">{step.icon}</span>
                  <h3 className="card-title-text">{step.title}</h3>
                </div>
                
                {/* Green Circle Badges */}
                <div className={`node-connector-line ${isTop ? 'normal-flow' : 'reverse-flow'}`}>
                  <div className="dotted-vertical-pipe"></div>
                  <div className="green-circle-badge">{step.id}</div>
                </div>
                
                {/* Description Units */}
                <p className={`step-details-paragraph ${isTop ? 'margin-top-space' : 'margin-bottom-space'}`}>
                  {step.desc}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
