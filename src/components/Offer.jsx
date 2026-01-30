import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './Offer.css';

const Offer = () => {
    const [selectedPlan, setSelectedPlan] = useState('oneTime');

    const plans = [
        {
            id: 'oneTime',
            name: '一括払い',
            price: '50,000',
            perMonth: null,
            total: '50,000',
            badge: 'おすすめ',
            stripeLink: 'https://buy.stripe.com/9B64gz8Wf4uM4970Tm1gs08'
        },
        {
            id: 'threeTime',
            name: '3回払い',
            price: '17,000',
            perMonth: '/ 月',
            total: '51,000',
            badge: null,
            stripeLink: 'https://buy.stripe.com/00w14ngoH8L2bBz6dG1gs09'
        },
        {
            id: 'fiveTime',
            name: '5回払い',
            price: '10,000',
            perMonth: '/ 月',
            total: '50,000',
            badge: null,
            stripeLink: 'https://buy.stripe.com/dRmeVd0pJ0ew35331u1gs0a'
        }
    ];

    const currentPlan = plans.find(p => p.id === selectedPlan);

    return (
        <section id="offer" className="offer-section section-padding">
            <div className="container">
                <div className="offer-container">
                    <div className="offer-header">
                        <span className="offer-badge">特別モニター</span>
                        <h2 className="offer-title">特別オファー</h2>
                        <p className="offer-subtitle">3〜5名限定。定員に達し次第終了します。</p>
                    </div>

                    <div className="pricing-card">
                        <div className="price-header">
                            <p className="regular-price">通常価格 198,000円</p>
                            <span className="discount-tag">約75%OFF</span>
                        </div>

                        {/* Payment Plan Selector */}
                        <div className="plan-selector">
                            {plans.map(plan => (
                                <button
                                    key={plan.id}
                                    className={`plan-option ${selectedPlan === plan.id ? 'active' : ''}`}
                                    onClick={() => setSelectedPlan(plan.id)}
                                >
                                    {plan.badge && <span className="plan-badge">{plan.badge}</span>}
                                    <span className="plan-name">{plan.name}</span>
                                    <span className="plan-price">
                                        ¥{plan.price}
                                        {plan.perMonth && <span className="plan-per-month">{plan.perMonth}</span>}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Selected Plan Display */}
                        <div className="selected-plan-display">
                            <p className="special-price">
                                <span className="currency">¥</span>
                                {currentPlan.price}
                                {currentPlan.perMonth && <span className="per-month">{currentPlan.perMonth}</span>}
                                <span className="tax">（税込）</span>
                            </p>
                            {currentPlan.perMonth && (
                                <p className="total-note">総額: ¥{currentPlan.total}</p>
                            )}
                        </div>

                        <div className="price-benefits">
                            <h4 className="benefits-title">モニター参加特典</h4>
                            <ul className="benefits-list">
                                <li><Check size={20} className="check-icon" /> 148,000円割引</li>
                                <li><Check size={20} className="check-icon" /> 優先サポート権</li>
                                <li><Check size={20} className="check-icon" /> プログラム期間延長オプション</li>
                                <li><Check size={20} className="check-icon" /> 実績としての掲載（匿名可）</li>
                            </ul>
                        </div>

                        <div className="cta-wrapper">
                            <a
                                href={currentPlan.stripeLink}
                                className="btn btn-primary btn-large btn-glow"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {currentPlan.name}で申し込む
                            </a>
                            <p className="cta-note">
                                ※決済はStripeを通じて安全に処理されます
                            </p>
                            <p className="cta-urgency">
                                ⚠️ この機会を逃すと、次回は通常価格（198,000円）でのご案内となります
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
