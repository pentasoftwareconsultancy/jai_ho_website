import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const slideVariants = {
  initial: (direction) => ({
    x: direction === "left" ? "-100%" : "100%",
    opacity: 0,
  }),
  animate: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction === "left" ? "100%" : "-100%",
    opacity: 0,
  }),
};

const AuthLayout = ({ children }) => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <div className="flex items-center justify-center min-h-screen p-4 overflow-hidden">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative">
        <AnimatePresence mode="wait" initial={false}>
          {isLogin ? (
            <>
              {/* Login Form - Left */}
              <motion.div
                key="login-form"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom="left"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full md:w-1/2 p-8"
              >
                {children[0]}
              </motion.div>

              {/* Info - Right */}
              <motion.div
                key="login-info"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom="right"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="hidden md:flex md:w-1/2 text-white items-center justify-center p-8"
              >
                {children[1]}
              </motion.div>
            </>
          ) : (
            <>
              {/* Info - Left */}
              <motion.div
                key="signup-info"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom="left"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="hidden md:flex md:w-1/2 text-white items-center justify-center p-8"
              >
                {children[1]}
              </motion.div>

              {/* Signup Form - Right */}
              <motion.div
                key="signup-form"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom="right"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full md:w-1/2 p-8"
              >
                {children[0]}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthLayout;
