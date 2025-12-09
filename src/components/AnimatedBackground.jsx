import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // ロゴ全体にノードを配置
    const nodes = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80, // 10-90%の範囲
        y: 10 + Math.random() * 80, // 10-90%の範囲
        delay: Math.random() * 0.5,
        duration: 0.8 + Math.random() * 0.7 // 高速化：0.8-1.5秒
    }));

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

            {/* 動くノード（高速、ロゴ内） */}
            {nodes.map(node => (
                <motion.div
                    key={node.id}
                    className="network-node"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`
                    }}
                    animate={{
                        x: [0, Math.random() * 15 - 7.5, Math.random() * 10 - 5, 0],
                        y: [0, Math.random() * 15 - 7.5, Math.random() * 10 - 5, 0],
                        opacity: [0.5, 0.9, 0.6, 0.5],
                        scale: [1, 1.4, 0.7, 1]
                    }}
                    transition={{
                        duration: node.duration,
                        delay: node.delay,
                        repeat: Infinity,
                        ease: "linear" // 高速感を出すためlinearに変更
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
                {nodes.slice(0, 15).map((node, i) => {
                    const nextNode = nodes[(i + 2) % nodes.length];
                    return (
                        <motion.line
                            key={`line-${i}`}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${nextNode.x}%`}
                            y2={`${nextNode.y}%`}
                            stroke="url(#lineGradient)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
                            transition={{
                                pathLength: { duration: 0.8, delay: i * 0.05 },
                                opacity: {
                                    duration: 1.2,
                                    delay: i * 0.08,
                                    repeat: Infinity,
                                    ease: "linear" // 高速感のためlinear
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
