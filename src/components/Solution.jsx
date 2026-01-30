import React from 'react';
import './Solution.css';

const Solution = () => {
    return (
        <section className="solution-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="section-tag">解決策</span>
                    <h2 className="section-title">
                        Think Clarityの<br />
                        <span className="text-primary">3ステップ</span>
                    </h2>
                </div>

                <div className="solution-steps-image">
                    <img
                        src="/3steps.jpg"
                        alt="Think Clarityの3ステップ：病態分類 × 消去プロセス × 言語化"
                        className="steps-image"
                    />
                </div>

                <div className="solution-outcome">
                    <h3 className="outcome-title">獲得できる3つの能力</h3>
                    <div className="outcome-grid">
                        <div className="outcome-item">
                            <span className="outcome-num">01</span>
                            <span>仮説を複数出せる</span>
                        </div>
                        <div className="outcome-item">
                            <span className="outcome-num">02</span>
                            <span>消去で絞れる</span>
                        </div>
                        <div className="outcome-item">
                            <span className="outcome-num">03</span>
                            <span>修正・更新できる</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
