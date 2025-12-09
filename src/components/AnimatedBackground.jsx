import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // アニメーション3: 思考の流れを示すフローライン
    const flowLines = Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const startDistance = 15;
        const endDistance = 40;

        return {
            id: i,
            x1: 50 + Math.cos(angle) * startDistance,
            y1: 30 + Math.sin(angle) * startDistance,
            x2: 50 + Math.cos(angle) * endDistance,
            y2: 30 + Math.sin(angle) * endDistance,
            delay: i * 0.15
        };
    });

    return (
        <div className="animated-background">
            {/* SVGでフローラインを描画 */}
            <svg className="flow-animation" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* 中心の核 */}
                <motion.circle
                    cx="50"
                    cy="30"
                    r="2"
                    fill="rgba(20, 184, 166, 0.8)"
                    filter="url(#core-glow)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 1],
                        scale: [0, 1.2, 1]
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeOut"
                    }}
                />

                {/* 放射状のフローライン */}
                {flowLines.map((line) => (
                    <g key={`flow-${line.id}`}>
                        {/* ライン本体 */}
                        <motion.line
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="rgba(20, 184, 166, 0.3)"
                            strokeWidth="0.3"
                            vectorEffect="non-scaling-stroke"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: 1,
                                opacity: [0, 0.6, 0.6]
                            }}
                            transition={{
                                duration: 1.5,
                                delay: 0.5 + line.delay,
                                ease: "easeOut"
                            }}
                        />

                        {/* 流れる光のドット */}
                        <motion.circle
                            r="0.5"
                            fill="rgba(20, 184, 166, 1)"
                            filter="url(#flow-glow)"
                            initial={{
                                cx: line.x1,
                                cy: line.y1,
                                opacity: 0
                            }}
                            animate={{
                                cx: [line.x1, line.x2, line.x2],
                                cy: [line.y1, line.y2, line.y2],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                delay: 1 + line.delay,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }}
                        />
                    </g>
                ))}

                {/* グロー効果 */}
                <defs>
                    <filter id="core-glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <filter id="flow-glow">
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
