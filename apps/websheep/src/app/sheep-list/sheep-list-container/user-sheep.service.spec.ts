import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provider } from '../../../testing/pact-provider';
import { HttpInterceptorsModule } from '../../http/http-interceptors.module';
import { AppState } from '../../reducers';
import { UserSheepService } from './user-sheep.service';

describe('UserSheepService', () => {
  beforeAll(async () => {
    await provider.setup();

    await provider.addInteraction({
      state: 'farmer has sheep',
      uponReceiving: `a request for farmer's sheep`,
      withRequest: {
        method: 'GET',
        path: '/farmers/USER_ID/sheep',
        headers: { Authorization: 'Bearer TOKEN' }
      },
      willRespondWith: {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: {
          next: null,
          totalCount: 2,
          items: [
            {
              name: 'Dolly'
            },
            {
              name: 'Bruce'
            }
          ]
        }
      }
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpInterceptorsModule.forRoot()],
      providers: [
        provideMockStore<Pick<AppState, 'config' | 'user'>>({
          initialState: {
            config: {
              apiServerUrl: `http://${provider.server.options.host}:${provider.server.options.port}`,
              apiBasePath: '/',
              includeCredentials: false
            },
            user: {
              token: 'TOKEN',
              tokenId: null,
              userId: 'USER_ID'
            }
          }
        })
      ]
    });
  });

  let userSheepService: UserSheepService;
  beforeEach(() => (userSheepService = TestBed.inject(UserSheepService)));

  afterEach(() => provider.verify());

  afterAll(() => provider.finalize());

  it(`should retrieve user's sheep`, async () => {
    const response = await userSheepService.getUserSheep().toPromise();

    expect(response.totalCount).toEqual(2);
    expect(response.items).toEqual([
      {
        name: 'Dolly'
      },
      {
        name: 'Bruce'
      }
    ]);
  });
});
