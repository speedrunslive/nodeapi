/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

module.exports = {
  ACCOUNT_TYPE: {
    ADMIN: 'Admin',
    OP: 'Operator',
    HALF_OP: 'Half-Operator',
    VOICE: 'Voice',
    PLAYER: 'Player'
  },
  ACCOUNT_TYPE_ARRAY: [
    'Admin', 'Operator', 'Half-Operator', 'Voice', 'Player'
  ],
  STREAM_API: {
    NONE: 'none',
    TWITCH: 'twitch',
    HITBOX: 'hitbox',
    BEAM: 'beam'
  },
  STREAM_API_ARRAY: ['none', 'twitch', 'hitbox', 'beam'],
  STREAM_PREF: {
    PIN_STREAM: 'Pin Stream',
    HIDE_STREAM: 'Hide Stream',
    PIN_GAME: 'Pin Game',
    HIDE_GAME: 'Hide Game',
    IMPORT_STREAMS: 'Import Streams'
  },
  STREAM_PREF_ARRAY: [
    'Pin Stream', 'Hide Stream', 'Pin Game', 'Hide Game', 'Import Streams'
  ],
  COUNTRY_ARRAY: [
    'None',
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Colombia',
    'Comoros',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Democratic Republic of the Congo',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'North Korea',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn Islands',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of the Congo',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Pierre',
    'Saint Vicent and the Grenadines',
    'Samoa',
    'San Marino',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Soloman Islands',
    'Somalia',
    'South Africa',
    'South Georgia',
    'South Korea',
    'Soviet Union',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Tibet',
    'Timor',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'UAE',
    'US Virgin Islands',
    'Uganda',
    'Ukraine',
    'United Kingdom',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Wallis and Futuna',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Scania'
  ],
  // 1, None
  // 2, Afghanistan
  // 3, Albania
  // 4, Algeria
  // 5, American Samoa
  // 6, Andorra
  // 7, Angola
  // 8, Anguilla
  // 9, Antigua and Barbuda
  // 10, Argentina
  // 11, Armenia
  // 12, Aruba
  // 13, Australia
  // 14, Austria
  // 15, Azerbaijan
  // 16, Bahamas
  // 17, Bahrain
  // 18, Bangladesh
  // 19, Barbados
  // 20, Belarus
  // 21, Belgium
  // 22, Belize
  // 23, Benin
  // 24, Bermuda
  // 25, Bhutan
  // 26, Bolivia
  // 27, Bosnia
  // 28, Botswana
  // 29, Brazil
  // 30, British Virgin Islands
  // 31, Brunei
  // 32, Bulgaria
  // 33, Burkina Faso
  // 34, Burundi
  // 35, Cambodia
  // 36, Cameroon
  // 37, Canada
  // 38, Cape Verde
  // 39, Cayman Islands
  // 40, Central African Republic
  // 41, Chad
  // 42, Chile
  // 43, China
  // 44, Christmas Island
  // 45, Colombia
  // 46, Comoros
  // 47, Cook Islands
  // 48, Costa Rica
  // 49, Croatia
  // 50, Cuba
  // 51, Cyprus
  // 52, Czech Republic
  // 53, Democratic Republic of the Congo
  // 54, Denmark
  // 55, Djibouti
  // 56, Dominica
  // 57, Dominican Republic
  // 58, Ecuador
  // 59, Egypt
  // 60, El Salvador
  // 61, Equatorial Guinea
  // 62, Eritrea
  // 63, Estonia
  // 64, Ethiopia
  // 65, Falkland Islands
  // 66, Faroe Islands
  // 67, Fiji
  // 68, Finland
  // 69, France
  // 70, French Polynesia
  // 71, Gabon
  // 72, Gambia
  // 73, Georgia
  // 74, Germany
  // 75, Ghana
  // 76, Gibraltar
  // 77, Greece
  // 78, Greenland
  // 79, Grenada
  // 80, Guam
  // 81, Guatemala
  // 82, Guinea
  // 83, Guinea Bissau
  // 84, Guyana
  // 85, Haiti
  // 86, Honduras
  // 87, Hong Kong
  // 88, Hungary
  // 89, Iceland
  // 90, India
  // 91, Indonesia
  // 92, Iran
  // 93, Iraq
  // 94, Ireland
  // 95, Israel
  // 96, Italy
  // 97, Jamaica
  // 98, Japan
  // 99, Jordan
  // 100, Kazakhstan
  // 101, Kenya
  // 102, Kiribati
  // 103, Kuwait
  // 104, Kyrgyzstan
  // 105, Laos
  // 106, Latvia
  // 107, Lebanon
  // 108, Lesotho
  // 109, Liberia
  // 110, Libya
  // 111, Liechtenstein
  // 112, Lithuania
  // 113, Luxembourg
  // 114, Macao
  // 115, Macedonia
  // 116, Madagascar
  // 117, Malawi
  // 118, Malaysia
  // 119, Maldives
  // 120, Mali
  // 121, Malta
  // 122, Marshall Islands
  // 123, Martinique
  // 124, Mauritania
  // 125, Mauritius
  // 126, Mexico
  // 127, Micronesia
  // 128, Moldova
  // 129, Monaco
  // 130, Mongolia
  // 131, Montserrat
  // 132, Morocco
  // 133, Mozambique
  // 134, Myanmar
  // 135, Namibia
  // 136, Nauru
  // 137, Nepal
  // 138, Netherlands
  // 139, Netherlands Antilles
  // 140, New Zealand
  // 141, Nicaragua
  // 142, Niger
  // 143, Nigeria
  // 144, Niue
  // 145, Norfolk Island
  // 146, North Korea
  // 147, Norway
  // 148, Oman
  // 149, Pakistan
  // 150, Palau
  // 151, Panama
  // 152, Papua New Guinea
  // 153, Paraguay
  // 154, Peru
  // 155, Philippines
  // 156, Pitcairn Islands
  // 157, Poland
  // 158, Portugal
  // 159, Puerto Rico
  // 160, Qatar
  // 161, Republic of the Congo
  // 162, Romania
  // 163, Russian Federation
  // 164, Rwanda
  // 165, Saint Kitts and Nevis
  // 166, Saint Lucia
  // 167, Saint Pierre
  // 168, Saint Vicent and the Grenadines
  // 169, Samoa
  // 170, San Marino
  // 171, Saudi Arabia
  // 172, Senegal
  // 173, Serbia and Montenegro
  // 174, Seychelles
  // 175, Sierra Leone
  // 176, Singapore
  // 177, Slovakia
  // 178, Slovenia
  // 179, Soloman Islands
  // 180, Somalia
  // 181, South Africa
  // 182, South Georgia
  // 183, South Korea
  // 184, Soviet Union
  // 185, Spain
  // 186, Sri Lanka
  // 187, Sudan
  // 188, Suriname
  // 189, Swaziland
  // 190, Sweden
  // 191, Switzerland
  // 192, Syria
  // 193, Taiwan
  // 194, Tajikistan
  // 195, Tanzania
  // 196, Thailand
  // 197, Tibet
  // 198, Timor
  // 199, Togo
  // 200, Tonga
  // 201, Trinidad and Tobago
  // 202, Tunisia
  // 203, Turkey
  // 204, Turkmenistan
  // 205, Turks and Caicos Islands
  // 206, Tuvalu
  // 207, UAE
  // 208, US Virgin Islands
  // 209, Uganda
  // 210, Ukraine
  // 211, United Kingdom
  // 212, United States of America
  // 213, Uruguay
  // 214, Uzbekistan
  // 215, Vanuatu
  // 216, Vatican City
  // 217, Venezuela
  // 218, Vietnam
  // 219, Wallis and Futuna
  // 220, Yemen
  // 221, Zambia
  // 222, Zimbabwe
  // 223, Scania
};
