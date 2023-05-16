import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryDropdown from '../../components/CountryDropdown.jsx';

// Not too familiar with setting up Jest tests in Next.js. Looks like I need to look at the documentation, but here
// is where I would do it.
describe('SkillTags component', () => {
	let setCountrySelected = jest.fn();
	let countrySelected = 'Canada';

	beforeEach(() => {
		render(<CountryDropdown countrySelected={countrySelected} setCountrySelected={setCountrySelected}  />);
	});

	test('the country props should be selected already', () => {
		screen.debug();
		expect(screen.getByText(countrySelected)).toBeTruthy();
	});
});
