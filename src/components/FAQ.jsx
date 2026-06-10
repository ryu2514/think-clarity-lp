import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "このページから直接申し込みできますか？",
            answer: "いいえ。公開LPからの直接申し込みや決済は受け付けていません。受講を希望される方には、公式LINEまたは無料個別相談で状況を確認したうえで個別にご案内します。"
        },
        {
            question: "受講条件はどこで確認できますか？",
            answer: "無料個別相談の中で、現在の課題・目的・参加可能な時間を確認したうえでご案内します。LP上では詳しい受講条件は公開していません。"
        },
        {
            question: "Zoomに参加できない週がある場合は？",
            answer: "事前にご連絡いただければ、振替日程を調整いたします。ただし、継続的な参加が成果に直結しますので、できる限り毎週のご参加をお願いしています。"
        },
        {
            question: "臨床経験が浅くても大丈夫ですか？",
            answer: "経験年数は問いません。むしろ、早い段階から臨床推論の習慣を身につけることで、成長スピードが加速します。"
        },
        {
            question: "相談だけでも大丈夫ですか？",
            answer: "はい。無料個別相談は、受講を前提にした売り込みではなく、今の臨床のつまずきを整理する場です。合わない場合は、必要な学習テーマだけ整理してお伝えします。"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">よくある質問</h2>
                    <p className="section-desc">ご不明な点はお気軽にお問い合わせください</p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} />
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
