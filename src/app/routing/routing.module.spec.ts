import { RoutingRoutingModule } from './routing-routing.module';

describe('RoutingModule', () => {
  let routingModule: RoutingRoutingModule;

  beforeEach(() => {
    routingModule = new RoutingRoutingModule();
  });

  it('should create an instance', () => {
    expect(routingModule).toBeTruthy();
  });
});
