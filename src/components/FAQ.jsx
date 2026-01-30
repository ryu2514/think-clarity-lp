import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "途中で辞めることはできますか？",
            answer: "はい、可能です。ただし、3ヶ月間のプログラムにコミットしていただくことを前提としています。途中解約の場合、残りの期間分の返金はございませんので、ご了承ください。"
        },
        {
            question: "返金はありますか？",
            answer: "プログラム開始後の返金は原則としてお受けしておりません。ご不安な点がございましたら、無料相談会で詳しくお話しさせていただきますので、まずはご相談ください。"
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
            question: "モニターとして何をすればいいですか？",
            answer: "ツールの使い勝手や、プログラム内容についてのフィードバックをお願いします。難しいことではなく、「ここが使いにくい」「ここが良かった」など、気づいたことを共有いただければ十分です。"
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
