import React from 'react';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import './Offer.css';

const CONSULTATION_URL = 'https://booking-site-lime.vercel.app/';
const LINE_URL = 'https://lin.ee/lE1HTYE';

const Offer = () => {
    return (
        <section id="offer" className="offer-section section-padding">
            <div className="container">
                <div className="offer-container">
                    <div className="offer-header">
                        <span className="offer-badge">相談制でご案内</span>
                        <h2 className="offer-title">受講案内は無料個別相談で行います</h2>
                        <p className="offer-subtitle">
                            このLPはThink Clarityの考え方と内容を知ってもらうためのページです。<br />
                            受講受付は公式LINE、または無料個別相談時のみ行っています。
                        </p>
                    </div>

                    <div className="pricing-card access-card">
                        <div className="price-header">
                            <p className="offer-policy-label">公開LPでは直接申し込みできません</p>
                            <h3 className="access-title">まずは症例の迷いを一緒に整理します</h3>
                            <p className="access-text">
                                相談では、今の臨床で詰まっているポイントを確認し、Think Clarityが合うかどうかを一緒に判断します。
                                その上で必要な方にのみ、詳しい受講条件をご案内します。
                            </p>
                        </div>

                        <div className="price-benefits">
                            <h4 className="benefits-title">無料相談で確認できること</h4>
                            <ul className="benefits-list">
                                <li><Check size={20} className="check-icon" /> 最近迷った症例の整理</li>
                                <li><Check size={20} className="check-icon" /> 評価から介入につなげる優先順位</li>
                                <li><Check size={20} className="check-icon" /> Think Clarityが合うケース・合わないケース</li>
                                <li><Check size={20} className="check-icon" /> あなたに必要な学習ルート</li>
                            </ul>
                        </div>

                        <div className="application-flow">
                            <div className="flow-step">
                                <span className="flow-number">1</span>
                                <div>
                                    <h4>LPで内容を確認</h4>
                                    <p>プログラムの考え方とサポート内容を確認してください。</p>
                                </div>
                            </div>
                            <div className="flow-step">
                                <span className="flow-number">2</span>
                                <div>
                                    <h4>無料個別相談を予約</h4>
                                    <p>現在の臨床課題をもとに、必要なサポートを一緒に整理します。</p>
                                </div>
                            </div>
                            <div className="flow-step">
                                <span className="flow-number">3</span>
                                <div>
                                    <h4>必要な方にだけ個別案内</h4>
                                    <p>受講条件や受付方法は、公式LINEまたは相談時にのみご案内します。</p>
                                </div>
                            </div>
                        </div>

                        <div className="cta-wrapper">
                            <a
                                href={CONSULTATION_URL}
                                className="btn btn-primary btn-large btn-glow"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                無料個別相談を予約する
                                <ArrowRight className="btn-icon" />
                            </a>
                            <a
                                href={LINE_URL}
                                className="btn btn-secondary btn-large line-cta"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="btn-icon-left" />
                                公式LINEで相談する
                            </a>
                            <p className="cta-note">
                                受講受付は、公式LINEまたは無料個別相談での確認後のみ行っています。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
