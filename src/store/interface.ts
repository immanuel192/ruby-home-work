/**
 * App main state
 */
export interface IAppState {
  testValue: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAppGetter { }

/** ------ Topics -------- */
export interface ITopic {
  id: string;
  name: string;
  icon: string;
  enable: boolean;
  totalNewUpdate: number;
}
export interface IModuleTopicState {
  data: ITopic[];
}
