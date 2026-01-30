import React from 'react';
import { Layers, ShieldOff, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './Solution.css';

const Solution = () => {
    return (
        <section className="solution-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="section-tag">解決策</span>
                    <h2 className="section-title">
                        センターピンは<br />
                        <span className="text-primary">「病態分類 × 消去プロセス × 言語化」</span>にある。
                    </h2>
                    <p className="section-desc">
                        「何をやるか」より先に、<br className="mobile-break" />
                        <strong>"何をやらないか"を決められるのが強み。</strong>
                    </p>
                </div>

                <div className="solution-diagram">
                    <div className="diagram-step center-pin">
                        <div className="step-icon">
                            <Layers size={32} />
                        </div>
                        <h3 className="step-title">病態分類</h3>
                        <p className="step-desc">同じ症状でも「壊れている要素」を型に落とす</p>
                        <div className="abilities-grid">
                            <div className="ability-item">
                                <span className="ability-num">A</span>
                                <span>構造ストレス</span>
                            </div>
                            <div className="ability-item">
                                <span className="ability-num">B</span>
                                <span>配分エラー</span>
                            </div>
                            <div className="ability-item">
                                <span className="ability-num">C</span>
                                <span>防御</span>
                            </div>
                            <div className="ability-item">
                                <span className="ability-num">D</span>
                                <span>神経性</span>
                            </div>
                        </div>
                    </div>

                    <ArrowDown className="diagram-arrow" />

                    <div className="diagram-step method">
                        <div className="step-icon">
                            <ShieldOff size={32} />
                        </div>
                        <h3 className="step-title">消去プロセス</h3>
                        <p className="step-desc">その型を潰す質問・テストを先に用意する</p>
                    </div>

                    <ArrowDown className="diagram-arrow" />

                    <ArrowDown className="diagram-arrow" />

                    <div className="diagram-step method">
                        <div className="step-icon">
                            <Layers size={32} />
                        </div>
                        <h3 className="step-title">言語化</h3>
                        <p className="step-desc">思考プロセスを言葉と図にし、再現性と伝達力を得る</p>
                    </div>

                    <ArrowDown className="diagram-arrow" />

                    <div className="diagram-step abilities">
                        <h3 className="step-title">獲得できる3つの能力</h3>
                        <div className="abilities-grid">
                            <div className="ability-item">
                                <span className="ability-num">01</span>
                                <span>仮説を複数出せる</span>
                            </div>
                            <div className="ability-item">
                                <span className="ability-num">02</span>
                                <span>消去で絞れる</span>
                            </div>
                            <div className="ability-item">
                                <span className="ability-num">03</span>
                                <span>修正・更新できる</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
