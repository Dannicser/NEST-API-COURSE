import { Post } from './posts.model';

export const postProviders = [
  {
    provide: 'POST_REPOSITORY',
    useValue: Post,
  },
];
