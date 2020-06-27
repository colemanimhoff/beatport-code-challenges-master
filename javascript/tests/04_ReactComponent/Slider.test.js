import { mount } from 'enzyme';
import React from 'react';
import { Slider } from './components/Slider';

describe('Slider', () => {
    it('mounts', () => {
        const container = mount(
            <Slider />
        );
        expect(container.find('.slider').exists()).toBe(true);
    });
});
