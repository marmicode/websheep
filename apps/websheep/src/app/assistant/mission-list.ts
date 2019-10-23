import { createMission, Mission } from './mission';
import { Topic } from './topic';

export const missionList: Mission[] = [
  createMission({
    id: 'authz1',
    title: 'Catch a sheep herd 1',
    topic: Topic.BrokenAccessControl,
    goals: [`Grab the names of Foo Bar's sheep`],
    hints: [`Foo Bar's user id is "foobar"`],
    config: {
      apiBasePath: 'authz1'
    }
  }),
  createMission({
    id: 'authz2',
    title: 'Catch a sheep herd 2',
    topic: Topic.BrokenAccessControl,
    goals: [`Grab the names of Foo Bar's sheep`],
    hints: [
      `Admins can see all sheep`,
      `Analyse API responses body`,
      `Check this route: /farmers/:farmerId`
    ],
    config: {
      apiBasePath: 'authz2'
    }
  }),
  createMission({
    id: 'csrf1',
    title: 'Sheep Stalker',
    topic: Topic.Csrf,
    goals: [`Steal foobar's sheep from another origin`],
    hints: [
      `Analyse API responses headers`,
      `Check this route: /farmers/:farmerId/sheep`
    ],
    config: {
      apiBasePath: 'csrf1',
      includeCredentials: true
    }
  }),
  createMission({
    id: 'csrf2',
    title: 'A sheep named Wolf',
    topic: Topic.Csrf,
    goals: [`Add a sheep named Wolf to foobar's herd`],
    hints: [
      `The API might consume media types other than application/json`,
      `Try a standard media type`,
      `application/x-www-form-urlencoded`
    ],
    config: {
      apiBasePath: 'csrf2',
      includeCredentials: true
    }
  })
];
