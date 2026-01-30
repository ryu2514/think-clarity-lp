import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Background Decor */}
            <div className="hero-bg-decor">
                <AnimatedBackground />
                <div className="decor-blob decor-blob-1" />
                <div className="decor-blob decor-blob-2" />
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="logo-container">
                        <motion.img
                            src="/images/logo-transparent.png"
                            alt="Think Clarity Logo"
                            className="hero-logo"
                            initial={{
                                opacity: 0.3,
                                scale: 0.95,
                                filter: 'blur(20px)'
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: 'blur(0px)'
                            }}
                            transition={{
                                duration: 1.5,
                                delay: 0.2,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        />
                    </div>
                    <motion.h1
                        className="hero-title"
                        initial={{
                            opacity: 0.3,
                            filter: 'blur(10px)'
                        }}
                        animate={{
                            opacity: 1,
                            filter: 'blur(0px)'
                        }}
                        transition={{
                            duration: 1.2,
                            delay: 0.6,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    >
                        「その運動、<br />
                        <span className="text-gradient">
                            なんとなく選んでない？」
                        </span>
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{
                            opacity: 0.3,
                            filter: 'blur(8px)'
                        }}
                        animate={{
                            opacity: 1,
                            filter: 'blur(0px)'
                        }}
                        transition={{
                            duration: 1.0,
                            delay: 1.0,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    >
                        運動療法を迷わず組み立てるフレームワーク
                    </motion.p>
                    <motion.p
                        className="hero-description"
                        initial={{
                            opacity: 0.3,
                            filter: 'blur(6px)'
                        }}
                        animate={{
                            opacity: 1,
                            filter: 'blur(0px)'
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 1.3,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    >
                        運動療法 = 臨床推論 ×（病態分類 × 消去プロセス）× 言語化。<br />
                        「何をやるか」より先に<strong className="text-highlight">"何をやらないか"</strong>を決められる思考を、
                        3ヶ月で身につける。
                    </motion.p>

                    <div className="hero-actions">
                        <a href="#offer" className="btn btn-primary group">
                            申し込み
                            <ArrowRight className="btn-icon group-hover-move" />
                        </a>
                        <a href="#problem" className="link-secondary">
                            詳しく見る
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
