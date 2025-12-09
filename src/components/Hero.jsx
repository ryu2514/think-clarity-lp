import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Background Decor */}
            <div className="hero-bg-decor">
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
                        src="/images/logo.png"
                        alt="Think Clarity Logo"
                        className="hero-logo"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <span className="hero-badge">
                        スクール生徒限定モニター募集
                    </span>
                    <h1 className="hero-title">
                        臨床推論を <br className="hidden-mobile" />
                        <span className="text-gradient">
                            構造化する
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        運動療法の臨床推論を構造化し、クリアにする
                    </p>
                    <p className="hero-description">
                        「分かってるけど、説明できない」を卒業する。<br />
                        3ヶ月で<strong className="text-highlight">言語化能力</strong>を獲得し、
                        自分だけの運動療法スタイルを確立する個別指導プログラム。
                    </p>

                    <div className="hero-actions">
                        <a href="#offer" className="btn btn-primary group">
                            無料相談会を申し込み
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
