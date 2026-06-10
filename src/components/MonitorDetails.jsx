import React from 'react';
import { MessageSquare, Layout, TrendingUp } from 'lucide-react';
import './MonitorDetails.css';

const MonitorDetails = () => {
    return (
        <section className="monitor-details-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="section-tag">伴走サポート</span>
                    <h2 className="section-title">伴走で扱うこと</h2>
                    <p className="section-desc">
                        Think Clarityでは、知識を増やすだけでなく、<br />
                        臨床で迷った場面を言語化し、次の判断につなげることを重視します。
                    </p>
                </div>

                <div className="details-grid">
                    <div className="detail-card">
                        <div className="detail-icon-box">
                            <Layout />
                        </div>
                        <h3 className="detail-title">臨床推論アプリ</h3>
                        <p className="detail-text">
                            症例情報を整理しながら、評価・仮説・介入のつながりを見える化します。
                        </p>
                    </div>

                    <div className="detail-card">
                        <div className="detail-icon-box">
                            <MessageSquare />
                        </div>
                        <h3 className="detail-title">思考の言語化</h3>
                        <p className="detail-text">
                            「なぜその運動を選ぶのか」を説明できるように、判断の根拠を一緒に整理します。
                        </p>
                    </div>

                    <div className="detail-card">
                        <div className="detail-icon-box">
                            <TrendingUp />
                        </div>
                        <h3 className="detail-title">学習ルート設計</h3>
                        <p className="detail-text">
                            今の課題に対して、どのテーマから学ぶべきかを具体的に組み立てます。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonitorDetails;
