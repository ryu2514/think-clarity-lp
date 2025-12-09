import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // アニメーション1: 散らばったノードが構造化される
    const nodes = [
        { id: 1, randomX: 15, randomY: 20, finalX: 45, finalY: 25 },
        { id: 2, randomX: 75, randomY: 15, finalX: 50, finalY: 28 },
        { id: 3, randomX: 20, randomY: 65, finalX: 55, finalY: 32 },
        { id: 4, randomX: 80, randomY: 70, finalX: 48, finalY: 35 },
        { id: 5, randomX: 40, randomY: 10, finalX: 52, finalY: 22 },
        { id: 6, randomX: 60, randomY: 80, finalX: 46, finalY: 30 },
    ];

    const connections = [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 5, to: 0 },
    ];

    return (
        <div className="animated-background">
            {/* SVGでノードと接続線を描画 */}
            <svg className="structure-animation" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* 接続線 */}
                {connections.map((conn, i) => {
                    const fromNode = nodes[conn.from];
                    const toNode = nodes[conn.to];

                    return (
                        <motion.line
                            key={`line-${i}`}
                            stroke="rgba(20, 184, 166, 0.4)"
                            strokeWidth="0.3"
                            vectorEffect="non-scaling-stroke"
                            initial={{
                                x1: fromNode.randomX,
                                y1: fromNode.randomY,
                                x2: toNode.randomX,
                                y2: toNode.randomY,
                                opacity: 0
                            }}
                            animate={{
                                x1: fromNode.finalX,
                                y1: fromNode.finalY,
                                x2: toNode.finalX,
                                y2: toNode.finalY,
                                opacity: [0, 0.6, 0.6]
                            }}
                            transition={{
                                duration: 2,
                                delay: 1 + i * 0.1,
                                ease: "easeOut"
                            }}
                        />
                    );
                })}

                {/* ノード */}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={`node-${node.id}`}
                        r="1"
                        fill="rgba(20, 184, 166, 0.8)"
                        filter="url(#glow)"
                        initial={{
                            cx: node.randomX,
                            cy: node.randomY,
                            opacity: 0.3
                        }}
                        animate={{
                            cx: node.finalX,
                            cy: node.finalY,
                            opacity: 1
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.1,
                            ease: [0.34, 1.56, 0.64, 1]
                        }}
                    />
                ))}

                {/* グロー効果 */}
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
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
