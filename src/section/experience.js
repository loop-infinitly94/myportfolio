import React from 'react';

const Expereince = () => {
    return (
        <section id="experience" className="section">
			<div className="container">
				<div className="row">
					<div className="col-full">
						<h2 className="section-title">Work Experience</h2>
						<div className="centered line"></div>
					</div>
				</div>

				<div className="row section-content">
					<div className="job">
						<div className="col-full">
							<h3>Software Engineer</h3>
							<div className="job-attributions">React <span className="bullet">&bull;</span> Javascript<span className="bullet">&bull;</span> Data analysis <span className="bullet">&bull;</span> OpenApi <span className="bullet">&bull;</span>npm<span className="bullet">&bull;</span>webpack </div>
						</div>

						<div className="col-full text-center">I am responsible for building the already existing JAVA software's in React for better UI experience. I have developed many number of npm packages using frontend technologies  </div>

						<div className="row">
							<div className="col-2-3 col-wrap centered">
								<div className="col-1-2 job-company"><strong>Company:</strong> <a href="https://www.lisec.com/" target="_blank">Lisec Automation MiddleEast FZ LLC</a></div>
								<div className="col-1-2 job-period"><strong>Period:</strong> November 2017 - Present</div>
							</div>
						</div>
                        <div className="col-2-3 col-wrap centered skill-container">
                            <div className="col-1-1">
                                
							<li>Development of UI frameworks for web applications support</li>
							<li>Designed, architected and wrote the front-end of our products using ReactJS
							with 100+ reusable components</li>
							<li>Frontend architecture using Redux, Flux in the Node-powered workflow</li>
							<li>Experience with Swagger, Postman OpenAPI and YAML</li>
							<li>Involved OAuth (Google and AzureAD) for authentication</li>
							<li>Involved JWT token to prevent unauthenticated users from accessing
							restricted routes and realize user authentication</li>
							<li>Enhanced the system to improve user experience and developed functions to
							acquire data from REST micro services</li>
							<li>Generated interactive data visualization using Chartjs</li>
							<li>Developed react component to dynamically render different shapes using
							Three.js and WebGL</li>
							<li>Developed mini CAD/CAM using canvas as well as SVG</li>
							<li>Cooperate with the architect and backend devs of the application</li>
							<li>Involved jenkins as a CI/CD</li>
							<li>Used Agile Development Methodology and Kanban team structure for
							development process</li>
							<li>Used GIT for version control</li>							
                            </div>
                            
                        </div>

						<div className="row">
							
						</div>
					</div>
					
					<div className="separator"></div>

					<div className="row job">
						<div className="col-full">
							<h3>Analyst Software Engineer</h3>
							<div className="job-attributions">Web development <span className="bullet">&bull;</span> PHP <span className="bullet">&bull;</span> SQL <span className="bullet">&bull;</span> WordPress <span className="bullet">&bull;</span> Drupal</div>
						</div>

						<div className="col-full text-center">This is where I started my career. I was responsible for building websites both frontend and backend as per the clients request. I was part of whole SDLC. </div>

						<div className="row">
							<div className="col-2-3 col-wrap centered">
								<div className="col-1-2 job-company"><strong>Company:</strong> <a href="https://ebizontek.com/">Ebizon</a></div>
								<div className="col-1-2 job-period"><strong>Period:</strong> September 2016 - October 2017</div>
							</div>
						</div>

                        <div className="col-2-3 col-wrap centered skill-container">
                            <div className="col-1-1">
                                
                                <ul>
                                    <li>Expert in PHP, Javascript and jQuery</li>
                                    <li>Build websites with CMS such as Wordpress and Drupal</li>
                                    <li>Developed a interactive-video building wordpress plugin using popcorn.js</li>
                                    <li>Deleveoped wordpress themes and plugins as per client specification</li>
                                    <li>Migration of Drupal website to Wrodpress</li>
                                </ul>								
                            </div>
                            
                        </div>

						<div className="row">
							<div className="col-2-3 col-wrap centered gallery">
								<div className="col-1-4 job-project"><a href="https://www.yourtango.com/" title="YourTango: Love and relationship blog site with over 35 millon page views per day"><img src="./images/yourtango.png" alt="YourTango: Love and relationship blog site with over 35 millon page views per day"/></a></div>
								<div className="col-1-4 job-project"><a href="https://learnbase.com/" title="A custom developed wordpress plugin which allows you to create learing lessons"><img src="./images/learnbase.png" alt="A custom developed wordpress plugin which allows you to create learing lessons"/></a></div>
								<div className="col-1-4 job-project"><a href="https://tnj.com/" title="The Network Journal is a quarterly print and online business magazine for Black professionals and small business owners."><img src="./images/tnj.jpg" alt="The Network Journal is a quarterly print and online business magazine for Black professionals and small business owners."/></a></div>
								<div className="col-1-4 job-project"><a href="https://printpackipama.com/" title="Print-Pack IPAMA provide platform for both buyer and seller and help in organizing national and international exhibitions."><img src="./images/printpack.jpg" alt="Print-Pack IPAMA provide platform for both buyer and seller and help in organizing national and international exhibitions."/></a></div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</section>
    );
};

export default Expereince;