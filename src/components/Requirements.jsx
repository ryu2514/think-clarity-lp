import React from 'react';
import { AlertCircle, Calendar, Users, ClipboardCheck } from 'lucide-react';
import './Requirements.css';

const Requirements = () => {
    return (
        <section className="requirements-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">募集要項</h2>
                    <p className="section-desc">以下の条件を満たす方を募集します</p>
                </div>

                <div className="requirements-card">
                    <div className="req-grid">
                        <div className="req-item">
                            <div className="req-icon-wrapper">
                                <Users size={24} />
                            </div>
                            <div className="req-content">
                                <h3 className="req-label">募集人数</h3>
                                <p className="req-value">先着5名</p>
                            </div>
                        </div>

                        <div className="req-item">
                            <div className="req-icon-wrapper">
                                <Calendar size={24} />
                            </div>
                            <div className="req-content">
                                <h3 className="req-label">期間</h3>
                                <p className="req-value">12月中旬 〜 3ヶ月間</p>
                            </div>
                        </div>
                    </div>

                    <div className="req-list-container">
                        <h3 className="req-list-title">
                            <ClipboardCheck className="inline-icon" size={20} />
                            応募条件
                        </h3>
                        <ul className="req-list">
                            <li>スクール会員であること</li>
                            <li>3ヶ月間、プログラムにコミットできる方</li>
                            <li>週1回の症例入力（アウトプット）ができる方</li>
                            <li>週1回の個別Zoom指導に必ず参加できる方</li>
                            <li>ツールのフィードバックやアンケートに協力いただける方</li>
                        </ul>
                    </div>

                    <div className="req-note">
                        <AlertCircle size={18} className="note-icon" />
                        <p>定員に達し次第、募集を終了いたします。</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Requirements;
