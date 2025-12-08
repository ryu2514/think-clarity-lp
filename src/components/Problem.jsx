import React from 'react';
import { HelpCircle, AlertTriangle, BookOpen } from 'lucide-react';
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
                            <HelpCircle className="problem-icon" />
                        </div>
                        <h3 className="problem-card-title">説明できない</h3>
                        <p className="problem-card-text">
                            「なぜその運動を選んだの？」と聞かれても、<br />
                            「なんとなく...」としか答えられない。
                        </p>
                    </div>

                    <div className="problem-card">
                        <div className="problem-icon-wrapper">
                            <AlertTriangle className="problem-icon" />
                        </div>
                        <h3 className="problem-card-title">感覚頼り</h3>
                        <p className="problem-card-text">
                            治療がうまくいっても、なぜ良くなったのか<br />
                            論理的に説明できないから再現性がない。
                        </p>
                    </div>

                    <div className="problem-card">
                        <div className="problem-icon-wrapper">
                            <BookOpen className="problem-icon" />
                        </div>
                        <h3 className="problem-card-title">指導の壁</h3>
                        <p className="problem-card-text">
                            後輩に教えようとしても、<br />
                            体系立てて伝えることができずモヤモヤする。
                        </p>
                    </div>
                </div>

                <div className="problem-summary">
                    <p className="problem-summary-text">
                        その原因は、<br className="mobile-break" />
                        <span className="text-highlight-red">「臨床思考の言語化」</span>ができていないからかもしれません。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Problem;
