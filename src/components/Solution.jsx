import React from 'react';
import { Layers, ShieldOff, MessageSquareText } from 'lucide-react';
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
                    <p className="section-desc">
                        「何をやるか」より先に、<br className="mobile-break" />
                        <strong>"何をやらないか"を決められるのが強み。</strong>
                    </p>
                </div>

                <div className="solution-steps">
                    <div className="solution-step-card">
                        <span className="step-number">1</span>
                        <div className="step-icon">
                            <Layers size={28} />
                        </div>
                        <h3 className="step-title">病態分類</h3>
                        <p className="step-desc">同じ症状でも「壊れている要素」を型に落とす</p>
                        <div className="step-categories">
                            <span className="step-cat">A 構造ストレス</span>
                            <span className="step-cat">B 配分エラー</span>
                            <span className="step-cat">C 防御</span>
                            <span className="step-cat">D 神経性</span>
                        </div>
                    </div>

                    <div className="solution-step-card">
                        <span className="step-number">2</span>
                        <div className="step-icon">
                            <ShieldOff size={28} />
                        </div>
                        <h3 className="step-title">消去プロセス</h3>
                        <p className="step-desc">その型を潰す質問・テストを先に用意する</p>
                    </div>

                    <div className="solution-step-card">
                        <span className="step-number">3</span>
                        <div className="step-icon">
                            <MessageSquareText size={28} />
                        </div>
                        <h3 className="step-title">言語化</h3>
                        <p className="step-desc">思考プロセスを言葉と図にし、再現性と伝達力を得る</p>
                    </div>
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
