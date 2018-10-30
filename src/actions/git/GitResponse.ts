export interface GitResponse<T> {
  data?: T;
  returnCode: number;
  message?: string;
}
