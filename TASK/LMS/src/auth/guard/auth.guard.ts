import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class Authguard implements CanActivate{
    constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: 'bhanu'
        }
      )
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: any): string | undefined {
  const authHeader = request.headers['authorization'];
  if (!authHeader || typeof authHeader !== 'string') {
    return undefined;
  }
  const [type, token] = authHeader.split(' ');
  return type === 'Bearer' ? token : undefined;
}

}
