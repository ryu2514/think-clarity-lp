import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
import './Instructor.css';

const Instructor = () => {
    return (
        <section className="instructor-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">講師紹介</h2>
                </div>

                <div className="instructor-card">
                    <div className="instructor-avatar">
                        <img
                            src="/images/instructor.png"
                            alt="小林 龍樹"
                            className="avatar-image"
                        />
                    </div>

                    <div className="instructor-info">
                        <h3 className="instructor-name">小林 龍樹</h3>
                        <p className="instructor-title">理学療法士 / Exthera-School 主宰</p>

                        <p className="instructor-bio">
                            臨床1年目での運動療法の挫折経験から事業を創業。<br />
                            「過去の自分と同じように運動療法に悩むセラピストを支援したい」という理念のもと、
                            若手セラピストの成長を支援している。
                        </p>

                        <div className="instructor-stats">
                            <div className="stat-item">
                                <Users size={20} className="stat-icon" />
                                <span>スクール会員150名超</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instructor;
