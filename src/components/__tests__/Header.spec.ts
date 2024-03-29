import { describe, it, expect } from 'vitest'

import { RouterLinkStub, mount } from '@vue/test-utils'
import Header from '../header/Index.vue'

describe('Header', () => {
    it('renders properly', () => {
        const wrapper = mount(
            Header,
            // { props: { msg: 'Hello Vitest' } }
        )
        expect(wrapper.text()).toContain('星靈測驗')
    })
})
