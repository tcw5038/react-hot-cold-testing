import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './feedback';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount/>);
    });
});

