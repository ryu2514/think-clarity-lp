import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // アニメーション4: ニューロン発火アニメーション
    // ロゴの脳ネットワーク構造をシミュレート
    const neurons = [
        { id: 1, x: 45, y: 25, connections: [2, 3] },
        { id: 2, x: 50, y: 22, connections: [4, 5] },
        { id: 3, x: 48, y: 28, connections: [5, 6] },
        { id: 4, x: 55, y: 24, connections: [7] },
        { id: 5, x: 52, y: 30, connections: [8] },
        { id: 6, x: 46, y: 33, connections: [8] },
        { id: 7, x: 58, y: 27, connections: [8] },
        { id: 8, x: 50, y: 35, connections: [] }
    ];

    // ニューロン間の接続線を生成
    const connections = [];
    neurons.forEach((neuron) => {
        neuron.connections.forEach((targetId) => {
            const target = neurons.find(n => n.id === targetId);
            if (target) {
                connections.push({
                    from: neuron,
                    to: target,
                    id: `${neuron.id}-${targetId}`
                });
            }
        });
    });

    return (
        <div className="animated-background">
            {/* SVGでニューロンネットワークを描画 */}
            <svg className="neuron-animation" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* 接続線（常に表示） */}
                {connections.map((conn, i) => (
                    <motion.line
                        key={`conn-${conn.id}`}
                        x1={conn.from.x}
                        y1={conn.from.y}
                        x2={conn.to.x}
                        y2={conn.to.y}
                        stroke="rgba(20, 184, 166, 0.2)"
                        strokeWidth="0.2"
                        vectorEffect="non-scaling-stroke"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.05
                        }}
                    />
                ))}

                {/* 発火する信号パルス */}
                {connections.map((conn, i) => (
                    <motion.line
                        key={`pulse-${conn.id}`}
                        x1={conn.from.x}
                        y1={conn.from.y}
                        x2={conn.to.x}
                        y2={conn.to.y}
                        stroke="rgba(20, 184, 166, 1)"
                        strokeWidth="0.4"
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 1 + i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* ニューロンノード */}
                {neurons.map((neuron, i) => (
                    <g key={`neuron-${neuron.id}`}>
                        {/* ノード本体 */}
                        <motion.circle
                            cx={neuron.x}
                            cy={neuron.y}
                            r="0.8"
                            fill="rgba(20, 184, 166, 0.6)"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: i * 0.08
                            }}
                        />

                        {/* 発火エフェクト */}
                        <motion.circle
                            cx={neuron.x}
                            cy={neuron.y}
                            r="1.5"
                            fill="rgba(20, 184, 166, 0.3)"
                            filter="url(#neuron-glow)"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [0.5, 2, 2.5]
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 1 + i * 0.1,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "easeOut"
                            }}
                        />
                    </g>
                ))}

                {/* グロー効果 */}
                <defs>
                    <filter id="neuron-glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
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
