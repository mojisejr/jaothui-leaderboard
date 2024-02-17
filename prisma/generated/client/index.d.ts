
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model EventRegister
 * 
 */
export type EventRegister = $Result.DefaultSelection<Prisma.$EventRegisterPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Commitee
 * 
 */
export type Commitee = $Result.DefaultSelection<Prisma.$CommiteePayload>
/**
 * Model Buffalo
 * 
 */
export type Buffalo = $Result.DefaultSelection<Prisma.$BuffaloPayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>
/**
 * Model Competition
 * 
 */
export type Competition = $Result.DefaultSelection<Prisma.$CompetitionPayload>
/**
 * Model Score
 * 
 */
export type Score = $Result.DefaultSelection<Prisma.$ScorePayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.eventRegister`: Exposes CRUD operations for the **EventRegister** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventRegisters
    * const eventRegisters = await prisma.eventRegister.findMany()
    * ```
    */
  get eventRegister(): Prisma.EventRegisterDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.commitee`: Exposes CRUD operations for the **Commitee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commitees
    * const commitees = await prisma.commitee.findMany()
    * ```
    */
  get commitee(): Prisma.CommiteeDelegate<ExtArgs>;

  /**
   * `prisma.buffalo`: Exposes CRUD operations for the **Buffalo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buffalo
    * const buffalo = await prisma.buffalo.findMany()
    * ```
    */
  get buffalo(): Prisma.BuffaloDelegate<ExtArgs>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs>;

  /**
   * `prisma.competition`: Exposes CRUD operations for the **Competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.CompetitionDelegate<ExtArgs>;

  /**
   * `prisma.score`: Exposes CRUD operations for the **Score** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.score.findMany()
    * ```
    */
  get score(): Prisma.ScoreDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    EventRegister: 'EventRegister',
    Event: 'Event',
    Commitee: 'Commitee',
    Buffalo: 'Buffalo',
    Type: 'Type',
    Competition: 'Competition',
    Score: 'Score'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'eventRegister' | 'event' | 'commitee' | 'buffalo' | 'type' | 'competition' | 'score'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EventRegister: {
        payload: Prisma.$EventRegisterPayload<ExtArgs>
        fields: Prisma.EventRegisterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventRegisterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventRegisterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventRegisterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventRegisterPayload>
          }
          findFirst: {
            args: Prisma.EventRegisterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventRegisterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventRegisterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventRegisterPayload>
          }
          findMany: {
            args: Prisma.EventRegisterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventRegisterPayload>[]
          }
          create: {
            args: Prisma.EventRegisterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventRegisterPayload>
          }
          createMany: {
            args: Prisma.EventRegisterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EventRegisterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventRegisterPayload>
          }
          update: {
            args: Prisma.EventRegisterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventRegisterPayload>
          }
          deleteMany: {
            args: Prisma.EventRegisterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EventRegisterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EventRegisterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventRegisterPayload>
          }
          aggregate: {
            args: Prisma.EventRegisterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEventRegister>
          }
          groupBy: {
            args: Prisma.EventRegisterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventRegisterGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventRegisterCountArgs<ExtArgs>,
            result: $Utils.Optional<EventRegisterCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>,
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Commitee: {
        payload: Prisma.$CommiteePayload<ExtArgs>
        fields: Prisma.CommiteeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommiteeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommiteePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommiteeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommiteePayload>
          }
          findFirst: {
            args: Prisma.CommiteeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommiteePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommiteeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommiteePayload>
          }
          findMany: {
            args: Prisma.CommiteeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommiteePayload>[]
          }
          create: {
            args: Prisma.CommiteeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommiteePayload>
          }
          createMany: {
            args: Prisma.CommiteeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommiteeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommiteePayload>
          }
          update: {
            args: Prisma.CommiteeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommiteePayload>
          }
          deleteMany: {
            args: Prisma.CommiteeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommiteeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommiteeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommiteePayload>
          }
          aggregate: {
            args: Prisma.CommiteeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommitee>
          }
          groupBy: {
            args: Prisma.CommiteeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommiteeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommiteeCountArgs<ExtArgs>,
            result: $Utils.Optional<CommiteeCountAggregateOutputType> | number
          }
        }
      }
      Buffalo: {
        payload: Prisma.$BuffaloPayload<ExtArgs>
        fields: Prisma.BuffaloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuffaloFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuffaloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuffaloFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuffaloPayload>
          }
          findFirst: {
            args: Prisma.BuffaloFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuffaloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuffaloFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuffaloPayload>
          }
          findMany: {
            args: Prisma.BuffaloFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuffaloPayload>[]
          }
          create: {
            args: Prisma.BuffaloCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuffaloPayload>
          }
          createMany: {
            args: Prisma.BuffaloCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BuffaloDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuffaloPayload>
          }
          update: {
            args: Prisma.BuffaloUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuffaloPayload>
          }
          deleteMany: {
            args: Prisma.BuffaloDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BuffaloUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BuffaloUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuffaloPayload>
          }
          aggregate: {
            args: Prisma.BuffaloAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBuffalo>
          }
          groupBy: {
            args: Prisma.BuffaloGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BuffaloGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuffaloCountArgs<ExtArgs>,
            result: $Utils.Optional<BuffaloCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>,
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      Competition: {
        payload: Prisma.$CompetitionPayload<ExtArgs>
        fields: Prisma.CompetitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findFirst: {
            args: Prisma.CompetitionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findMany: {
            args: Prisma.CompetitionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          create: {
            args: Prisma.CompetitionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          createMany: {
            args: Prisma.CompetitionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompetitionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          update: {
            args: Prisma.CompetitionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompetitionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          aggregate: {
            args: Prisma.CompetitionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompetition>
          }
          groupBy: {
            args: Prisma.CompetitionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionCountArgs<ExtArgs>,
            result: $Utils.Optional<CompetitionCountAggregateOutputType> | number
          }
        }
      }
      Score: {
        payload: Prisma.$ScorePayload<ExtArgs>
        fields: Prisma.ScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findFirst: {
            args: Prisma.ScoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findMany: {
            args: Prisma.ScoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          create: {
            args: Prisma.ScoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          createMany: {
            args: Prisma.ScoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ScoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          update: {
            args: Prisma.ScoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          deleteMany: {
            args: Prisma.ScoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          aggregate: {
            args: Prisma.ScoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScore>
          }
          groupBy: {
            args: Prisma.ScoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreCountArgs<ExtArgs>,
            result: $Utils.Optional<ScoreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    EventRegister: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventRegister?: boolean | UserCountOutputTypeCountEventRegisterArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegisterWhereInput
  }



  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    EventRegister: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventRegister?: boolean | EventCountOutputTypeCountEventRegisterArgs
  }

  // Custom InputTypes

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegisterWhereInput
  }



  /**
   * Count Type CommiteeCountOutputType
   */

  export type CommiteeCountOutputType = {
    Score: number
  }

  export type CommiteeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Score?: boolean | CommiteeCountOutputTypeCountScoreArgs
  }

  // Custom InputTypes

  /**
   * CommiteeCountOutputType without action
   */
  export type CommiteeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommiteeCountOutputType
     */
    select?: CommiteeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommiteeCountOutputType without action
   */
  export type CommiteeCountOutputTypeCountScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }



  /**
   * Count Type BuffaloCountOutputType
   */

  export type BuffaloCountOutputType = {
    Score: number
  }

  export type BuffaloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Score?: boolean | BuffaloCountOutputTypeCountScoreArgs
  }

  // Custom InputTypes

  /**
   * BuffaloCountOutputType without action
   */
  export type BuffaloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuffaloCountOutputType
     */
    select?: BuffaloCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BuffaloCountOutputType without action
   */
  export type BuffaloCountOutputTypeCountScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }



  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    Buffalo: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Buffalo?: boolean | TypeCountOutputTypeCountBuffaloArgs
  }

  // Custom InputTypes

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountBuffaloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuffaloWhereInput
  }



  /**
   * Count Type CompetitionCountOutputType
   */

  export type CompetitionCountOutputType = {
    Score: number
  }

  export type CompetitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Score?: boolean | CompetitionCountOutputTypeCountScoreArgs
  }

  // Custom InputTypes

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCountOutputType
     */
    select?: CompetitionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    name: string | null
    email: string | null
    tel: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    name: string | null
    email: string | null
    tel: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    name: number
    email: number
    tel: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    tel?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    tel?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    tel?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    name: string
    email: string | null
    tel: string
    role: string
    _count: UserCountAggregateOutputType | null
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
    userId?: boolean
    name?: boolean
    email?: boolean
    tel?: boolean
    role?: boolean
    EventRegister?: boolean | User$EventRegisterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    name?: boolean
    email?: boolean
    tel?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventRegister?: boolean | User$EventRegisterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      EventRegister: Prisma.$EventRegisterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      name: string
      email: string | null
      tel: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    EventRegister<T extends User$EventRegisterArgs<ExtArgs> = {}>(args?: Subset<T, User$EventRegisterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly tel: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.EventRegister
   */
  export type User$EventRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    where?: EventRegisterWhereInput
    orderBy?: EventRegisterOrderByWithRelationInput | EventRegisterOrderByWithRelationInput[]
    cursor?: EventRegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRegisterScalarFieldEnum | EventRegisterScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model EventRegister
   */

  export type AggregateEventRegister = {
    _count: EventRegisterCountAggregateOutputType | null
    _avg: EventRegisterAvgAggregateOutputType | null
    _sum: EventRegisterSumAggregateOutputType | null
    _min: EventRegisterMinAggregateOutputType | null
    _max: EventRegisterMaxAggregateOutputType | null
  }

  export type EventRegisterAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type EventRegisterSumAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type EventRegisterMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    type: string | null
    level: string | null
    name: string | null
    gender: string | null
    color: string | null
    birthday: string | null
    microchip: string | null
    imageUrl: string | null
    vaccineUrl: string | null
    ownerName: string | null
    ownerTel: string | null
    userId: string | null
  }

  export type EventRegisterMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    type: string | null
    level: string | null
    name: string | null
    gender: string | null
    color: string | null
    birthday: string | null
    microchip: string | null
    imageUrl: string | null
    vaccineUrl: string | null
    ownerName: string | null
    ownerTel: string | null
    userId: string | null
  }

  export type EventRegisterCountAggregateOutputType = {
    id: number
    eventId: number
    type: number
    level: number
    name: number
    gender: number
    color: number
    birthday: number
    microchip: number
    imageUrl: number
    vaccineUrl: number
    ownerName: number
    ownerTel: number
    userId: number
    metadata: number
    _all: number
  }


  export type EventRegisterAvgAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type EventRegisterSumAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type EventRegisterMinAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    level?: true
    name?: true
    gender?: true
    color?: true
    birthday?: true
    microchip?: true
    imageUrl?: true
    vaccineUrl?: true
    ownerName?: true
    ownerTel?: true
    userId?: true
  }

  export type EventRegisterMaxAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    level?: true
    name?: true
    gender?: true
    color?: true
    birthday?: true
    microchip?: true
    imageUrl?: true
    vaccineUrl?: true
    ownerName?: true
    ownerTel?: true
    userId?: true
  }

  export type EventRegisterCountAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    level?: true
    name?: true
    gender?: true
    color?: true
    birthday?: true
    microchip?: true
    imageUrl?: true
    vaccineUrl?: true
    ownerName?: true
    ownerTel?: true
    userId?: true
    metadata?: true
    _all?: true
  }

  export type EventRegisterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRegister to aggregate.
     */
    where?: EventRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegisters to fetch.
     */
    orderBy?: EventRegisterOrderByWithRelationInput | EventRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventRegisters
    **/
    _count?: true | EventRegisterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventRegisterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventRegisterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventRegisterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventRegisterMaxAggregateInputType
  }

  export type GetEventRegisterAggregateType<T extends EventRegisterAggregateArgs> = {
        [P in keyof T & keyof AggregateEventRegister]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventRegister[P]>
      : GetScalarType<T[P], AggregateEventRegister[P]>
  }




  export type EventRegisterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRegisterWhereInput
    orderBy?: EventRegisterOrderByWithAggregationInput | EventRegisterOrderByWithAggregationInput[]
    by: EventRegisterScalarFieldEnum[] | EventRegisterScalarFieldEnum
    having?: EventRegisterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventRegisterCountAggregateInputType | true
    _avg?: EventRegisterAvgAggregateInputType
    _sum?: EventRegisterSumAggregateInputType
    _min?: EventRegisterMinAggregateInputType
    _max?: EventRegisterMaxAggregateInputType
  }

  export type EventRegisterGroupByOutputType = {
    id: number
    eventId: number
    type: string
    level: string
    name: string
    gender: string
    color: string
    birthday: string
    microchip: string
    imageUrl: string
    vaccineUrl: string
    ownerName: string
    ownerTel: string
    userId: string
    metadata: string[]
    _count: EventRegisterCountAggregateOutputType | null
    _avg: EventRegisterAvgAggregateOutputType | null
    _sum: EventRegisterSumAggregateOutputType | null
    _min: EventRegisterMinAggregateOutputType | null
    _max: EventRegisterMaxAggregateOutputType | null
  }

  type GetEventRegisterGroupByPayload<T extends EventRegisterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventRegisterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventRegisterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventRegisterGroupByOutputType[P]>
            : GetScalarType<T[P], EventRegisterGroupByOutputType[P]>
        }
      >
    >


  export type EventRegisterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    level?: boolean
    name?: boolean
    gender?: boolean
    color?: boolean
    birthday?: boolean
    microchip?: boolean
    imageUrl?: boolean
    vaccineUrl?: boolean
    ownerName?: boolean
    ownerTel?: boolean
    userId?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRegister"]>

  export type EventRegisterSelectScalar = {
    id?: boolean
    eventId?: boolean
    type?: boolean
    level?: boolean
    name?: boolean
    gender?: boolean
    color?: boolean
    birthday?: boolean
    microchip?: boolean
    imageUrl?: boolean
    vaccineUrl?: boolean
    ownerName?: boolean
    ownerTel?: boolean
    userId?: boolean
    metadata?: boolean
  }

  export type EventRegisterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }


  export type $EventRegisterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventRegister"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      type: string
      level: string
      name: string
      gender: string
      color: string
      birthday: string
      microchip: string
      imageUrl: string
      vaccineUrl: string
      ownerName: string
      ownerTel: string
      userId: string
      metadata: string[]
    }, ExtArgs["result"]["eventRegister"]>
    composites: {}
  }


  type EventRegisterGetPayload<S extends boolean | null | undefined | EventRegisterDefaultArgs> = $Result.GetResult<Prisma.$EventRegisterPayload, S>

  type EventRegisterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventRegisterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventRegisterCountAggregateInputType | true
    }

  export interface EventRegisterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventRegister'], meta: { name: 'EventRegister' } }
    /**
     * Find zero or one EventRegister that matches the filter.
     * @param {EventRegisterFindUniqueArgs} args - Arguments to find a EventRegister
     * @example
     * // Get one EventRegister
     * const eventRegister = await prisma.eventRegister.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventRegisterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventRegisterFindUniqueArgs<ExtArgs>>
    ): Prisma__EventRegisterClient<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EventRegister that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventRegisterFindUniqueOrThrowArgs} args - Arguments to find a EventRegister
     * @example
     * // Get one EventRegister
     * const eventRegister = await prisma.eventRegister.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventRegisterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventRegisterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventRegisterClient<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EventRegister that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegisterFindFirstArgs} args - Arguments to find a EventRegister
     * @example
     * // Get one EventRegister
     * const eventRegister = await prisma.eventRegister.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventRegisterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventRegisterFindFirstArgs<ExtArgs>>
    ): Prisma__EventRegisterClient<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EventRegister that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegisterFindFirstOrThrowArgs} args - Arguments to find a EventRegister
     * @example
     * // Get one EventRegister
     * const eventRegister = await prisma.eventRegister.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventRegisterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventRegisterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventRegisterClient<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EventRegisters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegisterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventRegisters
     * const eventRegisters = await prisma.eventRegister.findMany()
     * 
     * // Get first 10 EventRegisters
     * const eventRegisters = await prisma.eventRegister.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventRegisterWithIdOnly = await prisma.eventRegister.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventRegisterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventRegisterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EventRegister.
     * @param {EventRegisterCreateArgs} args - Arguments to create a EventRegister.
     * @example
     * // Create one EventRegister
     * const EventRegister = await prisma.eventRegister.create({
     *   data: {
     *     // ... data to create a EventRegister
     *   }
     * })
     * 
    **/
    create<T extends EventRegisterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventRegisterCreateArgs<ExtArgs>>
    ): Prisma__EventRegisterClient<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EventRegisters.
     *     @param {EventRegisterCreateManyArgs} args - Arguments to create many EventRegisters.
     *     @example
     *     // Create many EventRegisters
     *     const eventRegister = await prisma.eventRegister.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventRegisterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventRegisterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventRegister.
     * @param {EventRegisterDeleteArgs} args - Arguments to delete one EventRegister.
     * @example
     * // Delete one EventRegister
     * const EventRegister = await prisma.eventRegister.delete({
     *   where: {
     *     // ... filter to delete one EventRegister
     *   }
     * })
     * 
    **/
    delete<T extends EventRegisterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventRegisterDeleteArgs<ExtArgs>>
    ): Prisma__EventRegisterClient<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EventRegister.
     * @param {EventRegisterUpdateArgs} args - Arguments to update one EventRegister.
     * @example
     * // Update one EventRegister
     * const eventRegister = await prisma.eventRegister.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventRegisterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventRegisterUpdateArgs<ExtArgs>>
    ): Prisma__EventRegisterClient<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EventRegisters.
     * @param {EventRegisterDeleteManyArgs} args - Arguments to filter EventRegisters to delete.
     * @example
     * // Delete a few EventRegisters
     * const { count } = await prisma.eventRegister.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventRegisterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventRegisterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventRegisters
     * const eventRegister = await prisma.eventRegister.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventRegisterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventRegisterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventRegister.
     * @param {EventRegisterUpsertArgs} args - Arguments to update or create a EventRegister.
     * @example
     * // Update or create a EventRegister
     * const eventRegister = await prisma.eventRegister.upsert({
     *   create: {
     *     // ... data to create a EventRegister
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventRegister we want to update
     *   }
     * })
    **/
    upsert<T extends EventRegisterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventRegisterUpsertArgs<ExtArgs>>
    ): Prisma__EventRegisterClient<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EventRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegisterCountArgs} args - Arguments to filter EventRegisters to count.
     * @example
     * // Count the number of EventRegisters
     * const count = await prisma.eventRegister.count({
     *   where: {
     *     // ... the filter for the EventRegisters we want to count
     *   }
     * })
    **/
    count<T extends EventRegisterCountArgs>(
      args?: Subset<T, EventRegisterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventRegisterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventRegisterAggregateArgs>(args: Subset<T, EventRegisterAggregateArgs>): Prisma.PrismaPromise<GetEventRegisterAggregateType<T>>

    /**
     * Group by EventRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRegisterGroupByArgs} args - Group by arguments.
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
      T extends EventRegisterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventRegisterGroupByArgs['orderBy'] }
        : { orderBy?: EventRegisterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventRegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventRegister model
   */
  readonly fields: EventRegisterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventRegister.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventRegisterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EventRegister model
   */ 
  interface EventRegisterFieldRefs {
    readonly id: FieldRef<"EventRegister", 'Int'>
    readonly eventId: FieldRef<"EventRegister", 'Int'>
    readonly type: FieldRef<"EventRegister", 'String'>
    readonly level: FieldRef<"EventRegister", 'String'>
    readonly name: FieldRef<"EventRegister", 'String'>
    readonly gender: FieldRef<"EventRegister", 'String'>
    readonly color: FieldRef<"EventRegister", 'String'>
    readonly birthday: FieldRef<"EventRegister", 'String'>
    readonly microchip: FieldRef<"EventRegister", 'String'>
    readonly imageUrl: FieldRef<"EventRegister", 'String'>
    readonly vaccineUrl: FieldRef<"EventRegister", 'String'>
    readonly ownerName: FieldRef<"EventRegister", 'String'>
    readonly ownerTel: FieldRef<"EventRegister", 'String'>
    readonly userId: FieldRef<"EventRegister", 'String'>
    readonly metadata: FieldRef<"EventRegister", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * EventRegister findUnique
   */
  export type EventRegisterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    /**
     * Filter, which EventRegister to fetch.
     */
    where: EventRegisterWhereUniqueInput
  }


  /**
   * EventRegister findUniqueOrThrow
   */
  export type EventRegisterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    /**
     * Filter, which EventRegister to fetch.
     */
    where: EventRegisterWhereUniqueInput
  }


  /**
   * EventRegister findFirst
   */
  export type EventRegisterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    /**
     * Filter, which EventRegister to fetch.
     */
    where?: EventRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegisters to fetch.
     */
    orderBy?: EventRegisterOrderByWithRelationInput | EventRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRegisters.
     */
    cursor?: EventRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRegisters.
     */
    distinct?: EventRegisterScalarFieldEnum | EventRegisterScalarFieldEnum[]
  }


  /**
   * EventRegister findFirstOrThrow
   */
  export type EventRegisterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    /**
     * Filter, which EventRegister to fetch.
     */
    where?: EventRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegisters to fetch.
     */
    orderBy?: EventRegisterOrderByWithRelationInput | EventRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRegisters.
     */
    cursor?: EventRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRegisters.
     */
    distinct?: EventRegisterScalarFieldEnum | EventRegisterScalarFieldEnum[]
  }


  /**
   * EventRegister findMany
   */
  export type EventRegisterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    /**
     * Filter, which EventRegisters to fetch.
     */
    where?: EventRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRegisters to fetch.
     */
    orderBy?: EventRegisterOrderByWithRelationInput | EventRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventRegisters.
     */
    cursor?: EventRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRegisters.
     */
    skip?: number
    distinct?: EventRegisterScalarFieldEnum | EventRegisterScalarFieldEnum[]
  }


  /**
   * EventRegister create
   */
  export type EventRegisterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    /**
     * The data needed to create a EventRegister.
     */
    data: XOR<EventRegisterCreateInput, EventRegisterUncheckedCreateInput>
  }


  /**
   * EventRegister createMany
   */
  export type EventRegisterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventRegisters.
     */
    data: EventRegisterCreateManyInput | EventRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EventRegister update
   */
  export type EventRegisterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    /**
     * The data needed to update a EventRegister.
     */
    data: XOR<EventRegisterUpdateInput, EventRegisterUncheckedUpdateInput>
    /**
     * Choose, which EventRegister to update.
     */
    where: EventRegisterWhereUniqueInput
  }


  /**
   * EventRegister updateMany
   */
  export type EventRegisterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventRegisters.
     */
    data: XOR<EventRegisterUpdateManyMutationInput, EventRegisterUncheckedUpdateManyInput>
    /**
     * Filter which EventRegisters to update
     */
    where?: EventRegisterWhereInput
  }


  /**
   * EventRegister upsert
   */
  export type EventRegisterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    /**
     * The filter to search for the EventRegister to update in case it exists.
     */
    where: EventRegisterWhereUniqueInput
    /**
     * In case the EventRegister found by the `where` argument doesn't exist, create a new EventRegister with this data.
     */
    create: XOR<EventRegisterCreateInput, EventRegisterUncheckedCreateInput>
    /**
     * In case the EventRegister was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventRegisterUpdateInput, EventRegisterUncheckedUpdateInput>
  }


  /**
   * EventRegister delete
   */
  export type EventRegisterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    /**
     * Filter which EventRegister to delete.
     */
    where: EventRegisterWhereUniqueInput
  }


  /**
   * EventRegister deleteMany
   */
  export type EventRegisterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRegisters to delete
     */
    where?: EventRegisterWhereInput
  }


  /**
   * EventRegister without action
   */
  export type EventRegisterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
  }



  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startAt: Date | null
    endAt: Date | null
    eventAt: Date | null
    location: string | null
    facebook: string | null
    twitter: string | null
    website: string | null
    isActive: boolean | null
    imageUrl: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startAt: Date | null
    endAt: Date | null
    eventAt: Date | null
    location: string | null
    facebook: string | null
    twitter: string | null
    website: string | null
    isActive: boolean | null
    imageUrl: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startAt: number
    endAt: number
    eventAt: number
    location: number
    facebook: number
    twitter: number
    website: number
    isActive: number
    imageUrl: number
    metadata: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startAt?: true
    endAt?: true
    eventAt?: true
    location?: true
    facebook?: true
    twitter?: true
    website?: true
    isActive?: true
    imageUrl?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startAt?: true
    endAt?: true
    eventAt?: true
    location?: true
    facebook?: true
    twitter?: true
    website?: true
    isActive?: true
    imageUrl?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startAt?: true
    endAt?: true
    eventAt?: true
    location?: true
    facebook?: true
    twitter?: true
    website?: true
    isActive?: true
    imageUrl?: true
    metadata?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    name: string
    description: string
    startAt: Date
    endAt: Date
    eventAt: Date
    location: string | null
    facebook: string | null
    twitter: string | null
    website: string | null
    isActive: boolean
    imageUrl: string | null
    metadata: string[]
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    eventAt?: boolean
    location?: boolean
    facebook?: boolean
    twitter?: boolean
    website?: boolean
    isActive?: boolean
    imageUrl?: boolean
    metadata?: boolean
    EventRegister?: boolean | Event$EventRegisterArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    eventAt?: boolean
    location?: boolean
    facebook?: boolean
    twitter?: boolean
    website?: boolean
    isActive?: boolean
    imageUrl?: boolean
    metadata?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventRegister?: boolean | Event$EventRegisterArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      EventRegister: Prisma.$EventRegisterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      startAt: Date
      endAt: Date
      eventAt: Date
      location: string | null
      facebook: string | null
      twitter: string | null
      website: string | null
      isActive: boolean
      imageUrl: string | null
      metadata: string[]
    }, ExtArgs["result"]["event"]>
    composites: {}
  }


  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
    **/
    create<T extends EventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventCreateArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Events.
     *     @param {EventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
    **/
    delete<T extends EventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventDeleteArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpdateArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
    **/
    upsert<T extends EventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpsertArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    EventRegister<T extends Event$EventRegisterArgs<ExtArgs> = {}>(args?: Subset<T, Event$EventRegisterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRegisterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly name: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly startAt: FieldRef<"Event", 'DateTime'>
    readonly endAt: FieldRef<"Event", 'DateTime'>
    readonly eventAt: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly facebook: FieldRef<"Event", 'String'>
    readonly twitter: FieldRef<"Event", 'String'>
    readonly website: FieldRef<"Event", 'String'>
    readonly isActive: FieldRef<"Event", 'Boolean'>
    readonly imageUrl: FieldRef<"Event", 'String'>
    readonly metadata: FieldRef<"Event", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }


  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }


  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }


  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }


  /**
   * Event.EventRegister
   */
  export type Event$EventRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegister
     */
    select?: EventRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventRegisterInclude<ExtArgs> | null
    where?: EventRegisterWhereInput
    orderBy?: EventRegisterOrderByWithRelationInput | EventRegisterOrderByWithRelationInput[]
    cursor?: EventRegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRegisterScalarFieldEnum | EventRegisterScalarFieldEnum[]
  }


  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
  }



  /**
   * Model Commitee
   */

  export type AggregateCommitee = {
    _count: CommiteeCountAggregateOutputType | null
    _avg: CommiteeAvgAggregateOutputType | null
    _sum: CommiteeSumAggregateOutputType | null
    _min: CommiteeMinAggregateOutputType | null
    _max: CommiteeMaxAggregateOutputType | null
  }

  export type CommiteeAvgAggregateOutputType = {
    id: number | null
  }

  export type CommiteeSumAggregateOutputType = {
    id: number | null
  }

  export type CommiteeMinAggregateOutputType = {
    id: number | null
    userId: string | null
    username: string | null
    name: string | null
    role: string | null
  }

  export type CommiteeMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    username: string | null
    name: string | null
    role: string | null
  }

  export type CommiteeCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    name: number
    role: number
    _all: number
  }


  export type CommiteeAvgAggregateInputType = {
    id?: true
  }

  export type CommiteeSumAggregateInputType = {
    id?: true
  }

  export type CommiteeMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    name?: true
    role?: true
  }

  export type CommiteeMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    name?: true
    role?: true
  }

  export type CommiteeCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    name?: true
    role?: true
    _all?: true
  }

  export type CommiteeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commitee to aggregate.
     */
    where?: CommiteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commitees to fetch.
     */
    orderBy?: CommiteeOrderByWithRelationInput | CommiteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommiteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commitees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commitees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commitees
    **/
    _count?: true | CommiteeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommiteeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommiteeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommiteeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommiteeMaxAggregateInputType
  }

  export type GetCommiteeAggregateType<T extends CommiteeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommitee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommitee[P]>
      : GetScalarType<T[P], AggregateCommitee[P]>
  }




  export type CommiteeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommiteeWhereInput
    orderBy?: CommiteeOrderByWithAggregationInput | CommiteeOrderByWithAggregationInput[]
    by: CommiteeScalarFieldEnum[] | CommiteeScalarFieldEnum
    having?: CommiteeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommiteeCountAggregateInputType | true
    _avg?: CommiteeAvgAggregateInputType
    _sum?: CommiteeSumAggregateInputType
    _min?: CommiteeMinAggregateInputType
    _max?: CommiteeMaxAggregateInputType
  }

  export type CommiteeGroupByOutputType = {
    id: number
    userId: string | null
    username: string
    name: string | null
    role: string
    _count: CommiteeCountAggregateOutputType | null
    _avg: CommiteeAvgAggregateOutputType | null
    _sum: CommiteeSumAggregateOutputType | null
    _min: CommiteeMinAggregateOutputType | null
    _max: CommiteeMaxAggregateOutputType | null
  }

  type GetCommiteeGroupByPayload<T extends CommiteeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommiteeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommiteeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommiteeGroupByOutputType[P]>
            : GetScalarType<T[P], CommiteeGroupByOutputType[P]>
        }
      >
    >


  export type CommiteeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    name?: boolean
    role?: boolean
    Score?: boolean | Commitee$ScoreArgs<ExtArgs>
    _count?: boolean | CommiteeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commitee"]>

  export type CommiteeSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    name?: boolean
    role?: boolean
  }

  export type CommiteeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Score?: boolean | Commitee$ScoreArgs<ExtArgs>
    _count?: boolean | CommiteeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommiteePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commitee"
    objects: {
      Score: Prisma.$ScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string | null
      username: string
      name: string | null
      role: string
    }, ExtArgs["result"]["commitee"]>
    composites: {}
  }


  type CommiteeGetPayload<S extends boolean | null | undefined | CommiteeDefaultArgs> = $Result.GetResult<Prisma.$CommiteePayload, S>

  type CommiteeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommiteeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommiteeCountAggregateInputType | true
    }

  export interface CommiteeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commitee'], meta: { name: 'Commitee' } }
    /**
     * Find zero or one Commitee that matches the filter.
     * @param {CommiteeFindUniqueArgs} args - Arguments to find a Commitee
     * @example
     * // Get one Commitee
     * const commitee = await prisma.commitee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommiteeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommiteeFindUniqueArgs<ExtArgs>>
    ): Prisma__CommiteeClient<$Result.GetResult<Prisma.$CommiteePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Commitee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommiteeFindUniqueOrThrowArgs} args - Arguments to find a Commitee
     * @example
     * // Get one Commitee
     * const commitee = await prisma.commitee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommiteeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommiteeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommiteeClient<$Result.GetResult<Prisma.$CommiteePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Commitee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommiteeFindFirstArgs} args - Arguments to find a Commitee
     * @example
     * // Get one Commitee
     * const commitee = await prisma.commitee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommiteeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommiteeFindFirstArgs<ExtArgs>>
    ): Prisma__CommiteeClient<$Result.GetResult<Prisma.$CommiteePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Commitee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommiteeFindFirstOrThrowArgs} args - Arguments to find a Commitee
     * @example
     * // Get one Commitee
     * const commitee = await prisma.commitee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommiteeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommiteeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommiteeClient<$Result.GetResult<Prisma.$CommiteePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Commitees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommiteeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commitees
     * const commitees = await prisma.commitee.findMany()
     * 
     * // Get first 10 Commitees
     * const commitees = await prisma.commitee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commiteeWithIdOnly = await prisma.commitee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommiteeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommiteeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommiteePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Commitee.
     * @param {CommiteeCreateArgs} args - Arguments to create a Commitee.
     * @example
     * // Create one Commitee
     * const Commitee = await prisma.commitee.create({
     *   data: {
     *     // ... data to create a Commitee
     *   }
     * })
     * 
    **/
    create<T extends CommiteeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommiteeCreateArgs<ExtArgs>>
    ): Prisma__CommiteeClient<$Result.GetResult<Prisma.$CommiteePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Commitees.
     *     @param {CommiteeCreateManyArgs} args - Arguments to create many Commitees.
     *     @example
     *     // Create many Commitees
     *     const commitee = await prisma.commitee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommiteeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommiteeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Commitee.
     * @param {CommiteeDeleteArgs} args - Arguments to delete one Commitee.
     * @example
     * // Delete one Commitee
     * const Commitee = await prisma.commitee.delete({
     *   where: {
     *     // ... filter to delete one Commitee
     *   }
     * })
     * 
    **/
    delete<T extends CommiteeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommiteeDeleteArgs<ExtArgs>>
    ): Prisma__CommiteeClient<$Result.GetResult<Prisma.$CommiteePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Commitee.
     * @param {CommiteeUpdateArgs} args - Arguments to update one Commitee.
     * @example
     * // Update one Commitee
     * const commitee = await prisma.commitee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommiteeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommiteeUpdateArgs<ExtArgs>>
    ): Prisma__CommiteeClient<$Result.GetResult<Prisma.$CommiteePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Commitees.
     * @param {CommiteeDeleteManyArgs} args - Arguments to filter Commitees to delete.
     * @example
     * // Delete a few Commitees
     * const { count } = await prisma.commitee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommiteeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommiteeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commitees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommiteeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commitees
     * const commitee = await prisma.commitee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommiteeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommiteeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commitee.
     * @param {CommiteeUpsertArgs} args - Arguments to update or create a Commitee.
     * @example
     * // Update or create a Commitee
     * const commitee = await prisma.commitee.upsert({
     *   create: {
     *     // ... data to create a Commitee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commitee we want to update
     *   }
     * })
    **/
    upsert<T extends CommiteeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommiteeUpsertArgs<ExtArgs>>
    ): Prisma__CommiteeClient<$Result.GetResult<Prisma.$CommiteePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Commitees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommiteeCountArgs} args - Arguments to filter Commitees to count.
     * @example
     * // Count the number of Commitees
     * const count = await prisma.commitee.count({
     *   where: {
     *     // ... the filter for the Commitees we want to count
     *   }
     * })
    **/
    count<T extends CommiteeCountArgs>(
      args?: Subset<T, CommiteeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommiteeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commitee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommiteeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommiteeAggregateArgs>(args: Subset<T, CommiteeAggregateArgs>): Prisma.PrismaPromise<GetCommiteeAggregateType<T>>

    /**
     * Group by Commitee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommiteeGroupByArgs} args - Group by arguments.
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
      T extends CommiteeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommiteeGroupByArgs['orderBy'] }
        : { orderBy?: CommiteeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommiteeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommiteeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commitee model
   */
  readonly fields: CommiteeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commitee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommiteeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Score<T extends Commitee$ScoreArgs<ExtArgs> = {}>(args?: Subset<T, Commitee$ScoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Commitee model
   */ 
  interface CommiteeFieldRefs {
    readonly id: FieldRef<"Commitee", 'Int'>
    readonly userId: FieldRef<"Commitee", 'String'>
    readonly username: FieldRef<"Commitee", 'String'>
    readonly name: FieldRef<"Commitee", 'String'>
    readonly role: FieldRef<"Commitee", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Commitee findUnique
   */
  export type CommiteeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitee
     */
    select?: CommiteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommiteeInclude<ExtArgs> | null
    /**
     * Filter, which Commitee to fetch.
     */
    where: CommiteeWhereUniqueInput
  }


  /**
   * Commitee findUniqueOrThrow
   */
  export type CommiteeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitee
     */
    select?: CommiteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommiteeInclude<ExtArgs> | null
    /**
     * Filter, which Commitee to fetch.
     */
    where: CommiteeWhereUniqueInput
  }


  /**
   * Commitee findFirst
   */
  export type CommiteeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitee
     */
    select?: CommiteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommiteeInclude<ExtArgs> | null
    /**
     * Filter, which Commitee to fetch.
     */
    where?: CommiteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commitees to fetch.
     */
    orderBy?: CommiteeOrderByWithRelationInput | CommiteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commitees.
     */
    cursor?: CommiteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commitees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commitees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commitees.
     */
    distinct?: CommiteeScalarFieldEnum | CommiteeScalarFieldEnum[]
  }


  /**
   * Commitee findFirstOrThrow
   */
  export type CommiteeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitee
     */
    select?: CommiteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommiteeInclude<ExtArgs> | null
    /**
     * Filter, which Commitee to fetch.
     */
    where?: CommiteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commitees to fetch.
     */
    orderBy?: CommiteeOrderByWithRelationInput | CommiteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commitees.
     */
    cursor?: CommiteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commitees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commitees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commitees.
     */
    distinct?: CommiteeScalarFieldEnum | CommiteeScalarFieldEnum[]
  }


  /**
   * Commitee findMany
   */
  export type CommiteeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitee
     */
    select?: CommiteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommiteeInclude<ExtArgs> | null
    /**
     * Filter, which Commitees to fetch.
     */
    where?: CommiteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commitees to fetch.
     */
    orderBy?: CommiteeOrderByWithRelationInput | CommiteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commitees.
     */
    cursor?: CommiteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commitees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commitees.
     */
    skip?: number
    distinct?: CommiteeScalarFieldEnum | CommiteeScalarFieldEnum[]
  }


  /**
   * Commitee create
   */
  export type CommiteeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitee
     */
    select?: CommiteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommiteeInclude<ExtArgs> | null
    /**
     * The data needed to create a Commitee.
     */
    data: XOR<CommiteeCreateInput, CommiteeUncheckedCreateInput>
  }


  /**
   * Commitee createMany
   */
  export type CommiteeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commitees.
     */
    data: CommiteeCreateManyInput | CommiteeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Commitee update
   */
  export type CommiteeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitee
     */
    select?: CommiteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommiteeInclude<ExtArgs> | null
    /**
     * The data needed to update a Commitee.
     */
    data: XOR<CommiteeUpdateInput, CommiteeUncheckedUpdateInput>
    /**
     * Choose, which Commitee to update.
     */
    where: CommiteeWhereUniqueInput
  }


  /**
   * Commitee updateMany
   */
  export type CommiteeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commitees.
     */
    data: XOR<CommiteeUpdateManyMutationInput, CommiteeUncheckedUpdateManyInput>
    /**
     * Filter which Commitees to update
     */
    where?: CommiteeWhereInput
  }


  /**
   * Commitee upsert
   */
  export type CommiteeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitee
     */
    select?: CommiteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommiteeInclude<ExtArgs> | null
    /**
     * The filter to search for the Commitee to update in case it exists.
     */
    where: CommiteeWhereUniqueInput
    /**
     * In case the Commitee found by the `where` argument doesn't exist, create a new Commitee with this data.
     */
    create: XOR<CommiteeCreateInput, CommiteeUncheckedCreateInput>
    /**
     * In case the Commitee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommiteeUpdateInput, CommiteeUncheckedUpdateInput>
  }


  /**
   * Commitee delete
   */
  export type CommiteeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitee
     */
    select?: CommiteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommiteeInclude<ExtArgs> | null
    /**
     * Filter which Commitee to delete.
     */
    where: CommiteeWhereUniqueInput
  }


  /**
   * Commitee deleteMany
   */
  export type CommiteeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commitees to delete
     */
    where?: CommiteeWhereInput
  }


  /**
   * Commitee.Score
   */
  export type Commitee$ScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }


  /**
   * Commitee without action
   */
  export type CommiteeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commitee
     */
    select?: CommiteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommiteeInclude<ExtArgs> | null
  }



  /**
   * Model Buffalo
   */

  export type AggregateBuffalo = {
    _count: BuffaloCountAggregateOutputType | null
    _avg: BuffaloAvgAggregateOutputType | null
    _sum: BuffaloSumAggregateOutputType | null
    _min: BuffaloMinAggregateOutputType | null
    _max: BuffaloMaxAggregateOutputType | null
  }

  export type BuffaloAvgAggregateOutputType = {
    id: number | null
    typeId: number | null
  }

  export type BuffaloSumAggregateOutputType = {
    id: number | null
    typeId: number | null
  }

  export type BuffaloMinAggregateOutputType = {
    id: number | null
    microchip: string | null
    name: string | null
    typeId: number | null
  }

  export type BuffaloMaxAggregateOutputType = {
    id: number | null
    microchip: string | null
    name: string | null
    typeId: number | null
  }

  export type BuffaloCountAggregateOutputType = {
    id: number
    microchip: number
    name: number
    typeId: number
    _all: number
  }


  export type BuffaloAvgAggregateInputType = {
    id?: true
    typeId?: true
  }

  export type BuffaloSumAggregateInputType = {
    id?: true
    typeId?: true
  }

  export type BuffaloMinAggregateInputType = {
    id?: true
    microchip?: true
    name?: true
    typeId?: true
  }

  export type BuffaloMaxAggregateInputType = {
    id?: true
    microchip?: true
    name?: true
    typeId?: true
  }

  export type BuffaloCountAggregateInputType = {
    id?: true
    microchip?: true
    name?: true
    typeId?: true
    _all?: true
  }

  export type BuffaloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buffalo to aggregate.
     */
    where?: BuffaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buffalo to fetch.
     */
    orderBy?: BuffaloOrderByWithRelationInput | BuffaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuffaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buffalo from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buffalo.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buffalo
    **/
    _count?: true | BuffaloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuffaloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuffaloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuffaloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuffaloMaxAggregateInputType
  }

  export type GetBuffaloAggregateType<T extends BuffaloAggregateArgs> = {
        [P in keyof T & keyof AggregateBuffalo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuffalo[P]>
      : GetScalarType<T[P], AggregateBuffalo[P]>
  }




  export type BuffaloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuffaloWhereInput
    orderBy?: BuffaloOrderByWithAggregationInput | BuffaloOrderByWithAggregationInput[]
    by: BuffaloScalarFieldEnum[] | BuffaloScalarFieldEnum
    having?: BuffaloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuffaloCountAggregateInputType | true
    _avg?: BuffaloAvgAggregateInputType
    _sum?: BuffaloSumAggregateInputType
    _min?: BuffaloMinAggregateInputType
    _max?: BuffaloMaxAggregateInputType
  }

  export type BuffaloGroupByOutputType = {
    id: number
    microchip: string
    name: string
    typeId: number
    _count: BuffaloCountAggregateOutputType | null
    _avg: BuffaloAvgAggregateOutputType | null
    _sum: BuffaloSumAggregateOutputType | null
    _min: BuffaloMinAggregateOutputType | null
    _max: BuffaloMaxAggregateOutputType | null
  }

  type GetBuffaloGroupByPayload<T extends BuffaloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuffaloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuffaloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuffaloGroupByOutputType[P]>
            : GetScalarType<T[P], BuffaloGroupByOutputType[P]>
        }
      >
    >


  export type BuffaloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    microchip?: boolean
    name?: boolean
    typeId?: boolean
    type?: boolean | TypeDefaultArgs<ExtArgs>
    Score?: boolean | Buffalo$ScoreArgs<ExtArgs>
    _count?: boolean | BuffaloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buffalo"]>

  export type BuffaloSelectScalar = {
    id?: boolean
    microchip?: boolean
    name?: boolean
    typeId?: boolean
  }

  export type BuffaloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | TypeDefaultArgs<ExtArgs>
    Score?: boolean | Buffalo$ScoreArgs<ExtArgs>
    _count?: boolean | BuffaloCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BuffaloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Buffalo"
    objects: {
      type: Prisma.$TypePayload<ExtArgs>
      Score: Prisma.$ScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      microchip: string
      name: string
      typeId: number
    }, ExtArgs["result"]["buffalo"]>
    composites: {}
  }


  type BuffaloGetPayload<S extends boolean | null | undefined | BuffaloDefaultArgs> = $Result.GetResult<Prisma.$BuffaloPayload, S>

  type BuffaloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BuffaloFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BuffaloCountAggregateInputType | true
    }

  export interface BuffaloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Buffalo'], meta: { name: 'Buffalo' } }
    /**
     * Find zero or one Buffalo that matches the filter.
     * @param {BuffaloFindUniqueArgs} args - Arguments to find a Buffalo
     * @example
     * // Get one Buffalo
     * const buffalo = await prisma.buffalo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BuffaloFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BuffaloFindUniqueArgs<ExtArgs>>
    ): Prisma__BuffaloClient<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Buffalo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BuffaloFindUniqueOrThrowArgs} args - Arguments to find a Buffalo
     * @example
     * // Get one Buffalo
     * const buffalo = await prisma.buffalo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BuffaloFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BuffaloFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BuffaloClient<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Buffalo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffaloFindFirstArgs} args - Arguments to find a Buffalo
     * @example
     * // Get one Buffalo
     * const buffalo = await prisma.buffalo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BuffaloFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BuffaloFindFirstArgs<ExtArgs>>
    ): Prisma__BuffaloClient<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Buffalo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffaloFindFirstOrThrowArgs} args - Arguments to find a Buffalo
     * @example
     * // Get one Buffalo
     * const buffalo = await prisma.buffalo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BuffaloFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BuffaloFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BuffaloClient<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Buffalo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffaloFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buffalo
     * const buffalo = await prisma.buffalo.findMany()
     * 
     * // Get first 10 Buffalo
     * const buffalo = await prisma.buffalo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buffaloWithIdOnly = await prisma.buffalo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BuffaloFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuffaloFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Buffalo.
     * @param {BuffaloCreateArgs} args - Arguments to create a Buffalo.
     * @example
     * // Create one Buffalo
     * const Buffalo = await prisma.buffalo.create({
     *   data: {
     *     // ... data to create a Buffalo
     *   }
     * })
     * 
    **/
    create<T extends BuffaloCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BuffaloCreateArgs<ExtArgs>>
    ): Prisma__BuffaloClient<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Buffalo.
     *     @param {BuffaloCreateManyArgs} args - Arguments to create many Buffalo.
     *     @example
     *     // Create many Buffalo
     *     const buffalo = await prisma.buffalo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BuffaloCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuffaloCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Buffalo.
     * @param {BuffaloDeleteArgs} args - Arguments to delete one Buffalo.
     * @example
     * // Delete one Buffalo
     * const Buffalo = await prisma.buffalo.delete({
     *   where: {
     *     // ... filter to delete one Buffalo
     *   }
     * })
     * 
    **/
    delete<T extends BuffaloDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BuffaloDeleteArgs<ExtArgs>>
    ): Prisma__BuffaloClient<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Buffalo.
     * @param {BuffaloUpdateArgs} args - Arguments to update one Buffalo.
     * @example
     * // Update one Buffalo
     * const buffalo = await prisma.buffalo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BuffaloUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BuffaloUpdateArgs<ExtArgs>>
    ): Prisma__BuffaloClient<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Buffalo.
     * @param {BuffaloDeleteManyArgs} args - Arguments to filter Buffalo to delete.
     * @example
     * // Delete a few Buffalo
     * const { count } = await prisma.buffalo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BuffaloDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuffaloDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buffalo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffaloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buffalo
     * const buffalo = await prisma.buffalo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BuffaloUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BuffaloUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Buffalo.
     * @param {BuffaloUpsertArgs} args - Arguments to update or create a Buffalo.
     * @example
     * // Update or create a Buffalo
     * const buffalo = await prisma.buffalo.upsert({
     *   create: {
     *     // ... data to create a Buffalo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buffalo we want to update
     *   }
     * })
    **/
    upsert<T extends BuffaloUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BuffaloUpsertArgs<ExtArgs>>
    ): Prisma__BuffaloClient<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Buffalo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffaloCountArgs} args - Arguments to filter Buffalo to count.
     * @example
     * // Count the number of Buffalo
     * const count = await prisma.buffalo.count({
     *   where: {
     *     // ... the filter for the Buffalo we want to count
     *   }
     * })
    **/
    count<T extends BuffaloCountArgs>(
      args?: Subset<T, BuffaloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuffaloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buffalo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffaloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuffaloAggregateArgs>(args: Subset<T, BuffaloAggregateArgs>): Prisma.PrismaPromise<GetBuffaloAggregateType<T>>

    /**
     * Group by Buffalo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuffaloGroupByArgs} args - Group by arguments.
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
      T extends BuffaloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuffaloGroupByArgs['orderBy'] }
        : { orderBy?: BuffaloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuffaloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuffaloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Buffalo model
   */
  readonly fields: BuffaloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Buffalo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuffaloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    type<T extends TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDefaultArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Score<T extends Buffalo$ScoreArgs<ExtArgs> = {}>(args?: Subset<T, Buffalo$ScoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Buffalo model
   */ 
  interface BuffaloFieldRefs {
    readonly id: FieldRef<"Buffalo", 'Int'>
    readonly microchip: FieldRef<"Buffalo", 'String'>
    readonly name: FieldRef<"Buffalo", 'String'>
    readonly typeId: FieldRef<"Buffalo", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Buffalo findUnique
   */
  export type BuffaloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
    /**
     * Filter, which Buffalo to fetch.
     */
    where: BuffaloWhereUniqueInput
  }


  /**
   * Buffalo findUniqueOrThrow
   */
  export type BuffaloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
    /**
     * Filter, which Buffalo to fetch.
     */
    where: BuffaloWhereUniqueInput
  }


  /**
   * Buffalo findFirst
   */
  export type BuffaloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
    /**
     * Filter, which Buffalo to fetch.
     */
    where?: BuffaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buffalo to fetch.
     */
    orderBy?: BuffaloOrderByWithRelationInput | BuffaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buffalo.
     */
    cursor?: BuffaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buffalo from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buffalo.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buffalo.
     */
    distinct?: BuffaloScalarFieldEnum | BuffaloScalarFieldEnum[]
  }


  /**
   * Buffalo findFirstOrThrow
   */
  export type BuffaloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
    /**
     * Filter, which Buffalo to fetch.
     */
    where?: BuffaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buffalo to fetch.
     */
    orderBy?: BuffaloOrderByWithRelationInput | BuffaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buffalo.
     */
    cursor?: BuffaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buffalo from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buffalo.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buffalo.
     */
    distinct?: BuffaloScalarFieldEnum | BuffaloScalarFieldEnum[]
  }


  /**
   * Buffalo findMany
   */
  export type BuffaloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
    /**
     * Filter, which Buffalo to fetch.
     */
    where?: BuffaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buffalo to fetch.
     */
    orderBy?: BuffaloOrderByWithRelationInput | BuffaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buffalo.
     */
    cursor?: BuffaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buffalo from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buffalo.
     */
    skip?: number
    distinct?: BuffaloScalarFieldEnum | BuffaloScalarFieldEnum[]
  }


  /**
   * Buffalo create
   */
  export type BuffaloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
    /**
     * The data needed to create a Buffalo.
     */
    data: XOR<BuffaloCreateInput, BuffaloUncheckedCreateInput>
  }


  /**
   * Buffalo createMany
   */
  export type BuffaloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buffalo.
     */
    data: BuffaloCreateManyInput | BuffaloCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Buffalo update
   */
  export type BuffaloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
    /**
     * The data needed to update a Buffalo.
     */
    data: XOR<BuffaloUpdateInput, BuffaloUncheckedUpdateInput>
    /**
     * Choose, which Buffalo to update.
     */
    where: BuffaloWhereUniqueInput
  }


  /**
   * Buffalo updateMany
   */
  export type BuffaloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buffalo.
     */
    data: XOR<BuffaloUpdateManyMutationInput, BuffaloUncheckedUpdateManyInput>
    /**
     * Filter which Buffalo to update
     */
    where?: BuffaloWhereInput
  }


  /**
   * Buffalo upsert
   */
  export type BuffaloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
    /**
     * The filter to search for the Buffalo to update in case it exists.
     */
    where: BuffaloWhereUniqueInput
    /**
     * In case the Buffalo found by the `where` argument doesn't exist, create a new Buffalo with this data.
     */
    create: XOR<BuffaloCreateInput, BuffaloUncheckedCreateInput>
    /**
     * In case the Buffalo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuffaloUpdateInput, BuffaloUncheckedUpdateInput>
  }


  /**
   * Buffalo delete
   */
  export type BuffaloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
    /**
     * Filter which Buffalo to delete.
     */
    where: BuffaloWhereUniqueInput
  }


  /**
   * Buffalo deleteMany
   */
  export type BuffaloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buffalo to delete
     */
    where?: BuffaloWhereInput
  }


  /**
   * Buffalo.Score
   */
  export type Buffalo$ScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }


  /**
   * Buffalo without action
   */
  export type BuffaloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
  }



  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeSumAggregateOutputType = {
    id: number | null
  }

  export type TypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
  }

  export type TypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    id?: true
  }

  export type TypeSumAggregateInputType = {
    id?: true
  }

  export type TypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    isActive: boolean
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    Buffalo?: boolean | Type$BuffaloArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type TypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
  }

  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Buffalo?: boolean | Type$BuffaloArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      Buffalo: Prisma.$BuffaloPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      isActive: boolean
    }, ExtArgs["result"]["type"]>
    composites: {}
  }


  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Type that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
    **/
    create<T extends TypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TypeCreateArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Types.
     *     @param {TypeCreateManyArgs} args - Arguments to create many Types.
     *     @example
     *     // Create many Types
     *     const type = await prisma.type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
    **/
    delete<T extends TypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
    **/
    upsert<T extends TypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
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
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Buffalo<T extends Type$BuffaloArgs<ExtArgs> = {}>(args?: Subset<T, Type$BuffaloArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Type model
   */ 
  interface TypeFieldRefs {
    readonly id: FieldRef<"Type", 'Int'>
    readonly name: FieldRef<"Type", 'String'>
    readonly description: FieldRef<"Type", 'String'>
    readonly isActive: FieldRef<"Type", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }


  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }


  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }


  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }


  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
  }


  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }


  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
  }


  /**
   * Type.Buffalo
   */
  export type Type$BuffaloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buffalo
     */
    select?: BuffaloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuffaloInclude<ExtArgs> | null
    where?: BuffaloWhereInput
    orderBy?: BuffaloOrderByWithRelationInput | BuffaloOrderByWithRelationInput[]
    cursor?: BuffaloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuffaloScalarFieldEnum | BuffaloScalarFieldEnum[]
  }


  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
  }



  /**
   * Model Competition
   */

  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionAvgAggregateOutputType = {
    id: number | null
  }

  export type CompetitionSumAggregateOutputType = {
    id: number | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CompetitionAvgAggregateInputType = {
    id?: true
  }

  export type CompetitionSumAggregateInputType = {
    id?: true
  }

  export type CompetitionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CompetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competition to aggregate.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type CompetitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithAggregationInput | CompetitionOrderByWithAggregationInput[]
    by: CompetitionScalarFieldEnum[] | CompetitionScalarFieldEnum
    having?: CompetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _avg?: CompetitionAvgAggregateInputType
    _sum?: CompetitionSumAggregateInputType
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }

  export type CompetitionGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends CompetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    Score?: boolean | Competition$ScoreArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type CompetitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Score?: boolean | Competition$ScoreArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompetitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competition"
    objects: {
      Score: Prisma.$ScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["competition"]>
    composites: {}
  }


  type CompetitionGetPayload<S extends boolean | null | undefined | CompetitionDefaultArgs> = $Result.GetResult<Prisma.$CompetitionPayload, S>

  type CompetitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompetitionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface CompetitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competition'], meta: { name: 'Competition' } }
    /**
     * Find zero or one Competition that matches the filter.
     * @param {CompetitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompetitionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompetitionFindUniqueArgs<ExtArgs>>
    ): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Competition that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompetitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompetitionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetitionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompetitionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetitionFindFirstArgs<ExtArgs>>
    ): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompetitionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetitionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompetitionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetitionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Competition.
     * @param {CompetitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
    **/
    create<T extends CompetitionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompetitionCreateArgs<ExtArgs>>
    ): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Competitions.
     *     @param {CompetitionCreateManyArgs} args - Arguments to create many Competitions.
     *     @example
     *     // Create many Competitions
     *     const competition = await prisma.competition.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompetitionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetitionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Competition.
     * @param {CompetitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
    **/
    delete<T extends CompetitionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompetitionDeleteArgs<ExtArgs>>
    ): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Competition.
     * @param {CompetitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompetitionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompetitionUpdateArgs<ExtArgs>>
    ): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Competitions.
     * @param {CompetitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompetitionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompetitionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompetitionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompetitionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Competition.
     * @param {CompetitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
    **/
    upsert<T extends CompetitionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompetitionUpsertArgs<ExtArgs>>
    ): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends CompetitionCountArgs>(
      args?: Subset<T, CompetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionGroupByArgs} args - Group by arguments.
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
      T extends CompetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competition model
   */
  readonly fields: CompetitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Score<T extends Competition$ScoreArgs<ExtArgs> = {}>(args?: Subset<T, Competition$ScoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Competition model
   */ 
  interface CompetitionFieldRefs {
    readonly id: FieldRef<"Competition", 'Int'>
    readonly name: FieldRef<"Competition", 'String'>
    readonly description: FieldRef<"Competition", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Competition findUnique
   */
  export type CompetitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }


  /**
   * Competition findUniqueOrThrow
   */
  export type CompetitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }


  /**
   * Competition findFirst
   */
  export type CompetitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }


  /**
   * Competition findFirstOrThrow
   */
  export type CompetitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }


  /**
   * Competition findMany
   */
  export type CompetitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }


  /**
   * Competition create
   */
  export type CompetitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Competition.
     */
    data: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
  }


  /**
   * Competition createMany
   */
  export type CompetitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Competition update
   */
  export type CompetitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Competition.
     */
    data: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
    /**
     * Choose, which Competition to update.
     */
    where: CompetitionWhereUniqueInput
  }


  /**
   * Competition updateMany
   */
  export type CompetitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
  }


  /**
   * Competition upsert
   */
  export type CompetitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Competition to update in case it exists.
     */
    where: CompetitionWhereUniqueInput
    /**
     * In case the Competition found by the `where` argument doesn't exist, create a new Competition with this data.
     */
    create: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
    /**
     * In case the Competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
  }


  /**
   * Competition delete
   */
  export type CompetitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter which Competition to delete.
     */
    where: CompetitionWhereUniqueInput
  }


  /**
   * Competition deleteMany
   */
  export type CompetitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitions to delete
     */
    where?: CompetitionWhereInput
  }


  /**
   * Competition.Score
   */
  export type Competition$ScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }


  /**
   * Competition without action
   */
  export type CompetitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude<ExtArgs> | null
  }



  /**
   * Model Score
   */

  export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  export type ScoreAvgAggregateOutputType = {
    id: number | null
    buffaloId: number | null
    competitionId: number | null
    body: number | null
    head: number | null
    neck: number | null
    horn: number | null
    back: number | null
    commiteeId: number | null
  }

  export type ScoreSumAggregateOutputType = {
    id: number | null
    buffaloId: number | null
    competitionId: number | null
    body: number | null
    head: number | null
    neck: number | null
    horn: number | null
    back: number | null
    commiteeId: number | null
  }

  export type ScoreMinAggregateOutputType = {
    id: number | null
    buffaloId: number | null
    competitionId: number | null
    body: number | null
    head: number | null
    neck: number | null
    horn: number | null
    back: number | null
    commiteeId: number | null
  }

  export type ScoreMaxAggregateOutputType = {
    id: number | null
    buffaloId: number | null
    competitionId: number | null
    body: number | null
    head: number | null
    neck: number | null
    horn: number | null
    back: number | null
    commiteeId: number | null
  }

  export type ScoreCountAggregateOutputType = {
    id: number
    buffaloId: number
    competitionId: number
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commiteeId: number
    _all: number
  }


  export type ScoreAvgAggregateInputType = {
    id?: true
    buffaloId?: true
    competitionId?: true
    body?: true
    head?: true
    neck?: true
    horn?: true
    back?: true
    commiteeId?: true
  }

  export type ScoreSumAggregateInputType = {
    id?: true
    buffaloId?: true
    competitionId?: true
    body?: true
    head?: true
    neck?: true
    horn?: true
    back?: true
    commiteeId?: true
  }

  export type ScoreMinAggregateInputType = {
    id?: true
    buffaloId?: true
    competitionId?: true
    body?: true
    head?: true
    neck?: true
    horn?: true
    back?: true
    commiteeId?: true
  }

  export type ScoreMaxAggregateInputType = {
    id?: true
    buffaloId?: true
    competitionId?: true
    body?: true
    head?: true
    neck?: true
    horn?: true
    back?: true
    commiteeId?: true
  }

  export type ScoreCountAggregateInputType = {
    id?: true
    buffaloId?: true
    competitionId?: true
    body?: true
    head?: true
    neck?: true
    horn?: true
    back?: true
    commiteeId?: true
    _all?: true
  }

  export type ScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Score to aggregate.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scores
    **/
    _count?: true | ScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreMaxAggregateInputType
  }

  export type GetScoreAggregateType<T extends ScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScore[P]>
      : GetScalarType<T[P], AggregateScore[P]>
  }




  export type ScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithAggregationInput | ScoreOrderByWithAggregationInput[]
    by: ScoreScalarFieldEnum[] | ScoreScalarFieldEnum
    having?: ScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreCountAggregateInputType | true
    _avg?: ScoreAvgAggregateInputType
    _sum?: ScoreSumAggregateInputType
    _min?: ScoreMinAggregateInputType
    _max?: ScoreMaxAggregateInputType
  }

  export type ScoreGroupByOutputType = {
    id: number
    buffaloId: number
    competitionId: number
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commiteeId: number
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  type GetScoreGroupByPayload<T extends ScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreGroupByOutputType[P]>
        }
      >
    >


  export type ScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buffaloId?: boolean
    competitionId?: boolean
    body?: boolean
    head?: boolean
    neck?: boolean
    horn?: boolean
    back?: boolean
    commiteeId?: boolean
    commitee?: boolean | CommiteeDefaultArgs<ExtArgs>
    buffalo?: boolean | BuffaloDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectScalar = {
    id?: boolean
    buffaloId?: boolean
    competitionId?: boolean
    body?: boolean
    head?: boolean
    neck?: boolean
    horn?: boolean
    back?: boolean
    commiteeId?: boolean
  }

  export type ScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commitee?: boolean | CommiteeDefaultArgs<ExtArgs>
    buffalo?: boolean | BuffaloDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
  }


  export type $ScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Score"
    objects: {
      commitee: Prisma.$CommiteePayload<ExtArgs>
      buffalo: Prisma.$BuffaloPayload<ExtArgs>
      competition: Prisma.$CompetitionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      buffaloId: number
      competitionId: number
      body: number
      head: number
      neck: number
      horn: number
      back: number
      commiteeId: number
    }, ExtArgs["result"]["score"]>
    composites: {}
  }


  type ScoreGetPayload<S extends boolean | null | undefined | ScoreDefaultArgs> = $Result.GetResult<Prisma.$ScorePayload, S>

  type ScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScoreCountAggregateInputType | true
    }

  export interface ScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Score'], meta: { name: 'Score' } }
    /**
     * Find zero or one Score that matches the filter.
     * @param {ScoreFindUniqueArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreFindUniqueArgs<ExtArgs>>
    ): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Score that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScoreFindUniqueOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Score that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreFindFirstArgs<ExtArgs>>
    ): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Score that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.score.findMany()
     * 
     * // Get first 10 Scores
     * const scores = await prisma.score.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreWithIdOnly = await prisma.score.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Score.
     * @param {ScoreCreateArgs} args - Arguments to create a Score.
     * @example
     * // Create one Score
     * const Score = await prisma.score.create({
     *   data: {
     *     // ... data to create a Score
     *   }
     * })
     * 
    **/
    create<T extends ScoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreCreateArgs<ExtArgs>>
    ): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Scores.
     *     @param {ScoreCreateManyArgs} args - Arguments to create many Scores.
     *     @example
     *     // Create many Scores
     *     const score = await prisma.score.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Score.
     * @param {ScoreDeleteArgs} args - Arguments to delete one Score.
     * @example
     * // Delete one Score
     * const Score = await prisma.score.delete({
     *   where: {
     *     // ... filter to delete one Score
     *   }
     * })
     * 
    **/
    delete<T extends ScoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreDeleteArgs<ExtArgs>>
    ): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Score.
     * @param {ScoreUpdateArgs} args - Arguments to update one Score.
     * @example
     * // Update one Score
     * const score = await prisma.score.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreUpdateArgs<ExtArgs>>
    ): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Scores.
     * @param {ScoreDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.score.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Score.
     * @param {ScoreUpsertArgs} args - Arguments to update or create a Score.
     * @example
     * // Update or create a Score
     * const score = await prisma.score.upsert({
     *   create: {
     *     // ... data to create a Score
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Score we want to update
     *   }
     * })
    **/
    upsert<T extends ScoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreUpsertArgs<ExtArgs>>
    ): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.score.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
    **/
    count<T extends ScoreCountArgs>(
      args?: Subset<T, ScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoreAggregateArgs>(args: Subset<T, ScoreAggregateArgs>): Prisma.PrismaPromise<GetScoreAggregateType<T>>

    /**
     * Group by Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreGroupByArgs} args - Group by arguments.
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
      T extends ScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreGroupByArgs['orderBy'] }
        : { orderBy?: ScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Score model
   */
  readonly fields: ScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Score.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    commitee<T extends CommiteeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommiteeDefaultArgs<ExtArgs>>): Prisma__CommiteeClient<$Result.GetResult<Prisma.$CommiteePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    buffalo<T extends BuffaloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuffaloDefaultArgs<ExtArgs>>): Prisma__BuffaloClient<$Result.GetResult<Prisma.$BuffaloPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    competition<T extends CompetitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionDefaultArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Score model
   */ 
  interface ScoreFieldRefs {
    readonly id: FieldRef<"Score", 'Int'>
    readonly buffaloId: FieldRef<"Score", 'Int'>
    readonly competitionId: FieldRef<"Score", 'Int'>
    readonly body: FieldRef<"Score", 'Int'>
    readonly head: FieldRef<"Score", 'Int'>
    readonly neck: FieldRef<"Score", 'Int'>
    readonly horn: FieldRef<"Score", 'Int'>
    readonly back: FieldRef<"Score", 'Int'>
    readonly commiteeId: FieldRef<"Score", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Score findUnique
   */
  export type ScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }


  /**
   * Score findUniqueOrThrow
   */
  export type ScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }


  /**
   * Score findFirst
   */
  export type ScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }


  /**
   * Score findFirstOrThrow
   */
  export type ScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }


  /**
   * Score findMany
   */
  export type ScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Scores to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }


  /**
   * Score create
   */
  export type ScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Score.
     */
    data: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
  }


  /**
   * Score createMany
   */
  export type ScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Score update
   */
  export type ScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Score.
     */
    data: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
    /**
     * Choose, which Score to update.
     */
    where: ScoreWhereUniqueInput
  }


  /**
   * Score updateMany
   */
  export type ScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
  }


  /**
   * Score upsert
   */
  export type ScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Score to update in case it exists.
     */
    where: ScoreWhereUniqueInput
    /**
     * In case the Score found by the `where` argument doesn't exist, create a new Score with this data.
     */
    create: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
    /**
     * In case the Score was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
  }


  /**
   * Score delete
   */
  export type ScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter which Score to delete.
     */
    where: ScoreWhereUniqueInput
  }


  /**
   * Score deleteMany
   */
  export type ScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scores to delete
     */
    where?: ScoreWhereInput
  }


  /**
   * Score without action
   */
  export type ScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreInclude<ExtArgs> | null
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
    userId: 'userId',
    name: 'name',
    email: 'email',
    tel: 'tel',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventRegisterScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    type: 'type',
    level: 'level',
    name: 'name',
    gender: 'gender',
    color: 'color',
    birthday: 'birthday',
    microchip: 'microchip',
    imageUrl: 'imageUrl',
    vaccineUrl: 'vaccineUrl',
    ownerName: 'ownerName',
    ownerTel: 'ownerTel',
    userId: 'userId',
    metadata: 'metadata'
  };

  export type EventRegisterScalarFieldEnum = (typeof EventRegisterScalarFieldEnum)[keyof typeof EventRegisterScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startAt: 'startAt',
    endAt: 'endAt',
    eventAt: 'eventAt',
    location: 'location',
    facebook: 'facebook',
    twitter: 'twitter',
    website: 'website',
    isActive: 'isActive',
    imageUrl: 'imageUrl',
    metadata: 'metadata'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const CommiteeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    name: 'name',
    role: 'role'
  };

  export type CommiteeScalarFieldEnum = (typeof CommiteeScalarFieldEnum)[keyof typeof CommiteeScalarFieldEnum]


  export const BuffaloScalarFieldEnum: {
    id: 'id',
    microchip: 'microchip',
    name: 'name',
    typeId: 'typeId'
  };

  export type BuffaloScalarFieldEnum = (typeof BuffaloScalarFieldEnum)[keyof typeof BuffaloScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const CompetitionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const ScoreScalarFieldEnum: {
    id: 'id',
    buffaloId: 'buffaloId',
    competitionId: 'competitionId',
    body: 'body',
    head: 'head',
    neck: 'neck',
    horn: 'horn',
    back: 'back',
    commiteeId: 'commiteeId'
  };

  export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    tel?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    EventRegister?: EventRegisterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    tel?: SortOrder
    role?: SortOrder
    EventRegister?: EventRegisterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    tel?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    EventRegister?: EventRegisterListRelationFilter
  }, "userId" | "userId">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    tel?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    tel?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type EventRegisterWhereInput = {
    AND?: EventRegisterWhereInput | EventRegisterWhereInput[]
    OR?: EventRegisterWhereInput[]
    NOT?: EventRegisterWhereInput | EventRegisterWhereInput[]
    id?: IntFilter<"EventRegister"> | number
    eventId?: IntFilter<"EventRegister"> | number
    type?: StringFilter<"EventRegister"> | string
    level?: StringFilter<"EventRegister"> | string
    name?: StringFilter<"EventRegister"> | string
    gender?: StringFilter<"EventRegister"> | string
    color?: StringFilter<"EventRegister"> | string
    birthday?: StringFilter<"EventRegister"> | string
    microchip?: StringFilter<"EventRegister"> | string
    imageUrl?: StringFilter<"EventRegister"> | string
    vaccineUrl?: StringFilter<"EventRegister"> | string
    ownerName?: StringFilter<"EventRegister"> | string
    ownerTel?: StringFilter<"EventRegister"> | string
    userId?: StringFilter<"EventRegister"> | string
    metadata?: StringNullableListFilter<"EventRegister">
    user?: XOR<UserRelationFilter, UserWhereInput>
    event?: XOR<EventRelationFilter, EventWhereInput>
  }

  export type EventRegisterOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    birthday?: SortOrder
    microchip?: SortOrder
    imageUrl?: SortOrder
    vaccineUrl?: SortOrder
    ownerName?: SortOrder
    ownerTel?: SortOrder
    userId?: SortOrder
    metadata?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type EventRegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventRegisterWhereInput | EventRegisterWhereInput[]
    OR?: EventRegisterWhereInput[]
    NOT?: EventRegisterWhereInput | EventRegisterWhereInput[]
    eventId?: IntFilter<"EventRegister"> | number
    type?: StringFilter<"EventRegister"> | string
    level?: StringFilter<"EventRegister"> | string
    name?: StringFilter<"EventRegister"> | string
    gender?: StringFilter<"EventRegister"> | string
    color?: StringFilter<"EventRegister"> | string
    birthday?: StringFilter<"EventRegister"> | string
    microchip?: StringFilter<"EventRegister"> | string
    imageUrl?: StringFilter<"EventRegister"> | string
    vaccineUrl?: StringFilter<"EventRegister"> | string
    ownerName?: StringFilter<"EventRegister"> | string
    ownerTel?: StringFilter<"EventRegister"> | string
    userId?: StringFilter<"EventRegister"> | string
    metadata?: StringNullableListFilter<"EventRegister">
    user?: XOR<UserRelationFilter, UserWhereInput>
    event?: XOR<EventRelationFilter, EventWhereInput>
  }, "id">

  export type EventRegisterOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    birthday?: SortOrder
    microchip?: SortOrder
    imageUrl?: SortOrder
    vaccineUrl?: SortOrder
    ownerName?: SortOrder
    ownerTel?: SortOrder
    userId?: SortOrder
    metadata?: SortOrder
    _count?: EventRegisterCountOrderByAggregateInput
    _avg?: EventRegisterAvgOrderByAggregateInput
    _max?: EventRegisterMaxOrderByAggregateInput
    _min?: EventRegisterMinOrderByAggregateInput
    _sum?: EventRegisterSumOrderByAggregateInput
  }

  export type EventRegisterScalarWhereWithAggregatesInput = {
    AND?: EventRegisterScalarWhereWithAggregatesInput | EventRegisterScalarWhereWithAggregatesInput[]
    OR?: EventRegisterScalarWhereWithAggregatesInput[]
    NOT?: EventRegisterScalarWhereWithAggregatesInput | EventRegisterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventRegister"> | number
    eventId?: IntWithAggregatesFilter<"EventRegister"> | number
    type?: StringWithAggregatesFilter<"EventRegister"> | string
    level?: StringWithAggregatesFilter<"EventRegister"> | string
    name?: StringWithAggregatesFilter<"EventRegister"> | string
    gender?: StringWithAggregatesFilter<"EventRegister"> | string
    color?: StringWithAggregatesFilter<"EventRegister"> | string
    birthday?: StringWithAggregatesFilter<"EventRegister"> | string
    microchip?: StringWithAggregatesFilter<"EventRegister"> | string
    imageUrl?: StringWithAggregatesFilter<"EventRegister"> | string
    vaccineUrl?: StringWithAggregatesFilter<"EventRegister"> | string
    ownerName?: StringWithAggregatesFilter<"EventRegister"> | string
    ownerTel?: StringWithAggregatesFilter<"EventRegister"> | string
    userId?: StringWithAggregatesFilter<"EventRegister"> | string
    metadata?: StringNullableListFilter<"EventRegister">
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startAt?: DateTimeFilter<"Event"> | Date | string
    endAt?: DateTimeFilter<"Event"> | Date | string
    eventAt?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    facebook?: StringNullableFilter<"Event"> | string | null
    twitter?: StringNullableFilter<"Event"> | string | null
    website?: StringNullableFilter<"Event"> | string | null
    isActive?: BoolFilter<"Event"> | boolean
    imageUrl?: StringNullableFilter<"Event"> | string | null
    metadata?: StringNullableListFilter<"Event">
    EventRegister?: EventRegisterListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    eventAt?: SortOrder
    location?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    isActive?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    metadata?: SortOrder
    EventRegister?: EventRegisterOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    startAt?: DateTimeFilter<"Event"> | Date | string
    endAt?: DateTimeFilter<"Event"> | Date | string
    eventAt?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    facebook?: StringNullableFilter<"Event"> | string | null
    twitter?: StringNullableFilter<"Event"> | string | null
    website?: StringNullableFilter<"Event"> | string | null
    isActive?: BoolFilter<"Event"> | boolean
    imageUrl?: StringNullableFilter<"Event"> | string | null
    metadata?: StringNullableListFilter<"Event">
    EventRegister?: EventRegisterListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    eventAt?: SortOrder
    location?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    isActive?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    metadata?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    name?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    startAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    eventAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"Event"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"Event"> | string | null
    website?: StringNullableWithAggregatesFilter<"Event"> | string | null
    isActive?: BoolWithAggregatesFilter<"Event"> | boolean
    imageUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    metadata?: StringNullableListFilter<"Event">
  }

  export type CommiteeWhereInput = {
    AND?: CommiteeWhereInput | CommiteeWhereInput[]
    OR?: CommiteeWhereInput[]
    NOT?: CommiteeWhereInput | CommiteeWhereInput[]
    id?: IntFilter<"Commitee"> | number
    userId?: StringNullableFilter<"Commitee"> | string | null
    username?: StringFilter<"Commitee"> | string
    name?: StringNullableFilter<"Commitee"> | string | null
    role?: StringFilter<"Commitee"> | string
    Score?: ScoreListRelationFilter
  }

  export type CommiteeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    Score?: ScoreOrderByRelationAggregateInput
  }

  export type CommiteeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: CommiteeWhereInput | CommiteeWhereInput[]
    OR?: CommiteeWhereInput[]
    NOT?: CommiteeWhereInput | CommiteeWhereInput[]
    username?: StringFilter<"Commitee"> | string
    name?: StringNullableFilter<"Commitee"> | string | null
    role?: StringFilter<"Commitee"> | string
    Score?: ScoreListRelationFilter
  }, "id" | "userId">

  export type CommiteeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: CommiteeCountOrderByAggregateInput
    _avg?: CommiteeAvgOrderByAggregateInput
    _max?: CommiteeMaxOrderByAggregateInput
    _min?: CommiteeMinOrderByAggregateInput
    _sum?: CommiteeSumOrderByAggregateInput
  }

  export type CommiteeScalarWhereWithAggregatesInput = {
    AND?: CommiteeScalarWhereWithAggregatesInput | CommiteeScalarWhereWithAggregatesInput[]
    OR?: CommiteeScalarWhereWithAggregatesInput[]
    NOT?: CommiteeScalarWhereWithAggregatesInput | CommiteeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Commitee"> | number
    userId?: StringNullableWithAggregatesFilter<"Commitee"> | string | null
    username?: StringWithAggregatesFilter<"Commitee"> | string
    name?: StringNullableWithAggregatesFilter<"Commitee"> | string | null
    role?: StringWithAggregatesFilter<"Commitee"> | string
  }

  export type BuffaloWhereInput = {
    AND?: BuffaloWhereInput | BuffaloWhereInput[]
    OR?: BuffaloWhereInput[]
    NOT?: BuffaloWhereInput | BuffaloWhereInput[]
    id?: IntFilter<"Buffalo"> | number
    microchip?: StringFilter<"Buffalo"> | string
    name?: StringFilter<"Buffalo"> | string
    typeId?: IntFilter<"Buffalo"> | number
    type?: XOR<TypeRelationFilter, TypeWhereInput>
    Score?: ScoreListRelationFilter
  }

  export type BuffaloOrderByWithRelationInput = {
    id?: SortOrder
    microchip?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    type?: TypeOrderByWithRelationInput
    Score?: ScoreOrderByRelationAggregateInput
  }

  export type BuffaloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    microchip?: string
    AND?: BuffaloWhereInput | BuffaloWhereInput[]
    OR?: BuffaloWhereInput[]
    NOT?: BuffaloWhereInput | BuffaloWhereInput[]
    name?: StringFilter<"Buffalo"> | string
    typeId?: IntFilter<"Buffalo"> | number
    type?: XOR<TypeRelationFilter, TypeWhereInput>
    Score?: ScoreListRelationFilter
  }, "id" | "microchip">

  export type BuffaloOrderByWithAggregationInput = {
    id?: SortOrder
    microchip?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    _count?: BuffaloCountOrderByAggregateInput
    _avg?: BuffaloAvgOrderByAggregateInput
    _max?: BuffaloMaxOrderByAggregateInput
    _min?: BuffaloMinOrderByAggregateInput
    _sum?: BuffaloSumOrderByAggregateInput
  }

  export type BuffaloScalarWhereWithAggregatesInput = {
    AND?: BuffaloScalarWhereWithAggregatesInput | BuffaloScalarWhereWithAggregatesInput[]
    OR?: BuffaloScalarWhereWithAggregatesInput[]
    NOT?: BuffaloScalarWhereWithAggregatesInput | BuffaloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Buffalo"> | number
    microchip?: StringWithAggregatesFilter<"Buffalo"> | string
    name?: StringWithAggregatesFilter<"Buffalo"> | string
    typeId?: IntWithAggregatesFilter<"Buffalo"> | number
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id?: IntFilter<"Type"> | number
    name?: StringFilter<"Type"> | string
    description?: StringNullableFilter<"Type"> | string | null
    isActive?: BoolFilter<"Type"> | boolean
    Buffalo?: BuffaloListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    Buffalo?: BuffaloOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    name?: StringFilter<"Type"> | string
    description?: StringNullableFilter<"Type"> | string | null
    isActive?: BoolFilter<"Type"> | boolean
    Buffalo?: BuffaloListRelationFilter
  }, "id" | "id">

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _avg?: TypeAvgOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
    _sum?: TypeSumOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Type"> | number
    name?: StringWithAggregatesFilter<"Type"> | string
    description?: StringNullableWithAggregatesFilter<"Type"> | string | null
    isActive?: BoolWithAggregatesFilter<"Type"> | boolean
  }

  export type CompetitionWhereInput = {
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    id?: IntFilter<"Competition"> | number
    name?: StringFilter<"Competition"> | string
    description?: StringNullableFilter<"Competition"> | string | null
    Score?: ScoreListRelationFilter
  }

  export type CompetitionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    Score?: ScoreOrderByRelationAggregateInput
  }

  export type CompetitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    name?: StringFilter<"Competition"> | string
    description?: StringNullableFilter<"Competition"> | string | null
    Score?: ScoreListRelationFilter
  }, "id" | "id">

  export type CompetitionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: CompetitionCountOrderByAggregateInput
    _avg?: CompetitionAvgOrderByAggregateInput
    _max?: CompetitionMaxOrderByAggregateInput
    _min?: CompetitionMinOrderByAggregateInput
    _sum?: CompetitionSumOrderByAggregateInput
  }

  export type CompetitionScalarWhereWithAggregatesInput = {
    AND?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    OR?: CompetitionScalarWhereWithAggregatesInput[]
    NOT?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Competition"> | number
    name?: StringWithAggregatesFilter<"Competition"> | string
    description?: StringNullableWithAggregatesFilter<"Competition"> | string | null
  }

  export type ScoreWhereInput = {
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    id?: IntFilter<"Score"> | number
    buffaloId?: IntFilter<"Score"> | number
    competitionId?: IntFilter<"Score"> | number
    body?: IntFilter<"Score"> | number
    head?: IntFilter<"Score"> | number
    neck?: IntFilter<"Score"> | number
    horn?: IntFilter<"Score"> | number
    back?: IntFilter<"Score"> | number
    commiteeId?: IntFilter<"Score"> | number
    commitee?: XOR<CommiteeRelationFilter, CommiteeWhereInput>
    buffalo?: XOR<BuffaloRelationFilter, BuffaloWhereInput>
    competition?: XOR<CompetitionRelationFilter, CompetitionWhereInput>
  }

  export type ScoreOrderByWithRelationInput = {
    id?: SortOrder
    buffaloId?: SortOrder
    competitionId?: SortOrder
    body?: SortOrder
    head?: SortOrder
    neck?: SortOrder
    horn?: SortOrder
    back?: SortOrder
    commiteeId?: SortOrder
    commitee?: CommiteeOrderByWithRelationInput
    buffalo?: BuffaloOrderByWithRelationInput
    competition?: CompetitionOrderByWithRelationInput
  }

  export type ScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    buffaloId?: IntFilter<"Score"> | number
    competitionId?: IntFilter<"Score"> | number
    body?: IntFilter<"Score"> | number
    head?: IntFilter<"Score"> | number
    neck?: IntFilter<"Score"> | number
    horn?: IntFilter<"Score"> | number
    back?: IntFilter<"Score"> | number
    commiteeId?: IntFilter<"Score"> | number
    commitee?: XOR<CommiteeRelationFilter, CommiteeWhereInput>
    buffalo?: XOR<BuffaloRelationFilter, BuffaloWhereInput>
    competition?: XOR<CompetitionRelationFilter, CompetitionWhereInput>
  }, "id">

  export type ScoreOrderByWithAggregationInput = {
    id?: SortOrder
    buffaloId?: SortOrder
    competitionId?: SortOrder
    body?: SortOrder
    head?: SortOrder
    neck?: SortOrder
    horn?: SortOrder
    back?: SortOrder
    commiteeId?: SortOrder
    _count?: ScoreCountOrderByAggregateInput
    _avg?: ScoreAvgOrderByAggregateInput
    _max?: ScoreMaxOrderByAggregateInput
    _min?: ScoreMinOrderByAggregateInput
    _sum?: ScoreSumOrderByAggregateInput
  }

  export type ScoreScalarWhereWithAggregatesInput = {
    AND?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    OR?: ScoreScalarWhereWithAggregatesInput[]
    NOT?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Score"> | number
    buffaloId?: IntWithAggregatesFilter<"Score"> | number
    competitionId?: IntWithAggregatesFilter<"Score"> | number
    body?: IntWithAggregatesFilter<"Score"> | number
    head?: IntWithAggregatesFilter<"Score"> | number
    neck?: IntWithAggregatesFilter<"Score"> | number
    horn?: IntWithAggregatesFilter<"Score"> | number
    back?: IntWithAggregatesFilter<"Score"> | number
    commiteeId?: IntWithAggregatesFilter<"Score"> | number
  }

  export type UserCreateInput = {
    userId: string
    name: string
    email?: string | null
    tel: string
    role: string
    EventRegister?: EventRegisterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId: string
    name: string
    email?: string | null
    tel: string
    role: string
    EventRegister?: EventRegisterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    EventRegister?: EventRegisterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    EventRegister?: EventRegisterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId: string
    name: string
    email?: string | null
    tel: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type EventRegisterCreateInput = {
    type: string
    level: string
    name: string
    gender: string
    color: string
    birthday: string
    microchip: string
    imageUrl: string
    vaccineUrl: string
    ownerName: string
    ownerTel: string
    metadata?: EventRegisterCreatemetadataInput | string[]
    user: UserCreateNestedOneWithoutEventRegisterInput
    event: EventCreateNestedOneWithoutEventRegisterInput
  }

  export type EventRegisterUncheckedCreateInput = {
    id?: number
    eventId: number
    type: string
    level: string
    name: string
    gender: string
    color: string
    birthday: string
    microchip: string
    imageUrl: string
    vaccineUrl: string
    ownerName: string
    ownerTel: string
    userId: string
    metadata?: EventRegisterCreatemetadataInput | string[]
  }

  export type EventRegisterUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    microchip?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    vaccineUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerTel?: StringFieldUpdateOperationsInput | string
    metadata?: EventRegisterUpdatemetadataInput | string[]
    user?: UserUpdateOneRequiredWithoutEventRegisterNestedInput
    event?: EventUpdateOneRequiredWithoutEventRegisterNestedInput
  }

  export type EventRegisterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    microchip?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    vaccineUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerTel?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metadata?: EventRegisterUpdatemetadataInput | string[]
  }

  export type EventRegisterCreateManyInput = {
    id?: number
    eventId: number
    type: string
    level: string
    name: string
    gender: string
    color: string
    birthday: string
    microchip: string
    imageUrl: string
    vaccineUrl: string
    ownerName: string
    ownerTel: string
    userId: string
    metadata?: EventRegisterCreatemetadataInput | string[]
  }

  export type EventRegisterUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    microchip?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    vaccineUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerTel?: StringFieldUpdateOperationsInput | string
    metadata?: EventRegisterUpdatemetadataInput | string[]
  }

  export type EventRegisterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    microchip?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    vaccineUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerTel?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metadata?: EventRegisterUpdatemetadataInput | string[]
  }

  export type EventCreateInput = {
    name: string
    description: string
    startAt: Date | string
    endAt: Date | string
    eventAt: Date | string
    location?: string | null
    facebook?: string | null
    twitter?: string | null
    website?: string | null
    isActive?: boolean
    imageUrl?: string | null
    metadata?: EventCreatemetadataInput | string[]
    EventRegister?: EventRegisterCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    startAt: Date | string
    endAt: Date | string
    eventAt: Date | string
    location?: string | null
    facebook?: string | null
    twitter?: string | null
    website?: string | null
    isActive?: boolean
    imageUrl?: string | null
    metadata?: EventCreatemetadataInput | string[]
    EventRegister?: EventRegisterUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: EventUpdatemetadataInput | string[]
    EventRegister?: EventRegisterUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: EventUpdatemetadataInput | string[]
    EventRegister?: EventRegisterUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    name: string
    description: string
    startAt: Date | string
    endAt: Date | string
    eventAt: Date | string
    location?: string | null
    facebook?: string | null
    twitter?: string | null
    website?: string | null
    isActive?: boolean
    imageUrl?: string | null
    metadata?: EventCreatemetadataInput | string[]
  }

  export type EventUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: EventUpdatemetadataInput | string[]
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: EventUpdatemetadataInput | string[]
  }

  export type CommiteeCreateInput = {
    userId?: string | null
    username: string
    name?: string | null
    role?: string
    Score?: ScoreCreateNestedManyWithoutCommiteeInput
  }

  export type CommiteeUncheckedCreateInput = {
    id?: number
    userId?: string | null
    username: string
    name?: string | null
    role?: string
    Score?: ScoreUncheckedCreateNestedManyWithoutCommiteeInput
  }

  export type CommiteeUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    Score?: ScoreUpdateManyWithoutCommiteeNestedInput
  }

  export type CommiteeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    Score?: ScoreUncheckedUpdateManyWithoutCommiteeNestedInput
  }

  export type CommiteeCreateManyInput = {
    id?: number
    userId?: string | null
    username: string
    name?: string | null
    role?: string
  }

  export type CommiteeUpdateManyMutationInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CommiteeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type BuffaloCreateInput = {
    microchip: string
    name: string
    type: TypeCreateNestedOneWithoutBuffaloInput
    Score?: ScoreCreateNestedManyWithoutBuffaloInput
  }

  export type BuffaloUncheckedCreateInput = {
    id?: number
    microchip: string
    name: string
    typeId: number
    Score?: ScoreUncheckedCreateNestedManyWithoutBuffaloInput
  }

  export type BuffaloUpdateInput = {
    microchip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: TypeUpdateOneRequiredWithoutBuffaloNestedInput
    Score?: ScoreUpdateManyWithoutBuffaloNestedInput
  }

  export type BuffaloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    microchip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    Score?: ScoreUncheckedUpdateManyWithoutBuffaloNestedInput
  }

  export type BuffaloCreateManyInput = {
    id?: number
    microchip: string
    name: string
    typeId: number
  }

  export type BuffaloUpdateManyMutationInput = {
    microchip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BuffaloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    microchip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type TypeCreateInput = {
    id: number
    name: string
    description?: string | null
    isActive?: boolean
    Buffalo?: BuffaloCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id: number
    name: string
    description?: string | null
    isActive?: boolean
    Buffalo?: BuffaloUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    Buffalo?: BuffaloUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    Buffalo?: BuffaloUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    id: number
    name: string
    description?: string | null
    isActive?: boolean
  }

  export type TypeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompetitionCreateInput = {
    id: number
    name: string
    description?: string | null
    Score?: ScoreCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateInput = {
    id: number
    name: string
    description?: string | null
    Score?: ScoreUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Score?: ScoreUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Score?: ScoreUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionCreateManyInput = {
    id: number
    name: string
    description?: string | null
  }

  export type CompetitionUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompetitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoreCreateInput = {
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commitee: CommiteeCreateNestedOneWithoutScoreInput
    buffalo: BuffaloCreateNestedOneWithoutScoreInput
    competition: CompetitionCreateNestedOneWithoutScoreInput
  }

  export type ScoreUncheckedCreateInput = {
    id?: number
    buffaloId: number
    competitionId: number
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commiteeId: number
  }

  export type ScoreUpdateInput = {
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
    commitee?: CommiteeUpdateOneRequiredWithoutScoreNestedInput
    buffalo?: BuffaloUpdateOneRequiredWithoutScoreNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutScoreNestedInput
  }

  export type ScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    buffaloId?: IntFieldUpdateOperationsInput | number
    competitionId?: IntFieldUpdateOperationsInput | number
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
    commiteeId?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreCreateManyInput = {
    id?: number
    buffaloId: number
    competitionId: number
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commiteeId: number
  }

  export type ScoreUpdateManyMutationInput = {
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    buffaloId?: IntFieldUpdateOperationsInput | number
    competitionId?: IntFieldUpdateOperationsInput | number
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
    commiteeId?: IntFieldUpdateOperationsInput | number
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

  export type EventRegisterListRelationFilter = {
    every?: EventRegisterWhereInput
    some?: EventRegisterWhereInput
    none?: EventRegisterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventRegisterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    role?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventRegisterCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    birthday?: SortOrder
    microchip?: SortOrder
    imageUrl?: SortOrder
    vaccineUrl?: SortOrder
    ownerName?: SortOrder
    ownerTel?: SortOrder
    userId?: SortOrder
    metadata?: SortOrder
  }

  export type EventRegisterAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type EventRegisterMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    birthday?: SortOrder
    microchip?: SortOrder
    imageUrl?: SortOrder
    vaccineUrl?: SortOrder
    ownerName?: SortOrder
    ownerTel?: SortOrder
    userId?: SortOrder
  }

  export type EventRegisterMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    birthday?: SortOrder
    microchip?: SortOrder
    imageUrl?: SortOrder
    vaccineUrl?: SortOrder
    ownerName?: SortOrder
    ownerTel?: SortOrder
    userId?: SortOrder
  }

  export type EventRegisterSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    eventAt?: SortOrder
    location?: SortOrder
    facebook?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    isActive?: SortOrder
    imageUrl?: SortOrder
    metadata?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    eventAt?: SortOrder
    location?: SortOrder
    facebook?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    isActive?: SortOrder
    imageUrl?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    eventAt?: SortOrder
    location?: SortOrder
    facebook?: SortOrder
    twitter?: SortOrder
    website?: SortOrder
    isActive?: SortOrder
    imageUrl?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ScoreListRelationFilter = {
    every?: ScoreWhereInput
    some?: ScoreWhereInput
    none?: ScoreWhereInput
  }

  export type ScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommiteeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type CommiteeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommiteeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type CommiteeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type CommiteeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeRelationFilter = {
    is?: TypeWhereInput
    isNot?: TypeWhereInput
  }

  export type BuffaloCountOrderByAggregateInput = {
    id?: SortOrder
    microchip?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
  }

  export type BuffaloAvgOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
  }

  export type BuffaloMaxOrderByAggregateInput = {
    id?: SortOrder
    microchip?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
  }

  export type BuffaloMinOrderByAggregateInput = {
    id?: SortOrder
    microchip?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
  }

  export type BuffaloSumOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
  }

  export type BuffaloListRelationFilter = {
    every?: BuffaloWhereInput
    some?: BuffaloWhereInput
    none?: BuffaloWhereInput
  }

  export type BuffaloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type TypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type TypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompetitionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CompetitionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CompetitionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CompetitionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommiteeRelationFilter = {
    is?: CommiteeWhereInput
    isNot?: CommiteeWhereInput
  }

  export type BuffaloRelationFilter = {
    is?: BuffaloWhereInput
    isNot?: BuffaloWhereInput
  }

  export type CompetitionRelationFilter = {
    is?: CompetitionWhereInput
    isNot?: CompetitionWhereInput
  }

  export type ScoreCountOrderByAggregateInput = {
    id?: SortOrder
    buffaloId?: SortOrder
    competitionId?: SortOrder
    body?: SortOrder
    head?: SortOrder
    neck?: SortOrder
    horn?: SortOrder
    back?: SortOrder
    commiteeId?: SortOrder
  }

  export type ScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    buffaloId?: SortOrder
    competitionId?: SortOrder
    body?: SortOrder
    head?: SortOrder
    neck?: SortOrder
    horn?: SortOrder
    back?: SortOrder
    commiteeId?: SortOrder
  }

  export type ScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    buffaloId?: SortOrder
    competitionId?: SortOrder
    body?: SortOrder
    head?: SortOrder
    neck?: SortOrder
    horn?: SortOrder
    back?: SortOrder
    commiteeId?: SortOrder
  }

  export type ScoreMinOrderByAggregateInput = {
    id?: SortOrder
    buffaloId?: SortOrder
    competitionId?: SortOrder
    body?: SortOrder
    head?: SortOrder
    neck?: SortOrder
    horn?: SortOrder
    back?: SortOrder
    commiteeId?: SortOrder
  }

  export type ScoreSumOrderByAggregateInput = {
    id?: SortOrder
    buffaloId?: SortOrder
    competitionId?: SortOrder
    body?: SortOrder
    head?: SortOrder
    neck?: SortOrder
    horn?: SortOrder
    back?: SortOrder
    commiteeId?: SortOrder
  }

  export type EventRegisterCreateNestedManyWithoutUserInput = {
    create?: XOR<EventRegisterCreateWithoutUserInput, EventRegisterUncheckedCreateWithoutUserInput> | EventRegisterCreateWithoutUserInput[] | EventRegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRegisterCreateOrConnectWithoutUserInput | EventRegisterCreateOrConnectWithoutUserInput[]
    createMany?: EventRegisterCreateManyUserInputEnvelope
    connect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
  }

  export type EventRegisterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventRegisterCreateWithoutUserInput, EventRegisterUncheckedCreateWithoutUserInput> | EventRegisterCreateWithoutUserInput[] | EventRegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRegisterCreateOrConnectWithoutUserInput | EventRegisterCreateOrConnectWithoutUserInput[]
    createMany?: EventRegisterCreateManyUserInputEnvelope
    connect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventRegisterUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventRegisterCreateWithoutUserInput, EventRegisterUncheckedCreateWithoutUserInput> | EventRegisterCreateWithoutUserInput[] | EventRegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRegisterCreateOrConnectWithoutUserInput | EventRegisterCreateOrConnectWithoutUserInput[]
    upsert?: EventRegisterUpsertWithWhereUniqueWithoutUserInput | EventRegisterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventRegisterCreateManyUserInputEnvelope
    set?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    disconnect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    delete?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    connect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    update?: EventRegisterUpdateWithWhereUniqueWithoutUserInput | EventRegisterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventRegisterUpdateManyWithWhereWithoutUserInput | EventRegisterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventRegisterScalarWhereInput | EventRegisterScalarWhereInput[]
  }

  export type EventRegisterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventRegisterCreateWithoutUserInput, EventRegisterUncheckedCreateWithoutUserInput> | EventRegisterCreateWithoutUserInput[] | EventRegisterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRegisterCreateOrConnectWithoutUserInput | EventRegisterCreateOrConnectWithoutUserInput[]
    upsert?: EventRegisterUpsertWithWhereUniqueWithoutUserInput | EventRegisterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventRegisterCreateManyUserInputEnvelope
    set?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    disconnect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    delete?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    connect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    update?: EventRegisterUpdateWithWhereUniqueWithoutUserInput | EventRegisterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventRegisterUpdateManyWithWhereWithoutUserInput | EventRegisterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventRegisterScalarWhereInput | EventRegisterScalarWhereInput[]
  }

  export type EventRegisterCreatemetadataInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutEventRegisterInput = {
    create?: XOR<UserCreateWithoutEventRegisterInput, UserUncheckedCreateWithoutEventRegisterInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventRegisterInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutEventRegisterInput = {
    create?: XOR<EventCreateWithoutEventRegisterInput, EventUncheckedCreateWithoutEventRegisterInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventRegisterInput
    connect?: EventWhereUniqueInput
  }

  export type EventRegisterUpdatemetadataInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutEventRegisterNestedInput = {
    create?: XOR<UserCreateWithoutEventRegisterInput, UserUncheckedCreateWithoutEventRegisterInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventRegisterInput
    upsert?: UserUpsertWithoutEventRegisterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventRegisterInput, UserUpdateWithoutEventRegisterInput>, UserUncheckedUpdateWithoutEventRegisterInput>
  }

  export type EventUpdateOneRequiredWithoutEventRegisterNestedInput = {
    create?: XOR<EventCreateWithoutEventRegisterInput, EventUncheckedCreateWithoutEventRegisterInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventRegisterInput
    upsert?: EventUpsertWithoutEventRegisterInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventRegisterInput, EventUpdateWithoutEventRegisterInput>, EventUncheckedUpdateWithoutEventRegisterInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventCreatemetadataInput = {
    set: string[]
  }

  export type EventRegisterCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRegisterCreateWithoutEventInput, EventRegisterUncheckedCreateWithoutEventInput> | EventRegisterCreateWithoutEventInput[] | EventRegisterUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegisterCreateOrConnectWithoutEventInput | EventRegisterCreateOrConnectWithoutEventInput[]
    createMany?: EventRegisterCreateManyEventInputEnvelope
    connect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
  }

  export type EventRegisterUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRegisterCreateWithoutEventInput, EventRegisterUncheckedCreateWithoutEventInput> | EventRegisterCreateWithoutEventInput[] | EventRegisterUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegisterCreateOrConnectWithoutEventInput | EventRegisterCreateOrConnectWithoutEventInput[]
    createMany?: EventRegisterCreateManyEventInputEnvelope
    connect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventUpdatemetadataInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventRegisterUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRegisterCreateWithoutEventInput, EventRegisterUncheckedCreateWithoutEventInput> | EventRegisterCreateWithoutEventInput[] | EventRegisterUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegisterCreateOrConnectWithoutEventInput | EventRegisterCreateOrConnectWithoutEventInput[]
    upsert?: EventRegisterUpsertWithWhereUniqueWithoutEventInput | EventRegisterUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRegisterCreateManyEventInputEnvelope
    set?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    disconnect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    delete?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    connect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    update?: EventRegisterUpdateWithWhereUniqueWithoutEventInput | EventRegisterUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRegisterUpdateManyWithWhereWithoutEventInput | EventRegisterUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRegisterScalarWhereInput | EventRegisterScalarWhereInput[]
  }

  export type EventRegisterUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRegisterCreateWithoutEventInput, EventRegisterUncheckedCreateWithoutEventInput> | EventRegisterCreateWithoutEventInput[] | EventRegisterUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRegisterCreateOrConnectWithoutEventInput | EventRegisterCreateOrConnectWithoutEventInput[]
    upsert?: EventRegisterUpsertWithWhereUniqueWithoutEventInput | EventRegisterUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRegisterCreateManyEventInputEnvelope
    set?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    disconnect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    delete?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    connect?: EventRegisterWhereUniqueInput | EventRegisterWhereUniqueInput[]
    update?: EventRegisterUpdateWithWhereUniqueWithoutEventInput | EventRegisterUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRegisterUpdateManyWithWhereWithoutEventInput | EventRegisterUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRegisterScalarWhereInput | EventRegisterScalarWhereInput[]
  }

  export type ScoreCreateNestedManyWithoutCommiteeInput = {
    create?: XOR<ScoreCreateWithoutCommiteeInput, ScoreUncheckedCreateWithoutCommiteeInput> | ScoreCreateWithoutCommiteeInput[] | ScoreUncheckedCreateWithoutCommiteeInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutCommiteeInput | ScoreCreateOrConnectWithoutCommiteeInput[]
    createMany?: ScoreCreateManyCommiteeInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutCommiteeInput = {
    create?: XOR<ScoreCreateWithoutCommiteeInput, ScoreUncheckedCreateWithoutCommiteeInput> | ScoreCreateWithoutCommiteeInput[] | ScoreUncheckedCreateWithoutCommiteeInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutCommiteeInput | ScoreCreateOrConnectWithoutCommiteeInput[]
    createMany?: ScoreCreateManyCommiteeInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type ScoreUpdateManyWithoutCommiteeNestedInput = {
    create?: XOR<ScoreCreateWithoutCommiteeInput, ScoreUncheckedCreateWithoutCommiteeInput> | ScoreCreateWithoutCommiteeInput[] | ScoreUncheckedCreateWithoutCommiteeInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutCommiteeInput | ScoreCreateOrConnectWithoutCommiteeInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutCommiteeInput | ScoreUpsertWithWhereUniqueWithoutCommiteeInput[]
    createMany?: ScoreCreateManyCommiteeInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutCommiteeInput | ScoreUpdateWithWhereUniqueWithoutCommiteeInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutCommiteeInput | ScoreUpdateManyWithWhereWithoutCommiteeInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutCommiteeNestedInput = {
    create?: XOR<ScoreCreateWithoutCommiteeInput, ScoreUncheckedCreateWithoutCommiteeInput> | ScoreCreateWithoutCommiteeInput[] | ScoreUncheckedCreateWithoutCommiteeInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutCommiteeInput | ScoreCreateOrConnectWithoutCommiteeInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutCommiteeInput | ScoreUpsertWithWhereUniqueWithoutCommiteeInput[]
    createMany?: ScoreCreateManyCommiteeInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutCommiteeInput | ScoreUpdateWithWhereUniqueWithoutCommiteeInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutCommiteeInput | ScoreUpdateManyWithWhereWithoutCommiteeInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type TypeCreateNestedOneWithoutBuffaloInput = {
    create?: XOR<TypeCreateWithoutBuffaloInput, TypeUncheckedCreateWithoutBuffaloInput>
    connectOrCreate?: TypeCreateOrConnectWithoutBuffaloInput
    connect?: TypeWhereUniqueInput
  }

  export type ScoreCreateNestedManyWithoutBuffaloInput = {
    create?: XOR<ScoreCreateWithoutBuffaloInput, ScoreUncheckedCreateWithoutBuffaloInput> | ScoreCreateWithoutBuffaloInput[] | ScoreUncheckedCreateWithoutBuffaloInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutBuffaloInput | ScoreCreateOrConnectWithoutBuffaloInput[]
    createMany?: ScoreCreateManyBuffaloInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutBuffaloInput = {
    create?: XOR<ScoreCreateWithoutBuffaloInput, ScoreUncheckedCreateWithoutBuffaloInput> | ScoreCreateWithoutBuffaloInput[] | ScoreUncheckedCreateWithoutBuffaloInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutBuffaloInput | ScoreCreateOrConnectWithoutBuffaloInput[]
    createMany?: ScoreCreateManyBuffaloInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type TypeUpdateOneRequiredWithoutBuffaloNestedInput = {
    create?: XOR<TypeCreateWithoutBuffaloInput, TypeUncheckedCreateWithoutBuffaloInput>
    connectOrCreate?: TypeCreateOrConnectWithoutBuffaloInput
    upsert?: TypeUpsertWithoutBuffaloInput
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutBuffaloInput, TypeUpdateWithoutBuffaloInput>, TypeUncheckedUpdateWithoutBuffaloInput>
  }

  export type ScoreUpdateManyWithoutBuffaloNestedInput = {
    create?: XOR<ScoreCreateWithoutBuffaloInput, ScoreUncheckedCreateWithoutBuffaloInput> | ScoreCreateWithoutBuffaloInput[] | ScoreUncheckedCreateWithoutBuffaloInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutBuffaloInput | ScoreCreateOrConnectWithoutBuffaloInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutBuffaloInput | ScoreUpsertWithWhereUniqueWithoutBuffaloInput[]
    createMany?: ScoreCreateManyBuffaloInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutBuffaloInput | ScoreUpdateWithWhereUniqueWithoutBuffaloInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutBuffaloInput | ScoreUpdateManyWithWhereWithoutBuffaloInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutBuffaloNestedInput = {
    create?: XOR<ScoreCreateWithoutBuffaloInput, ScoreUncheckedCreateWithoutBuffaloInput> | ScoreCreateWithoutBuffaloInput[] | ScoreUncheckedCreateWithoutBuffaloInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutBuffaloInput | ScoreCreateOrConnectWithoutBuffaloInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutBuffaloInput | ScoreUpsertWithWhereUniqueWithoutBuffaloInput[]
    createMany?: ScoreCreateManyBuffaloInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutBuffaloInput | ScoreUpdateWithWhereUniqueWithoutBuffaloInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutBuffaloInput | ScoreUpdateManyWithWhereWithoutBuffaloInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type BuffaloCreateNestedManyWithoutTypeInput = {
    create?: XOR<BuffaloCreateWithoutTypeInput, BuffaloUncheckedCreateWithoutTypeInput> | BuffaloCreateWithoutTypeInput[] | BuffaloUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: BuffaloCreateOrConnectWithoutTypeInput | BuffaloCreateOrConnectWithoutTypeInput[]
    createMany?: BuffaloCreateManyTypeInputEnvelope
    connect?: BuffaloWhereUniqueInput | BuffaloWhereUniqueInput[]
  }

  export type BuffaloUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<BuffaloCreateWithoutTypeInput, BuffaloUncheckedCreateWithoutTypeInput> | BuffaloCreateWithoutTypeInput[] | BuffaloUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: BuffaloCreateOrConnectWithoutTypeInput | BuffaloCreateOrConnectWithoutTypeInput[]
    createMany?: BuffaloCreateManyTypeInputEnvelope
    connect?: BuffaloWhereUniqueInput | BuffaloWhereUniqueInput[]
  }

  export type BuffaloUpdateManyWithoutTypeNestedInput = {
    create?: XOR<BuffaloCreateWithoutTypeInput, BuffaloUncheckedCreateWithoutTypeInput> | BuffaloCreateWithoutTypeInput[] | BuffaloUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: BuffaloCreateOrConnectWithoutTypeInput | BuffaloCreateOrConnectWithoutTypeInput[]
    upsert?: BuffaloUpsertWithWhereUniqueWithoutTypeInput | BuffaloUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: BuffaloCreateManyTypeInputEnvelope
    set?: BuffaloWhereUniqueInput | BuffaloWhereUniqueInput[]
    disconnect?: BuffaloWhereUniqueInput | BuffaloWhereUniqueInput[]
    delete?: BuffaloWhereUniqueInput | BuffaloWhereUniqueInput[]
    connect?: BuffaloWhereUniqueInput | BuffaloWhereUniqueInput[]
    update?: BuffaloUpdateWithWhereUniqueWithoutTypeInput | BuffaloUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: BuffaloUpdateManyWithWhereWithoutTypeInput | BuffaloUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: BuffaloScalarWhereInput | BuffaloScalarWhereInput[]
  }

  export type BuffaloUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<BuffaloCreateWithoutTypeInput, BuffaloUncheckedCreateWithoutTypeInput> | BuffaloCreateWithoutTypeInput[] | BuffaloUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: BuffaloCreateOrConnectWithoutTypeInput | BuffaloCreateOrConnectWithoutTypeInput[]
    upsert?: BuffaloUpsertWithWhereUniqueWithoutTypeInput | BuffaloUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: BuffaloCreateManyTypeInputEnvelope
    set?: BuffaloWhereUniqueInput | BuffaloWhereUniqueInput[]
    disconnect?: BuffaloWhereUniqueInput | BuffaloWhereUniqueInput[]
    delete?: BuffaloWhereUniqueInput | BuffaloWhereUniqueInput[]
    connect?: BuffaloWhereUniqueInput | BuffaloWhereUniqueInput[]
    update?: BuffaloUpdateWithWhereUniqueWithoutTypeInput | BuffaloUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: BuffaloUpdateManyWithWhereWithoutTypeInput | BuffaloUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: BuffaloScalarWhereInput | BuffaloScalarWhereInput[]
  }

  export type ScoreCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<ScoreCreateWithoutCompetitionInput, ScoreUncheckedCreateWithoutCompetitionInput> | ScoreCreateWithoutCompetitionInput[] | ScoreUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutCompetitionInput | ScoreCreateOrConnectWithoutCompetitionInput[]
    createMany?: ScoreCreateManyCompetitionInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<ScoreCreateWithoutCompetitionInput, ScoreUncheckedCreateWithoutCompetitionInput> | ScoreCreateWithoutCompetitionInput[] | ScoreUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutCompetitionInput | ScoreCreateOrConnectWithoutCompetitionInput[]
    createMany?: ScoreCreateManyCompetitionInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type ScoreUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<ScoreCreateWithoutCompetitionInput, ScoreUncheckedCreateWithoutCompetitionInput> | ScoreCreateWithoutCompetitionInput[] | ScoreUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutCompetitionInput | ScoreCreateOrConnectWithoutCompetitionInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutCompetitionInput | ScoreUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: ScoreCreateManyCompetitionInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutCompetitionInput | ScoreUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutCompetitionInput | ScoreUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<ScoreCreateWithoutCompetitionInput, ScoreUncheckedCreateWithoutCompetitionInput> | ScoreCreateWithoutCompetitionInput[] | ScoreUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutCompetitionInput | ScoreCreateOrConnectWithoutCompetitionInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutCompetitionInput | ScoreUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: ScoreCreateManyCompetitionInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutCompetitionInput | ScoreUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutCompetitionInput | ScoreUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type CommiteeCreateNestedOneWithoutScoreInput = {
    create?: XOR<CommiteeCreateWithoutScoreInput, CommiteeUncheckedCreateWithoutScoreInput>
    connectOrCreate?: CommiteeCreateOrConnectWithoutScoreInput
    connect?: CommiteeWhereUniqueInput
  }

  export type BuffaloCreateNestedOneWithoutScoreInput = {
    create?: XOR<BuffaloCreateWithoutScoreInput, BuffaloUncheckedCreateWithoutScoreInput>
    connectOrCreate?: BuffaloCreateOrConnectWithoutScoreInput
    connect?: BuffaloWhereUniqueInput
  }

  export type CompetitionCreateNestedOneWithoutScoreInput = {
    create?: XOR<CompetitionCreateWithoutScoreInput, CompetitionUncheckedCreateWithoutScoreInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutScoreInput
    connect?: CompetitionWhereUniqueInput
  }

  export type CommiteeUpdateOneRequiredWithoutScoreNestedInput = {
    create?: XOR<CommiteeCreateWithoutScoreInput, CommiteeUncheckedCreateWithoutScoreInput>
    connectOrCreate?: CommiteeCreateOrConnectWithoutScoreInput
    upsert?: CommiteeUpsertWithoutScoreInput
    connect?: CommiteeWhereUniqueInput
    update?: XOR<XOR<CommiteeUpdateToOneWithWhereWithoutScoreInput, CommiteeUpdateWithoutScoreInput>, CommiteeUncheckedUpdateWithoutScoreInput>
  }

  export type BuffaloUpdateOneRequiredWithoutScoreNestedInput = {
    create?: XOR<BuffaloCreateWithoutScoreInput, BuffaloUncheckedCreateWithoutScoreInput>
    connectOrCreate?: BuffaloCreateOrConnectWithoutScoreInput
    upsert?: BuffaloUpsertWithoutScoreInput
    connect?: BuffaloWhereUniqueInput
    update?: XOR<XOR<BuffaloUpdateToOneWithWhereWithoutScoreInput, BuffaloUpdateWithoutScoreInput>, BuffaloUncheckedUpdateWithoutScoreInput>
  }

  export type CompetitionUpdateOneRequiredWithoutScoreNestedInput = {
    create?: XOR<CompetitionCreateWithoutScoreInput, CompetitionUncheckedCreateWithoutScoreInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutScoreInput
    upsert?: CompetitionUpsertWithoutScoreInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<XOR<CompetitionUpdateToOneWithWhereWithoutScoreInput, CompetitionUpdateWithoutScoreInput>, CompetitionUncheckedUpdateWithoutScoreInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EventRegisterCreateWithoutUserInput = {
    type: string
    level: string
    name: string
    gender: string
    color: string
    birthday: string
    microchip: string
    imageUrl: string
    vaccineUrl: string
    ownerName: string
    ownerTel: string
    metadata?: EventRegisterCreatemetadataInput | string[]
    event: EventCreateNestedOneWithoutEventRegisterInput
  }

  export type EventRegisterUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
    type: string
    level: string
    name: string
    gender: string
    color: string
    birthday: string
    microchip: string
    imageUrl: string
    vaccineUrl: string
    ownerName: string
    ownerTel: string
    metadata?: EventRegisterCreatemetadataInput | string[]
  }

  export type EventRegisterCreateOrConnectWithoutUserInput = {
    where: EventRegisterWhereUniqueInput
    create: XOR<EventRegisterCreateWithoutUserInput, EventRegisterUncheckedCreateWithoutUserInput>
  }

  export type EventRegisterCreateManyUserInputEnvelope = {
    data: EventRegisterCreateManyUserInput | EventRegisterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventRegisterUpsertWithWhereUniqueWithoutUserInput = {
    where: EventRegisterWhereUniqueInput
    update: XOR<EventRegisterUpdateWithoutUserInput, EventRegisterUncheckedUpdateWithoutUserInput>
    create: XOR<EventRegisterCreateWithoutUserInput, EventRegisterUncheckedCreateWithoutUserInput>
  }

  export type EventRegisterUpdateWithWhereUniqueWithoutUserInput = {
    where: EventRegisterWhereUniqueInput
    data: XOR<EventRegisterUpdateWithoutUserInput, EventRegisterUncheckedUpdateWithoutUserInput>
  }

  export type EventRegisterUpdateManyWithWhereWithoutUserInput = {
    where: EventRegisterScalarWhereInput
    data: XOR<EventRegisterUpdateManyMutationInput, EventRegisterUncheckedUpdateManyWithoutUserInput>
  }

  export type EventRegisterScalarWhereInput = {
    AND?: EventRegisterScalarWhereInput | EventRegisterScalarWhereInput[]
    OR?: EventRegisterScalarWhereInput[]
    NOT?: EventRegisterScalarWhereInput | EventRegisterScalarWhereInput[]
    id?: IntFilter<"EventRegister"> | number
    eventId?: IntFilter<"EventRegister"> | number
    type?: StringFilter<"EventRegister"> | string
    level?: StringFilter<"EventRegister"> | string
    name?: StringFilter<"EventRegister"> | string
    gender?: StringFilter<"EventRegister"> | string
    color?: StringFilter<"EventRegister"> | string
    birthday?: StringFilter<"EventRegister"> | string
    microchip?: StringFilter<"EventRegister"> | string
    imageUrl?: StringFilter<"EventRegister"> | string
    vaccineUrl?: StringFilter<"EventRegister"> | string
    ownerName?: StringFilter<"EventRegister"> | string
    ownerTel?: StringFilter<"EventRegister"> | string
    userId?: StringFilter<"EventRegister"> | string
    metadata?: StringNullableListFilter<"EventRegister">
  }

  export type UserCreateWithoutEventRegisterInput = {
    userId: string
    name: string
    email?: string | null
    tel: string
    role: string
  }

  export type UserUncheckedCreateWithoutEventRegisterInput = {
    userId: string
    name: string
    email?: string | null
    tel: string
    role: string
  }

  export type UserCreateOrConnectWithoutEventRegisterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventRegisterInput, UserUncheckedCreateWithoutEventRegisterInput>
  }

  export type EventCreateWithoutEventRegisterInput = {
    name: string
    description: string
    startAt: Date | string
    endAt: Date | string
    eventAt: Date | string
    location?: string | null
    facebook?: string | null
    twitter?: string | null
    website?: string | null
    isActive?: boolean
    imageUrl?: string | null
    metadata?: EventCreatemetadataInput | string[]
  }

  export type EventUncheckedCreateWithoutEventRegisterInput = {
    id?: number
    name: string
    description: string
    startAt: Date | string
    endAt: Date | string
    eventAt: Date | string
    location?: string | null
    facebook?: string | null
    twitter?: string | null
    website?: string | null
    isActive?: boolean
    imageUrl?: string | null
    metadata?: EventCreatemetadataInput | string[]
  }

  export type EventCreateOrConnectWithoutEventRegisterInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventRegisterInput, EventUncheckedCreateWithoutEventRegisterInput>
  }

  export type UserUpsertWithoutEventRegisterInput = {
    update: XOR<UserUpdateWithoutEventRegisterInput, UserUncheckedUpdateWithoutEventRegisterInput>
    create: XOR<UserCreateWithoutEventRegisterInput, UserUncheckedCreateWithoutEventRegisterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventRegisterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventRegisterInput, UserUncheckedUpdateWithoutEventRegisterInput>
  }

  export type UserUpdateWithoutEventRegisterInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutEventRegisterInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpsertWithoutEventRegisterInput = {
    update: XOR<EventUpdateWithoutEventRegisterInput, EventUncheckedUpdateWithoutEventRegisterInput>
    create: XOR<EventCreateWithoutEventRegisterInput, EventUncheckedCreateWithoutEventRegisterInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventRegisterInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventRegisterInput, EventUncheckedUpdateWithoutEventRegisterInput>
  }

  export type EventUpdateWithoutEventRegisterInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: EventUpdatemetadataInput | string[]
  }

  export type EventUncheckedUpdateWithoutEventRegisterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: EventUpdatemetadataInput | string[]
  }

  export type EventRegisterCreateWithoutEventInput = {
    type: string
    level: string
    name: string
    gender: string
    color: string
    birthday: string
    microchip: string
    imageUrl: string
    vaccineUrl: string
    ownerName: string
    ownerTel: string
    metadata?: EventRegisterCreatemetadataInput | string[]
    user: UserCreateNestedOneWithoutEventRegisterInput
  }

  export type EventRegisterUncheckedCreateWithoutEventInput = {
    id?: number
    type: string
    level: string
    name: string
    gender: string
    color: string
    birthday: string
    microchip: string
    imageUrl: string
    vaccineUrl: string
    ownerName: string
    ownerTel: string
    userId: string
    metadata?: EventRegisterCreatemetadataInput | string[]
  }

  export type EventRegisterCreateOrConnectWithoutEventInput = {
    where: EventRegisterWhereUniqueInput
    create: XOR<EventRegisterCreateWithoutEventInput, EventRegisterUncheckedCreateWithoutEventInput>
  }

  export type EventRegisterCreateManyEventInputEnvelope = {
    data: EventRegisterCreateManyEventInput | EventRegisterCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventRegisterUpsertWithWhereUniqueWithoutEventInput = {
    where: EventRegisterWhereUniqueInput
    update: XOR<EventRegisterUpdateWithoutEventInput, EventRegisterUncheckedUpdateWithoutEventInput>
    create: XOR<EventRegisterCreateWithoutEventInput, EventRegisterUncheckedCreateWithoutEventInput>
  }

  export type EventRegisterUpdateWithWhereUniqueWithoutEventInput = {
    where: EventRegisterWhereUniqueInput
    data: XOR<EventRegisterUpdateWithoutEventInput, EventRegisterUncheckedUpdateWithoutEventInput>
  }

  export type EventRegisterUpdateManyWithWhereWithoutEventInput = {
    where: EventRegisterScalarWhereInput
    data: XOR<EventRegisterUpdateManyMutationInput, EventRegisterUncheckedUpdateManyWithoutEventInput>
  }

  export type ScoreCreateWithoutCommiteeInput = {
    body: number
    head: number
    neck: number
    horn: number
    back: number
    buffalo: BuffaloCreateNestedOneWithoutScoreInput
    competition: CompetitionCreateNestedOneWithoutScoreInput
  }

  export type ScoreUncheckedCreateWithoutCommiteeInput = {
    id?: number
    buffaloId: number
    competitionId: number
    body: number
    head: number
    neck: number
    horn: number
    back: number
  }

  export type ScoreCreateOrConnectWithoutCommiteeInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutCommiteeInput, ScoreUncheckedCreateWithoutCommiteeInput>
  }

  export type ScoreCreateManyCommiteeInputEnvelope = {
    data: ScoreCreateManyCommiteeInput | ScoreCreateManyCommiteeInput[]
    skipDuplicates?: boolean
  }

  export type ScoreUpsertWithWhereUniqueWithoutCommiteeInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutCommiteeInput, ScoreUncheckedUpdateWithoutCommiteeInput>
    create: XOR<ScoreCreateWithoutCommiteeInput, ScoreUncheckedCreateWithoutCommiteeInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutCommiteeInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutCommiteeInput, ScoreUncheckedUpdateWithoutCommiteeInput>
  }

  export type ScoreUpdateManyWithWhereWithoutCommiteeInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutCommiteeInput>
  }

  export type ScoreScalarWhereInput = {
    AND?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    OR?: ScoreScalarWhereInput[]
    NOT?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    id?: IntFilter<"Score"> | number
    buffaloId?: IntFilter<"Score"> | number
    competitionId?: IntFilter<"Score"> | number
    body?: IntFilter<"Score"> | number
    head?: IntFilter<"Score"> | number
    neck?: IntFilter<"Score"> | number
    horn?: IntFilter<"Score"> | number
    back?: IntFilter<"Score"> | number
    commiteeId?: IntFilter<"Score"> | number
  }

  export type TypeCreateWithoutBuffaloInput = {
    id: number
    name: string
    description?: string | null
    isActive?: boolean
  }

  export type TypeUncheckedCreateWithoutBuffaloInput = {
    id: number
    name: string
    description?: string | null
    isActive?: boolean
  }

  export type TypeCreateOrConnectWithoutBuffaloInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutBuffaloInput, TypeUncheckedCreateWithoutBuffaloInput>
  }

  export type ScoreCreateWithoutBuffaloInput = {
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commitee: CommiteeCreateNestedOneWithoutScoreInput
    competition: CompetitionCreateNestedOneWithoutScoreInput
  }

  export type ScoreUncheckedCreateWithoutBuffaloInput = {
    id?: number
    competitionId: number
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commiteeId: number
  }

  export type ScoreCreateOrConnectWithoutBuffaloInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutBuffaloInput, ScoreUncheckedCreateWithoutBuffaloInput>
  }

  export type ScoreCreateManyBuffaloInputEnvelope = {
    data: ScoreCreateManyBuffaloInput | ScoreCreateManyBuffaloInput[]
    skipDuplicates?: boolean
  }

  export type TypeUpsertWithoutBuffaloInput = {
    update: XOR<TypeUpdateWithoutBuffaloInput, TypeUncheckedUpdateWithoutBuffaloInput>
    create: XOR<TypeCreateWithoutBuffaloInput, TypeUncheckedCreateWithoutBuffaloInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutBuffaloInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutBuffaloInput, TypeUncheckedUpdateWithoutBuffaloInput>
  }

  export type TypeUpdateWithoutBuffaloInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TypeUncheckedUpdateWithoutBuffaloInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ScoreUpsertWithWhereUniqueWithoutBuffaloInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutBuffaloInput, ScoreUncheckedUpdateWithoutBuffaloInput>
    create: XOR<ScoreCreateWithoutBuffaloInput, ScoreUncheckedCreateWithoutBuffaloInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutBuffaloInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutBuffaloInput, ScoreUncheckedUpdateWithoutBuffaloInput>
  }

  export type ScoreUpdateManyWithWhereWithoutBuffaloInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutBuffaloInput>
  }

  export type BuffaloCreateWithoutTypeInput = {
    microchip: string
    name: string
    Score?: ScoreCreateNestedManyWithoutBuffaloInput
  }

  export type BuffaloUncheckedCreateWithoutTypeInput = {
    id?: number
    microchip: string
    name: string
    Score?: ScoreUncheckedCreateNestedManyWithoutBuffaloInput
  }

  export type BuffaloCreateOrConnectWithoutTypeInput = {
    where: BuffaloWhereUniqueInput
    create: XOR<BuffaloCreateWithoutTypeInput, BuffaloUncheckedCreateWithoutTypeInput>
  }

  export type BuffaloCreateManyTypeInputEnvelope = {
    data: BuffaloCreateManyTypeInput | BuffaloCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type BuffaloUpsertWithWhereUniqueWithoutTypeInput = {
    where: BuffaloWhereUniqueInput
    update: XOR<BuffaloUpdateWithoutTypeInput, BuffaloUncheckedUpdateWithoutTypeInput>
    create: XOR<BuffaloCreateWithoutTypeInput, BuffaloUncheckedCreateWithoutTypeInput>
  }

  export type BuffaloUpdateWithWhereUniqueWithoutTypeInput = {
    where: BuffaloWhereUniqueInput
    data: XOR<BuffaloUpdateWithoutTypeInput, BuffaloUncheckedUpdateWithoutTypeInput>
  }

  export type BuffaloUpdateManyWithWhereWithoutTypeInput = {
    where: BuffaloScalarWhereInput
    data: XOR<BuffaloUpdateManyMutationInput, BuffaloUncheckedUpdateManyWithoutTypeInput>
  }

  export type BuffaloScalarWhereInput = {
    AND?: BuffaloScalarWhereInput | BuffaloScalarWhereInput[]
    OR?: BuffaloScalarWhereInput[]
    NOT?: BuffaloScalarWhereInput | BuffaloScalarWhereInput[]
    id?: IntFilter<"Buffalo"> | number
    microchip?: StringFilter<"Buffalo"> | string
    name?: StringFilter<"Buffalo"> | string
    typeId?: IntFilter<"Buffalo"> | number
  }

  export type ScoreCreateWithoutCompetitionInput = {
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commitee: CommiteeCreateNestedOneWithoutScoreInput
    buffalo: BuffaloCreateNestedOneWithoutScoreInput
  }

  export type ScoreUncheckedCreateWithoutCompetitionInput = {
    id?: number
    buffaloId: number
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commiteeId: number
  }

  export type ScoreCreateOrConnectWithoutCompetitionInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutCompetitionInput, ScoreUncheckedCreateWithoutCompetitionInput>
  }

  export type ScoreCreateManyCompetitionInputEnvelope = {
    data: ScoreCreateManyCompetitionInput | ScoreCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type ScoreUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutCompetitionInput, ScoreUncheckedUpdateWithoutCompetitionInput>
    create: XOR<ScoreCreateWithoutCompetitionInput, ScoreUncheckedCreateWithoutCompetitionInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutCompetitionInput, ScoreUncheckedUpdateWithoutCompetitionInput>
  }

  export type ScoreUpdateManyWithWhereWithoutCompetitionInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type CommiteeCreateWithoutScoreInput = {
    userId?: string | null
    username: string
    name?: string | null
    role?: string
  }

  export type CommiteeUncheckedCreateWithoutScoreInput = {
    id?: number
    userId?: string | null
    username: string
    name?: string | null
    role?: string
  }

  export type CommiteeCreateOrConnectWithoutScoreInput = {
    where: CommiteeWhereUniqueInput
    create: XOR<CommiteeCreateWithoutScoreInput, CommiteeUncheckedCreateWithoutScoreInput>
  }

  export type BuffaloCreateWithoutScoreInput = {
    microchip: string
    name: string
    type: TypeCreateNestedOneWithoutBuffaloInput
  }

  export type BuffaloUncheckedCreateWithoutScoreInput = {
    id?: number
    microchip: string
    name: string
    typeId: number
  }

  export type BuffaloCreateOrConnectWithoutScoreInput = {
    where: BuffaloWhereUniqueInput
    create: XOR<BuffaloCreateWithoutScoreInput, BuffaloUncheckedCreateWithoutScoreInput>
  }

  export type CompetitionCreateWithoutScoreInput = {
    id: number
    name: string
    description?: string | null
  }

  export type CompetitionUncheckedCreateWithoutScoreInput = {
    id: number
    name: string
    description?: string | null
  }

  export type CompetitionCreateOrConnectWithoutScoreInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutScoreInput, CompetitionUncheckedCreateWithoutScoreInput>
  }

  export type CommiteeUpsertWithoutScoreInput = {
    update: XOR<CommiteeUpdateWithoutScoreInput, CommiteeUncheckedUpdateWithoutScoreInput>
    create: XOR<CommiteeCreateWithoutScoreInput, CommiteeUncheckedCreateWithoutScoreInput>
    where?: CommiteeWhereInput
  }

  export type CommiteeUpdateToOneWithWhereWithoutScoreInput = {
    where?: CommiteeWhereInput
    data: XOR<CommiteeUpdateWithoutScoreInput, CommiteeUncheckedUpdateWithoutScoreInput>
  }

  export type CommiteeUpdateWithoutScoreInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CommiteeUncheckedUpdateWithoutScoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type BuffaloUpsertWithoutScoreInput = {
    update: XOR<BuffaloUpdateWithoutScoreInput, BuffaloUncheckedUpdateWithoutScoreInput>
    create: XOR<BuffaloCreateWithoutScoreInput, BuffaloUncheckedCreateWithoutScoreInput>
    where?: BuffaloWhereInput
  }

  export type BuffaloUpdateToOneWithWhereWithoutScoreInput = {
    where?: BuffaloWhereInput
    data: XOR<BuffaloUpdateWithoutScoreInput, BuffaloUncheckedUpdateWithoutScoreInput>
  }

  export type BuffaloUpdateWithoutScoreInput = {
    microchip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: TypeUpdateOneRequiredWithoutBuffaloNestedInput
  }

  export type BuffaloUncheckedUpdateWithoutScoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    microchip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type CompetitionUpsertWithoutScoreInput = {
    update: XOR<CompetitionUpdateWithoutScoreInput, CompetitionUncheckedUpdateWithoutScoreInput>
    create: XOR<CompetitionCreateWithoutScoreInput, CompetitionUncheckedCreateWithoutScoreInput>
    where?: CompetitionWhereInput
  }

  export type CompetitionUpdateToOneWithWhereWithoutScoreInput = {
    where?: CompetitionWhereInput
    data: XOR<CompetitionUpdateWithoutScoreInput, CompetitionUncheckedUpdateWithoutScoreInput>
  }

  export type CompetitionUpdateWithoutScoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompetitionUncheckedUpdateWithoutScoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventRegisterCreateManyUserInput = {
    id?: number
    eventId: number
    type: string
    level: string
    name: string
    gender: string
    color: string
    birthday: string
    microchip: string
    imageUrl: string
    vaccineUrl: string
    ownerName: string
    ownerTel: string
    metadata?: EventRegisterCreatemetadataInput | string[]
  }

  export type EventRegisterUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    microchip?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    vaccineUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerTel?: StringFieldUpdateOperationsInput | string
    metadata?: EventRegisterUpdatemetadataInput | string[]
    event?: EventUpdateOneRequiredWithoutEventRegisterNestedInput
  }

  export type EventRegisterUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    microchip?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    vaccineUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerTel?: StringFieldUpdateOperationsInput | string
    metadata?: EventRegisterUpdatemetadataInput | string[]
  }

  export type EventRegisterUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    microchip?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    vaccineUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerTel?: StringFieldUpdateOperationsInput | string
    metadata?: EventRegisterUpdatemetadataInput | string[]
  }

  export type EventRegisterCreateManyEventInput = {
    id?: number
    type: string
    level: string
    name: string
    gender: string
    color: string
    birthday: string
    microchip: string
    imageUrl: string
    vaccineUrl: string
    ownerName: string
    ownerTel: string
    userId: string
    metadata?: EventRegisterCreatemetadataInput | string[]
  }

  export type EventRegisterUpdateWithoutEventInput = {
    type?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    microchip?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    vaccineUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerTel?: StringFieldUpdateOperationsInput | string
    metadata?: EventRegisterUpdatemetadataInput | string[]
    user?: UserUpdateOneRequiredWithoutEventRegisterNestedInput
  }

  export type EventRegisterUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    microchip?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    vaccineUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerTel?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metadata?: EventRegisterUpdatemetadataInput | string[]
  }

  export type EventRegisterUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    microchip?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    vaccineUrl?: StringFieldUpdateOperationsInput | string
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerTel?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metadata?: EventRegisterUpdatemetadataInput | string[]
  }

  export type ScoreCreateManyCommiteeInput = {
    id?: number
    buffaloId: number
    competitionId: number
    body: number
    head: number
    neck: number
    horn: number
    back: number
  }

  export type ScoreUpdateWithoutCommiteeInput = {
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
    buffalo?: BuffaloUpdateOneRequiredWithoutScoreNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutScoreNestedInput
  }

  export type ScoreUncheckedUpdateWithoutCommiteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    buffaloId?: IntFieldUpdateOperationsInput | number
    competitionId?: IntFieldUpdateOperationsInput | number
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreUncheckedUpdateManyWithoutCommiteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    buffaloId?: IntFieldUpdateOperationsInput | number
    competitionId?: IntFieldUpdateOperationsInput | number
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreCreateManyBuffaloInput = {
    id?: number
    competitionId: number
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commiteeId: number
  }

  export type ScoreUpdateWithoutBuffaloInput = {
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
    commitee?: CommiteeUpdateOneRequiredWithoutScoreNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutScoreNestedInput
  }

  export type ScoreUncheckedUpdateWithoutBuffaloInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitionId?: IntFieldUpdateOperationsInput | number
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
    commiteeId?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreUncheckedUpdateManyWithoutBuffaloInput = {
    id?: IntFieldUpdateOperationsInput | number
    competitionId?: IntFieldUpdateOperationsInput | number
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
    commiteeId?: IntFieldUpdateOperationsInput | number
  }

  export type BuffaloCreateManyTypeInput = {
    id?: number
    microchip: string
    name: string
  }

  export type BuffaloUpdateWithoutTypeInput = {
    microchip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Score?: ScoreUpdateManyWithoutBuffaloNestedInput
  }

  export type BuffaloUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    microchip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Score?: ScoreUncheckedUpdateManyWithoutBuffaloNestedInput
  }

  export type BuffaloUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    microchip?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreCreateManyCompetitionInput = {
    id?: number
    buffaloId: number
    body: number
    head: number
    neck: number
    horn: number
    back: number
    commiteeId: number
  }

  export type ScoreUpdateWithoutCompetitionInput = {
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
    commitee?: CommiteeUpdateOneRequiredWithoutScoreNestedInput
    buffalo?: BuffaloUpdateOneRequiredWithoutScoreNestedInput
  }

  export type ScoreUncheckedUpdateWithoutCompetitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    buffaloId?: IntFieldUpdateOperationsInput | number
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
    commiteeId?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreUncheckedUpdateManyWithoutCompetitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    buffaloId?: IntFieldUpdateOperationsInput | number
    body?: IntFieldUpdateOperationsInput | number
    head?: IntFieldUpdateOperationsInput | number
    neck?: IntFieldUpdateOperationsInput | number
    horn?: IntFieldUpdateOperationsInput | number
    back?: IntFieldUpdateOperationsInput | number
    commiteeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventCountOutputTypeDefaultArgs instead
     */
    export type EventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommiteeCountOutputTypeDefaultArgs instead
     */
    export type CommiteeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommiteeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuffaloCountOutputTypeDefaultArgs instead
     */
    export type BuffaloCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuffaloCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TypeCountOutputTypeDefaultArgs instead
     */
    export type TypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompetitionCountOutputTypeDefaultArgs instead
     */
    export type CompetitionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompetitionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventRegisterDefaultArgs instead
     */
    export type EventRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventRegisterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommiteeDefaultArgs instead
     */
    export type CommiteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommiteeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuffaloDefaultArgs instead
     */
    export type BuffaloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuffaloDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TypeDefaultArgs instead
     */
    export type TypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompetitionDefaultArgs instead
     */
    export type CompetitionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompetitionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScoreDefaultArgs instead
     */
    export type ScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScoreDefaultArgs<ExtArgs>

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