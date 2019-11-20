const provider = new Pact({
  consumer: 'WebSheep',
  provider: 'WebSheepApi',
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'INFO'
});

describe('UserSheepService', () => {
  beforeEach(() => {});

  it(`should retrieve user's sheep`, () => {});
});
