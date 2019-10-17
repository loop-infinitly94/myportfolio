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
							<div className="job-attributions">React <span className="bullet">&bull;</span> Data analysis <span className="bullet">&bull;</span> OpenApi</div>
						</div>

						<div className="col-full text-center">I am responsible for building the already existing JAVA software's in React for better UI experience. I have developed many number of npm packages which is used in this softwares   </div>

						<div className="row">
							<div className="col-2-3 col-wrap centered">
								<div className="col-1-2 job-company"><strong>Company:</strong> <a href="https://www.lisec.com/" target="_blank">Lisec Automation MiddleEast FZ LLC</a></div>
								<div className="col-1-2 job-period"><strong>Period:</strong> November 2017 - Present</div>
							</div>
						</div>
                        <div className="col-2-3 col-wrap centered skill-container">
                            <div className="col-1-1">
                                
                                <ul>
                                    <li>Build already existing JAVA softwares in React.</li>
                                    <li>Expert with react workflows such as flux and redux</li>
                                    <li>Developed an interface for handling OpenApi server calls.</li>
                                    <li>Created a package <strong>AttributeEdit</strong> which does <strong>Metric and Imperial Conversion</strong> with validation. Here the user can set the type of attribute(Weight, Length etc), set preferred output unit(kg, mm etc) and set the number of decimal points. For selected attribute type only the available unit can be typed all other characters will be restricted. Currently it handles 36 different attributes.</li>
                                    <li>Developed a <strong>React-Dialog</strong> with drag and exapnd functionality. It also provides provision for storing the last size and posisition of the dialog.</li>
                                    <li>Developed a <strong>Dynamic Redrawing Canvas </strong> based on data from server which is refershed regularly</li>
                                </ul>							
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