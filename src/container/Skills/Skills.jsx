import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

// import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
	const skills = [
		{ name: 'Java Script.', icon: images.javascript },
		{ name: 'React.', icon: images.react },
		{ name: 'Redux Js.', icon: images.redux },
		{ name: 'TypeScript.', icon: images.typescript },
		{ name: 'Node Js.', icon: images.node },
		{ name: 'HTML.', icon: images.html },
		{ name: 'Css.', icon: images.css },
		{ name: 'MU5.', icon: images.mu5 },
		{ name: 'Express.', icon: images.express },
		{ name: 'PostgreSQL.', icon: images.postgresql },
		{ name: 'Git.', icon: images.git },
	];
	const experiences = [
		{
			name: 'Estudiante',
			company: 'Henry',
			desc: 'Bootcamp con +800 horas de programación basadas en prácticas y proyectos reales.',
			year: 2022,
		},
		// {
		// 	name: 'Technical Assistant',
		// 	company: 'Henry',
		// 	desc: 'Bootcamp con +800 horas de programación basadas en prácticas y proyectos reales.',
		// 	year: 2022,
		// },
		{
			name: 'Proyecto Back-End & Front-End Developer',
			company: 'Henry',
			desc: 'Proyecto Individual con mas de +300 horas',
			year: '2022',
		},
		{
			name: 'Proyecto Front-End Developer',
			company: 'Henry',
			desc: 'Proyecto Grupal con mas de +400 horas',
			year: '2022',
		},
	];

	return (
		<>
			<h2 className="head-text">Skills & Experiences</h2>
			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name}
						>
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}
							>
								<img src={skill.icon} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<div className="app__skills-exp">
					{experiences.map((experience) => (
						<motion.div className="app__skills-exp-item" key={experience.year}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{experience.year}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								<>
									<motion.div
										whileInView={{ opacity: [0, 1] }}
										transition={{ duration: 0.5 }}
										className="app__skills-exp-work"
										data-tip
										data-for={experience.name}
										key={experience.name}
									>
										<h4 className="bold-text">{experience.name}</h4>
										<p className="p-text">{experience.company}</p>
										<p className="p-text">{experience.desc}</p>
									</motion.div>
								</>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, 'app__skills'),
	'skills',
	'app__whitebg',
);
