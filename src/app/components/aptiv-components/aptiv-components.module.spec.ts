import { AptivComponentsModule } from './aptiv-components.module';

describe('AptivComponentsModule', () => {
  let aptivComponentsModule: AptivComponentsModule;

  beforeEach(() => {
    aptivComponentsModule = new AptivComponentsModule();
  });

  it('should create an instance', () => {
    expect(aptivComponentsModule).toBeTruthy();
  });
});
