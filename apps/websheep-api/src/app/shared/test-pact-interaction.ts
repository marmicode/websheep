import { Express } from 'express';
import * as jp from 'jsonpath';
import * as request from 'supertest';

export async function testPactInteraction({
  app,
  interaction
}: {
  app: Express;
  interaction;
}) {
  
  const res = await request(app)
    [interaction.request.method.toLowerCase()](interaction.request.path)
    .set(interaction.request.headers || {});

  /* Use simple object type for jsonpath to work. */
  const response = {
    body: res.body,
    status: res.status,
    headers: res.headers
  };

  expect(response.status).toEqual(interaction.response.status);
  expect(response.headers).toEqual(
    expect.objectContaining(interaction.response.headers)
  );
  jp.nodes(interaction.response.body, '$..*')
    /* Ignore objects and keep leaves. */
    .filter(({ value }) => typeof value !== 'object')
    .forEach(({ path, value }) => {
      /* Add `body` level. */
      path = ['$', 'body', ...path.slice(1)];
      const pathStr = path.join('.').replace(/\.(\d+)/g, '[$1]');
      const matchingRule = interaction.response.matchingRules[pathStr];
      switch (matchingRule ? matchingRule.match : null) {
        case 'type':
          expect({
            /* Add path for logs. */
            path: pathStr,
            value: typeof jp.query(response, pathStr)[0]
          }).toEqual({ path: pathStr, value: typeof value });
          break;
        case 'regex':
          expect({
            /* Add path for logs. */
            path: pathStr,
            value: value.match(matchingRule.regex) != null
          }).toEqual({ path: pathStr, value: true });
          break;
        default:
          expect({
            /* Add path for logs. */
            path: pathStr,
            value: jp.query(response, pathStr)[0]
          }).toEqual({ path: pathStr, value });
      }
    });
}
