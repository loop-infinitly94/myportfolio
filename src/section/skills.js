import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section-alt">
			<div className="container">
				<div className="row">
					<div className="col-full">
						<h2 className="section-title">Technical Skills</h2>
						<div className="centered line"></div>
					</div>
				</div>

				<div className="row section-content">
					<div className="skill-container">
						
						<div className="col-1-5 skill">
							<h4>React</h4>
						</div>
						<div className="col-1-5 skill">
							<h4>JavaScript</h4>
						</div>
						<div className="col-1-5 skill">
							<h4>PHP</h4>
						</div>
						<div className="col-1-5 skill">
							<h4>Node.JS</h4>
						</div>
						
						
						<div className="col-1-5 skill">
							<h4>Wordpress</h4>
						</div>
					</div>
					<div className="col-full skill-container">
						<h3>Most frequently used tools</h3>
					</div>
					<div className="col-2-3 col-wrap centered skill-container">
						<div className="col-1-2">
							<h4>Technical</h4>
							<ul><li>HTML5/CSS</li><li>RestAPI</li><li>OAuth</li><li>JWT</li><li>Jenkins</li><li>Docker</li><li>YAML</li><li>Postman</li><li>Redux</li><li>npm</li><li>Webpack</li><li>Redux</li><li>Flux</li><li>OpenApi</li><li>Firebase</li></ul>							
						</div>
						<div className="col-1-2">
							<h4>Software</h4>
							<ul><li>Windows & Linux</li><li>Git</li><li>MySQL</li></ul>						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default Skills;