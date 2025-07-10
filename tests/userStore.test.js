import { setActivePinia, createPinia } from 'pinia';
import { useUserStore } from '../src/stores/user';
import { describe, it, expect, beforeEach } from 'vitest';

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('login mengubah state', () => {
    const store = useUserStore();
    store.login({ name: 'Admin' });
    expect(store.isLoggedIn).toBe(true);
    expect(store.userInfo.name).toBe('Admin');
  });
});
