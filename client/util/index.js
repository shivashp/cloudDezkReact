import axios from 'axios';
const url = 'localhost';


const request = axios.create({
    baseUrl: url,
})

export const FUNC = {
    isInPattern: function (v, p) {
        "use strict";
        return p.test(v);
    }
}


export const CustomerFUNC = {
    newCustomerRegister: ({firstName, lastName, email, phoneNumber, company, country, password}) => {
        return new Promise((resolve, reject) => {
            request({
                method: 'post',
                url: '/api/newCustomerRegister',
                data: { firstName, lastName, email, phoneNumber, company, country, password }
            })
                .then(resolve)
                .catch(reject);
        });
    },

    newCustomerAccount: ({ customerid, accountid, region, arn, externalid, awslink}) => {
        return new Promise((resolve, reject) => {
            request({
                method: 'post',
                url: '/api/newCustomerAccount',
                data: { customerid, accountid, region, arn, externalid, awslink }
            })
                .then(resolve)
                .catch(reject);
        });
    }
}

export const REGIONS = [
    {viewValue: "---", value: ""},
    {viewValue: 'ap-northeast-1', value: 'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue: 'ap-northeast-2', value: 'ec2.ap-northeast-2.amazonaws.com'},
    {viewValue: 'ap-south-1', value: 'ec2.ap-south-1.amazonaws.com'},
    {viewValue: 'ap-southeast-1', value: 'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue: 'ap-southeast-2', value: 'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue: 'ca-central-1', value: 'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue: 'eu-central-1', value: 'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue: 'eu-west-1', value: 'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue: 'eu-west-2', value: 'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue: 'us-east-1', value: 'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue: 'us-east-2', value: 'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue: 'us-west-1', value: 'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue: 'us-west-2', value: 'ec2.ap-northeast-1.amazonaws.com'},
];

export const COUNTRIES = [
    {viewValue: "---", value: ""},
    {viewValue: "Afghanistan", value: "AF"},
    {viewValue: "Aland Islands", value: "AX"},
    {viewValue: "Albania", value: "AL"},
    {viewValue: "Algeria", value: "DZ"},
    {viewValue: "American Samoa", value: "AS"},
    {viewValue: "AndorrA", value: "AD"},
    {viewValue: "Angola", value: "AO"},
    {viewValue: "Anguilla", value: "AI"},
    {viewValue: "Antarctica", value: "AQ"},
    {viewValue: "Antigua and Barbuda", value: "AG"},
    {viewValue: "Argentina", value: "AR"},
    {viewValue: "Armenia", value: "AM"},
    {viewValue: "Aruba", value: "AW"},
    {viewValue: "Australia", value: "AU"},
    {viewValue: "Austria", value: "AT"},
    {viewValue: "Azerbaijan", value: "AZ"},
    {viewValue: "Bahamas", value: "BS"},
    {viewValue: "Bahrain", value: "BH"},
    {viewValue: "Bangladesh", value: "BD"},
    {viewValue: "Barbados", value: "BB"},
    {viewValue: "Belarus", value: "BY"},
    {viewValue: "Belgium", value: "BE"},
    {viewValue: "Belize", value: "BZ"},
    {viewValue: "Benin", value: "BJ"},
    {viewValue: "Bermuda", value: "BM"},
    {viewValue: "Bhutan", value: "BT"},
    {viewValue: "Bolivia", value: "BO"},
    {viewValue: "Bosnia and Herzegovina", value: "BA"},
    {viewValue: "Botswana", value: "BW"},
    {viewValue: "Bouvet Island", value: "BV"},
    {viewValue: "Brazil", value: "BR"},
    {viewValue: "British Indian Ocean Territory", value: "IO"},
    {viewValue: "Brunei Darussalam", value: "BN"},
    {viewValue: "Bulgaria", value: "BG"},
    {viewValue: "Burkina Faso", value: "BF"},
    {viewValue: "Burundi", value: "BI"},
    {viewValue: "Cambodia", value: "KH"},
    {viewValue: "Cameroon", value: "CM"},
    {viewValue: "Canada", value: "CA"},
    {viewValue: "Cape Verde", value: "CV"},
    {viewValue: "Cayman Islands", value: "KY"},
    {viewValue: "Central African Republic", value: "CF"},
    {viewValue: "Chad", value: "TD"},
    {viewValue: "Chile", value: "CL"},
    {viewValue: "China", value: "CN"},
    {viewValue: "Christmas Island", value: "CX"},
    {viewValue: "Cocos (Keeling) Islands", value: "CC"},
    {viewValue: "Colombia", value: "CO"},
    {viewValue: "Comoros", value: "KM"},
    {viewValue: "Congo", value: "CG"},
    {viewValue: "Congo, The Democratic Republic of the", value: "CD"},
    {viewValue: "Cook Islands", value: "CK"},
    {viewValue: "Costa Rica", value: "CR"},
    {viewValue: "Cote d'Ivoire", value: "CI"},
    {viewValue: "Croatia", value: "HR"},
    {viewValue: "Cuba", value: "CU"},
    {viewValue: "Cyprus", value: "CY"},
    {viewValue: "Czech Republic", value: "CZ"},
    {viewValue: "Denmark", value: "DK"},
    {viewValue: "Djibouti", value: "DJ"},
    {viewValue: "Dominica", value: "DM"},
    {viewValue: "Dominican Republic", value: "DO"},
    {viewValue: "Ecuador", value: "EC"},
    {viewValue: "Egypt", value: "EG"},
    {viewValue: "El Salvador", value: "SV"},
    {viewValue: "Equatorial Guinea", value: "GQ"},
    {viewValue: "Eritrea", value: "ER"},
    {viewValue: "Estonia", value: "EE"},
    {viewValue: "Ethiopia", value: "ET"},
    {viewValue: "Falkland Islands (Malvinas)", value: "FK"},
    {viewValue: "Faroe Islands", value: "FO"},
    {viewValue: "Fiji", value: "FJ"},
    {viewValue: "Finland", value: "FI"},
    {viewValue: "France", value: "FR"},
    {viewValue: "French Guiana", value: "GF"},
    {viewValue: "French Polynesia", value: "PF"},
    {viewValue: "French Southern Territories", value: "TF"},
    {viewValue: "Gabon", value: "GA"},
    {viewValue: "Gambia", value: "GM"},
    {viewValue: "Georgia", value: "GE"},
    {viewValue: "Germany", value: "DE"},
    {viewValue: "Ghana", value: "GH"},
    {viewValue: "Gibraltar", value: "GI"},
    {viewValue: "Greece", value: "GR"},
    {viewValue: "Greenland", value: "GL"},
    {viewValue: "Grenada", value: "GD"},
    {viewValue: "Guadeloupe", value: "GP"},
    {viewValue: "Guam", value: "GU"},
    {viewValue: "Guatemala", value: "GT"},
    {viewValue: "Guernsey", value: "GG"},
    {viewValue: "Guinea", value: "GN"},
    {viewValue: "Guinea-Bissau", value: "GW"},
    {viewValue: "Guyana", value: "GY"},
    {viewValue: "Haiti", value: "HT"},
    {viewValue: "Heard Island and Mcdonald Islands", value: "HM"},
    {viewValue: "Holy See (Vatican City State)", value: "VA"},
    {viewValue: "Honduras", value: "HN"},
    {viewValue: "Hong Kong", value: "HK"},
    {viewValue: "Hungary", value: "HU"},
    {viewValue: "Iceland", value: "IS"},
    {viewValue: "India", value: "IN"},
    {viewValue: "Indonesia", value: "ID"},
    {viewValue: "Iran, Islamic Republic Of", value: "IR"},
    {viewValue: "Iraq", value: "IQ"},
    {viewValue: "Ireland", value: "IE"},
    {viewValue: "Isle of Man", value: "IM"},
    {viewValue: "Israel", value: "IL"},
    {viewValue: "Italy", value: "IT"},
    {viewValue: "Jamaica", value: "JM"},
    {viewValue: "Japan", value: "JP"},
    {viewValue: "Jersey", value: "JE"},
    {viewValue: "Jordan", value: "JO"},
    {viewValue: "Kazakhstan", value: "KZ"},
    {viewValue: "Kenya", value: "KE"},
    {viewValue: "Kiribati", value: "KI"},
    {viewValue: "Korea, Democratic People'S Republic of", value: "KP"},
    {viewValue: "Korea, Republic of", value: "KR"},
    {viewValue: "Kuwait", value: "KW"},
    {viewValue: "Kyrgyzstan", value: "KG"},
    {viewValue: "Lao People'S Democratic Republic", value: "LA"},
    {viewValue: "Latvia", value: "LV"},
    {viewValue: "Lebanon", value: "LB"},
    {viewValue: "Lesotho", value: "LS"},
    {viewValue: "Liberia", value: "LR"},
    {viewValue: "Libyan Arab Jamahiriya", value: "LY"},
    {viewValue: "Liechtenstein", value: "LI"},
    {viewValue: "Lithuania", value: "LT"},
    {viewValue: "Luxembourg", value: "LU"},
    {viewValue: "Macao", value: "MO"},
    {viewValue: "Macedonia, The Former Yugoslav Republic of", value: "MK"},
    {viewValue: "Madagascar", value: "MG"},
    {viewValue: "Malawi", value: "MW"},
    {viewValue: "Malaysia", value: "MY"},
    {viewValue: "Maldives", value: "MV"},
    {viewValue: "Mali", value: "ML"},
    {viewValue: "Malta", value: "MT"},
    {viewValue: "Marshall Islands", value: "MH"},
    {viewValue: "Martinique", value: "MQ"},
    {viewValue: "Mauritania", value: "MR"},
    {viewValue: "Mauritius", value: "MU"},
    {viewValue: "Mayotte", value: "YT"},
    {viewValue: "Mexico", value: "MX"},
    {viewValue: "Micronesia, Federated States of", value: "FM"},
    {viewValue: "Moldova, Republic of", value: "MD"},
    {viewValue: "Monaco", value: "MC"},
    {viewValue: "Mongolia", value: "MN"},
    {viewValue: "Montserrat", value: "MS"},
    {viewValue: "Morocco", value: "MA"},
    {viewValue: "Mozambique", value: "MZ"},
    {viewValue: "Myanmar", value: "MM"},
    {viewValue: "Namibia", value: "NA"},
    {viewValue: "Nauru", value: "NR"},
    {viewValue: "Nepal", value: "NP"},
    {viewValue: "Netherlands", value: "NL"},
    {viewValue: "Netherlands Antilles", value: "AN"},
    {viewValue: "New Caledonia", value: "NC"},
    {viewValue: "New Zealand", value: "NZ"},
    {viewValue: "Nicaragua", value: "NI"},
    {viewValue: "Niger", value: "NE"},
    {viewValue: "Nigeria", value: "NG"},
    {viewValue: "Niue", value: "NU"},
    {viewValue: "Norfolk Island", value: "NF"},
    {viewValue: "Northern Mariana Islands", value: "MP"},
    {viewValue: "Norway", value: "NO"},
    {viewValue: "Oman", value: "OM"},
    {viewValue: "Pakistan", value: "PK"},
    {viewValue: "Palau", value: "PW"},
    {viewValue: "Palestinian Territory, Occupied", value: "PS"},
    {viewValue: "Panama", value: "PA"},
    {viewValue: "Papua New Guinea", value: "PG"},
    {viewValue: "Paraguay", value: "PY"},
    {viewValue: "Peru", value: "PE"},
    {viewValue: "Philippines", value: "PH"},
    {viewValue: "Pitcairn", value: "PN"},
    {viewValue: "Poland", value: "PL"},
    {viewValue: "Portugal", value: "PT"},
    {viewValue: "Puerto Rico", value: "PR"},
    {viewValue: "Qatar", value: "QA"},
    {viewValue: "Reunion", value: "RE"},
    {viewValue: "Romania", value: "RO"},
    {viewValue: "Russian Federation", value: "RU"},
    {viewValue: "RWANDA", value: "RW"},
    {viewValue: "Saint Helena", value: "SH"},
    {viewValue: "Saint Kitts and Nevis", value: "KN"},
    {viewValue: "Saint Lucia", value: "LC"},
    {viewValue: "Saint Pierre and Miquelon", value: "PM"},
    {viewValue: "Saint Vincent and the Grenadines", value: "VC"},
    {viewValue: "Samoa", value: "WS"},
    {viewValue: "San Marino", value: "SM"},
    {viewValue: "Sao Tome and Principe", value: "ST"},
    {viewValue: "Saudi Arabia", value: "SA"},
    {viewValue: "Senegal", value: "SN"},
    {viewValue: "Serbia and Montenegro", value: "CS"},
    {viewValue: "Seychelles", value: "SC"},
    {viewValue: "Sierra Leone", value: "SL"},
    {viewValue: "Singapore", value: "SG"},
    {viewValue: "Slovakia", value: "SK"},
    {viewValue: "Slovenia", value: "SI"},
    {viewValue: "Solomon Islands", value: "SB"},
    {viewValue: "Somalia", value: "SO"},
    {viewValue: "South Africa", value: "ZA"},
    {viewValue: "South Georgia and the South Sandwich Islands", value: "GS"},
    {viewValue: "Spain", value: "ES"},
    {viewValue: "Sri Lanka", value: "LK"},
    {viewValue: "Sudan", value: "SD"},
    {viewValue: "Suriname", value: "SR"},
    {viewValue: "Svalbard and Jan Mayen", value: "SJ"},
    {viewValue: "Swaziland", value: "SZ"},
    {viewValue: "Sweden", value: "SE"},
    {viewValue: "Switzerland", value: "CH"},
    {viewValue: "Syrian Arab Republic", value: "SY"},
    {viewValue: "Taiwan, Province of China", value: "TW"},
    {viewValue: "Tajikistan", value: "TJ"},
    {viewValue: "Tanzania, United Republic of", value: "TZ"},
    {viewValue: "Thailand", value: "TH"},
    {viewValue: "Timor-Leste", value: "TL"},
    {viewValue: "Togo", value: "TG"},
    {viewValue: "Tokelau", value: "TK"},
    {viewValue: "Tonga", value: "TO"},
    {viewValue: "Trinidad and Tobago", value: "TT"},
    {viewValue: "Tunisia", value: "TN"},
    {viewValue: "Turkey", value: "TR"},
    {viewValue: "Turkmenistan", value: "TM"},
    {viewValue: "Turks and Caicos Islands", value: "TC"},
    {viewValue: "Tuvalu", value: "TV"},
    {viewValue: "Uganda", value: "UG"},
    {viewValue: "Ukraine", value: "UA"},
    {viewValue: "United Arab Emirates", value: "AE"},
    {viewValue: "United Kingdom", value: "GB"},
    {viewValue: "United States", value: "US"},
    {viewValue: "United States Minor Outlying Islands", value: "UM"},
    {viewValue: "Uruguay", value: "UY"},
    {viewValue: "Uzbekistan", value: "UZ"},
    {viewValue: "Vanuatu", value: "VU"},
    {viewValue: "Venezuela", value: "VE"},
    {viewValue: "Viet Nam", value: "VN"},
    {viewValue: "Virgin Islands, British", value: "VG"},
    {viewValue: "Virgin Islands, U.S.", value: "VI"},
    {viewValue: "Wallis and Futuna", value: "WF"},
    {viewValue: "Western Sahara", value: "EH"},
    {viewValue: "Yemen", value: "YE"},
    {viewValue: "Zambia", value: "ZM"},
    {viewValue: "Zimbabwe", value: "ZW"}
];
