import React from 'react';
import { Video, CheckCircle, FileText, MessageCircle } from 'lucide-react';
import './Program.css';

const Program = () => {
    const features = [
        {
            icon: <Video />,
            title: "個別Zoom指導",
            desc: "週1回 × 60分。マンツーマンであなたの思考を深堀りし、臨床推論プロセスを構造化します。"
        },
        {
            icon: <CheckCircle />,
            title: "病態分類・反証設計テンプレート",
            desc: "専用のWebツールを使って、日々の臨床推論プロセスを構造化します。"
        },
        {
            icon: <FileText />,
            title: "専用テンプレート",
            desc: "評価フローチャートや症例分析シートなど、すぐに使える実践ツールを提供。"
        },
        {
            icon: <MessageCircle />,
            title: "無制限チャットサポート",
            desc: "Discordでいつでも質問可能。日々の臨床での迷いをすぐに解消できます。"
        }
    ];

    return (
        <section className="program-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">プログラム内容</h2>
                    <p className="section-desc">結果を出すための、徹底的なサポート環境</p>
                </div>

                <div className="program-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="program-card">
                            <div className="program-icon-box">
                                {feature.icon}
                            </div>
                            <h3 className="program-title">{feature.title}</h3>
                            <p className="program-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Program;
