import React from 'react';
import './AppShowcase.css';

const AppShowcase = () => {
    return (
        <section className="app-showcase-section section-padding">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">専用アプリで臨床推論を構造化</h2>
                    <p className="section-desc">PC・スマホどちらからでも、いつでも臨床推論を記録・整理できます</p>
                </div>

                <div className="showcase-devices">
                    <div className="laptop-mockup">
                        <div className="laptop-screen">
                            <img
                                src="/images/app-desktop-screenshot.png"
                                alt="臨床推論アプリのPC画面"
                                className="laptop-screenshot"
                            />
                        </div>
                        <div className="laptop-base" />
                    </div>
                    <div className="phone-mockup">
                        <div className="phone-notch" />
                        <div className="phone-screen">
                            <img
                                src="/images/app-mobile-screenshot.jpg"
                                alt="臨床推論アプリのスマホ画面"
                                className="phone-screenshot"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
