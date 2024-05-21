import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const ContactCard: React.FC = () => {
	return (
		<div id="contact">
			<h2 className="text-2xl font-bold mb-2 text-center">
				Check out my socials below! ✨
			</h2>
			<div className="bg-transparent border p-8 rounded-lg shadow-lg text-white w-full md:max-w-4xl mx-auto mt-8 cc-bg blur-background w-4/5">
				<div className="flex justify-between items-center">
					<div>
						<h2 className="text-2xl font-bold mb-2">Alex Wachira Gichohi</h2>
						<p className="text-sm mb-4">Software Engineer</p>
						
					</div>

					<div className="flex space-x-4">
						<a
							href="https://github.com/wachira954"
							target="_blank"
							rel="noreferrer"
							className="hover:text-gray-200"
						>
							<FaGithub size={44} />
						</a>
						<a
							href="https://www.linkedin.com/in/alex-gichohi-973359220/"
							target="_blank"
							rel="noreferrer"
							className="hover:text-gray-200"
						>
							<FaLinkedin size={44} />
						</a>
						<a
							href='https://x.com/BADMANSETTINGZ'
							target='blank'
							rel='noreferrer'
							className='hover:text-gray-200'
						>
							<FaTwitter size={44} />
						</a>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactCard
