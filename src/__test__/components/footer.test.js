import React from 'react'
import { mount } from 'enzyme'
import Footer from '../../components/Footer.jsx';
// import { describe } from 'yargs';
// import { expect } from '@jest/globals';

describe('Probando <Footer />', () => {

    test('Render del componenete Footer', () => {
        const footer = mount(<Footer />);
        expect(footer.length).toEqual(1);
    })
})