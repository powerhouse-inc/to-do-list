import {
  type StateReducer,
  isDocumentAction,
  createReducer,
} from "document-model";
import { type ToDoListDocument, z } from "./types.js";

import { reducer as ToDoListReducer } from "../src/reducers/to-do-list.js";

const stateReducer: StateReducer<ToDoListDocument> = (
  state,
  action,
  dispatch,
) => {
  if (isDocumentAction(action)) {
    return state;
  }

  switch (action.type) {
    case "ADD_TODO_ITEM":
      z.AddTodoItemInputSchema().parse(action.input);
      ToDoListReducer.addTodoItemOperation(
        state[action.scope],
        action,
        dispatch,
      );
      break;

    case "UPDATE_TODO_ITEM":
      z.UpdateTodoItemInputSchema().parse(action.input);
      ToDoListReducer.updateTodoItemOperation(
        state[action.scope],
        action,
        dispatch,
      );
      break;

    case "DELETE_TODO_ITEM":
      z.DeleteTodoItemInputSchema().parse(action.input);
      ToDoListReducer.deleteTodoItemOperation(
        state[action.scope],
        action,
        dispatch,
      );
      break;

    default:
      return state;
  }
};

export const reducer = createReducer<ToDoListDocument>(stateReducer);
