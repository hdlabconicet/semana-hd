let countries = [
  { value: "", text: "" },
  {
    value: "AF",
    text: "Afganistan",
  },
  {
    value: "ZA",
    text: "Sudafrica",
  },
  {
    value: "AL",
    text: "Albania",
  },
  {
    value: "DE",
    text: "Alemania",
  },
  {
    value: "AD",
    text: "Andorra",
  },
  {
    value: "AO",
    text: "Angola",
  },
  {
    value: "AI",
    text: "Anguilla",
  },
  {
    value: "AQ",
    text: "Antártida",
  },
  {
    value: "AG",
    text: "Antígua e Barbuda",
  },
  {
    value: "AN",
    text: "Antilhas Holandesas",
  },
  {
    value: "SA",
    text: "Arábia Saudita",
  },
  {
    value: "DZ",
    text: "Argélia",
  },
  {
    value: "AR",
    text: "Argentina",
  },
  {
    value: "AM",
    text: "Armênia",
  },
  {
    value: "AW",
    text: "Aruba",
  },
  {
    value: "AU",
    text: "Austrália",
  },
  {
    value: "AT",
    text: "Áustria",
  },
  {
    value: "AZ  ",
    text: "Azerbaijão",
  },
  {
    value: "BS",
    text: "Bahamas",
  },
  {
    value: "BH",
    text: "Bahrein",
  },
  {
    value: "BD",
    text: "Bangladesh",
  },
  {
    value: "BB",
    text: "Barbados",
  },
  {
    value: "BY",
    text: "Belarus",
  },
  {
    value: "BE",
    text: "Bélgica",
  },
  {
    value: "BZ",
    text: "Belize",
  },
  {
    value: "BJ",
    text: "Benin",
  },
  {
    value: "BM",
    text: "Bermudas",
  },
  {
    value: "BO",
    text: "Bolívia",
  },
  {
    value: "BA",
    text: "Bósnia-Herzegóvina",
  },
  {
    value: "BW",
    text: "Botsuana",
  },
  {
    value: "BR",
    text: "Brasil",
  },
  {
    value: "BN",
    text: "Brunei",
  },
  {
    value: "BG",
    text: "Bulgária",
  },
  {
    value: "BF",
    text: "Burkina Fasso",
  },
  {
    value: "BI",
    text: "Burundi",
  },
  {
    value: "BT",
    text: "Butão",
  },
  {
    value: "CV",
    text: "Cabo Verde",
  },
  {
    value: "CM",
    text: "Camarões",
  },
  {
    value: "KH",
    text: "Camboja",
  },
  {
    value: "CA",
    text: "Canadá",
  },
  {
    value: "KZ",
    text: "Cazaquistão",
  },
  {
    value: "TD",
    text: "Chade",
  },
  {
    value: "CL",
    text: "Chile",
  },
  {
    value: "CN",
    text: "China",
  },
  {
    value: "CY",
    text: "Chipre",
  },
  {
    value: "SG",
    text: "Cingapura",
  },
  {
    value: "CO",
    text: "Colômbia",
  },
  {
    value: "CG",
    text: "Congo",
  },
  {
    value: "KP",
    text: "Coréia do Norte",
  },
  {
    value: "KR",
    text: "Coréia do Sul",
  },
  {
    value: "CI",
    text: "Costa do Marfim",
  },
  {
    value: "CR",
    text: "Costa Rica",
  },
  {
    value: "HR",
    text: "Croácia (Hrvatska)",
  },
  {
    value: "CU",
    text: "Cuba",
  },
  {
    value: "DK",
    text: "Dinamarca",
  },
  {
    value: "DJ",
    text: "Djibuti",
  },
  {
    value: "DM",
    text: "Dominica",
  },
  {
    value: "EG",
    text: "Egito",
  },
  {
    value: "SV",
    text: "El Salvador",
  },
  {
    value: "AE",
    text: "Emirados Árabes Unidos",
  },
  {
    value: "EC",
    text: "Equador",
  },
  {
    value: "ER",
    text: "Eritréia",
  },
  {
    value: "SK",
    text: "Eslováquia",
  },
  {
    value: "SI",
    text: "Eslovênia",
  },
  {
    value: "ES",
    text: "Espanha",
  },
  {
    value: "US",
    text: "Estados Unidos",
  },
  {
    value: "EE",
    text: "Estônia",
  },
  {
    value: "ET",
    text: "Etiópia",
  },
  {
    value: "FJ",
    text: "Fiji",
  },
  {
    value: "PH",
    text: "Filipinas",
  },
  {
    value: "FI",
    text: "Finlândia",
  },
  {
    value: "FR",
    text: "França",
  },
  {
    value: "GA",
    text: "Gabão",
  },
  {
    value: "GM",
    text: "Gâmbia",
  },
  {
    value: "GH",
    text: "Gana",
  },
  {
    value: "GE",
    text: "Geórgia",
  },
  {
    value: "GI",
    text: "Gibraltar",
  },
  {
    value: "GB",
    text: "Grã-Bretanha (Reino Unido, UK)",
  },
  {
    value: "GD",
    text: "Granada",
  },
  {
    value: "GR",
    text: "Grécia",
  },
  {
    value: "GL",
    text: "Groelândia",
  },
  {
    value: "GP",
    text: "Guadalupe",
  },
  {
    value: "GU",
    text: "Guam (Território dos Estados Unidos)",
  },
  {
    value: "GT",
    text: "Guatemala",
  },
  {
    value: "G",
    text: "Guernsey",
  },
  {
    value: "GY",
    text: "Guiana",
  },
  {
    value: "GF",
    text: "Guiana Francesa",
  },
  {
    value: "GN",
    text: "Guiné",
  },
  {
    value: "GQ",
    text: "Guiné Equatorial",
  },
  {
    value: "GW",
    text: "Guiné-Bissau",
  },
  {
    value: "HT",
    text: "Haiti",
  },
  {
    value: "NL",
    text: "Holanda",
  },
  {
    value: "HN",
    text: "Honduras",
  },
  {
    value: "HK",
    text: "Hong Kong",
  },
  {
    value: "HU",
    text: "Hungria",
  },
  {
    value: "YE",
    text: "Iêmen",
  },
  {
    value: "BV",
    text: "Ilha Bouvet (Território da Noruega)",
  },
  {
    value: "IM",
    text: "Ilha do Homem",
  },
  {
    value: "CX",
    text: "Ilha Natal",
  },
  {
    value: "PN",
    text: "Ilha Pitcairn",
  },
  {
    value: "RE",
    text: "Ilha Reunião",
  },
  {
    value: "AX",
    text: "Ilhas Aland",
  },
  {
    value: "KY",
    text: "Ilhas Cayman",
  },
  {
    value: "CC",
    text: "Ilhas Cocos",
  },
  {
    value: "KM",
    text: "Ilhas Comores",
  },
  {
    value: "CK",
    text: "Ilhas Cook",
  },
  {
    value: "FO",
    text: "Ilhas Faroes",
  },
  {
    value: "FK",
    text: "Ilhas Falkland (Malvinas)",
  },
  {
    value: "GS",
    text: "Ilhas Geórgia do Sul e Sandwich do Sul",
  },
  {
    value: "HM",
    text: "Ilhas Heard e McDonald (Território da Austrália)",
  },
  {
    value: "MP",
    text: "Ilhas Marianas do Norte",
  },
  {
    value: "MH",
    text: "Ilhas Marshall",
  },
  {
    value: "UM",
    text: "Ilhas Menores dos Estados Unidos",
  },
  {
    value: "NF",
    text: "Ilhas Norfolk",
  },
  {
    value: "SC",
    text: "Ilhas Seychelles",
  },
  {
    value: "SB",
    text: "Ilhas Solomão",
  },
  {
    value: "SJ",
    text: "Ilhas Svalbard e Jan Mayen",
  },
  {
    value: "TK",
    text: "Ilhas Tokelau",
  },
  {
    value: "TC",
    text: "Ilhas Turks e Caicos",
  },
  {
    value: "VI",
    text: "Ilhas Virgens (Estados Unidos)",
  },
  {
    value: "VG",
    text: "Ilhas Virgens (Inglaterra)",
  },
  {
    value: "WF",
    text: "Ilhas Wallis e Futuna",
  },
  {
    value: "IN",
    text: "índia",
  },
  {
    value: "ID",
    text: "Indonésia",
  },
  {
    value: "IR",
    text: "Irã",
  },
  {
    value: "IQ",
    text: "Iraque",
  },
  {
    value: "IE",
    text: "Irlanda",
  },
  {
    value: "IS",
    text: "Islândia",
  },
  {
    value: "IL",
    text: "Israel",
  },
  {
    value: "IT",
    text: "Itália",
  },
  {
    value: "JM",
    text: "Jamaica",
  },
  {
    value: "JP",
    text: "Japão",
  },
  {
    value: "JE",
    text: "Jersey",
  },
  {
    value: "JO",
    text: "Jordânia",
  },
  {
    value: "KE",
    text: "Kênia",
  },
  {
    value: "KI",
    text: "Kiribati",
  },
  {
    value: "KW",
    text: "Kuait",
  },
  {
    value: "LA",
    text: "Laos",
  },
  {
    value: "LV",
    text: "Látvia",
  },
  {
    value: "LS",
    text: "Lesoto",
  },
  {
    value: "LB",
    text: "Líbano",
  },
  {
    value: "LR",
    text: "Libéria",
  },
  {
    value: "LY",
    text: "Líbia",
  },
  {
    value: "LI",
    text: "Liechtenstein",
  },
  {
    value: "LT",
    text: "Lituânia",
  },
  {
    value: "LU",
    text: "Luxemburgo",
  },
  {
    value: "MO",
    text: "Macau",
  },
  {
    value: "MK",
    text: "Macedônia (República Yugoslava)",
  },
  {
    value: "MG",
    text: "Madagascar",
  },
  {
    value: "MY",
    text: "Malásia",
  },
  {
    value: "MW",
    text: "Malaui",
  },
  {
    value: "MV",
    text: "Maldivas",
  },
  {
    value: "ML",
    text: "Mali",
  },
  {
    value: "MT",
    text: "Malta",
  },
  {
    value: "MA",
    text: "Marrocos",
  },
  {
    value: "MQ",
    text: "Martinica",
  },
  {
    value: "MU",
    text: "Maurício",
  },
  {
    value: "MR",
    text: "Mauritânia",
  },
  {
    value: "YT",
    text: "Mayotte",
  },
  {
    value: "MX",
    text: "México",
  },
  {
    value: "FM",
    text: "Micronésia",
  },
  {
    value: "MZ",
    text: "Moçambique",
  },
  {
    value: "MD",
    text: "Moldova",
  },
  {
    value: "MC",
    text: "Mônaco",
  },
  {
    value: "MN",
    text: "Mongólia",
  },
  {
    value: "ME",
    text: "Montenegro",
  },
  {
    value: "MS",
    text: "Montserrat",
  },
  {
    value: "MM",
    text: "Myanma",
  },
  {
    value: "NA",
    text: "Namíbia",
  },
  {
    value: "NR",
    text: "Nauru",
  },
  {
    value: "NP",
    text: "Nepal",
  },
  {
    value: "NI",
    text: "Nicarágua",
  },
  {
    value: "NE",
    text: "Níger",
  },
  {
    value: "NG",
    text: "Nigéria",
  },
  {
    value: "NU",
    text: "Niue",
  },
  {
    value: "NO",
    text: "Noruega",
  },
  {
    value: "NC",
    text: "Nova Caledônia",
  },
  {
    value: "NZ",
    text: "Nova Zelândia",
  },
  {
    value: "OM",
    text: "Omã",
  },
  {
    value: "PW",
    text: "Palau",
  },
  {
    value: "PA",
    text: "Panamá",
  },
  {
    value: "PG",
    text: "Papua-Nova Guiné",
  },
  {
    value: "PK",
    text: "Paquistão",
  },
  {
    value: "PY",
    text: "Paraguai",
  },
  {
    value: "PE",
    text: "Peru",
  },
  {
    value: "PF",
    text: "Polinésia Francesa",
  },
  {
    value: "PL",
    text: "Polônia",
  },
  {
    value: "PR",
    text: "Porto Rico",
  },
  {
    value: "PT",
    text: "Portugal",
  },
  {
    value: "QA",
    text: "Qatar",
  },
  {
    value: "KG",
    text: "Quirguistão",
  },
  {
    value: "CF",
    text: "República Centro-Africana",
  },
  {
    value: "CD",
    text: "República Democrática do Congo",
  },
  {
    value: "DO",
    text: "República Dominicana",
  },
  {
    value: "CZ",
    text: "República Tcheca",
  },
  {
    value: "RO",
    text: "Romênia",
  },
  {
    value: "RW",
    text: "Ruanda",
  },
  {
    value: "RU",
    text: "Rússia (antiga URSS) - Federação Russa",
  },
  {
    value: "EH",
    text: "Saara Ocidental",
  },
  {
    value: "VC",
    text: "Saint Vincente e Granadinas",
  },
  {
    value: "AS",
    text: "Samoa Americana",
  },
  {
    value: "WS",
    text: "Samoa Ocidental",
  },
  {
    value: "SM",
    text: "San Marino",
  },
  {
    value: "SH",
    text: "Santa Helena",
  },
  {
    value: "LC",
    text: "Santa Lúcia",
  },
  {
    value: "BL",
    text: "São Bartolomeu",
  },
  {
    value: "KN",
    text: "São Cristóvão e Névis",
  },
  {
    value: "MF",
    text: "São Martim",
  },
  {
    value: "ST",
    text: "São Tomé e Príncipe",
  },
  {
    value: "SN",
    text: "Senegal",
  },
  {
    value: "SL",
    text: "Serra Leoa",
  },
  {
    value: "RS",
    text: "Sérvia",
  },
  {
    value: "SY",
    text: "Síria",
  },
  {
    value: "SO",
    text: "Somália",
  },
  {
    value: "LK",
    text: "Sri Lanka",
  },
  {
    value: "PM",
    text: "St. Pierre and Miquelon",
  },
  {
    value: "SZ",
    text: "Suazilândia",
  },
  {
    value: "SD",
    text: "Sudão",
  },
  {
    value: "SE",
    text: "Suécia",
  },
  {
    value: "CH",
    text: "Suíça",
  },
  {
    value: "SR",
    text: "Suriname",
  },
  {
    value: "TJ",
    text: "Tadjiquistão",
  },
  {
    value: "TH",
    text: "Tailândia",
  },
  {
    value: "TW",
    text: "Taiwan",
  },
  {
    value: "TZ",
    text: "Tanzânia",
  },
  {
    value: "IO",
    text: "Território Britânico do Oceano índico",
  },
  {
    value: "TF",
    text: "Territórios do Sul da França",
  },
  {
    value: "PS",
    text: "Territórios Palestinos Ocupados",
  },
  {
    value: "TP",
    text: "Timor Leste",
  },
  {
    value: "TG",
    text: "Togo",
  },
  {
    value: "TO",
    text: "Tonga",
  },
  {
    value: "TT",
    text: "Trinidad and Tobago",
  },
  {
    value: "TN",
    text: "Tunísia",
  },
  {
    value: "TM",
    text: "Turcomenistão",
  },
  {
    value: "TR",
    text: "Turquia",
  },
  {
    value: "TV",
    text: "Tuvalu",
  },
  {
    value: "UA",
    text: "Ucrânia",
  },
  {
    value: "UG",
    text: "Uganda",
  },
  {
    value: "UY",
    text: "Uruguai",
  },
  {
    value: "UZ",
    text: "Uzbequistão",
  },
  {
    value: "VU",
    text: "Vanuatu",
  },
  {
    value: "VA",
    text: "Vaticano",
  },
  {
    value: "VE",
    text: "Venezuela",
  },
  {
    value: "VN",
    text: "Vietnã",
  },
  {
    value: "ZM",
    text: "Zâmbia",
  },
  {
    value: "ZW",
    text: "Zimbábue",
  },
];

export { countries };
