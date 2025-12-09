import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    return (
        <div className="animated-background">
            {/* 中央から広がる円形グラデーション（ロゴサイズに合わせて） */}
            <motion.div
                className="ripple-circle ripple-1"
                initial={{ scale: 0.5, opacity: 0.8 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: "easeOut"
                }}
            />
            <motion.div
                className="ripple-circle ripple-2"
                initial={{ scale: 0.5, opacity: 0.6 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: "easeOut"
                }}
            />
            <motion.div
                className="ripple-circle ripple-3"
                initial={{ scale: 0.5, opacity: 0.4 }}
                animate={{ scale: 1.3, opacity: 0 }}
                transition={{
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: "easeOut"
                }}
            />


        </div>
    );
};

export default AnimatedBackground;
