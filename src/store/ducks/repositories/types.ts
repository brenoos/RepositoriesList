/* eslint-disable @typescript-eslint/no-empty-interface */
import { Record } from 'immutable';

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

export interface Repository {
  id: number;
  name: string;
}

export interface RepositoryRecord extends Record<Repository> {}

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface RepositoriesStateRecord extends Record<RepositoriesState> {}
