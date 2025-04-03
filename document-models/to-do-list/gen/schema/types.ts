export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Amount_Money: { input: number; output: number };
  Amount_Percentage: { input: number; output: number };
  Amount_Tokens: { input: number; output: number };
  Currency: { input: string; output: string };
  Date: { input: string; output: string };
  DateTime: { input: string; output: string };
  EmailAddress: { input: string; output: string };
  EthereumAddress: { input: string; output: string };
  OID: { input: string; output: string };
  OLabel: { input: string; output: string };
  PHID: { input: string; output: string };
  URL: { input: string; output: string };
};

export type AddTodoItemInput = {
  id: Scalars["ID"]["input"];
  text: Scalars["String"]["input"];
};

export type DeleteTodoItemInput = {
  id: Scalars["ID"]["input"];
};

export type ToDoItem = {
  checked: Scalars["Boolean"]["output"];
  createdAt: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  list: ToDoList;
  text: Scalars["String"]["output"];
  updatedAt: Scalars["Int"]["output"];
};

export type ToDoList = {
  checked: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  items: Array<ToDoItem>;
  total: Scalars["Int"]["output"];
  unchecked: Scalars["Int"]["output"];
};

export type ToDoListState = {
  items: Array<ToDoItem>;
  stats: ToDoListStats;
};

export type ToDoListStats = {
  checked: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
  unchecked: Scalars["Int"]["output"];
};

export type UpdateTodoItemInput = {
  checked?: InputMaybe<Scalars["Boolean"]["input"]>;
  id: Scalars["ID"]["input"];
  text?: InputMaybe<Scalars["String"]["input"]>;
};
