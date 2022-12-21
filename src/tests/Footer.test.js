import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component test suite', () => {
    const footerComponent = render(<Footer />);

    test(`should match snapshot`, () => {
        expect(footerComponent).toMatchSnapshot();
    })
})