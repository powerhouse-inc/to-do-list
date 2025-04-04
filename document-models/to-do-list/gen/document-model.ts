import type { DocumentModelState } from "document-model";

export const documentModel: DocumentModelState = {
  id: "powerhouse/todolist",
  name: "ToDoList",
  extension: "",
  description: "",
  author: {
    name: "",
    website: "",
  },
  specifications: [
    {
      version: 1,
      changeLog: [],
      state: {
        global: {
          schema:
            "type ToDoListState {\n  items: [ToDoItem!]!\n  stats: ToDoListStats!\n}\n\ntype ToDoItem {\n  id: ID!\n  text: String!\n  checked: Boolean!\n}\n\ntype ToDoListStats {\n  total: Int!\n  checked: Int!\n  unchecked: Int!\n}",
          initialValue:
            '"{\\n  \\"items\\":[],\\n  \\"stats\\":{\\"total\\":0,\\"checked\\":0,\\"unchecked\\":0}}"',
          examples: [],
        },
        local: {
          schema: "",
          initialValue: '""',
          examples: [],
        },
      },
      modules: [
        {
          id: "/oOw7AqXdBEykVeGBe4FwyVwOqM=",
          name: "to_do_list",
          description: "",
          operations: [
            {
              id: "G5dDTYS7E3RpGjbM8eNVlPdrNcw=",
              name: "ADD_TODO_ITEM",
              description: "",
              schema:
                "input AddTodoItemInput {\n    id: ID!\n    text: String!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "JzDJHskeTsOd94IRPyC2ipsSW0g=",
              name: "UPDATE_TODO_ITEM",
              description: "",
              schema:
                "input UpdateTodoItemInput {\n  id: ID!\n  text: String\n  checked: Boolean\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
            {
              id: "xMmvzPnMngTfKuvBgYXvqZMYVPg=",
              name: "DELETE_TODO_ITEM",
              description: "",
              schema: "input DeleteTodoItemInput {\n  id: ID!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global",
            },
          ],
        },
      ],
    },
  ],
};
