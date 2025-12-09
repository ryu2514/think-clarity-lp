import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // ランダムなノード位置を生成
    const nodes = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2
    }));

    return (
        <div className="animated-background">
            {/* 中央から広がる円形グラデーション */}
            <motion.div
                className="ripple-circle ripple-1"
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeOut"
                }}
            />
            <motion.div
                className="ripple-circle ripple-2"
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{
                    duration: 3,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeOut"
                }}
            />
            <motion.div
                className="ripple-circle ripple-3"
                initial={{ scale: 0, opacity: 0.4 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{
                    duration: 3,
                    delay: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeOut"
                }}
            />

            {/* 動くノード */}
            {nodes.map(node => (
                <motion.div
                    key={node.id}
                    className="network-node"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`
                    }}
                    animate={{
                        x: [0, Math.random() * 20 - 10, 0],
                        y: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: node.duration,
                        delay: node.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
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
                {nodes.slice(0, 8).map((node, i) => {
                    const nextNode = nodes[(i + 1) % nodes.length];
                    return (
                        <motion.line
                            key={`line-${i}`}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${nextNode.x}%`}
                            y2={`${nextNode.y}%`}
                            stroke="url(#lineGradient)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                pathLength: { duration: 2, delay: i * 0.2 },
                                opacity: {
                                    duration: 3,
                                    delay: i * 0.3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
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
