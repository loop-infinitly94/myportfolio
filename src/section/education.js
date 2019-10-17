import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section-alt">
			<div className="container">
				<div className="row">
					<div className="col-full">
						<h2 className="section-title">Education</h2>
						<div className="centered line"></div>
					</div>
				</div>

				<div className="row section-content">
					<div className="row school">
						<div className="col-full">
							<h3>SVNCE, Alappuzha : Kerala University</h3>
							<div className="school-meta">BTech. Computer Science <span className="bullet">&bull;</span> Software Development</div>
						</div>

						<div className="col-full text-center">
							Here I have gained strong knowledge on wide variety of subjects including data structures, networking, basic programming and databse management.							
							<p><strong>Graduated:</strong> 2016 </p>
						</div>
					</div>

					<div className="separator"></div>

					<div className="row school">
						<div className="col-full">
							<h3>Mount BEthany Puiblic School : CBSE</h3>
							<div className="school-meta">Higher Secondary Educaiton <span className="bullet">&bull;</span> Computer Science </div>
						</div>

						<div className="col-full text-center">
													
							<p><strong>Graduated:</strong> 2010</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default Education;