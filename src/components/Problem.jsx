import React from 'react';
import { Zap, RefreshCw, SearchCheck } from 'lucide-react';
import './Problem.css';

const Problem = () => {
    return (
        <section id="problem" className="problem-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">こんな悩み、抱えていませんか？</h2>
                    <p className="section-desc">経験年数は重ねてきた。知識もある。でも...</p>
                </div>

                <div className="problem-grid">
                    <div className="problem-card">
                        <div className="problem-icon-wrapper">
                            <Zap className="problem-icon" />
                        </div>
                        <h3 className="problem-card-title">症状→即エクササイズ</h3>
                        <p className="problem-card-text">
                            痛みを聞いた瞬間、すぐ種目を選んでしまう。<br />
                            臨床推論が抜け落ちている。
                        </p>
                    </div>

                    <div className="problem-card">
                        <div className="problem-icon-wrapper">
                            <RefreshCw className="problem-icon" />
                        </div>
                        <h3 className="problem-card-title">いつものメニュー</h3>
                        <p className="problem-card-text">
                            誰に対しても同じ流れ。<br />
                            うまくいっても再現性がない。
                        </p>
                    </div>

                    <div className="problem-card">
                        <div className="problem-icon-wrapper">
                            <SearchCheck className="problem-icon" />
                        </div>
                        <h3 className="problem-card-title">評価が"当てにいく"</h3>
                        <p className="problem-card-text">
                            自分の仮説を裏付ける情報ばかり集めてしまう。<br />
                            確証バイアスに気づけない。
                        </p>
                    </div>
                </div>

                <div className="problem-summary">
                    <p className="problem-summary-text">
                        運動療法の失敗は、<br className="mobile-break" />
                        <span className="text-highlight-red">種目の間違いではなく「臨床推論の欠落」</span>で起きる。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Problem;
