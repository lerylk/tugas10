import { mount } from '@vue/test-utils';
import Login from '../src/components/Login.vue';
import { describe, it, expect } from 'vitest';

describe('Login', () => {
  it('memicu event "login" saat form disubmit dengan kredensial benar', async () => {
    const wrapper = mount(Login);

    await wrapper.find('input[autocomplete="username"]').setValue('admin');
    await wrapper.find('input[autocomplete="current-password"]').setValue('admin');
    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.emitted()).toHaveProperty('login');
  });

  it('tidak memicu event "login" jika kredensial salah', async () => {
    const wrapper = mount(Login);

    await wrapper.find('input[autocomplete="username"]').setValue('user');
    await wrapper.find('input[autocomplete="current-password"]').setValue('salah');
    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.emitted('login')).toBeFalsy();
  });
});
