import { AnyNamePipe } from './any-name.pipe';

describe('AnyNamePipe', () => {
  it('create an instance', () => {
    const pipe = new AnyNamePipe();
    expect(pipe).toBeTruthy();
  });
});
