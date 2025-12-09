import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // ロゴ内に3つのノードを配置
    const nodes = [
        { id: 0, x: 20, y: 30, delay: 0, duration: 0.5 },
        { id: 1, x: 50, y: 50, delay: 0.15, duration: 0.6 },
        { id: 2, x: 75, y: 35, delay: 0.3, duration: 0.55 }
    ];

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

            {/* 動くノード（3つ、大きく速い動き） */}
            {nodes.map(node => (
                <motion.div
                    key={node.id}
                    className="network-node"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`
                    }}
                    animate={{
                        x: [0, 40, -30, 25, 0],
                        y: [0, -35, 40, -25, 0],
                        opacity: [0.6, 1, 0.7, 0.9, 0.6],
                        scale: [1, 1.8, 0.6, 1.5, 1]
                    }}
                    transition={{
                        duration: node.duration,
                        delay: node.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            {/* 接続ライン（SVG） */}
            <svg className="network-lines" width="100%" height="100%">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0F766E" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0F766E" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                {nodes.map((node, i) => {
                    const nextNode = nodes[(i + 1) % nodes.length];
                    return (
                        <motion.line
                            key={`line-${i}`}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${nextNode.x}%`}
                            y2={`${nextNode.y}%`}
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: [0.3, 0.8, 0.3] }}
                            transition={{
                                pathLength: { duration: 0.5, delay: i * 0.1 },
                                opacity: {
                                    duration: 0.6,
                                    delay: i * 0.15,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
};

export default AnimatedBackground;
