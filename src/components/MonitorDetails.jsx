import React from 'react';
import { MessageSquare, Layout, TrendingUp } from 'lucide-react';
import './MonitorDetails.css';

const MonitorDetails = () => {
    return (
        <section className="monitor-details-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="section-tag">CO-CREATION</span>
                    <h2 className="section-title">モニターとしてのご協力内容</h2>
                    <p className="section-desc">
                        このプログラムは、皆さんと共に創り上げるものです。<br />
                        「共同開発者」として、以下の点にご協力をお願いします。
                    </p>
                </div>

                <div className="details-grid">
                    <div className="detail-card">
                        <div className="detail-icon-box">
                            <Layout />
                        </div>
                        <h3 className="detail-title">ツールのフィードバック</h3>
                        <p className="detail-text">
                            提供する「臨床推論アプリ」や各種テンプレートの使い勝手について、
                            率直な感想や改善点を教えてください。
                        </p>
                    </div>

                    <div className="detail-card">
                        <div className="detail-icon-box">
                            <MessageSquare />
                        </div>
                        <h3 className="detail-title">プログラムの改善提案</h3>
                        <p className="detail-text">
                            「もっとこうしてほしい」「ここが分かりにくい」など、
                            受講生目線での改善アイデアを歓迎します。
                        </p>
                    </div>

                    <div className="detail-card">
                        <div className="detail-icon-box">
                            <TrendingUp />
                        </div>
                        <h3 className="detail-title">実績公開へのご協力</h3>
                        <p className="detail-text">
                            プログラム前後の変化（Before/After）を、
                            今後の募集時の事例として使用させてください（匿名・顔出し無し可）。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonitorDetails;
