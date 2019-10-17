import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio" class="section">
        <div class="container">
            <div class="row">
                <div class="col-full">
                    <h2 class="section-title">Some of my favorite projects</h2>
                    <div class="centered line"></div>
                </div>
            </div>

            <div class="row section-content">
                <div class="row">
                    <div class="col-full">
                        <ul class="filters">
                            <li class="filter" data-filter="all">All</li>
                            <li class="filter" data-filter="port-application">Applications</li>
                            <li class="filter" data-filter="port-game">Games</li>
                            <li class="filter" data-filter="port-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div class="row projects gallery">
                    <div class="col-1-4 project port-web"><a href="https://www.yourtango.com/" title="YourTango: Love and relationship blog site with over 35 millon page views per day"><img src="./images/yourtango.png" alt="YourTango: Love and relationship blog site with over 35 millon page views per day"/></a></div>
                    <div class="col-1-4 project port-web"><a href="https://learnbase.com/" title="A custom developed wordpress plugin which allows you to create learing lessons"><img src="./images/learnbase.png" alt="A custom developed wordpress plugin which allows you to create learing lessons"/></a></div>
                    <div class="col-1-4 project port-web"><a href="https://tnj.com/" title="The Network Journal is a quarterly print and online business magazine for Black professionals and small business owners."><img src="./images/tnj.jpg" alt="The Network Journal is a quarterly print and online business magazine for Black professionals and small business owners."/></a></div>
                    <div class="col-1-4 project port-web"><a href="https://printpackipama.com/" title="Print-Pack IPAMA provide platform for both buyer and seller and help in organizing national and international exhibitions."><img src="./images/printpack.jpg" alt="Print-Pack IPAMA provide platform for both buyer and seller and help in organizing national and international exhibitions."/></a></div>
                    {/* <div class="col-1-6 project port-application"><a href="http://www.kaiwa-projects.com/assets/img/project-big-1.jpg" title="C# ImageViewer UserControl open-source available on CodeProject."><img src="http://www.kaiwa-projects.com/assets/img/project-thumb-1.png" alt="C# ImageViewer UserControl open-source available on CodeProject."/></a></div>
                    <div class="col-1-6 project port-game"><a href="http://www.kaiwa-projects.com/assets/img/project-big-2.jpg" title="Super Puzzle Platformer is a Unity game developed in 14 days."><img src="http://www.kaiwa-projects.com/assets/img/project-thumb-2.png" alt="Super Puzzle Platformer is a Unity game developed in 14 days."/></a></div>
                    <div class="col-1-6 project port-game"><a href="http://www.kaiwa-projects.com/assets/img/project-big-3.jpg" title="Super Puzzle Platformer is a Unity game developed in 14 days."><img src="http://www.kaiwa-projects.com/assets/img/project-thumb-3.png" alt="Super Puzzle Platformer is a Unity game developed in 14 days."/></a></div>
                    <div class="col-1-6 project port-game"><a href="http://www.kaiwa-projects.com/assets/img/project-big-4.jpg" title="Oculus Rift game developed during a Global Game Jam."><img src="http://www.kaiwa-projects.com/assets/img/project-thumb-4.png" alt="Oculus Rift game developed during a Global Game Jam."/></a></div>
                    <div class="col-1-6 project port-game"><a href="http://www.kaiwa-projects.com/assets/img/project-big-5.jpg" title="Oculus Rift game developed during a Global Game Jam."><img src="http://www.kaiwa-projects.com/assets/img/project-thumb-5.png" alt="Oculus Rift game developed during a Global Game Jam."/></a></div>
                    <div class="col-1-6 project port-application"><a href="http://www.kaiwa-projects.com/assets/img/project-big-6.jpg" title="Software Rasterizer"><img src="http://www.kaiwa-projects.com/assets/img/project-thumb-6.png" alt="Software Rasterizer"/></a></div>
                    <div class="col-1-6 project port-web"><a href="http://www.kaiwa-projects.com/assets/img/kaiwa-big-1.jpg" title="Kubed, the Kubernetes cluster manager I built."><img src="http://www.kaiwa-projects.com/assets/img/kaiwa-thumb-1.png" alt="Kubed, the Kubernetes cluster manager I built."//></a></div>
                    <div class="col-1-6 project port-web"><a href="http://www.kaiwa-projects.com/assets/img/kaiwa-big-2.jpg" title="A custom developed Customer Management System for a driveways company."><img src="http://www.kaiwa-projects.com/assets/img/kaiwa-thumb-2.png" alt="A custom developed Customer Management System for a driveways company."/></a></div>
                    <div class="col-1-6 project port-web"><a href="http://www.kaiwa-projects.com/assets/img/kaiwa-big-3.jpg" title="Lead Generation Admin System, both front-end and back-end."><img src="http://www.kaiwa-projects.com/assets/img/kaiwa-thumb-3.png" alt="Lead Generation Admin System, both front-end and back-end."/></a></div>
                    <div class="col-1-6 project port-web"><a href="http://www.kaiwa-projects.com/assets/img/kaiwa-big-4.jpg" title="A small website to learn Korean gaming terms for fun using the Hearthstone cards database."><img src="http://www.kaiwa-projects.com/assets/img/kaiwa-thumb-4.png" alt="A small website to learn Korean gaming terms for fun using the Hearthstone cards database."/></a></div> */}
                </div>
            </div>
        </div>
    </section>
    );
};

export default Portfolio;