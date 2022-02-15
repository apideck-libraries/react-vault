export const CONFIG = {
  data: {
    id: 'crm+activecampaign',
    name: 'ActiveCampaign',
    tag_line:
      'Integrated email marketing, marketing automation, and small business CRM. Save time while growing your business with sales automation.',
    icon: 'https://res.cloudinary.com/apideck/image/upload/v1529455970/catalog/activecampaign/icon128x128.png',
    logo: 'https://www.activecampaign.com/site/assets/social-2x.png',
    website: 'https://www.activecampaign.com/',
    unified_api: 'crm',
    service_id: 'activecampaign',
    auth_type: 'apiKey',
    form_fields: [
      {
        id: 'base_url',
        label: 'Base URL',
        value: 'wefewf',
        placeholder: '',
        mask: false,
        type: 'text',
        required: true,
        description:
          'Provide your full API url. It can be found in your account on the My Settings page under the "Developer" tab. Generally, the URL will be in the form https://<your-account>.api-us1.com. The API is accessed using a base URL that is specific to your account.',
        disabled: false,
        custom_field: false,
        hidden: false,
        sensitive: false,
      },
      {
        id: 'api_key',
        label: 'API Key',
        value: 'wefwe',
        placeholder: '',
        mask: false,
        type: 'text',
        required: true,
        description: '',
        disabled: false,
        custom_field: false,
        hidden: false,
        sensitive: true,
      },
    ],
    configuration: [
      {
        id: 'monetary_amount',
        type: 'number',
        label: 'Deal Value',
        placeholder: '10000',
        description:
          'When a new opportunity is created without a value, a default deal value is assigned',
        required: true,
        target: 'resource',
        value: 2,
      },
      {
        id: 'currency',
        type: 'select',
        label: 'Currency',
        placeholder: 'Default Currency',
        description:
          'Default currency to assign to new deals that belong to this deal group.',
        options: [
          {
            label: 'AED',
            value: 'AED',
          },
          {
            label: 'AFN',
            value: 'AFN',
          },
          {
            label: 'ALL',
            value: 'ALL',
          },
          {
            label: 'AMD',
            value: 'AMD',
          },
          {
            label: 'ANG',
            value: 'ANG',
          },
          {
            label: 'AOA',
            value: 'AOA',
          },
          {
            label: 'ARS',
            value: 'ARS',
          },
          {
            label: 'AUD',
            value: 'AUD',
          },
          {
            label: 'AWG',
            value: 'AWG',
          },
          {
            label: 'AZN',
            value: 'AZN',
          },
          {
            label: 'BAM',
            value: 'BAM',
          },
          {
            label: 'BBD',
            value: 'BBD',
          },
          {
            label: 'BDT',
            value: 'BDT',
          },
          {
            label: 'BGN',
            value: 'BGN',
          },
          {
            label: 'BHD',
            value: 'BHD',
          },
          {
            label: 'BIF',
            value: 'BIF',
          },
          {
            label: 'BMD',
            value: 'BMD',
          },
          {
            label: 'BND',
            value: 'BND',
          },
          {
            label: 'BOB',
            value: 'BOB',
          },
          {
            label: 'BOV',
            value: 'BOV',
          },
          {
            label: 'BRL',
            value: 'BRL',
          },
          {
            label: 'BSD',
            value: 'BSD',
          },
          {
            label: 'BTN',
            value: 'BTN',
          },
          {
            label: 'BWP',
            value: 'BWP',
          },
          {
            label: 'BYR',
            value: 'BYR',
          },
          {
            label: 'BZD',
            value: 'BZD',
          },
          {
            label: 'CAD',
            value: 'CAD',
          },
          {
            label: 'CDF',
            value: 'CDF',
          },
          {
            label: 'CHE',
            value: 'CHE',
          },
          {
            label: 'CHF',
            value: 'CHF',
          },
          {
            label: 'CHW',
            value: 'CHW',
          },
          {
            label: 'CLF',
            value: 'CLF',
          },
          {
            label: 'CLP',
            value: 'CLP',
          },
          {
            label: 'CNY',
            value: 'CNY',
          },
          {
            label: 'COP',
            value: 'COP',
          },
          {
            label: 'COU',
            value: 'COU',
          },
          {
            label: 'CRC',
            value: 'CRC',
          },
          {
            label: 'CUC',
            value: 'CUC',
          },
          {
            label: 'CUP',
            value: 'CUP',
          },
          {
            label: 'CVE',
            value: 'CVE',
          },
          {
            label: 'CZK',
            value: 'CZK',
          },
          {
            label: 'DJF',
            value: 'DJF',
          },
          {
            label: 'DKK',
            value: 'DKK',
          },
          {
            label: 'DOP',
            value: 'DOP',
          },
          {
            label: 'DZD',
            value: 'DZD',
          },
          {
            label: 'EGP',
            value: 'EGP',
          },
          {
            label: 'ERN',
            value: 'ERN',
          },
          {
            label: 'ETB',
            value: 'ETB',
          },
          {
            label: 'EUR',
            value: 'EUR',
          },
          {
            label: 'FJD',
            value: 'FJD',
          },
          {
            label: 'FKP',
            value: 'FKP',
          },
          {
            label: 'GBP',
            value: 'GBP',
          },
          {
            label: 'GEL',
            value: 'GEL',
          },
          {
            label: 'GHS',
            value: 'GHS',
          },
          {
            label: 'GIP',
            value: 'GIP',
          },
          {
            label: 'GMD',
            value: 'GMD',
          },
          {
            label: 'GNF',
            value: 'GNF',
          },
          {
            label: 'GTQ',
            value: 'GTQ',
          },
          {
            label: 'GYD',
            value: 'GYD',
          },
          {
            label: 'HKD',
            value: 'HKD',
          },
          {
            label: 'HNL',
            value: 'HNL',
          },
          {
            label: 'HRK',
            value: 'HRK',
          },
          {
            label: 'HTG',
            value: 'HTG',
          },
          {
            label: 'HUF',
            value: 'HUF',
          },
          {
            label: 'IDR',
            value: 'IDR',
          },
          {
            label: 'ILS',
            value: 'ILS',
          },
          {
            label: 'INR',
            value: 'INR',
          },
          {
            label: 'IQD',
            value: 'IQD',
          },
          {
            label: 'IRR',
            value: 'IRR',
          },
          {
            label: 'ISK',
            value: 'ISK',
          },
          {
            label: 'JMD',
            value: 'JMD',
          },
          {
            label: 'JOD',
            value: 'JOD',
          },
          {
            label: 'JPY',
            value: 'JPY',
          },
          {
            label: 'KES',
            value: 'KES',
          },
          {
            label: 'KGS',
            value: 'KGS',
          },
          {
            label: 'KHR',
            value: 'KHR',
          },
          {
            label: 'KMF',
            value: 'KMF',
          },
          {
            label: 'KPW',
            value: 'KPW',
          },
          {
            label: 'KRW',
            value: 'KRW',
          },
          {
            label: 'KWD',
            value: 'KWD',
          },
          {
            label: 'KYD',
            value: 'KYD',
          },
          {
            label: 'KZT',
            value: 'KZT',
          },
          {
            label: 'LAK',
            value: 'LAK',
          },
          {
            label: 'LBP',
            value: 'LBP',
          },
          {
            label: 'LKR',
            value: 'LKR',
          },
          {
            label: 'LRD',
            value: 'LRD',
          },
          {
            label: 'LSL',
            value: 'LSL',
          },
          {
            label: 'LTL',
            value: 'LTL',
          },
          {
            label: 'LVL',
            value: 'LVL',
          },
          {
            label: 'LYD',
            value: 'LYD',
          },
          {
            label: 'MAD',
            value: 'MAD',
          },
          {
            label: 'MDL',
            value: 'MDL',
          },
          {
            label: 'MGA',
            value: 'MGA',
          },
          {
            label: 'MKD',
            value: 'MKD',
          },
          {
            label: 'MMK',
            value: 'MMK',
          },
          {
            label: 'MNT',
            value: 'MNT',
          },
          {
            label: 'MOP',
            value: 'MOP',
          },
          {
            label: 'MRO',
            value: 'MRO',
          },
          {
            label: 'MUR',
            value: 'MUR',
          },
          {
            label: 'MVR',
            value: 'MVR',
          },
          {
            label: 'MWK',
            value: 'MWK',
          },
          {
            label: 'MXN',
            value: 'MXN',
          },
          {
            label: 'MXV',
            value: 'MXV',
          },
          {
            label: 'MYR',
            value: 'MYR',
          },
          {
            label: 'MZN',
            value: 'MZN',
          },
          {
            label: 'NAD',
            value: 'NAD',
          },
          {
            label: 'NGN',
            value: 'NGN',
          },
          {
            label: 'NIO',
            value: 'NIO',
          },
          {
            label: 'NOK',
            value: 'NOK',
          },
          {
            label: 'NPR',
            value: 'NPR',
          },
          {
            label: 'NZD',
            value: 'NZD',
          },
          {
            label: 'OMR',
            value: 'OMR',
          },
          {
            label: 'PAB',
            value: 'PAB',
          },
          {
            label: 'PEN',
            value: 'PEN',
          },
          {
            label: 'PGK',
            value: 'PGK',
          },
          {
            label: 'PHP',
            value: 'PHP',
          },
          {
            label: 'PKR',
            value: 'PKR',
          },
          {
            label: 'PLN',
            value: 'PLN',
          },
          {
            label: 'PYG',
            value: 'PYG',
          },
          {
            label: 'QAR',
            value: 'QAR',
          },
          {
            label: 'RON',
            value: 'RON',
          },
          {
            label: 'RSD',
            value: 'RSD',
          },
          {
            label: 'RUB',
            value: 'RUB',
          },
          {
            label: 'RWF',
            value: 'RWF',
          },
          {
            label: 'SAR',
            value: 'SAR',
          },
          {
            label: 'SBD',
            value: 'SBD',
          },
          {
            label: 'SCR',
            value: 'SCR',
          },
          {
            label: 'SDG',
            value: 'SDG',
          },
          {
            label: 'SEK',
            value: 'SEK',
          },
          {
            label: 'SGD',
            value: 'SGD',
          },
          {
            label: 'SHP',
            value: 'SHP',
          },
          {
            label: 'SLL',
            value: 'SLL',
          },
          {
            label: 'SOS',
            value: 'SOS',
          },
          {
            label: 'SRD',
            value: 'SRD',
          },
          {
            label: 'SSP',
            value: 'SSP',
          },
          {
            label: 'STD',
            value: 'STD',
          },
          {
            label: 'SYP',
            value: 'SYP',
          },
          {
            label: 'SZL',
            value: 'SZL',
          },
          {
            label: 'THB',
            value: 'THB',
          },
          {
            label: 'TJS',
            value: 'TJS',
          },
          {
            label: 'TMT',
            value: 'TMT',
          },
          {
            label: 'TND',
            value: 'TND',
          },
          {
            label: 'TOP',
            value: 'TOP',
          },
          {
            label: 'TRY',
            value: 'TRY',
          },
          {
            label: 'TTD',
            value: 'TTD',
          },
          {
            label: 'TWD',
            value: 'TWD',
          },
          {
            label: 'TZS',
            value: 'TZS',
          },
          {
            label: 'UAH',
            value: 'UAH',
          },
          {
            label: 'UGX',
            value: 'UGX',
          },
          {
            label: 'USD',
            value: 'USD',
          },
          {
            label: 'USN',
            value: 'USN',
          },
          {
            label: 'USS',
            value: 'USS',
          },
          {
            label: 'UYI',
            value: 'UYI',
          },
          {
            label: 'UYU',
            value: 'UYU',
          },
          {
            label: 'UZS',
            value: 'UZS',
          },
          {
            label: 'VEF',
            value: 'VEF',
          },
          {
            label: 'VND',
            value: 'VND',
          },
          {
            label: 'VUV',
            value: 'VUV',
          },
          {
            label: 'WST',
            value: 'WST',
          },
          {
            label: 'XAF',
            value: 'XAF',
          },
          {
            label: 'XAG',
            value: 'XAG',
          },
          {
            label: 'XAU',
            value: 'XAU',
          },
          {
            label: 'XBA',
            value: 'XBA',
          },
          {
            label: 'XBB',
            value: 'XBB',
          },
          {
            label: 'XBC',
            value: 'XBC',
          },
          {
            label: 'XBD',
            value: 'XBD',
          },
          {
            label: 'XCD',
            value: 'XCD',
          },
          {
            label: 'XDR',
            value: 'XDR',
          },
          {
            label: 'XFU',
            value: 'XFU',
          },
          {
            label: 'XOF',
            value: 'XOF',
          },
          {
            label: 'XPD',
            value: 'XPD',
          },
          {
            label: 'XPF',
            value: 'XPF',
          },
          {
            label: 'XPT',
            value: 'XPT',
          },
          {
            label: 'XTS',
            value: 'XTS',
          },
          {
            label: 'XXX',
            value: 'XXX',
          },
          {
            label: 'YER',
            value: 'YER',
          },
          {
            label: 'ZAR',
            value: 'ZAR',
          },
          {
            label: 'ZMW',
            value: 'ZMW',
          },
        ],
        required: true,
        target: 'resource',
        value: null,
      },
      {
        id: 'owner_id',
        type: 'select',
        label: 'Default Owner',
        placeholder: 'Select a Owner',
        description:
          'When a new opportunity is created without a owner, a default user is assigned',
        dynamicOptions: {
          resource: 'users',
          optionsMapping: {
            value: 'id',
            label: 'email',
          },
        },
        required: true,
        target: 'resource',
        value: null,
      },
      {
        id: 'pipeline_id',
        type: 'select',
        label: 'Pipeline',
        placeholder: 'Select a pipeline',
        description:
          'When a new opportunity is created without a pipeline, a default pipeline is assigned',
        dynamicOptions: {
          resource: 'pipelines',
          optionsMapping: {
            optGroup: [
              {
                value: 'dealGroups[..].id',
                label: 'dealGroups[..].title',
              },
            ],
          },
        },
        required: true,
        target: 'resource',
        value: null,
      },
      {
        id: 'pipeline_stage_id',
        type: 'filtered-select',
        label: 'Stage',
        placeholder: 'Select a stage',
        description:
          'When a new opportunity is created without a stage, a default stage is assigned',
        filter: {
          key: 'id',
          value: 'pipeline_id',
        },
        dynamicOptions: {
          resource: 'pipelines',
          optionsMapping: {
            optGroup:
              "resolve._(get($input, 'dealGroups')).chain().thru(groups => groups.map((current) => { const options = $input.dealStages.filter((stage) => stage.group === current.id).map((stage) => { return { value: stage.id, label: stage.title, display_order: stage.order }}); return { id: current.id, name: current.title, options: options }})).value();",
          },
        },
        required: true,
        target: 'resource',
        value: null,
      },
    ],
    configurable_resources: ['opportunities', 'pipelines'],
    resource_schema_support: [],
    resource_settings_support: ['opportunities', 'pipelines'],
    settings_required_for_authorization: [],
    state: 'callable',
    enabled: true,
    settings: {
      base_url: 'wefewf',
    },
    metadata: {},
    created_at: 1644928148228,
    updated_at: 1644931116789,
    authorize_url: null,
    revoke_url: null,
  },
};
