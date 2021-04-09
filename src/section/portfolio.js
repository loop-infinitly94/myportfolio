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
                   
                </div>
            </div>
        </div>
    </section>
    );
};

export default Portfolio;