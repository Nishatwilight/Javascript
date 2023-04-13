import { UnitTestPipe } from './unit-test.pipe';

describe('UnitTestPipe', () => {
  it('create an instance', () => {
    const pipe = new UnitTestPipe();
    expect(pipe).toBeTruthy();
  });
});
