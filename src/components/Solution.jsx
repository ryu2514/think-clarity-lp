import React from 'react';
import { Target, ArrowDown } from 'lucide-react';
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
                        <span className="text-primary">「言語化能力」</span>にある。
                    </h2>
                    <p className="section-desc">
                        知識を詰め込むのではなく、<br className="mobile-break" />
                        あなたの頭の中にある思考を「言葉」と「図」にする力を育てます。
                    </p>
                </div>

                <div className="solution-diagram">
                    <div className="diagram-step center-pin">
                        <div className="step-icon">
                            <Target size={32} />
                        </div>
                        <h3 className="step-title">言語化能力</h3>
                        <p className="step-desc">自分の思考プロセスを誰にでも分かるように説明する力</p>
                    </div>

                    <ArrowDown className="diagram-arrow" />

                    <div className="diagram-step method">
                        <h3 className="step-title">手段：フローチャート作成</h3>
                        <p className="step-desc">思考の地図を作ることで、迷わない指針を得る</p>
                    </div>

                    <ArrowDown className="diagram-arrow" />

                    <div className="diagram-step abilities">
                        <h3 className="step-title">獲得できる3つの能力</h3>
                        <div className="abilities-grid">
                            <div className="ability-item">
                                <span className="ability-num">01</span>
                                <span>系統的評価能力</span>
                            </div>
                            <div className="ability-item">
                                <span className="ability-num">02</span>
                                <span>論理的治療選択</span>
                            </div>
                            <div className="ability-item">
                                <span className="ability-num">03</span>
                                <span>自己改善力</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
