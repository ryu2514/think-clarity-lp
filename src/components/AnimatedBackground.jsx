import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // アニメーション2: パーティクルがロゴの上部に集まる
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 100,
        endX: 50 + (Math.random() - 0.5) * 10,
        endY: 22 + (Math.random() - 0.5) * 8,
        delay: i * 0.05,
        size: 0.3 + Math.random() * 0.5
    }));

    return (
        <div className="animated-background">
            {/* SVGでパーティクルを描画 */}
            <svg className="particle-animation" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                {particles.map((particle) => (
                    <motion.circle
                        key={`particle-${particle.id}`}
                        r={particle.size}
                        fill="rgba(20, 184, 166, 0.6)"
                        filter="url(#particle-glow)"
                        initial={{
                            cx: particle.startX,
                            cy: particle.startY,
                            opacity: 0
                        }}
                        animate={{
                            cx: particle.endX,
                            cy: particle.endY,
                            opacity: [0, 1, 0.8, 0]
                        }}
                        transition={{
                            duration: 3,
                            delay: particle.delay,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    />
                ))}

                {/* 中心の光る核 */}
                <motion.circle
                    cx="50"
                    cy="22"
                    r="3"
                    fill="rgba(20, 184, 166, 0.3)"
                    initial={{ opacity: 0, r: 0 }}
                    animate={{
                        opacity: [0, 0.6, 0.6],
                        r: [0, 3, 3]
                    }}
                    transition={{
                        duration: 2,
                        delay: 1.5,
                        ease: "easeOut"
                    }}
                />

                {/* グロー効果 */}
                <defs>
                    <filter id="particle-glow">
                        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default AnimatedBackground;
