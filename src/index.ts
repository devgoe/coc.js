/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type WarLeagueList = WarLeague[];

export interface WarLeague {
  name?: JsonLocalizedName;
  id?: number;
}

export type JsonLocalizedName = object;

export interface ServiceVersion {
  major?: number;
  minor?: number;
  content?: number;
}

export type LabelList = Label[];

export interface Label {
  name?: JsonLocalizedName;
  id?: number;
  iconUrls?: object;
}

export type ClanCapitalRaidSeasons = ClanCapitalRaidSeason[];

export interface ClanCapitalRaidSeason {
  attackLog?: ClanCapitalRaidSeasonAttackLogList;
  defenseLog?: ClanCapitalRaidSeasonDefenseLogList;
  state?: string;
  startTime?: string;
  endTime?: string;
  capitalTotalLoot?: number;
  raidsCompleted?: number;
  totalAttacks?: number;
  enemyDistrictsDestroyed?: number;
  offensiveReward?: number;
  defensiveReward?: number;
  members?: ClanCapitalRaidSeasonMemberList;
}

export type ClanCapitalRaidSeasonMemberList = ClanCapitalRaidSeasonMember[];

export interface ClanCapitalRaidSeasonMember {
  tag?: string;
  name?: string;
  attacks?: number;
  attackLimit?: number;
  bonusAttackLimit?: number;
  capitalResourcesLooted?: number;
}

export type ClanCapitalRaidSeasonDefenseLogList =
  ClanCapitalRaidSeasonDefenseLogEntry[];

export interface ClanCapitalRaidSeasonDefenseLogEntry {
  attacker?: ClanCapitalRaidSeasonClanInfo;
  attackCount?: number;
  districtCount?: number;
  districtsDestroyed?: number;
  districts?: ClanCapitalRaidSeasonDistrictList;
}

export type ClanCapitalRaidSeasonDistrictList = ClanCapitalRaidSeasonDistrict[];

export interface ClanCapitalRaidSeasonDistrict {
  stars?: number;
  name?: JsonLocalizedName;
  id?: number;
  destructionPercent?: number;
  attackCount?: number;
  totalLooted?: number;
  attacks?: ClanCapitalRaidSeasonAttackList;
  districtHallLevel?: number;
}

export type ClanCapitalRaidSeasonAttackList = ClanCapitalRaidSeasonAttack[];

export interface ClanCapitalRaidSeasonAttack {
  attacker?: ClanCapitalRaidSeasonAttacker;
  destructionPercent?: number;
  stars?: number;
}

export interface ClanCapitalRaidSeasonAttacker {
  tag?: string;
  name?: string;
}

export interface ClanCapitalRaidSeasonClanInfo {
  tag?: string;
  name?: string;
  level?: number;
  badgeUrls?: object;
}

export type ClanCapitalRaidSeasonAttackLogList =
  ClanCapitalRaidSeasonAttackLogEntry[];

export interface ClanCapitalRaidSeasonAttackLogEntry {
  defender?: ClanCapitalRaidSeasonClanInfo;
  attackCount?: number;
  districtCount?: number;
  districtsDestroyed?: number;
  districts?: ClanCapitalRaidSeasonDistrictList;
}

export interface Location {
  localizedName?: string;
  id?: number;
  name?: string;
  isCountry?: boolean;
  countryCode?: string;
}

export interface Replay {
  replayData?: JsonNode;
  replayTag?: string;
}

export type JsonNode = object;

export type ClanCapitalRankingList = ClanCapitalRanking[];

export interface ClanCapitalRanking {
  clanPoints?: number;
  clanCapitalPoints?: number;
}

export type WarStatusList = WarStatus[];

export interface WarStatus {
  statusCode?: number;
  clanTag?: string;
  enemyClanTag?: string;
  warState?:
    | "CLAN_NOT_FOUND"
    | "ACCESS_DENIED"
    | "NOT_IN_WAR"
    | "IN_MATCHMAKING"
    | "ENTER_WAR"
    | "MATCHED"
    | "PREPARATION"
    | "WAR"
    | "IN_WAR"
    | "ENDED";
  timestamp?: string;
}

export type LocationList = Location[];

export type ClanMemberList = ClanMember[];

export interface ClanMember {
  league?: League;
  builderBaseLeague?: BuilderBaseLeague;
  versusTrophies?: number;
  tag?: string;
  name?: string;
  role?: "NOT_MEMBER" | "MEMBER" | "LEADER" | "ADMIN" | "COLEADER";
  expLevel?: number;
  clanRank?: number;
  previousClanRank?: number;
  donations?: number;
  donationsReceived?: number;
  trophies?: number;
  builderBaseTrophies?: number;
  playerHouse?: PlayerHouse;
}

export interface PlayerHouse {
  elements?: PlayerHouseElementList;
}

export type PlayerHouseElementList = PlayerHouseElement[];

export interface PlayerHouseElement {
  id?: number;
  type?: "GROUND" | "ROOF" | "FOOT" | "DECO";
}

export interface BuilderBaseLeague {
  name?: JsonLocalizedName;
  id?: number;
}

export interface League {
  name?: JsonLocalizedName;
  id?: number;
  iconUrls?: object;
}

export type LeagueSeasonList = LeagueSeason[];

export interface LeagueSeason {
  id?: string;
}

export type BuilderBaseLeagueList = BuilderBaseLeague[];

export type PlayerBuilderBaseRankingList = PlayerBuilderBaseRanking[];

export interface PlayerBuilderBaseRanking {
  builderBaseLeague?: BuilderBaseLeague;
  clan?: PlayerRankingClan;
  versusTrophies?: number;
  versusBattleWins?: number;
  tag?: string;
  name?: string;
  expLevel?: number;
  rank?: number;
  previousRank?: number;
  builderBaseTrophies?: number;
}

export interface PlayerRankingClan {
  tag?: string;
  name?: string;
  badgeUrls?: object;
}

export interface VerifyTokenRequest {
  token?: string;
}

export interface VerifyTokenResponse {
  tag?: string;
  token?: string;
  status?: string;
}

export interface Clan {
  warLeague?: WarLeague;
  capitalLeague?: CapitalLeague;
  memberList?: ClanMemberList;
  tag?: string;
  warFrequency?:
    | "UNKNOWN"
    | "ALWAYS"
    | "MORE_THAN_ONCE_PER_WEEK"
    | "ONCE_PER_WEEK"
    | "LESS_THAN_ONCE_PER_WEEK"
    | "NEVER"
    | "ANY";
  clanLevel?: number;
  warWinStreak?: number;
  warWins?: number;
  warTies?: number;
  warLosses?: number;
  clanPoints?: number;
  requiredTownhallLevel?: number;
  clanBuilderBasePoints?: number;
  clanVersusPoints?: number;
  clanCapitalPoints?: number;
  requiredTrophies?: number;
  requiredBuilderBaseTrophies?: number;
  requiredVersusTrophies?: number;
  isWarLogPublic?: boolean;
  chatLanguage?: Language;
  isFamilyFriendly?: boolean;
  labels?: LabelList;
  name?: string;
  location?: Location;
  type?: "OPEN" | "INVITE_ONLY" | "CLOSED";
  members?: number;
  description?: string;
  clanCapital?: ClanCapital;
  badgeUrls?: object;
}

export interface ClanCapital {
  capitalHallLevel?: number;
  districts?: ClanDistrictDataList;
}

export type ClanDistrictDataList = ClanDistrictData[];

export interface ClanDistrictData {
  name?: JsonLocalizedName;
  id?: number;
  districtHallLevel?: number;
}

export interface Language {
  name?: string;
  id?: number;
  languageCode?: string;
}

export interface CapitalLeague {
  name?: JsonLocalizedName;
  id?: number;
}

export interface ClanWar {
  clan?: WarClan;
  opponent?: WarClan;
  teamSize?: number;
  attacksPerMember?: number;
  startTime?: string;
  state?:
    | "CLAN_NOT_FOUND"
    | "ACCESS_DENIED"
    | "NOT_IN_WAR"
    | "IN_MATCHMAKING"
    | "ENTER_WAR"
    | "MATCHED"
    | "PREPARATION"
    | "WAR"
    | "IN_WAR"
    | "ENDED";
  endTime?: string;
  preparationStartTime?: string;
}

export interface WarClan {
  destructionPercentage?: Float;
  tag?: string;
  name?: string;
  badgeUrls?: object;
  clanLevel?: number;
  attacks?: number;
  stars?: number;
  expEarned?: number;
  members?: ClanWarMemberList;
}

export type ClanWarMemberList = ClanWarMember[];

export interface ClanWarMember {
  tag?: string;
  name?: string;
  mapPosition?: number;
  townhallLevel?: number;
  opponentAttacks?: number;
  bestOpponentAttack?: ClanWarAttack;
  attacks?: ClanWarAttackList;
}

export type ClanWarAttackList = ClanWarAttack[];

export interface ClanWarAttack {
  order?: number;
  attackerTag?: string;
  defenderTag?: string;
  stars?: number;
  destructionPercentage?: number;
  duration?: number;
}

export type Float = object;

export type ClanBuilderBaseRankingList = ClanBuilderBaseRanking[];

export interface ClanBuilderBaseRanking {
  clanPoints?: number;
  clanBuilderBasePoints?: number;
  clanVersusPoints?: number;
}

export type ClanList = { items: Clan[] };

export type PlayerRankingList = PlayerRanking[];

export interface PlayerRanking {
  league?: League;
  clan?: PlayerRankingClan;
  attackWins?: number;
  defenseWins?: number;
  tag?: string;
  name?: string;
  expLevel?: number;
  rank?: number;
  previousRank?: number;
  trophies?: number;
}

export type LeagueList = League[];

export type ClanWarLog = ClanWarLogEntry[];

export interface ClanWarLogEntry {
  clan?: WarClan;
  opponent?: WarClan;
  teamSize?: number;
  attacksPerMember?: number;
  endTime?: string;
  result?: "LOSE" | "WIN" | "TIE";
}

export interface GoldPassSeason {
  startTime?: string;
  endTime?: string;
}

export interface DeepLinkCreationRequest {
  playerTags?: StringList;
  clanTag?: string;
  opponentClanTag?: string;
}

export type StringList = string[];

export type String = object;

export interface DeepLinkCreationResponse {
  link?: string;
}

export interface ClanWarLeagueGroup {
  tag?: string;
  state?: "GROUP_NOT_FOUND" | "NOT_IN_WAR" | "PREPARATION" | "WAR" | "ENDED";
  season?: string;
  clans?: ClanWarLeagueClanList;
  rounds?: ClanWarLeagueRoundList;
}

export type ClanWarLeagueRoundList = ClanWarLeagueRound[];

export interface ClanWarLeagueRound {
  warTags?: StringList;
}

export type ClanWarLeagueClanList = ClanWarLeagueClan[];

export interface ClanWarLeagueClan {
  tag?: string;
  clanLevel?: number;
  name?: string;
  members?: ClanWarLeagueClanMemberList;
  badgeUrls?: object;
}

export type ClanWarLeagueClanMemberList = ClanWarLeagueClanMember[];

export interface ClanWarLeagueClanMember {
  tag?: string;
  townHallLevel?: number;
  name?: string;
}

export type ClanRankingList = ClanRanking[];

export interface ClanRanking {
  clanLevel?: number;
  clanPoints?: number;
  location?: Location;
  members?: number;
  tag?: string;
  name?: string;
  rank?: number;
  previousRank?: number;
  badgeUrls?: object;
}

export type CapitalLeagueList = CapitalLeague[];

export interface Player {
  league?: League;
  builderBaseLeague?: BuilderBaseLeague;
  clan?: PlayerClan;
  role?: "NOT_MEMBER" | "MEMBER" | "LEADER" | "ADMIN" | "COLEADER";
  warPreference?: "OUT" | "IN";
  attackWins?: number;
  defenseWins?: number;
  versusTrophies?: number;
  bestVersusTrophies?: number;
  townHallLevel?: number;
  townHallWeaponLevel?: number;
  versusBattleWins?: number;
  legendStatistics?: PlayerLegendStatistics;
  troops?: PlayerItemLevelList;
  heroes?: PlayerItemLevelList;
  spells?: PlayerItemLevelList;
  labels?: LabelList;
  tag?: string;
  name?: string;
  expLevel?: number;
  trophies?: number;
  bestTrophies?: number;
  donations?: number;
  donationsReceived?: number;
  builderHallLevel?: number;
  builderBaseTrophies?: number;
  bestBuilderBaseTrophies?: number;
  warStars?: number;
  achievements?: PlayerAchievementProgressList;
  clanCapitalContributions?: number;
  playerHouse?: PlayerHouse;
}

export type PlayerAchievementProgressList = PlayerAchievementProgress[];

export interface PlayerAchievementProgress {
  stars?: number;
  value?: number;
  name?: JsonLocalizedName;
  target?: number;
  info?: JsonLocalizedName;
  completionInfo?: JsonLocalizedName;
  village?: "HOME_VILLAGE" | "BUILDER_BASE" | "CLAN_CAPITAL";
}

export type PlayerItemLevelList = PlayerItemLevel[];

export interface PlayerItemLevel {
  level?: number;
  name?: JsonLocalizedName;
  maxLevel?: number;
  village?: "HOME_VILLAGE" | "BUILDER_BASE" | "CLAN_CAPITAL";
  superTroopIsActive?: boolean;
}

export interface PlayerLegendStatistics {
  currentSeason?: LegendLeagueTournamentSeasonResult;
  bestSeason?: LegendLeagueTournamentSeasonResult;
  bestBuilderBaseSeason?: LegendLeagueTournamentSeasonResult;
  bestVersusSeason?: LegendLeagueTournamentSeasonResult;
  legendTrophies?: number;
  previousSeason?: LegendLeagueTournamentSeasonResult;
  previousBuilderBaseSeason?: LegendLeagueTournamentSeasonResult;
  previousVersusSeason?: LegendLeagueTournamentSeasonResult;
}

export interface LegendLeagueTournamentSeasonResult {
  trophies?: number;
  id?: string;
  rank?: number;
}

export interface PlayerClan {
  tag?: string;
  clanLevel?: number;
  name?: string;
  badgeUrls?: object;
}

export interface ClientError {
  reason?: string;
  message?: string;
  type?: string;
  detail?: object;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.clashofclans.com/v1";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Clash of Clans API
 * @version v1
 * @termsOfService http://supercell.com/en/terms-of-service/
 * @baseUrl https://api.clashofclans.com/v1
 *
 * Check out <a href="https://developer.clashofclans.com/#/getting-started" target="_parent">Getting Started</a> for instructions and links to other resources. Clash of Clans API uses <a href="https://jwt.io/" target="_blank">JSON Web Tokens</a> for authorizing the requests. Tokens are created by developers on <a href="https://developer.clashofclans.com/#/account" target="_parent">My Account</a> page and must be passed in every API request in Authorization HTTP header using Bearer authentication scheme. Correct Authorization header looks like this: "Authorization: Bearer API_TOKEN".
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  clans = {
    /**
     * @description Retrieve information about clan's current clan war league group
     *
     * @tags clans
     * @name GetClanWarLeagueGroup
     * @summary Retrieve information about clan's current clan war league group
     * @request GET:/clans/{clanTag}/currentwar/leaguegroup
     * @secure
     */
    getClanWarLeagueGroup: (clanTag: string, params: RequestParams = {}) =>
      this.request<ClanWarLeagueGroup, ClientError>({
        path: `/clans/${clanTag}/currentwar/leaguegroup`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve clan's clan war log
     *
     * @tags clans
     * @name GetClanWarLog
     * @summary Retrieve clan's clan war log
     * @request GET:/clans/{clanTag}/warlog
     * @secure
     */
    getClanWarLog: (
      clanTag: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ClanWarLog, ClientError>({
        path: `/clans/${clanTag}/warlog`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Search all clans by name and/or filtering the results using various criteria. At least one filtering criteria must be defined and if name is used as part of search, it is required to be at least three characters long. It is not possible to specify ordering for results so clients should not rely on any specific ordering as that may change in the future releases of the API.
     *
     * @tags clans
     * @name SearchClans
     * @summary Search clans
     * @request GET:/clans
     * @secure
     */
    searchClans: (
      query?: {
        /** Search clans by name. If name is used as part of search query, it needs to be at least three characters long. Name search parameter is interpreted as wild card search, so it may appear anywhere in the clan name. */
        name?: string;
        /** Filter by clan war frequency */
        warFrequency?: string;
        /** Filter by clan location identifier. For list of available locations, refer to getLocations operation. */
        locationId?: number;
        /** Filter by minimum number of clan members */
        minMembers?: number;
        /** Filter by maximum number of clan members */
        maxMembers?: number;
        /** Filter by minimum amount of clan points. */
        minClanPoints?: number;
        /** Filter by minimum clan level. */
        minClanLevel?: number;
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
        /** Comma separatered list of label IDs to use for filtering results. */
        labelIds?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ClanList, ClientError>({
        path: `/clans`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve information about clan's current clan war
     *
     * @tags clans
     * @name GetCurrentWar
     * @summary Retrieve information about clan's current clan war
     * @request GET:/clans/{clanTag}/currentwar
     * @secure
     */
    getCurrentWar: (clanTag: string, params: RequestParams = {}) =>
      this.request<ClanWar, ClientError>({
        path: `/clans/${clanTag}/currentwar`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get information about a single clan by clan tag. Clan tags can be found using clan search operation. Note that clan tags start with hash character '#' and that needs to be URL-encoded properly to work in URL, so for example clan tag '#2ABC' would become '%232ABC' in the URL.
     *
     * @tags clans
     * @name GetClan
     * @summary Get clan information
     * @request GET:/clans/{clanTag}
     * @secure
     */
    getClan: (clanTag: string, params: RequestParams = {}) =>
      this.request<Clan, ClientError>({
        path: `/clans/${clanTag}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description List clan members.
     *
     * @tags clans
     * @name GetClanMembers
     * @summary List clan members
     * @request GET:/clans/{clanTag}/members
     * @secure
     */
    getClanMembers: (
      clanTag: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ClanMemberList, ClientError>({
        path: `/clans/${clanTag}/members`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve clan's capital raid seasons
     *
     * @tags clans
     * @name GetCapitalRaidSeasons
     * @summary Retrieve clan's capital raid seasons
     * @request GET:/clans/{clanTag}/capitalraidseasons
     * @secure
     */
    getCapitalRaidSeasons: (
      clanTag: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ClanCapitalRaidSeasons, ClientError>({
        path: `/clans/${clanTag}/capitalraidseasons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  players = {
    /**
     * @description Get information about a single player by player tag. Player tags can be found either in game or by from clan member lists. Note that player tags start with hash character '#' and that needs to be URL-encoded properly to work in URL, so for example player tag '#2ABC' would become '%232ABC' in the URL.
     *
     * @tags players
     * @name GetPlayer
     * @summary Get player information
     * @request GET:/players/{playerTag}
     * @secure
     */
    getPlayer: (playerTag: string, params: RequestParams = {}) =>
      this.request<Player, ClientError>({
        path: `/players/${playerTag}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Verify player API token that can be found from the game settings. This API call can be used to check that players own the game accounts they claim to own as they need to provide the one-time use API token that exists inside the game.
     *
     * @tags players
     * @name VerifyToken
     * @summary Verify player API token that can be found from the game settings.
     * @request POST:/players/{playerTag}/verifytoken
     * @secure
     */
    verifyToken: (
      playerTag: string,
      body: VerifyTokenRequest,
      params: RequestParams = {}
    ) =>
      this.request<VerifyTokenResponse, ClientError>({
        path: `/players/${playerTag}/verifytoken`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  capitalleagues = {
    /**
     * @description List capital leagues
     *
     * @tags leagues
     * @name GetCapitalLeagues
     * @summary List capital leagues
     * @request GET:/capitalleagues
     * @secure
     */
    getCapitalLeagues: (
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CapitalLeagueList, ClientError>({
        path: `/capitalleagues`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get capital league information
     *
     * @tags leagues
     * @name GetCapitalLeague
     * @summary Get capital league information
     * @request GET:/capitalleagues/{leagueId}
     * @secure
     */
    getCapitalLeague: (leagueId: string, params: RequestParams = {}) =>
      this.request<CapitalLeague, ClientError>({
        path: `/capitalleagues/${leagueId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  locations = {
    /**
     * @description Get clan rankings for a specific location
     *
     * @tags locations
     * @name GetClanRanking
     * @summary Get clan rankings for a specific location
     * @request GET:/locations/{locationId}/rankings/clans
     * @secure
     */
    getClanRanking: (
      locationId: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ClanRankingList, ClientError>({
        path: `/locations/${locationId}/rankings/clans`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get player rankings for a specific location
     *
     * @tags locations
     * @name GetPlayerRanking
     * @summary Get player rankings for a specific location
     * @request GET:/locations/{locationId}/rankings/players
     * @secure
     */
    getPlayerRanking: (
      locationId: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PlayerRankingList, ClientError>({
        path: `/locations/${locationId}/rankings/players`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get clan Builder Base rankings for a specific location. This route is deprecated and will be removed in the future.
     *
     * @tags locations
     * @name GetClanVersusRanking
     * @summary Get clan Builder Base rankings for a specific location
     * @request GET:/locations/{locationId}/rankings/clans-versus
     * @secure
     */
    getClanVersusRanking: (
      locationId: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ClanBuilderBaseRankingList, ClientError>({
        path: `/locations/${locationId}/rankings/clans-versus`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get player Builder Base rankings for a specific location
     *
     * @tags locations
     * @name GetPlayerBuilderBaseRanking
     * @summary Get player Builder Base rankings for a specific location
     * @request GET:/locations/{locationId}/rankings/players-builder-base
     * @secure
     */
    getPlayerBuilderBaseRanking: (
      locationId: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PlayerBuilderBaseRankingList, ClientError>({
        path: `/locations/${locationId}/rankings/players-builder-base`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get clan Builder Base rankings for a specific location
     *
     * @tags locations
     * @name GetClanBuilderBaseRanking
     * @summary Get clan Builder Base rankings for a specific location
     * @request GET:/locations/{locationId}/rankings/clans-builder-base
     * @secure
     */
    getClanBuilderBaseRanking: (
      locationId: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ClanBuilderBaseRankingList, ClientError>({
        path: `/locations/${locationId}/rankings/clans-builder-base`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get player Builder Base rankings for a specific location. This route is deprecated and will be removed in the future.
     *
     * @tags locations
     * @name GetPlayerVersusRanking
     * @summary Get player Builder Base rankings for a specific location
     * @request GET:/locations/{locationId}/rankings/players-versus
     * @secure
     */
    getPlayerVersusRanking: (
      locationId: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PlayerBuilderBaseRankingList, ClientError>({
        path: `/locations/${locationId}/rankings/players-versus`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description List locations
     *
     * @tags locations
     * @name GetLocations
     * @summary List locations
     * @request GET:/locations
     * @secure
     */
    getLocations: (
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<LocationList, ClientError>({
        path: `/locations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get capital rankings for a specific location
     *
     * @tags locations
     * @name GetClanCapitalRanking
     * @summary Get capital rankings for a specific location
     * @request GET:/locations/{locationId}/rankings/capitals
     * @secure
     */
    getClanCapitalRanking: (
      locationId: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ClanCapitalRankingList, ClientError>({
        path: `/locations/${locationId}/rankings/capitals`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get information about specific location
     *
     * @tags locations
     * @name GetLocation
     * @summary Get location information
     * @request GET:/locations/{locationId}
     * @secure
     */
    getLocation: (locationId: string, params: RequestParams = {}) =>
      this.request<Location, ClientError>({
        path: `/locations/${locationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  clanwarleagues = {
    /**
     * @description Retrieve information about individual clan war league war
     *
     * @tags clans
     * @name GetClanWarLeagueWar
     * @summary Retrieve information about individual clan war league war
     * @request GET:/clanwarleagues/wars/{warTag}
     * @secure
     */
    getClanWarLeagueWar: (warTag: string, params: RequestParams = {}) =>
      this.request<ClanWarLeagueGroup, ClientError>({
        path: `/clanwarleagues/wars/${warTag}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  goldpass = {
    /**
     * @description Get information about the current gold pass season.
     *
     * @tags goldpass
     * @name GetCurrentGoldPassSeason
     * @summary Get information about the current gold pass season.
     * @request GET:/goldpass/seasons/current
     * @secure
     */
    getCurrentGoldPassSeason: (params: RequestParams = {}) =>
      this.request<GoldPassSeason, ClientError>({
        path: `/goldpass/seasons/current`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  leagues = {
    /**
     * @description List leagues
     *
     * @tags leagues
     * @name GetLeagues
     * @summary List leagues
     * @request GET:/leagues
     * @secure
     */
    getLeagues: (
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<LeagueList, ClientError>({
        path: `/leagues`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get league season rankings. Note that league season information is available only for Legend League.
     *
     * @tags leagues
     * @name GetLeagueSeasonRankings
     * @summary Get league season rankings
     * @request GET:/leagues/{leagueId}/seasons/{seasonId}
     * @secure
     */
    getLeagueSeasonRankings: (
      leagueId: string,
      seasonId: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PlayerRankingList, ClientError>({
        path: `/leagues/${leagueId}/seasons/${seasonId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get league information
     *
     * @tags leagues
     * @name GetLeague
     * @summary Get league information
     * @request GET:/leagues/{leagueId}
     * @secure
     */
    getLeague: (leagueId: string, params: RequestParams = {}) =>
      this.request<League, ClientError>({
        path: `/leagues/${leagueId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get league seasons. Note that league season information is available only for Legend League.
     *
     * @tags leagues
     * @name GetLeagueSeasons
     * @summary Get league seasons
     * @request GET:/leagues/{leagueId}/seasons
     * @secure
     */
    getLeagueSeasons: (
      leagueId: string,
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<LeagueSeasonList, ClientError>({
        path: `/leagues/${leagueId}/seasons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  builderbaseleagues = {
    /**
     * @description Get Builder Base league information
     *
     * @tags leagues
     * @name GetBuilderBaseLeague
     * @summary Get Builder Base league information
     * @request GET:/builderbaseleagues/{leagueId}
     * @secure
     */
    getBuilderBaseLeague: (leagueId: string, params: RequestParams = {}) =>
      this.request<BuilderBaseLeague, ClientError>({
        path: `/builderbaseleagues/${leagueId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description List Builder Base leagues
     *
     * @tags leagues
     * @name GetBuilderBaseLeagues
     * @summary List Builder Base leagues
     * @request GET:/builderbaseleagues
     * @secure
     */
    getBuilderBaseLeagues: (
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BuilderBaseLeagueList, ClientError>({
        path: `/builderbaseleagues`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  labels = {
    /**
     * @description List player labels
     *
     * @tags labels
     * @name GetPlayerLabels
     * @summary List player labels
     * @request GET:/labels/players
     * @secure
     */
    getPlayerLabels: (
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<LabelList, ClientError>({
        path: `/labels/players`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description List clan labels
     *
     * @tags labels
     * @name GetClanLabels
     * @summary List clan labels
     * @request GET:/labels/clans
     * @secure
     */
    getClanLabels: (
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<LabelList, ClientError>({
        path: `/labels/clans`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  warleagues = {
    /**
     * @description Get war league information
     *
     * @tags leagues
     * @name GetWarLeague
     * @summary Get war league information
     * @request GET:/warleagues/{leagueId}
     * @secure
     */
    getWarLeague: (leagueId: string, params: RequestParams = {}) =>
      this.request<WarLeague, ClientError>({
        path: `/warleagues/${leagueId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description List war leagues
     *
     * @tags leagues
     * @name GetWarLeagues
     * @summary List war leagues
     * @request GET:/warleagues
     * @secure
     */
    getWarLeagues: (
      query?: {
        /** Limit the number of items returned in the response. */
        limit?: number;
        /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        after?: string;
        /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both. */
        before?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WarLeagueList, ClientError>({
        path: `/warleagues`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
