import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
// import { describe } from 'sequelize/types/lib/query-types';
// import { INET } from 'sequelize/types';

afterEach(cleanup);

describe('About component', () => {
    //First Test
it('renders', () => {
    render(<About />);

});
it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
});
})