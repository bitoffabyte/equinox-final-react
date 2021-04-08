import './Page6.css';
import ad from '../../Assets/ad.svg';
import an from '../../Assets/an.svg';
import v from '../../Assets/v.svg';
import { memo } from 'react';
import Tilt from 'react-tilt';
const Page6 = ({ fadeIn }) => {
	return (
		<Tilt className='Tilt' options={{ max: 25, scale: 1 }}>
			<div className='page6bg'>
				<div className={`Page6Content ${fadeIn ? 'fadeIn' : ''} `}>
					<h1>ORGANISERS</h1>
					<div className='organizers'>
						<div className='card card1'>
							<br />
							<br />
							<img src={ad} />
							<p>ADITI CHOWDHURI</p>
						</div>
						<div className='card card2'>
							<br />
							<br />

							<img src={an} />
							<p>ANIRUDH RAMESH</p>
						</div>
						<div className='card card3'>
							<br />
							<br />

							<img src={v} />
							<p>AJAY VENKATESH</p>
						</div>
					</div>
				</div>
			</div>
		</Tilt>
	);
};

export default memo(Page6);
