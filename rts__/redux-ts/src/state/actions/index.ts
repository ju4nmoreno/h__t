import { ActionType } from '../action-types';

export interface SearchRespositoriesAction {
  type: ActionType.SEARCH_RESPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SeachRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRespositoriesAction
  | SearchRepositoriesSuccessAction
  | SeachRepositoriesErrorAction;
