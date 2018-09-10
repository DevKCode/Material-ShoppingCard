import { BigModuleModule } from './big-module.module';

describe('BigModuleModule', () => {
  let bigModuleModule: BigModuleModule;

  beforeEach(() => {
    bigModuleModule = new BigModuleModule();
  });

  it('should create an instance', () => {
    expect(bigModuleModule).toBeTruthy();
  });
});
