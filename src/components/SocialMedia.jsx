import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a href="https://github.com/shekingw">
					<BsGithub />
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/alan-otero"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
