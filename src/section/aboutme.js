import React from 'react';

const AboutMe = () => {
    return (
        <section id="aboutme" className="section">
			<div className="container">
				<div className="row">
					<div className="col-full">
						<h2 className="section-title">About me</h2>
						<div className="centered line"></div>
					</div>
				</div>

				<div className="row section-content">
					<div className="col-1-3 aboutmeimagecontainer">
						<img alt="This is me!" className = "aboutmeimage" src="./shyamnew.jpg"/>
					</div>
					<div className="col-1-3">
						<h4>Hi, It's me!</h4>

						<p>I like building awesome softwares and user-friendly websites . I've built corporate software, websites, wordpress plugins. If you are interested, you can view some of my favorite projects in my <a href="#experience">portfolio</a> down below.</p><p>Need something built or simply want to have chat? Reach out to me on social media or send me an <a href="#contact">email</a>.</p>
						<ul className="social-links clearfix">
							<li><a rel="noopener noreferrer" href="https://github.com/loop-infinitly94" target="_blank" title="Github"><i className="fab fa-github f"></i></a></li>
							<li><a rel="noopener noreferrer" href="https://linkedin.com/in/shyam-kumar94" target="_blank" title="LinkedIn"><i className="fab fa-linkedin f"></i></a></li>
						</ul>
					</div>
					<div className="col-1-3">
						<h4>My personal interests</h4>
						
						<p>When I am not <a href="#skills">coding</a> my next project, I enjoy spending my time doing any of the following:</p><ul>
						<li>I love <strong>playing football</strong>;</li><li>I love <strong>watching movies</strong>;</li><li>I am watching my favorite <strong>eSports</strong> games;</li></ul></div>
				</div>
			</div>
		</section>
    );
};

export default AboutMe;