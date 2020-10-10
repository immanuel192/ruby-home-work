import { Store } from 'vuex';

/**
 * App main state
 */
export interface IAppState {
  testValue: string;
  subjects?: IModuleSubjectState;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppGetter {
  groupedSubjects: {
    key: string;
    items: ISubject[];
  }[];
}

/** ------ Topics -------- */
export interface ISubject {
  id: string;
  name: string;
  group: string;
  enable: boolean;
  totalNewUpdate?: number;
  styleConfig?: Record<string, any>;
}
export interface IModuleSubjectState {
  data: ISubject[];
}

export interface IStore extends Store<IAppState> { getters: IAppGetter }
