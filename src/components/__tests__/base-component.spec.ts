import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseComponent from '../base-component.vue'

describe('BaseComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseComponent, {
      props: { title: 'Hello Vitest', description: 'Description here' }
    })
    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.text()).toContain('Description here')
  })
})
