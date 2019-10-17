import React from 'react';

const Intro = () => {
    return (
        <section id="intro">
			<div className="info">
				<div className="container">
					<div className="row">
						<div className="col-full"><h1>Shyam Kumar</h1></div>
					</div>
					<div className="row"><div className="col-1-4 centered line"></div></div>
					<div className="row">
						<div className="col-full"><h4>Full Stack Developer</h4></div>
					</div>
				</div>
			    <div className="backstretch"><img className="backstretchimage" src="http://www.kaiwa-projects.com/assets/img/backstretch.jpg"/></div>
            </div>
			<div id="nav-sticky-wrapper" className="sticky-wrapper">
                <nav id="nav">
                    <ul className="clearfix">
                        <li className=""><a href="#aboutme"><span>About </span>me</a></li>
                        <li className=""><a href="#skills">Ski<span>lls</span></a></li>
                        <li className=""><a href="#experience">Exp<span>erience</span></a></li>
                        <li className=""><a href="#education">Edu<span>cation</span></a></li>
                        {/* <li className=""><a href="#portfolio">Por<span>tfolio</span></a></li> */}
                        <li className=""><a href="#contact">Con<span>tact</span></a></li>
                    </ul>
			    </nav>
            </div>
		</section>
    );
};

export default Intro;