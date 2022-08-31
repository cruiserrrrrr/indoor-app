import React from "react";
import Header from "../../Components/Header/Header";
import SideBarMobile from "../../Components/SideBarMobile/SideBarMobile";
import './MessegePage.scss';









const MessegePage = () => {

    const frienditem = document.querySelectorAll(".friends-item");
    const massageTab = document.querySelectorAll('.massage_tab');

    frienditem.forEach(function (item) {

        item.addEventListener("click", function () {

            let currentFriendItem = item;
            let tabId = currentFriendItem.getAttribute("data-tab");
            let currentTab = document.getElementById(tabId);


            frienditem.forEach(function (item) {
                item.classList.remove('active')
            });
            massageTab.forEach(function (item) {
                item.classList.remove('active')
            })
            currentFriendItem.classList.add('active');
            currentTab.classList.add('active');
        });


    });


    return (
        <div className="messege-wrapper">
            <Header/>
            <div className="messege-content">
                <div className="aliert">
                    <p>only the top 3 work</p>
                </div>
                
                <div className="messege__friends">

                    <div className="friends-item" data-tab="tab-1">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Oliver</p>
                            <p>Hallo</p>
                        </div>
                        <div className="massage-time">
                            <p>12:04</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-2">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Jack </p>
                            <p>How are u?</p>
                        </div>
                        <div className="massage-time">
                            <p>11:57</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-3">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/1179515251/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D1%81%D0%BA%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=D3ZT_svimO17H7lpt_KTbzLxAcnw0nqi6tbqENjRLj8=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Harry</p>
                            <p>Mb dota?</p>
                        </div>
                        <div className="massage-time">
                            <p>11:15</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-4">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Thomas</p>
                            <p>Nooo broo</p>
                        </div>
                        <div className="massage-time">
                            <p>10:52</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-5">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/1176363690/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B1%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%D1%82%D1%8B%D0%B9-%D0%B0%D1%80%D0%B0%D0%B1-%D0%B2-%D1%82%D0%B0%D0%BA%D0%B8%D0%B8-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=j1x2d7MZHA88ZxdkbmtFdB-B-5rlObHFM77Rsy49cbE=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Charlie</p>
                            <p>omg</p>
                        </div>
                        <div className="massage-time">
                            <p>10:48</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-6">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/639085728/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B7%D0%BD%D0%B0%D0%BA%D0%B0-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80.webp?s=612x612&w=is&k=20&c=8qWNV8vbmQydtASTxBBmK8qaDdx0zIcBPeniht6w9-w=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Oscar</p>
                            <p>what are u doing man</p>
                        </div>
                        <div className="massage-time">
                            <p>10:47</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-7">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/532751193/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%81-%D0%B7%D0%BD%D0%B0%D0%BA-%D0%B4%D0%BE%D0%BB%D0%BB%D0%B0%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=Q5QJwKPNoBJZ5akN6xbTeA9-B5Ce-tQ-aySqKka_NPY=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>William</p>
                            <p>shuuuuuuuui</p>
                        </div>
                        <div className="massage-time">
                            <p>10:47</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-8">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/525693255/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%81-%D1%81%D0%B5%D1%80%D0%B4%D0%B5%D1%87%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B0%D1%85.webp?s=612x612&w=is&k=20&c=pumTFxPMeLlwmfz75JeLEHBxL8UggnsL_wW-UHdyPAQ=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>James</p>
                            <p>i wanna stray</p>
                        </div>
                        <div className="massage-time">
                            <p>8:31</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-9">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/1177837968/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B1%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%D1%82%D1%8B%D0%B9-%D0%B0%D1%84%D1%80%D0%BE%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D0%B5%D1%86-%D0%B2-%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC%D0%B5-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=ssXL2gLMk9meV66VWG5GsU28Ti68NEU1IBguP_CE8UM=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>George</p>
                            <p>fuck dota</p>
                        </div>
                        <div className="massage-time">
                            <p>6:48</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-10">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/1346583755/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82.webp?s=612x612&w=is&k=20&c=mvNZeM5bwRc1wEitVA4R1tF23RWApvpv1P0EJd4YPTw=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Amelia</p>
                            <p>look twt</p>
                        </div>
                        <div className="massage-time">
                            <p>5:51</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-11">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/639085700/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B7%D0%BD%D0%B0%D0%BA%D0%B0-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80.webp?s=612x612&w=is&k=20&c=Zz_yl8GcSLKz0t4iapkerG17CjLcp-cXzgkh-WxNt74=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Noah</p>
                            <p>good update</p>
                        </div>
                        <div className="massage-time">
                            <p>23:16</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-12">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/530827889/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-icon.webp?s=612x612&w=is&k=20&c=eBeEGcioEchT3yTxqDIKniJSK9ULiBVX6Ub5JpV0s-Y=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Mia</p>
                            <p>yep buttle pass</p>
                        </div>
                        <div className="massage-time">
                            <p>23:09</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-13">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/525693367/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%81-%D0%B7%D0%BD%D0%B0%D0%BA-%D0%B4%D0%BE%D0%BB%D0%BB%D0%B0%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=8KkuDOOH-3gF_lE0ZCbVuoHObepLJzm3m6q695VGpvM=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Ethan</p>
                            <p>good job</p>
                        </div>
                        <div className="massage-time">
                            <p>21:51</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-14">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/530827889/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-icon.webp?s=612x612&w=is&k=20&c=eBeEGcioEchT3yTxqDIKniJSK9ULiBVX6Ub5JpV0s-Y=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Lily</p>
                            <p>come on</p>
                        </div>
                        <div className="massage-time">
                            <p>19:46</p>
                        </div>
                    </div>
                    <div className="friends-item" data-tab="tab-15">
                        <div className="friends-img">
                            <img className="img-wrapper" src="https://media.istockphoto.com/id/523180745/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D1%81-%D0%BB%D0%B8%D1%81%D1%82%D1%8C%D1%8F%D0%BC%D0%B8-%D0%BC%D0%B0%D1%80%D0%B8%D1%85%D1%83%D0%B0%D0%BD%D1%8B.webp?s=612x612&w=is&k=20&c=9VW92SpNcKpPyg8NZ4d7SoyPLRHWuM5etYSpuf1EBXU=" alt="" />
                        </div>
                        <div className="friends-massage">
                            <p>Elijah</p>
                            <p>Can you send her the information?</p>
                        </div>
                        <div className="massage-time">
                            <p>19:03</p>
                        </div>
                    </div>

                </div>
                <div className="messege__chat">

                    <div className="massage_tab" id="tab-1">
                        <div className="all__massage">
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>I am sure learning foreign languages is very important nowadays. </p></div>
                                <div className="massage-time__send"><p>10:14</p></div> 
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>I am sure learning foreign languages is very important nowadays. </p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>I am sure learning foreign languages is very important nowadays. </p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>I am sure learning foreign languages is very important nowadays. </p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>I am sure learning foreign languages is very important nowadays. </p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>I am sure learning foreign languages is very important nowadays. </p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>I am sure learning foreign languages is very important nowadays. </p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>I am sure learning foreign languages is very important nowadays. </p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>I am sure learning foreign languages is very important nowadays. </p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325078/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=vLOxfMh9P02zy16hmWUUSWQDn2c_HkaUQhhcevDwFCI=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>I am sure learning foreign languages is very important nowadays. </p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="massage_tab" id="tab-2">
                        <div className="all__massage">
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quibusdam.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, assumenda.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, assumenda.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, assumenda.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, assumenda.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, assumenda.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, assumenda.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, assumenda.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, assumenda.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1178325077/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=slRY_NoGUiwTWhXE2jMOw2CkNlLQxjzTbijRW9JZ8Ds=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, assumenda.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="massage_tab" id="tab-3">
                        <div className="all__massage">
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                            <div className="massage-chat__item">
                                <div className="massage__img-name">
                                    <img src="https://media.istockphoto.com/id/1185392795/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B5%D1%86-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.webp?s=612x612&w=is&k=20&c=zhaaDI-pCkEvVfgUW2s3Lyl5KcYvyXvBeajGmAqsz7M=" alt="" />
                                    <p>Oliver</p>
                                </div>
                                <div className="massage-text"><p>Lorem ipsum dolor sit amet.</p></div>
                                <div className="massage-time__send"><p>10:14</p></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <SideBarMobile/>
        </div>
    )
}

export default MessegePage;