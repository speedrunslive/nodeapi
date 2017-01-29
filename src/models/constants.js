/*
 *  Copyright (c) 2017 SpeedRunsLive, All rights reserved.
 */
'use strict';

var Enum = require('enum');

var streamAPI = new Enum(['TWITCH', 'HITBOX', 'BEAM'], {
  ignoreCase: true
});

var streamVisibility = new Enum({
  'ALWAYS': 0,
  'NEVER': 1,
  'AUTO': 2,
  'RACING': 3
}, {
  ignoreCase: true
});

var streamPref = new Enum({
  'PIN_STREAM': 0,
  'HIDE_STREAM': 1,
  'PIN_GAME': 2,
  'HIDE_GAME': 3,
  'IMPORT_FROM': 4
}, {
  ignoreCase: true
});

var country = new Enum({
  'None': 1,
  'Afghanistan': 2,
  'Albania': 3,
  'Algeria': 4,
  'American Samoa': 5,
  'Andorra': 6,
  'Angola': 7,
  'Anguilla': 8,
  'Antigua and Barbuda': 9,
  'Argentina': 10,
  'Armenia': 11,
  'Aruba': 12,
  'Australia': 13,
  'Austria': 14,
  'Azerbaijan': 15,
  'Bahamas': 16,
  'Bahrain': 17,
  'Bangladesh': 18,
  'Barbados': 19,
  'Belarus': 20,
  'Belgium': 21,
  'Belize': 22,
  'Benin': 23,
  'Bermuda': 24,
  'Bhutan': 25,
  'Bolivia': 26,
  'Bosnia': 27,
  'Botswana': 28,
  'Brazil': 29,
  'British Virgin Islands': 30,
  'Brunei': 31,
  'Bulgaria': 32,
  'Burkina Faso': 33,
  'Burundi': 34,
  'Cambodia': 35,
  'Cameroon': 36,
  'Canada': 37,
  'Cape Verde': 38,
  'Cayman Islands': 39,
  'Central African Republic': 40,
  'Chad': 41,
  'Chile': 42,
  'China': 43,
  'Christmas Island': 44,
  'Colombia': 45,
  'Comoros': 46,
  'Cook Islands': 47,
  'Costa Rica': 48,
  'Croatia': 49,
  'Cuba': 50,
  'Cyprus': 51,
  'Czech Republic': 52,
  'Democratic Republic of the Congo': 53,
  'Denmark': 54,
  'Djibouti': 55,
  'Dominica': 56,
  'Dominican Republic': 57,
  'Ecuador': 58,
  'Egypt': 59,
  'El Salvador': 60,
  'Equatorial Guinea': 61,
  'Eritrea': 62,
  'Estonia': 63,
  'Ethiopia': 64,
  'Falkland Islands': 65,
  'Faroe Islands': 66,
  'Fiji': 67,
  'Finland': 68,
  'France': 69,
  'French Polynesia': 70,
  'Gabon': 71,
  'Gambia': 72,
  'Georgia': 73,
  'Germany': 74,
  'Ghana': 75,
  'Gibraltar': 76,
  'Greece': 77,
  'Greenland': 78,
  'Grenada': 79,
  'Guam': 80,
  'Guatemala': 81,
  'Guinea': 82,
  'Guinea Bissau': 83,
  'Guyana': 84,
  'Haiti': 85,
  'Honduras': 86,
  'Hong Kong': 87,
  'Hungary': 88,
  'Iceland': 89,
  'India': 90,
  'Indonesia': 91,
  'Iran': 92,
  'Iraq': 93,
  'Ireland': 94,
  'Israel': 95,
  'Italy': 96,
  'Jamaica': 97,
  'Japan': 98,
  'Jordan': 99,
  'Kazakhstan': 100,
  'Kenya': 101,
  'Kiribati': 102,
  'Kuwait': 103,
  'Kyrgyzstan': 104,
  'Laos': 105,
  'Latvia': 106,
  'Lebanon': 107,
  'Lesotho': 108,
  'Liberia': 109,
  'Libya': 110,
  'Liechtenstein': 111,
  'Lithuania': 112,
  'Luxembourg': 113,
  'Macao': 114,
  'Macedonia': 115,
  'Madagascar': 116,
  'Malawi': 117,
  'Malaysia': 118,
  'Maldives': 119,
  'Mali': 120,
  'Malta': 121,
  'Marshall Islands': 122,
  'Martinique': 123,
  'Mauritania': 124,
  'Mauritius': 125,
  'Mexico': 126,
  'Micronesia': 127,
  'Moldova': 128,
  'Monaco': 129,
  'Mongolia': 130,
  'Montserrat': 131,
  'Morocco': 132,
  'Mozambique': 133,
  'Myanmar': 134,
  'Namibia': 135,
  'Nauru': 136,
  'Nepal': 137,
  'Netherlands': 138,
  'Netherlands Antilles': 139,
  'New Zealand': 140,
  'Nicaragua': 141,
  'Niger': 142,
  'Nigeria': 143,
  'Niue': 144,
  'Norfolk Island': 145,
  'North Korea': 146,
  'Norway': 147,
  'Oman': 148,
  'Pakistan': 149,
  'Palau': 150,
  'Panama': 151,
  'Papua New Guinea': 152,
  'Paraguay': 153,
  'Peru': 154,
  'Philippines': 155,
  'Pitcairn Islands': 156,
  'Poland': 157,
  'Portugal': 158,
  'Puerto Rico': 159,
  'Qatar': 160,
  'Republic of the Congo': 161,
  'Romania': 162,
  'Russian Federation': 163,
  'Rwanda': 164,
  'Saint Kitts and Nevis': 165,
  'Saint Lucia': 166,
  'Saint Pierre': 167,
  'Saint Vicent and the Grenadines': 168,
  'Samoa': 169,
  'San Marino': 170,
  'Saudi Arabia': 171,
  'Senegal': 172,
  'Serbia and Montenegro': 173,
  'Seychelles': 174,
  'Sierra Leone': 175,
  'Singapore': 176,
  'Slovakia': 177,
  'Slovenia': 178,
  'Soloman Islands': 179,
  'Somalia': 180,
  'South Africa': 181,
  'South Georgia': 182,
  'South Korea': 183,
  'Soviet Union': 184,
  'Spain': 185,
  'Sri Lanka': 186,
  'Sudan': 187,
  'Suriname': 188,
  'Swaziland': 189,
  'Sweden': 190,
  'Switzerland': 191,
  'Syria': 192,
  'Taiwan': 193,
  'Tajikistan': 194,
  'Tanzania': 195,
  'Thailand': 196,
  'Tibet': 197,
  'Timor': 198,
  'Togo': 199,
  'Tonga': 200,
  'Trinidad and Tobago': 201,
  'Tunisia': 202,
  'Turkey': 203,
  'Turkmenistan': 204,
  'Turks and Caicos Islands': 205,
  'Tuvalu': 206,
  'UAE': 207,
  'US Virgin Islands': 208,
  'Uganda': 209,
  'Ukraine': 210,
  'United Kingdom': 211,
  'United States of America': 212,
  'Uruguay': 213,
  'Uzbekistan': 214,
  'Vanuatu': 215,
  'Vatican City': 216,
  'Venezuela': 217,
  'Vietnam': 218,
  'Wallis and Futuna': 219,
  'Yemen': 220,
  'Zambia': 221,
  'Zimbabwe': 222,
  'Scania': 223
});

module.exports = {
  STREAM_API: streamAPI,
  STREAM_APIS: streamAPI.enums.map(function(it) {
    return it.key;
  }),
  STREAM_VISIBILITY: streamVisibility,
  STREAM_VISIBILITIES: streamVisibility.enums.map(function(it) {
    return it.value;
  }),
  STREAM_PREF: streamPref,
  STREAM_PREFS: streamPref.enums.map(function(it) {
    return it.value;
  }),
  COUNTRY: country,
  COUNTRIES: country.enums.map(function(it) {
    return it.value;
  })
};
