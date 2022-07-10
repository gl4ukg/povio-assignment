import { render, screen } from '@testing-library/react';
import styles from "./Button.module.scss"
import Button from './Button';

describe('button', () => {
    it('should render with text prop correctly', () => {
        const { container } = render(<Button 
            text='Hello I am testing'
        />);

        expect(container).toBeInTheDocument();
        expect(container).toHaveTextContent('Hello I am testing');
    })

    it('should have rounded class when rounded prop is true', () => {
        const { container } = render(<Button 
            text='Hello I am testing'
            isRounded
        />);
        
        expect(container).toBeInTheDocument();
        expect(container.firstChild).toHaveClass(styles.button__isRounded);
    })

    it('should have colored class when colored prop is true', () => {
        const { container } = render(<Button 
            text='Hello I am testing'
            isColored
        />);
        
        expect(container).toBeInTheDocument();
        expect(container.firstChild).toHaveClass(styles.button__isColored);
    })

    it('should have small class when small prop is true', () => {
        const { container } = render(<Button 
            text='Hello I am testing'
            isSmall
        />);
        
        expect(container).toBeInTheDocument();
        expect(container.firstChild).toHaveClass(styles.button__isSmall);
    })

    it('should have black class when black prop is true', () => {
        const { container } = render(<Button 
            text='Hello I am testing'
            isBlack
        />);
        
        expect(container).toBeInTheDocument();
        expect(container.firstChild).toHaveClass(styles.button__isBlack);
    })

    it('should have isIcon class when isIcon prop is present', () => {
        const { container } = render(<Button 
            text='Hello I am testing'
            isIcon='photo'
        />);
        
        expect(container).toBeInTheDocument();
        expect(container.firstChild).toHaveClass(styles.button__isIcon);
    })

    it('should have img element when isIcon prop is present with isIcon as src and alt', () => {
        const { container } = render(<Button 
            text='Hello I am testing'
            isIcon='photo'
        />);
        const imgElement = container.getElementsByTagName('img')[0];


        expect(container).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', 'photo');
        expect(imgElement).toHaveAttribute('alt', 'photo');
    })

    it('should have given class name when class name prop is present', () => {
        const { container } = render(<Button 
            text='Hello I am testing'
            className='test_class_name'
        />);
        
        expect(container).toBeInTheDocument();
        expect(container.firstChild).toHaveClass('test_class_name');
    })
});


describe('button snapshots', () => {
    it('should render correctly with text value', () => {
        const { container } = render(<Button text='Testing'/>)

        expect(container.firstChild).toMatchSnapshot()
    });

    it('should render correctly with isIcon value and have img tag', () => {
        const { container } = render(<Button 
                text='Testing'
                isIcon='test'
            />
        )
        
        expect(container.firstChild).toMatchSnapshot()
    });
})