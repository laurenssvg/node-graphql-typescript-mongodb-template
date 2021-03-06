export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  allTodos: Array<TodoMvc>;
  Todo?: Maybe<TodoMvc>;
};

export type QueryTodoArgs = {
  todoId: Scalars["ID"];
};

export type Mutation = {
  createTodo: TodoMvc;
  updateTodo?: Maybe<TodoMvc>;
};

export type MutationCreateTodoArgs = {
  description: Scalars["String"];
};

export type MutationUpdateTodoArgs = {
  todoId: Scalars["ID"];
  data: UpdateTodoInput;
};

export type UpdateTodoInput = {
  description?: Maybe<Scalars["String"]>;
  completed?: Maybe<Scalars["Boolean"]>;
};

export type TodoMvc = {
  todoId: Scalars["ID"];
  completed: Scalars["Boolean"];
  description: Scalars["String"];
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

import { ObjectID } from "mongodb";
export type TodoMvcDbObject = {
  _id: ObjectID;
  completed: boolean;
  description: string;
};
