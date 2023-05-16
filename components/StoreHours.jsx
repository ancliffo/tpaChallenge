import React, { useEffect, useState } from 'react';
import styles from '../styles/mission-styles.module.scss';

export default function StoreHours(props) {
	const { openCloseTimes } = props;
	const [imgKey, setImgKey] = useState(Math.random());

	/**
	 * Animate the open sign after each change
	 */
	useEffect(()=> {
		setImgKey(Math.random());
	}, [openCloseTimes]);

	if (openCloseTimes.length) {
		return (
			<div className={styles.branchHours}>
				<h2 className={'border-bottom pb-2 mb-3'}>Branch Hours</h2>
				{
					openCloseTimes.map((val) => {
						return (<div className={styles.day} key={val.dayOfWeek + Math.random()}>
							<div className={'col-5'}>
								<h3 className={'justify-content-end d-flex'}>{val.dayOfWeek}</h3>
							</div>
							<div className={'col-7'}>
								<div className={'justify-content-start d-flex mx-4'}>
									{
										val.openTime === 'Closed' ?
											<div className={styles.timeClosed}>{val.openTime}</div> :
											<>
												<div className={styles.time}>{val.openTime}</div>
												<div className={'mx-3'}>-</div>
												<div className={styles.time}>{val.closeTime}</div>
											</>
									}
								</div>
							</div>
						</div>)
					})
				}
				<div className={styles.swing} key={imgKey}>
					<img src={'./open.png'} />
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles.branchHours}>
				<h4>Please select a location to the left to see store hours.</h4>
			</div>
		)
	}
};
