import React from 'react';
import { render } from '@testing-library/react';
import Comp from '../14RenderTestWithReactTestingLibrary';

test("renders an h1", () => {
    const { getByText } = render(<Comp />);    
    const h1 = getByText(/Testing Render/);

    expect(h1).toHaveTextContent(
        "Testing Render"
    );    
});