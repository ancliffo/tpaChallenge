import React, { useEffect, useState } from 'react';
import styles from '../styles/mission-styles.module.scss';

export default function StateDropdown(props) {
	const { stateSelected, setStateSelected, stateObjects, countrySelected } = props;
	const [componentReady, setComponentReady] = useState(false);

	/**
	 * Auto select the current state so we can have the correct location list
	 */
	useEffect(()=> {
		if (stateObjects.length && !componentReady) {
			setStateSelected(stateObjects[0].ABBR);
			setComponentReady(true);
		}
	}, [stateObjects]);

	return (
		<div className={styles.storeDropdown}>
			<h3 className={'text-white'}>Select a {countrySelected === 'Canada' ? 'Province' : 'State'}</h3>
			<select className={'form-control'} name={'state-or-province'} value={stateSelected} onChange={(e)=>setStateSelected(e.target.value)}>
				{
					stateObjects.map((val)=> {
						return <option key={val.ABBR} value={val.ABBR}>{val.NAME}</option>
					})
				}
			</select>
		</div>
	)
};
