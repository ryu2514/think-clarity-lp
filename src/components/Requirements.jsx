import React from 'react';
import { AlertCircle, MessageCircle, ClipboardCheck } from 'lucide-react';
import './Requirements.css';

const Requirements = () => {
    return (
        <section className="requirements-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">相談前に確認したいこと</h2>
                    <p className="section-desc">受講案内は、無料個別相談または公式LINEで個別に行います</p>
                </div>

                <div className="requirements-card">
                    <div className="req-grid">
                        <div className="req-item">
                            <div className="req-icon-wrapper">
                                <MessageCircle size={24} />
                            </div>
                            <div className="req-content">
                                <h3 className="req-label">受付方法</h3>
                                <p className="req-value">公式LINE・無料個別相談のみ</p>
                            </div>
                        </div>
                    </div>

                    <div className="req-list-container">
                        <h3 className="req-list-title">
                            <ClipboardCheck className="inline-icon" size={20} />
                            相談で確認すること
                        </h3>
                        <ul className="req-list">
                            <li>最近の臨床で、どの場面に迷いが出ているか</li>
                            <li>評価から介入につなげるうえで詰まりやすいポイント</li>
                            <li>Think Clarityの伴走形式が合うかどうか</li>
                            <li>今すぐ受講するより、先に学ぶべきテーマがないか</li>
                        </ul>
                    </div>

                    <div className="req-note">
                        <AlertCircle size={18} className="note-icon" />
                        <p>このLP上では直接の申し込み・決済はできません。</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Requirements;
