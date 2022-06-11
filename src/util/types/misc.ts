import type { PubgResponseError } from "~/types";
import type { WithApiShard } from "~/util/types";

export type Module<TOptions, TReturn> = (options: TOptions) => Promise<TReturn>;

export interface FetchOptions extends WithApiShard {
  /**
   * Endpoint to hit of the api
   */
  endpoint: string;

  /**
   * Additional headers to apply to the request
   *
   * @default undefined
   */
  headers?: Record<string, string>;

  /**
   * Additional parameters to apply to the request
   *
   * @default undefined
   */
  params?: any;

  /**
   * Concatenate the endpoint to the root domain / base URL rather than on top of a shard
   *
   * @default false
   */
  root?: boolean;
}

export type Result<T> =
  | {
      data: T;
      error: null;
    }
  | {
      data: null;
      error: PubgResponseError;
      status?: number;
    };
