import { config } from '@vue/test-utils';
import { vi } from 'vitest'
import { useI18n } from 'vue-i18n';

vi.mock('vue-i18n');
(useI18n as Record<string, any>).mockReturnValue({
    t: (tKey: string) => tKey,
    locale: { value: 'tw' }
});
config.global.mocks = {
    $t: (tKey: string) => tKey,
};

vi.mock('vue-router')