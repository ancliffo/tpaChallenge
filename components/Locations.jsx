import React from 'react';
import styles from '../styles/mission-styles.module.scss';

export default function Locations(props) {
	const { locations, handleSelectLocation, selectedLocation } = props;

	if (locations.length) {
		return (
			<div className={styles.storeLocations}>
				{
					locations.map((val) => {
						return <div key={val.label}
						            className={styles.locations + ' ' + (selectedLocation === val.label ? styles.activeLocation : '')}
						            onClick={() => handleSelectLocation(val.label)}>
							<h5>{val.label}</h5>
							<p>{val.addrLine2}{val.addrLine3 ? ' ' + val.addrLine3 : ''}, {val.state}</p>
							<p>{val.phone}</p>
						</div>
					})
				}
			</div>
		)
	} else {
		return (<div className={'store-locations'}>
			Sorry! There are no locations in the state or provice you selected.
		</div>);
	}
};
