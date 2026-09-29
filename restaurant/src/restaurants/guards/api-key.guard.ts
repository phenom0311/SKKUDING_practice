import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, } from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    // 임의로 키 저장
    private readonly apiKey = 'skkuding-secret-key';

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        const apiKey = request.headers['x-api-key'];

        if (apiKey !== this.apiKey) {
            throw new UnauthorizedException('Invalid API Key');
        }

        return true;
    }
}