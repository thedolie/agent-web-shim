import { init } from '../index';

test('init', () => {
  expect(init('dev')).toBe('Agent-web-shim is running for: dev');
});
