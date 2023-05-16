import React from 'react';
import styles from '../styles/mission-styles.module.scss';

export default function CountryDropdown(props) {
	const { countrySelected, setCountrySelected } = props;
	const countryOptions = [ 'Canada', 'Mexico' , 'United States']

	return (
		<div className={styles.storeDropdown}>
			<h3 className={'text-white'}>Select a country</h3>
			<select className={'form-control'} name={'country'} value={countrySelected} onChange={(e)=>setCountrySelected(e.target.value)}>
				{
					countryOptions.map((val)=> {
						return <option key={val}>{val}</option>
					})
				}
			</select>
		</div>
	)
};
