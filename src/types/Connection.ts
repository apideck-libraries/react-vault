import { FormField } from './FormField';

export interface RawJSON {
  [key: string]: string | string[] | number | boolean | undefined;
}

export interface Settings extends RawJSON {
  instance_url?: string;
  base_url?: string;
}

export type ConnectionState = 'available' | 'added' | 'authorized' | 'callable';

export interface Connection {
  id: string;
  service_id: string;
  unified_api: string;
  auth_type: string | null;
  name: string;
  icon: string;
  logo?: string;
  website?: string;
  tag_line?: string;
  authorize_url?: string;
  revoke_url?: string | null;
  state: ConnectionState;
  enabled?: boolean;
  settings?: Settings;
  settings_required_for_authorization?: string[];
  configurable_resources: string[];
  resource_schema_support: string[];
  configuration?: { resource: string; defaults: FormField[] }[];
  form_fields: FormField[];
  created_at: number;
  resources?: { id: string; config: any }[];
}
