import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AuthenticationError } from '@/errors/AuthenticationError.ts';
import { UserToken } from '@/model/UserToken.ts';
import { ServerError } from '@/errors/ServerError.ts';
import * as https from 'https';
import { isInProduction } from '@/util/environment.ts';
import { Info } from '@/model/Info.ts';
import { NotFoundError } from '@/errors/NotFoundError.ts';

export class LuClient {
  private readonly _axios: AxiosInstance;
  private readonly _gameId: string;

  constructor(baseUrl: string, gameId: string) {
    this._gameId = gameId;
    this._axios = axios.create({
      baseURL: baseUrl,
      timeout: 1000,
    });

    // Allow self-signed certificates during development
    if (!isInProduction()) {
      this._axios.defaults.httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });
    }
  }

  // TODO(@Isha): Add registration once that's possible via API
  // public register(userName: string, email: string, password: string) {
  //
  // }

  public async login(userName: string, password: string): Promise<UserToken> {
    const data: UserToken = await this._request({
      method: 'POST',
      url: '/login',
      data: {
        username: userName,
        password: password,
      },
    });

    this._setToken(data.token);
    return data;
  }

  public getInfo(): Promise<Info> {
    return this._request({
      method: 'GET',
      url: '/game/' + this._gameId,
    });
  }

  public async gainAchievement(achievementSlug: string): Promise<boolean> {
    const result = await this._request({
      method: 'POST',
      url: '/achievement/' + achievementSlug,
    });
    console.log('result', result);
    return result.success;
  }

  private async _request(config: AxiosRequestConfig): Promise<any> {
    try {
      const result = await this._axios(config);
      return result.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log('Axios error', error.message);
        if (error.response?.status === 500) {
          throw new ServerError(error.response.data.error);
        }
        if (error.response?.status === 401) {
          throw new AuthenticationError(error.response.data.error);
        }
        if (error.response?.status === 404) {
          throw new NotFoundError(error.response.data.error);
        }
        throw new Error(error.message);
      } else {
        console.log(error);
      }
    }
  }

  private _setToken(token: string) {
    this._axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}
