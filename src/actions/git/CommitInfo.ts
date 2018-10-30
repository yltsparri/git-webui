/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export enum RefType {
  Unspecified = 0,
  Head = 1,
  Remote = 2,
  Tag = 3
}

export interface Ref {
  text: string;
  type: RefType;
}

export interface Person {
  date: Date;
  name: string;
  email: string;
}

export interface CommitInfo {
  hash: string;
  parents: string[];
  tree: string;
  message: string;
  author: Person;
  committer: Person;
  refs?: Ref[];
}
