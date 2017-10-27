import React from 'react';

const Footer = () => (
    <footer className="Footer">
        <div className="Footer info">
            <div className="aside contact">
                <div>
                    <div className="title">聯絡我們</div>
                    <div className="media">
                        <span className="fa fa-phone mr-3"></span>
                        <div className="media-body">
                            <span>總機 Main：</span>
                            <span><a href="tel:6269568200">(626) 956-8200</a> (電話), </span>
                            <span>(626) 956-8208 (傳真), </span>
                            <span><a href="mailto:admin@singtaola.com">admin@singtaola.com</a></span>
                        </div>
                    </div>
                    <div className="media">
                        <span className="fa fa-phone mr-3"></span>
                        <div className="media-body">
                            <span>廣告/市場部 Advertising & Marketing：</span>
                            <span><a href="tel:6269568200">(626) 956-8200</a> (電話), </span>
                            <span>(626) 956-8108 (傳真), </span>
                            <span><a href="mailto:marketing@singtaola.com">marketing@singtaola.com</a></span>
                        </div>
                    </div>
                    <div className="media">
                        <span className="fa fa-phone mr-3"></span>
                        <div className="media-body">
                            <span>訂閱部 Circulation Department：</span>
                            <span><a href="tel:6269568227">(626) 956-8227</a> (電話), </span>
                            <span>(626) 239-3323 (傳真), </span>
                            <span><a href="mailto:circulation@singtaola.com">circulation@singtaola.com</a></span>
                        </div>
                    </div>
                    <div className="media">
                        <span className="fa fa-envelope mr-3"></span>
                        <div className="media-body">
                            <span>會計部 Accounting Department：</span>
                            <span>(626) 956-8138 (傳真), </span>
                            <span><a href="mailto:accounting@singtaola.com">accounting@singtaola.com</a></span>
                        </div>
                    </div>
                    <div className="media">
                        <span className="fa fa-envelope mr-3"></span>
                        <div className="media-body">
                            <span>新聞採訪部 News Department：</span>
                            <span><a href="mailto:reporter@singtaola.com">reporter@singtaola.com</a></span>
                        </div>
                    </div>
                    <div className="media">
                        <span className="fa fa-envelope mr-3"></span>
                        <div className="media-body">
                            <span>編輯部 Editorial  Department：</span>
                            <span><a href="mailto:editor@singtaola.com">editor@singtaola.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aside follow">
                <div className="title">關注我們</div>
                <div className="qr-wrapper">
                    <img className="qr-image" src="/images/QR/qr_facebook.png" alt="facebook @SingTaoLA" />
                    <img className="qr-image" src="/images/QR/qr_weibo.png" alt="weibo @SingTaoDaily" />
                    <img className="qr-image" src="/images/QR/qr_wechat.png" alt="wechat @SingTaoLosAngeles" />
                </div>
            </div>
        </div>
        <div className="Footer copyright">
        </div>
    </footer>
);

export default Footer;