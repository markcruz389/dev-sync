
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model GithubAuth
 * 
 */
export type GithubAuth = $Result.DefaultSelection<Prisma.$GithubAuthPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GithubAuthRepoSelection: {
  ALL: 'ALL',
  SELECTED: 'SELECTED'
};

export type GithubAuthRepoSelection = (typeof GithubAuthRepoSelection)[keyof typeof GithubAuthRepoSelection]

}

export type GithubAuthRepoSelection = $Enums.GithubAuthRepoSelection

export const GithubAuthRepoSelection: typeof $Enums.GithubAuthRepoSelection

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.githubAuth`: Exposes CRUD operations for the **GithubAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GithubAuths
    * const githubAuths = await prisma.githubAuth.findMany()
    * ```
    */
  get githubAuth(): Prisma.GithubAuthDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    GithubAuth: 'GithubAuth'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "githubAuth"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      GithubAuth: {
        payload: Prisma.$GithubAuthPayload<ExtArgs>
        fields: Prisma.GithubAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GithubAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GithubAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload>
          }
          findFirst: {
            args: Prisma.GithubAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GithubAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload>
          }
          findMany: {
            args: Prisma.GithubAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload>[]
          }
          create: {
            args: Prisma.GithubAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload>
          }
          createMany: {
            args: Prisma.GithubAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GithubAuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload>[]
          }
          delete: {
            args: Prisma.GithubAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload>
          }
          update: {
            args: Prisma.GithubAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload>
          }
          deleteMany: {
            args: Prisma.GithubAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GithubAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GithubAuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload>[]
          }
          upsert: {
            args: Prisma.GithubAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GithubAuthPayload>
          }
          aggregate: {
            args: Prisma.GithubAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGithubAuth>
          }
          groupBy: {
            args: Prisma.GithubAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<GithubAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.GithubAuthCountArgs<ExtArgs>
            result: $Utils.Optional<GithubAuthCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    githubAuth?: GithubAuthOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    auth_id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    auth_id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    auth_id: number
    email: number
    first_name: number
    last_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    auth_id?: true
    email?: true
    first_name?: true
    last_name?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    auth_id?: true
    email?: true
    first_name?: true
    last_name?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    auth_id?: true
    email?: true
    first_name?: true
    last_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    auth_id: string
    email: string
    first_name: string | null
    last_name: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    githubAuth?: boolean | User$githubAuthArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    auth_id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auth_id" | "email" | "first_name" | "last_name" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    githubAuth?: boolean | User$githubAuthArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      githubAuth: Prisma.$GithubAuthPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      auth_id: string
      email: string
      first_name: string | null
      last_name: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    githubAuth<T extends User$githubAuthArgs<ExtArgs> = {}>(args?: Subset<T, User$githubAuthArgs<ExtArgs>>): Prisma__GithubAuthClient<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly auth_id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.githubAuth
   */
  export type User$githubAuthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
    where?: GithubAuthWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model GithubAuth
   */

  export type AggregateGithubAuth = {
    _count: GithubAuthCountAggregateOutputType | null
    _avg: GithubAuthAvgAggregateOutputType | null
    _sum: GithubAuthSumAggregateOutputType | null
    _min: GithubAuthMinAggregateOutputType | null
    _max: GithubAuthMaxAggregateOutputType | null
  }

  export type GithubAuthAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    github_user_id: number | null
  }

  export type GithubAuthSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    github_user_id: number | null
  }

  export type GithubAuthMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    github_user_id: number | null
    github_username: string | null
    github_avatar_url: string | null
    access_token: string | null
    refresh_token: string | null
    token_type: string | null
    expires_at: Date | null
    refresh_expires_at: Date | null
    scope: string | null
    installation_id: string | null
    installation_token_expires_at: Date | null
    repository_selection: $Enums.GithubAuthRepoSelection | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GithubAuthMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    github_user_id: number | null
    github_username: string | null
    github_avatar_url: string | null
    access_token: string | null
    refresh_token: string | null
    token_type: string | null
    expires_at: Date | null
    refresh_expires_at: Date | null
    scope: string | null
    installation_id: string | null
    installation_token_expires_at: Date | null
    repository_selection: $Enums.GithubAuthRepoSelection | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GithubAuthCountAggregateOutputType = {
    id: number
    user_id: number
    github_user_id: number
    github_username: number
    github_avatar_url: number
    access_token: number
    refresh_token: number
    token_type: number
    expires_at: number
    refresh_expires_at: number
    scope: number
    installation_id: number
    installation_token_expires_at: number
    permissions: number
    repository_selection: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GithubAuthAvgAggregateInputType = {
    id?: true
    user_id?: true
    github_user_id?: true
  }

  export type GithubAuthSumAggregateInputType = {
    id?: true
    user_id?: true
    github_user_id?: true
  }

  export type GithubAuthMinAggregateInputType = {
    id?: true
    user_id?: true
    github_user_id?: true
    github_username?: true
    github_avatar_url?: true
    access_token?: true
    refresh_token?: true
    token_type?: true
    expires_at?: true
    refresh_expires_at?: true
    scope?: true
    installation_id?: true
    installation_token_expires_at?: true
    repository_selection?: true
    created_at?: true
    updated_at?: true
  }

  export type GithubAuthMaxAggregateInputType = {
    id?: true
    user_id?: true
    github_user_id?: true
    github_username?: true
    github_avatar_url?: true
    access_token?: true
    refresh_token?: true
    token_type?: true
    expires_at?: true
    refresh_expires_at?: true
    scope?: true
    installation_id?: true
    installation_token_expires_at?: true
    repository_selection?: true
    created_at?: true
    updated_at?: true
  }

  export type GithubAuthCountAggregateInputType = {
    id?: true
    user_id?: true
    github_user_id?: true
    github_username?: true
    github_avatar_url?: true
    access_token?: true
    refresh_token?: true
    token_type?: true
    expires_at?: true
    refresh_expires_at?: true
    scope?: true
    installation_id?: true
    installation_token_expires_at?: true
    permissions?: true
    repository_selection?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GithubAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GithubAuth to aggregate.
     */
    where?: GithubAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubAuths to fetch.
     */
    orderBy?: GithubAuthOrderByWithRelationInput | GithubAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GithubAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GithubAuths
    **/
    _count?: true | GithubAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GithubAuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GithubAuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GithubAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GithubAuthMaxAggregateInputType
  }

  export type GetGithubAuthAggregateType<T extends GithubAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateGithubAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGithubAuth[P]>
      : GetScalarType<T[P], AggregateGithubAuth[P]>
  }




  export type GithubAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GithubAuthWhereInput
    orderBy?: GithubAuthOrderByWithAggregationInput | GithubAuthOrderByWithAggregationInput[]
    by: GithubAuthScalarFieldEnum[] | GithubAuthScalarFieldEnum
    having?: GithubAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GithubAuthCountAggregateInputType | true
    _avg?: GithubAuthAvgAggregateInputType
    _sum?: GithubAuthSumAggregateInputType
    _min?: GithubAuthMinAggregateInputType
    _max?: GithubAuthMaxAggregateInputType
  }

  export type GithubAuthGroupByOutputType = {
    id: number
    user_id: number
    github_user_id: number | null
    github_username: string | null
    github_avatar_url: string | null
    access_token: string
    refresh_token: string
    token_type: string
    expires_at: Date
    refresh_expires_at: Date
    scope: string
    installation_id: string
    installation_token_expires_at: Date
    permissions: JsonValue
    repository_selection: $Enums.GithubAuthRepoSelection
    created_at: Date
    updated_at: Date
    _count: GithubAuthCountAggregateOutputType | null
    _avg: GithubAuthAvgAggregateOutputType | null
    _sum: GithubAuthSumAggregateOutputType | null
    _min: GithubAuthMinAggregateOutputType | null
    _max: GithubAuthMaxAggregateOutputType | null
  }

  type GetGithubAuthGroupByPayload<T extends GithubAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GithubAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GithubAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GithubAuthGroupByOutputType[P]>
            : GetScalarType<T[P], GithubAuthGroupByOutputType[P]>
        }
      >
    >


  export type GithubAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    github_user_id?: boolean
    github_username?: boolean
    github_avatar_url?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_type?: boolean
    expires_at?: boolean
    refresh_expires_at?: boolean
    scope?: boolean
    installation_id?: boolean
    installation_token_expires_at?: boolean
    permissions?: boolean
    repository_selection?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["githubAuth"]>

  export type GithubAuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    github_user_id?: boolean
    github_username?: boolean
    github_avatar_url?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_type?: boolean
    expires_at?: boolean
    refresh_expires_at?: boolean
    scope?: boolean
    installation_id?: boolean
    installation_token_expires_at?: boolean
    permissions?: boolean
    repository_selection?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["githubAuth"]>

  export type GithubAuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    github_user_id?: boolean
    github_username?: boolean
    github_avatar_url?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_type?: boolean
    expires_at?: boolean
    refresh_expires_at?: boolean
    scope?: boolean
    installation_id?: boolean
    installation_token_expires_at?: boolean
    permissions?: boolean
    repository_selection?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["githubAuth"]>

  export type GithubAuthSelectScalar = {
    id?: boolean
    user_id?: boolean
    github_user_id?: boolean
    github_username?: boolean
    github_avatar_url?: boolean
    access_token?: boolean
    refresh_token?: boolean
    token_type?: boolean
    expires_at?: boolean
    refresh_expires_at?: boolean
    scope?: boolean
    installation_id?: boolean
    installation_token_expires_at?: boolean
    permissions?: boolean
    repository_selection?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type GithubAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "github_user_id" | "github_username" | "github_avatar_url" | "access_token" | "refresh_token" | "token_type" | "expires_at" | "refresh_expires_at" | "scope" | "installation_id" | "installation_token_expires_at" | "permissions" | "repository_selection" | "created_at" | "updated_at", ExtArgs["result"]["githubAuth"]>
  export type GithubAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GithubAuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GithubAuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GithubAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GithubAuth"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      github_user_id: number | null
      github_username: string | null
      github_avatar_url: string | null
      access_token: string
      refresh_token: string
      token_type: string
      expires_at: Date
      refresh_expires_at: Date
      scope: string
      installation_id: string
      installation_token_expires_at: Date
      permissions: Prisma.JsonValue
      repository_selection: $Enums.GithubAuthRepoSelection
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["githubAuth"]>
    composites: {}
  }

  type GithubAuthGetPayload<S extends boolean | null | undefined | GithubAuthDefaultArgs> = $Result.GetResult<Prisma.$GithubAuthPayload, S>

  type GithubAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GithubAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GithubAuthCountAggregateInputType | true
    }

  export interface GithubAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GithubAuth'], meta: { name: 'GithubAuth' } }
    /**
     * Find zero or one GithubAuth that matches the filter.
     * @param {GithubAuthFindUniqueArgs} args - Arguments to find a GithubAuth
     * @example
     * // Get one GithubAuth
     * const githubAuth = await prisma.githubAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GithubAuthFindUniqueArgs>(args: SelectSubset<T, GithubAuthFindUniqueArgs<ExtArgs>>): Prisma__GithubAuthClient<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GithubAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GithubAuthFindUniqueOrThrowArgs} args - Arguments to find a GithubAuth
     * @example
     * // Get one GithubAuth
     * const githubAuth = await prisma.githubAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GithubAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, GithubAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GithubAuthClient<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GithubAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAuthFindFirstArgs} args - Arguments to find a GithubAuth
     * @example
     * // Get one GithubAuth
     * const githubAuth = await prisma.githubAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GithubAuthFindFirstArgs>(args?: SelectSubset<T, GithubAuthFindFirstArgs<ExtArgs>>): Prisma__GithubAuthClient<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GithubAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAuthFindFirstOrThrowArgs} args - Arguments to find a GithubAuth
     * @example
     * // Get one GithubAuth
     * const githubAuth = await prisma.githubAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GithubAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, GithubAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__GithubAuthClient<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GithubAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GithubAuths
     * const githubAuths = await prisma.githubAuth.findMany()
     * 
     * // Get first 10 GithubAuths
     * const githubAuths = await prisma.githubAuth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const githubAuthWithIdOnly = await prisma.githubAuth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GithubAuthFindManyArgs>(args?: SelectSubset<T, GithubAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GithubAuth.
     * @param {GithubAuthCreateArgs} args - Arguments to create a GithubAuth.
     * @example
     * // Create one GithubAuth
     * const GithubAuth = await prisma.githubAuth.create({
     *   data: {
     *     // ... data to create a GithubAuth
     *   }
     * })
     * 
     */
    create<T extends GithubAuthCreateArgs>(args: SelectSubset<T, GithubAuthCreateArgs<ExtArgs>>): Prisma__GithubAuthClient<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GithubAuths.
     * @param {GithubAuthCreateManyArgs} args - Arguments to create many GithubAuths.
     * @example
     * // Create many GithubAuths
     * const githubAuth = await prisma.githubAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GithubAuthCreateManyArgs>(args?: SelectSubset<T, GithubAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GithubAuths and returns the data saved in the database.
     * @param {GithubAuthCreateManyAndReturnArgs} args - Arguments to create many GithubAuths.
     * @example
     * // Create many GithubAuths
     * const githubAuth = await prisma.githubAuth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GithubAuths and only return the `id`
     * const githubAuthWithIdOnly = await prisma.githubAuth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GithubAuthCreateManyAndReturnArgs>(args?: SelectSubset<T, GithubAuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GithubAuth.
     * @param {GithubAuthDeleteArgs} args - Arguments to delete one GithubAuth.
     * @example
     * // Delete one GithubAuth
     * const GithubAuth = await prisma.githubAuth.delete({
     *   where: {
     *     // ... filter to delete one GithubAuth
     *   }
     * })
     * 
     */
    delete<T extends GithubAuthDeleteArgs>(args: SelectSubset<T, GithubAuthDeleteArgs<ExtArgs>>): Prisma__GithubAuthClient<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GithubAuth.
     * @param {GithubAuthUpdateArgs} args - Arguments to update one GithubAuth.
     * @example
     * // Update one GithubAuth
     * const githubAuth = await prisma.githubAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GithubAuthUpdateArgs>(args: SelectSubset<T, GithubAuthUpdateArgs<ExtArgs>>): Prisma__GithubAuthClient<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GithubAuths.
     * @param {GithubAuthDeleteManyArgs} args - Arguments to filter GithubAuths to delete.
     * @example
     * // Delete a few GithubAuths
     * const { count } = await prisma.githubAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GithubAuthDeleteManyArgs>(args?: SelectSubset<T, GithubAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GithubAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GithubAuths
     * const githubAuth = await prisma.githubAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GithubAuthUpdateManyArgs>(args: SelectSubset<T, GithubAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GithubAuths and returns the data updated in the database.
     * @param {GithubAuthUpdateManyAndReturnArgs} args - Arguments to update many GithubAuths.
     * @example
     * // Update many GithubAuths
     * const githubAuth = await prisma.githubAuth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GithubAuths and only return the `id`
     * const githubAuthWithIdOnly = await prisma.githubAuth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GithubAuthUpdateManyAndReturnArgs>(args: SelectSubset<T, GithubAuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GithubAuth.
     * @param {GithubAuthUpsertArgs} args - Arguments to update or create a GithubAuth.
     * @example
     * // Update or create a GithubAuth
     * const githubAuth = await prisma.githubAuth.upsert({
     *   create: {
     *     // ... data to create a GithubAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GithubAuth we want to update
     *   }
     * })
     */
    upsert<T extends GithubAuthUpsertArgs>(args: SelectSubset<T, GithubAuthUpsertArgs<ExtArgs>>): Prisma__GithubAuthClient<$Result.GetResult<Prisma.$GithubAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GithubAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAuthCountArgs} args - Arguments to filter GithubAuths to count.
     * @example
     * // Count the number of GithubAuths
     * const count = await prisma.githubAuth.count({
     *   where: {
     *     // ... the filter for the GithubAuths we want to count
     *   }
     * })
    **/
    count<T extends GithubAuthCountArgs>(
      args?: Subset<T, GithubAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GithubAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GithubAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GithubAuthAggregateArgs>(args: Subset<T, GithubAuthAggregateArgs>): Prisma.PrismaPromise<GetGithubAuthAggregateType<T>>

    /**
     * Group by GithubAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GithubAuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GithubAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GithubAuthGroupByArgs['orderBy'] }
        : { orderBy?: GithubAuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GithubAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGithubAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GithubAuth model
   */
  readonly fields: GithubAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GithubAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GithubAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GithubAuth model
   */
  interface GithubAuthFieldRefs {
    readonly id: FieldRef<"GithubAuth", 'Int'>
    readonly user_id: FieldRef<"GithubAuth", 'Int'>
    readonly github_user_id: FieldRef<"GithubAuth", 'Int'>
    readonly github_username: FieldRef<"GithubAuth", 'String'>
    readonly github_avatar_url: FieldRef<"GithubAuth", 'String'>
    readonly access_token: FieldRef<"GithubAuth", 'String'>
    readonly refresh_token: FieldRef<"GithubAuth", 'String'>
    readonly token_type: FieldRef<"GithubAuth", 'String'>
    readonly expires_at: FieldRef<"GithubAuth", 'DateTime'>
    readonly refresh_expires_at: FieldRef<"GithubAuth", 'DateTime'>
    readonly scope: FieldRef<"GithubAuth", 'String'>
    readonly installation_id: FieldRef<"GithubAuth", 'String'>
    readonly installation_token_expires_at: FieldRef<"GithubAuth", 'DateTime'>
    readonly permissions: FieldRef<"GithubAuth", 'Json'>
    readonly repository_selection: FieldRef<"GithubAuth", 'GithubAuthRepoSelection'>
    readonly created_at: FieldRef<"GithubAuth", 'DateTime'>
    readonly updated_at: FieldRef<"GithubAuth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GithubAuth findUnique
   */
  export type GithubAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
    /**
     * Filter, which GithubAuth to fetch.
     */
    where: GithubAuthWhereUniqueInput
  }

  /**
   * GithubAuth findUniqueOrThrow
   */
  export type GithubAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
    /**
     * Filter, which GithubAuth to fetch.
     */
    where: GithubAuthWhereUniqueInput
  }

  /**
   * GithubAuth findFirst
   */
  export type GithubAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
    /**
     * Filter, which GithubAuth to fetch.
     */
    where?: GithubAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubAuths to fetch.
     */
    orderBy?: GithubAuthOrderByWithRelationInput | GithubAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GithubAuths.
     */
    cursor?: GithubAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GithubAuths.
     */
    distinct?: GithubAuthScalarFieldEnum | GithubAuthScalarFieldEnum[]
  }

  /**
   * GithubAuth findFirstOrThrow
   */
  export type GithubAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
    /**
     * Filter, which GithubAuth to fetch.
     */
    where?: GithubAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubAuths to fetch.
     */
    orderBy?: GithubAuthOrderByWithRelationInput | GithubAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GithubAuths.
     */
    cursor?: GithubAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GithubAuths.
     */
    distinct?: GithubAuthScalarFieldEnum | GithubAuthScalarFieldEnum[]
  }

  /**
   * GithubAuth findMany
   */
  export type GithubAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
    /**
     * Filter, which GithubAuths to fetch.
     */
    where?: GithubAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GithubAuths to fetch.
     */
    orderBy?: GithubAuthOrderByWithRelationInput | GithubAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GithubAuths.
     */
    cursor?: GithubAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GithubAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GithubAuths.
     */
    skip?: number
    distinct?: GithubAuthScalarFieldEnum | GithubAuthScalarFieldEnum[]
  }

  /**
   * GithubAuth create
   */
  export type GithubAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a GithubAuth.
     */
    data: XOR<GithubAuthCreateInput, GithubAuthUncheckedCreateInput>
  }

  /**
   * GithubAuth createMany
   */
  export type GithubAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GithubAuths.
     */
    data: GithubAuthCreateManyInput | GithubAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GithubAuth createManyAndReturn
   */
  export type GithubAuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * The data used to create many GithubAuths.
     */
    data: GithubAuthCreateManyInput | GithubAuthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GithubAuth update
   */
  export type GithubAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a GithubAuth.
     */
    data: XOR<GithubAuthUpdateInput, GithubAuthUncheckedUpdateInput>
    /**
     * Choose, which GithubAuth to update.
     */
    where: GithubAuthWhereUniqueInput
  }

  /**
   * GithubAuth updateMany
   */
  export type GithubAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GithubAuths.
     */
    data: XOR<GithubAuthUpdateManyMutationInput, GithubAuthUncheckedUpdateManyInput>
    /**
     * Filter which GithubAuths to update
     */
    where?: GithubAuthWhereInput
    /**
     * Limit how many GithubAuths to update.
     */
    limit?: number
  }

  /**
   * GithubAuth updateManyAndReturn
   */
  export type GithubAuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * The data used to update GithubAuths.
     */
    data: XOR<GithubAuthUpdateManyMutationInput, GithubAuthUncheckedUpdateManyInput>
    /**
     * Filter which GithubAuths to update
     */
    where?: GithubAuthWhereInput
    /**
     * Limit how many GithubAuths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GithubAuth upsert
   */
  export type GithubAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the GithubAuth to update in case it exists.
     */
    where: GithubAuthWhereUniqueInput
    /**
     * In case the GithubAuth found by the `where` argument doesn't exist, create a new GithubAuth with this data.
     */
    create: XOR<GithubAuthCreateInput, GithubAuthUncheckedCreateInput>
    /**
     * In case the GithubAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GithubAuthUpdateInput, GithubAuthUncheckedUpdateInput>
  }

  /**
   * GithubAuth delete
   */
  export type GithubAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
    /**
     * Filter which GithubAuth to delete.
     */
    where: GithubAuthWhereUniqueInput
  }

  /**
   * GithubAuth deleteMany
   */
  export type GithubAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GithubAuths to delete
     */
    where?: GithubAuthWhereInput
    /**
     * Limit how many GithubAuths to delete.
     */
    limit?: number
  }

  /**
   * GithubAuth without action
   */
  export type GithubAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GithubAuth
     */
    select?: GithubAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GithubAuth
     */
    omit?: GithubAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GithubAuthInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    auth_id: 'auth_id',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GithubAuthScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    github_user_id: 'github_user_id',
    github_username: 'github_username',
    github_avatar_url: 'github_avatar_url',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    token_type: 'token_type',
    expires_at: 'expires_at',
    refresh_expires_at: 'refresh_expires_at',
    scope: 'scope',
    installation_id: 'installation_id',
    installation_token_expires_at: 'installation_token_expires_at',
    permissions: 'permissions',
    repository_selection: 'repository_selection',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GithubAuthScalarFieldEnum = (typeof GithubAuthScalarFieldEnum)[keyof typeof GithubAuthScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'GithubAuthRepoSelection'
   */
  export type EnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GithubAuthRepoSelection'>
    


  /**
   * Reference to a field of type 'GithubAuthRepoSelection[]'
   */
  export type ListEnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GithubAuthRepoSelection[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    auth_id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    githubAuth?: XOR<GithubAuthNullableScalarRelationFilter, GithubAuthWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    githubAuth?: GithubAuthOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    auth_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    githubAuth?: XOR<GithubAuthNullableScalarRelationFilter, GithubAuthWhereInput> | null
  }, "id" | "auth_id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    auth_id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GithubAuthWhereInput = {
    AND?: GithubAuthWhereInput | GithubAuthWhereInput[]
    OR?: GithubAuthWhereInput[]
    NOT?: GithubAuthWhereInput | GithubAuthWhereInput[]
    id?: IntFilter<"GithubAuth"> | number
    user_id?: IntFilter<"GithubAuth"> | number
    github_user_id?: IntNullableFilter<"GithubAuth"> | number | null
    github_username?: StringNullableFilter<"GithubAuth"> | string | null
    github_avatar_url?: StringNullableFilter<"GithubAuth"> | string | null
    access_token?: StringFilter<"GithubAuth"> | string
    refresh_token?: StringFilter<"GithubAuth"> | string
    token_type?: StringFilter<"GithubAuth"> | string
    expires_at?: DateTimeFilter<"GithubAuth"> | Date | string
    refresh_expires_at?: DateTimeFilter<"GithubAuth"> | Date | string
    scope?: StringFilter<"GithubAuth"> | string
    installation_id?: StringFilter<"GithubAuth"> | string
    installation_token_expires_at?: DateTimeFilter<"GithubAuth"> | Date | string
    permissions?: JsonFilter<"GithubAuth">
    repository_selection?: EnumGithubAuthRepoSelectionFilter<"GithubAuth"> | $Enums.GithubAuthRepoSelection
    created_at?: DateTimeFilter<"GithubAuth"> | Date | string
    updated_at?: DateTimeFilter<"GithubAuth"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GithubAuthOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    github_user_id?: SortOrderInput | SortOrder
    github_username?: SortOrderInput | SortOrder
    github_avatar_url?: SortOrderInput | SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_type?: SortOrder
    expires_at?: SortOrder
    refresh_expires_at?: SortOrder
    scope?: SortOrder
    installation_id?: SortOrder
    installation_token_expires_at?: SortOrder
    permissions?: SortOrder
    repository_selection?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GithubAuthWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: GithubAuthWhereInput | GithubAuthWhereInput[]
    OR?: GithubAuthWhereInput[]
    NOT?: GithubAuthWhereInput | GithubAuthWhereInput[]
    github_user_id?: IntNullableFilter<"GithubAuth"> | number | null
    github_username?: StringNullableFilter<"GithubAuth"> | string | null
    github_avatar_url?: StringNullableFilter<"GithubAuth"> | string | null
    access_token?: StringFilter<"GithubAuth"> | string
    refresh_token?: StringFilter<"GithubAuth"> | string
    token_type?: StringFilter<"GithubAuth"> | string
    expires_at?: DateTimeFilter<"GithubAuth"> | Date | string
    refresh_expires_at?: DateTimeFilter<"GithubAuth"> | Date | string
    scope?: StringFilter<"GithubAuth"> | string
    installation_id?: StringFilter<"GithubAuth"> | string
    installation_token_expires_at?: DateTimeFilter<"GithubAuth"> | Date | string
    permissions?: JsonFilter<"GithubAuth">
    repository_selection?: EnumGithubAuthRepoSelectionFilter<"GithubAuth"> | $Enums.GithubAuthRepoSelection
    created_at?: DateTimeFilter<"GithubAuth"> | Date | string
    updated_at?: DateTimeFilter<"GithubAuth"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type GithubAuthOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    github_user_id?: SortOrderInput | SortOrder
    github_username?: SortOrderInput | SortOrder
    github_avatar_url?: SortOrderInput | SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_type?: SortOrder
    expires_at?: SortOrder
    refresh_expires_at?: SortOrder
    scope?: SortOrder
    installation_id?: SortOrder
    installation_token_expires_at?: SortOrder
    permissions?: SortOrder
    repository_selection?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: GithubAuthCountOrderByAggregateInput
    _avg?: GithubAuthAvgOrderByAggregateInput
    _max?: GithubAuthMaxOrderByAggregateInput
    _min?: GithubAuthMinOrderByAggregateInput
    _sum?: GithubAuthSumOrderByAggregateInput
  }

  export type GithubAuthScalarWhereWithAggregatesInput = {
    AND?: GithubAuthScalarWhereWithAggregatesInput | GithubAuthScalarWhereWithAggregatesInput[]
    OR?: GithubAuthScalarWhereWithAggregatesInput[]
    NOT?: GithubAuthScalarWhereWithAggregatesInput | GithubAuthScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GithubAuth"> | number
    user_id?: IntWithAggregatesFilter<"GithubAuth"> | number
    github_user_id?: IntNullableWithAggregatesFilter<"GithubAuth"> | number | null
    github_username?: StringNullableWithAggregatesFilter<"GithubAuth"> | string | null
    github_avatar_url?: StringNullableWithAggregatesFilter<"GithubAuth"> | string | null
    access_token?: StringWithAggregatesFilter<"GithubAuth"> | string
    refresh_token?: StringWithAggregatesFilter<"GithubAuth"> | string
    token_type?: StringWithAggregatesFilter<"GithubAuth"> | string
    expires_at?: DateTimeWithAggregatesFilter<"GithubAuth"> | Date | string
    refresh_expires_at?: DateTimeWithAggregatesFilter<"GithubAuth"> | Date | string
    scope?: StringWithAggregatesFilter<"GithubAuth"> | string
    installation_id?: StringWithAggregatesFilter<"GithubAuth"> | string
    installation_token_expires_at?: DateTimeWithAggregatesFilter<"GithubAuth"> | Date | string
    permissions?: JsonWithAggregatesFilter<"GithubAuth">
    repository_selection?: EnumGithubAuthRepoSelectionWithAggregatesFilter<"GithubAuth"> | $Enums.GithubAuthRepoSelection
    created_at?: DateTimeWithAggregatesFilter<"GithubAuth"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"GithubAuth"> | Date | string
  }

  export type UserCreateInput = {
    auth_id: string
    email: string
    first_name?: string | null
    last_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    githubAuth?: GithubAuthCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    auth_id: string
    email: string
    first_name?: string | null
    last_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    githubAuth?: GithubAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    githubAuth?: GithubAuthUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    githubAuth?: GithubAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    auth_id: string
    email: string
    first_name?: string | null
    last_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GithubAuthCreateInput = {
    github_user_id?: number | null
    github_username?: string | null
    github_avatar_url?: string | null
    access_token: string
    refresh_token: string
    token_type: string
    expires_at: Date | string
    refresh_expires_at: Date | string
    scope: string
    installation_id: string
    installation_token_expires_at: Date | string
    permissions: JsonNullValueInput | InputJsonValue
    repository_selection: $Enums.GithubAuthRepoSelection
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutGithubAuthInput
  }

  export type GithubAuthUncheckedCreateInput = {
    id?: number
    user_id: number
    github_user_id?: number | null
    github_username?: string | null
    github_avatar_url?: string | null
    access_token: string
    refresh_token: string
    token_type: string
    expires_at: Date | string
    refresh_expires_at: Date | string
    scope: string
    installation_id: string
    installation_token_expires_at: Date | string
    permissions: JsonNullValueInput | InputJsonValue
    repository_selection: $Enums.GithubAuthRepoSelection
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GithubAuthUpdateInput = {
    github_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    github_username?: NullableStringFieldUpdateOperationsInput | string | null
    github_avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_type?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    installation_id?: StringFieldUpdateOperationsInput | string
    installation_token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: JsonNullValueInput | InputJsonValue
    repository_selection?: EnumGithubAuthRepoSelectionFieldUpdateOperationsInput | $Enums.GithubAuthRepoSelection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGithubAuthNestedInput
  }

  export type GithubAuthUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    github_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    github_username?: NullableStringFieldUpdateOperationsInput | string | null
    github_avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_type?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    installation_id?: StringFieldUpdateOperationsInput | string
    installation_token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: JsonNullValueInput | InputJsonValue
    repository_selection?: EnumGithubAuthRepoSelectionFieldUpdateOperationsInput | $Enums.GithubAuthRepoSelection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GithubAuthCreateManyInput = {
    id?: number
    user_id: number
    github_user_id?: number | null
    github_username?: string | null
    github_avatar_url?: string | null
    access_token: string
    refresh_token: string
    token_type: string
    expires_at: Date | string
    refresh_expires_at: Date | string
    scope: string
    installation_id: string
    installation_token_expires_at: Date | string
    permissions: JsonNullValueInput | InputJsonValue
    repository_selection: $Enums.GithubAuthRepoSelection
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GithubAuthUpdateManyMutationInput = {
    github_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    github_username?: NullableStringFieldUpdateOperationsInput | string | null
    github_avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_type?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    installation_id?: StringFieldUpdateOperationsInput | string
    installation_token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: JsonNullValueInput | InputJsonValue
    repository_selection?: EnumGithubAuthRepoSelectionFieldUpdateOperationsInput | $Enums.GithubAuthRepoSelection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GithubAuthUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    github_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    github_username?: NullableStringFieldUpdateOperationsInput | string | null
    github_avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_type?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    installation_id?: StringFieldUpdateOperationsInput | string
    installation_token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: JsonNullValueInput | InputJsonValue
    repository_selection?: EnumGithubAuthRepoSelectionFieldUpdateOperationsInput | $Enums.GithubAuthRepoSelection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GithubAuthNullableScalarRelationFilter = {
    is?: GithubAuthWhereInput | null
    isNot?: GithubAuthWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumGithubAuthRepoSelectionFilter<$PrismaModel = never> = {
    equals?: $Enums.GithubAuthRepoSelection | EnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    in?: $Enums.GithubAuthRepoSelection[] | ListEnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.GithubAuthRepoSelection[] | ListEnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    not?: NestedEnumGithubAuthRepoSelectionFilter<$PrismaModel> | $Enums.GithubAuthRepoSelection
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GithubAuthCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    github_user_id?: SortOrder
    github_username?: SortOrder
    github_avatar_url?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_type?: SortOrder
    expires_at?: SortOrder
    refresh_expires_at?: SortOrder
    scope?: SortOrder
    installation_id?: SortOrder
    installation_token_expires_at?: SortOrder
    permissions?: SortOrder
    repository_selection?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GithubAuthAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    github_user_id?: SortOrder
  }

  export type GithubAuthMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    github_user_id?: SortOrder
    github_username?: SortOrder
    github_avatar_url?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_type?: SortOrder
    expires_at?: SortOrder
    refresh_expires_at?: SortOrder
    scope?: SortOrder
    installation_id?: SortOrder
    installation_token_expires_at?: SortOrder
    repository_selection?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GithubAuthMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    github_user_id?: SortOrder
    github_username?: SortOrder
    github_avatar_url?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    token_type?: SortOrder
    expires_at?: SortOrder
    refresh_expires_at?: SortOrder
    scope?: SortOrder
    installation_id?: SortOrder
    installation_token_expires_at?: SortOrder
    repository_selection?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type GithubAuthSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    github_user_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumGithubAuthRepoSelectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GithubAuthRepoSelection | EnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    in?: $Enums.GithubAuthRepoSelection[] | ListEnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.GithubAuthRepoSelection[] | ListEnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    not?: NestedEnumGithubAuthRepoSelectionWithAggregatesFilter<$PrismaModel> | $Enums.GithubAuthRepoSelection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGithubAuthRepoSelectionFilter<$PrismaModel>
    _max?: NestedEnumGithubAuthRepoSelectionFilter<$PrismaModel>
  }

  export type GithubAuthCreateNestedOneWithoutUserInput = {
    create?: XOR<GithubAuthCreateWithoutUserInput, GithubAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: GithubAuthCreateOrConnectWithoutUserInput
    connect?: GithubAuthWhereUniqueInput
  }

  export type GithubAuthUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GithubAuthCreateWithoutUserInput, GithubAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: GithubAuthCreateOrConnectWithoutUserInput
    connect?: GithubAuthWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GithubAuthUpdateOneWithoutUserNestedInput = {
    create?: XOR<GithubAuthCreateWithoutUserInput, GithubAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: GithubAuthCreateOrConnectWithoutUserInput
    upsert?: GithubAuthUpsertWithoutUserInput
    disconnect?: GithubAuthWhereInput | boolean
    delete?: GithubAuthWhereInput | boolean
    connect?: GithubAuthWhereUniqueInput
    update?: XOR<XOR<GithubAuthUpdateToOneWithWhereWithoutUserInput, GithubAuthUpdateWithoutUserInput>, GithubAuthUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GithubAuthUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GithubAuthCreateWithoutUserInput, GithubAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: GithubAuthCreateOrConnectWithoutUserInput
    upsert?: GithubAuthUpsertWithoutUserInput
    disconnect?: GithubAuthWhereInput | boolean
    delete?: GithubAuthWhereInput | boolean
    connect?: GithubAuthWhereUniqueInput
    update?: XOR<XOR<GithubAuthUpdateToOneWithWhereWithoutUserInput, GithubAuthUpdateWithoutUserInput>, GithubAuthUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutGithubAuthInput = {
    create?: XOR<UserCreateWithoutGithubAuthInput, UserUncheckedCreateWithoutGithubAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutGithubAuthInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGithubAuthRepoSelectionFieldUpdateOperationsInput = {
    set?: $Enums.GithubAuthRepoSelection
  }

  export type UserUpdateOneRequiredWithoutGithubAuthNestedInput = {
    create?: XOR<UserCreateWithoutGithubAuthInput, UserUncheckedCreateWithoutGithubAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutGithubAuthInput
    upsert?: UserUpsertWithoutGithubAuthInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGithubAuthInput, UserUpdateWithoutGithubAuthInput>, UserUncheckedUpdateWithoutGithubAuthInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGithubAuthRepoSelectionFilter<$PrismaModel = never> = {
    equals?: $Enums.GithubAuthRepoSelection | EnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    in?: $Enums.GithubAuthRepoSelection[] | ListEnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.GithubAuthRepoSelection[] | ListEnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    not?: NestedEnumGithubAuthRepoSelectionFilter<$PrismaModel> | $Enums.GithubAuthRepoSelection
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumGithubAuthRepoSelectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GithubAuthRepoSelection | EnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    in?: $Enums.GithubAuthRepoSelection[] | ListEnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.GithubAuthRepoSelection[] | ListEnumGithubAuthRepoSelectionFieldRefInput<$PrismaModel>
    not?: NestedEnumGithubAuthRepoSelectionWithAggregatesFilter<$PrismaModel> | $Enums.GithubAuthRepoSelection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGithubAuthRepoSelectionFilter<$PrismaModel>
    _max?: NestedEnumGithubAuthRepoSelectionFilter<$PrismaModel>
  }

  export type GithubAuthCreateWithoutUserInput = {
    github_user_id?: number | null
    github_username?: string | null
    github_avatar_url?: string | null
    access_token: string
    refresh_token: string
    token_type: string
    expires_at: Date | string
    refresh_expires_at: Date | string
    scope: string
    installation_id: string
    installation_token_expires_at: Date | string
    permissions: JsonNullValueInput | InputJsonValue
    repository_selection: $Enums.GithubAuthRepoSelection
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GithubAuthUncheckedCreateWithoutUserInput = {
    id?: number
    github_user_id?: number | null
    github_username?: string | null
    github_avatar_url?: string | null
    access_token: string
    refresh_token: string
    token_type: string
    expires_at: Date | string
    refresh_expires_at: Date | string
    scope: string
    installation_id: string
    installation_token_expires_at: Date | string
    permissions: JsonNullValueInput | InputJsonValue
    repository_selection: $Enums.GithubAuthRepoSelection
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type GithubAuthCreateOrConnectWithoutUserInput = {
    where: GithubAuthWhereUniqueInput
    create: XOR<GithubAuthCreateWithoutUserInput, GithubAuthUncheckedCreateWithoutUserInput>
  }

  export type GithubAuthUpsertWithoutUserInput = {
    update: XOR<GithubAuthUpdateWithoutUserInput, GithubAuthUncheckedUpdateWithoutUserInput>
    create: XOR<GithubAuthCreateWithoutUserInput, GithubAuthUncheckedCreateWithoutUserInput>
    where?: GithubAuthWhereInput
  }

  export type GithubAuthUpdateToOneWithWhereWithoutUserInput = {
    where?: GithubAuthWhereInput
    data: XOR<GithubAuthUpdateWithoutUserInput, GithubAuthUncheckedUpdateWithoutUserInput>
  }

  export type GithubAuthUpdateWithoutUserInput = {
    github_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    github_username?: NullableStringFieldUpdateOperationsInput | string | null
    github_avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_type?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    installation_id?: StringFieldUpdateOperationsInput | string
    installation_token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: JsonNullValueInput | InputJsonValue
    repository_selection?: EnumGithubAuthRepoSelectionFieldUpdateOperationsInput | $Enums.GithubAuthRepoSelection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GithubAuthUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    github_user_id?: NullableIntFieldUpdateOperationsInput | number | null
    github_username?: NullableStringFieldUpdateOperationsInput | string | null
    github_avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    token_type?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    refresh_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: StringFieldUpdateOperationsInput | string
    installation_id?: StringFieldUpdateOperationsInput | string
    installation_token_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: JsonNullValueInput | InputJsonValue
    repository_selection?: EnumGithubAuthRepoSelectionFieldUpdateOperationsInput | $Enums.GithubAuthRepoSelection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutGithubAuthInput = {
    auth_id: string
    email: string
    first_name?: string | null
    last_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutGithubAuthInput = {
    id?: number
    auth_id: string
    email: string
    first_name?: string | null
    last_name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutGithubAuthInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGithubAuthInput, UserUncheckedCreateWithoutGithubAuthInput>
  }

  export type UserUpsertWithoutGithubAuthInput = {
    update: XOR<UserUpdateWithoutGithubAuthInput, UserUncheckedUpdateWithoutGithubAuthInput>
    create: XOR<UserCreateWithoutGithubAuthInput, UserUncheckedCreateWithoutGithubAuthInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGithubAuthInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGithubAuthInput, UserUncheckedUpdateWithoutGithubAuthInput>
  }

  export type UserUpdateWithoutGithubAuthInput = {
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutGithubAuthInput = {
    id?: IntFieldUpdateOperationsInput | number
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}