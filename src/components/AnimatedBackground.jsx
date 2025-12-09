import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // SVGパス用のランダムな曲線を生成
    const generateRandomCurve = (startX, startY) => {
        const points = [];
        let currentX = startX;
        let currentY = startY;

        for (let i = 0; i < 4; i++) {
            const nextX = currentX + (Math.random() - 0.5) * 60;
            const nextY = currentY + (Math.random() - 0.5) * 60;
            points.push({ x: nextX, y: nextY });
            currentX = nextX;
            currentY = nextY;
        }

        // 最後は開始点に戻る
        points.push({ x: startX, y: startY });
        return points;
    };

    // パス上の座標を計算
    const generatePathPoints = (curve, numPoints = 50) => {
        const points = [];
        for (let i = 0; i <= numPoints; i++) {
            const t = i / numPoints;
            const index = Math.floor(t * (curve.length - 1));
            const nextIndex = Math.min(index + 1, curve.length - 1);
            const localT = (t * (curve.length - 1)) % 1;

            const x = curve[index].x + (curve[nextIndex].x - curve[index].x) * localT;
            const y = curve[index].y + (curve[nextIndex].y - curve[index].y) * localT;
            points.push({ x, y });
        }
        return points;
    };

    // ロゴ内に3つのノードとパスを配置
    const nodes = [
        {
            id: 0,
            startX: 20,
            startY: 30,
            delay: 0,
            duration: 3,
            curve: generateRandomCurve(20, 30),
            color: 'rgba(20, 184, 166, 0.5)'
        },
        {
            id: 1,
            startX: 50,
            startY: 50,
            delay: 1,
            duration: 3.5,
            curve: generateRandomCurve(50, 50),
            color: 'rgba(14, 165, 233, 0.4)'
        },
        {
            id: 2,
            startX: 75,
            startY: 35,
            delay: 2,
            duration: 3.2,
            curve: generateRandomCurve(75, 35),
            color: 'rgba(15, 118, 110, 0.45)'
        }
    ].map(node => ({
        ...node,
        pathPoints: generatePathPoints(node.curve)
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

            {/* SVG パスライン */}
            <svg className="path-lines" width="100%" height="100%">
                {nodes.map(node => {
                    const pathD = `M ${node.startX} ${node.startY} ` +
                        node.curve.map(p => `L ${p.x} ${p.y}`).join(' ');

                    return (
                        <motion.path
                            key={`path-${node.id}`}
                            d={pathD}
                            fill="none"
                            stroke={node.color}
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{
                                pathLength: { duration: 1.5, delay: node.delay },
                                opacity: { duration: 0.5, delay: node.delay }
                            }}
                        />
                    );
                })}
            </svg>

            {/* 動くノード（パス上を移動） */}
            {nodes.map(node => {
                const xPath = node.pathPoints.map(p => p.x);
                const yPath = node.pathPoints.map(p => p.y);

                return (
                    <motion.div
                        key={`node-${node.id}`}
                        className="network-node"
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0
                        }}
                        animate={{
                            x: xPath,
                            y: yPath,
                            opacity: [0.6, 1, 0.8, 0.9, 0.7, 0.6],
                            scale: [1, 1.5, 1.2, 1.8, 1.3, 1]
                        }}
                        transition={{
                            duration: node.duration,
                            delay: node.delay,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                );
            })}

        </div>
    );
};

export default AnimatedBackground;
