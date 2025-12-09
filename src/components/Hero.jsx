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
                    <span className="hero-badge">
                        スクール生徒限定モニター募集
                    </span>
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
                        臨床推論を <br className="hidden-mobile" />
                        <span className="text-gradient">
                            構造化する
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
                        運動療法の臨床推論を構造化し、クリアにする
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
                        「分かってるけど、説明できない」を卒業する。<br />
                        3ヶ月で<strong className="text-highlight">言語化能力</strong>を獲得し、
                        自分だけの運動療法スタイルを確立する個別指導プログラム。
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
