import { Mission } from './mission';
import { Topic } from './topic';

export const missionList: Mission[] = [
  {
    id: 'authz1',
    title: 'Catch a sheep herd 1',
    topic: Topic.BrokenAccessControl,
    goals: [`Grab the names of Foo Bar's sheep`],
    hints: [`Foo Bar's user id is "foobar"`],
    config: {
      apiBasePath: 'authz1'
    }
  },
  {
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
  },
  {
    id: 'csrf1',
    title: 'Bad C.O.R.S. rules',
    topic: Topic.Csrf,
    goals: [`Steal foobar's sheep from another origin`],
    hints: [
      `Analyse API responses headers`,
      `Check this route: /farmers/:farmerId/sheep`
    ],
    config: {
      apiBasePath: 'csrf1'
    }
  }
];
