interface IFailureMesage {
  failure: boolean | string;
  errorMessage: string;
}
interface IResponse {
  responseText: IFailureMesage;
}

declare module ErrorHelper {
  function containsErrors(response: IResponse): boolean;
  function trace(message: IResponse): void;
}
