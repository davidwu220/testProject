import React, { Component } from 'react';

class RightSide extends Component {
    render() {
        return (
            <aside className="aside right-side">
                {this.props.rightSideAds.map((ad, index) => (
                    <a href={ ad.ad_link } key={ index }>
                        <img src={ ad.image } alt={ "Right side ad, Title: " + ad.title } />
                    </a>
                ))}
                {/* <a href="https://subscribe.singtaola.com/subscribe.htm" target="_blank">
                    <img className="static-aside-ad" src="/ads/aside_ads/subscribe.jpg" alt=""/>
                </a>
        
                <a href="https://www.singtaousa.com/la/28457-%E6%98%9F%E5%B3%B6%E7%89%B9%E5%88%8A%E9%9B%BB%E5%AD%90%E7%89%88/" target="_blank">
                    <img className="static-aside-ad" src="/ads/aside_ads/singtao_special.jpg" alt=""/>
                </a>
        
                <a href="https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjssouc-9EUhbivRO0jbiVPuXaIltd_qQ4xMq6mOHcnHyKRr1ai5rA1jjLpgr3kNjIXV4xRLXGBgzGM4sQDGmFAp-jj0asmJ4QaWZluUTGJoid23d2aNeCXRuRwOUuLBdFNl5nDfNXuMoEsHUYfoM2ViTajFkjxiUC2s2lAHzL9bPDB7pkhB_hjrAoi0r77GKtyOJJF5bG2Rkoh8Yd_8bLc0ODSeDsFc7zUbmq701vtJhJKYREf7iGm_-ipZTnI4PMdaKJqRl&sig=Cg0ArKJSzP-LwyvyFdNE&adurl=https://www.global-shiseido.com.tw/&nm=3&nx=133&ny=126&mb=2" target="_blank"><img src="/ads/aside_ads/shiseido.jpg" alt=""/></a>
        
                <a href="http://googleads.g.doubleclick.net/pcs/click?xai=AKAOjst5JvqspBiqOO7zU9BukSNWu6Xza-Zj1FIfpDYG0D2CpJI12-DpfFIM5xj9C8vnkK-eDkIrVgBbeGOK9RDp4ARfYxfBiZgzCJEPF3uTm7M4E3rlVFkme4l7W9rBG1JtIPeS0afGEBibs_eGuUB-l8q450xlUeoROk6bQTnei3VMEIPIzIDWdT-hYI275vl9vZ5l8wzs0f2YzrgxjCNhL6mK7n9B7_PFQJ27kKgVSJVmwtcKB3jbEWQOKQ_YmBoexbk0inX-&sig=Cg0ArKJSzGoqX8iYjOWc&adurl=http://tobaccofreeca.com/chinese/&nm=5&nx=137&ny=114&mb=2" target="_blank"><img src="/ads/aside_ads/CTCP.gif" alt=""/></a>
        
                <img src="/ads/aside_ads/LeeKumKee.gif" alt=""/> */}
            </aside>
        );
    }
}

export default RightSide;