import { Reflector } from '@nestjs/core';
import { OrderGuard } from './order.guard';

describe('OrderGuard', () => {
  it('should be defined', () => {
    const reflector = new Reflector();
    const guard = new OrderGuard(reflector);
    expect(guard).toBeDefined();
  });
});
