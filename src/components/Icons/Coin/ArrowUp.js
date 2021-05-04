import React from "react";

const ArrowUp = () => {
	return (
		<svg width="57" height="68" viewBox="0 0 57 68" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M30.5571 1.7984C29.3573 0.346501 27.1319 0.346498 25.9321 1.79839L0.693187 32.339C-0.923429 34.2952 0.467961 37.2501 3.00571 37.2501H14.7447V64.9999C14.7447 66.6567 16.0879 67.9999 17.7447 67.9999H38.7447C40.4016 67.9999 41.7447 66.6567 41.7447 64.9999V37.2501H53.4834C56.0212 37.2501 57.4126 34.2952 55.796 32.339L30.5571 1.7984Z"
				fill="url(#arrow-up-grad)"
			/>
			<defs>
				<linearGradient
					id="arrow-up-grad"
					x1="28.4806"
					y1="-0.856934"
					x2="28.4806"
					y2="86.7837"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#4AC8AA" />
					<stop offset="0.70188" stopColor="#4AC8AA" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default ArrowUp;
