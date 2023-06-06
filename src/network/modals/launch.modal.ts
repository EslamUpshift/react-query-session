type failures = {
  _id: false;
  time: number;
  altitude: number;
  reason: string;
};
export interface Launch {
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: 'half' | 'quarter' | 'year' | 'month' | 'day' | 'hour';
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tbd: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: failures[];
  upcoming: boolean;
  details: string;
  auto_update: boolean;
  launch_library_id?: string;
  links: {patch: {small?: string; large?: string}};
}
export interface LaunchParams {
  query: {
    name?: string;
    tbd?: boolean;
    net?: boolean;
    window?: number;
    rocket?: string;
    success?: boolean | null;
    upcoming?: boolean;
    details?: string;
    auto_update?: boolean;
    launch_library_id?: string;
  };
}
