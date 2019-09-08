const iraniyamStepsModel = require('../model/iraniyamStepsModel');
const locationModel = require('../model/locationmodel');

const locationsList= [
    {
        district: "nicobar",
        districtCode: "NI",
        state: "andaman and nicobar",
        stateCode: "AN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "north and middle andaman",
        districtCode: "NA",
        state: "andaman and nicobar",
        stateCode: "AN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south andaman",
        districtCode: "SA",
        state: "andaman and nicobar",
        stateCode: "AN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "anantapur",
        districtCode: "AN",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chittoor",
        districtCode: "CH",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east godavari",
        districtCode: "EG",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "guntur",
        districtCode: "GU",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kadapa",
        districtCode: "CU",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "krishna",
        districtCode: "KR",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kurnool",
        districtCode: "KU",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "prakasam",
        districtCode: "PR",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sri potti sriramulu nellore",
        districtCode: "NE",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "srikakulam",
        districtCode: "SR",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "visakhapatnam",
        districtCode: "VS",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "vizianagaram",
        districtCode: "VZ",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west godavari",
        districtCode: "WG",
        state: "andhra pradesh",
        stateCode: "AP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "anjaw",
        districtCode: "AJ",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "changlang",
        districtCode: "CH",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east kameng",
        districtCode: "EK",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east siang",
        districtCode: "ES",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kamle",
        districtCode: "KA",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kra daadi",
        districtCode: "KD",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kurung kumey",
        districtCode: "KK",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lohit",
        districtCode: "EL",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "longding",
        districtCode: "LD",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lower dibang valley",
        districtCode: "DV",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lower siang",
        districtCode: "LS",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lower subansiri",
        districtCode: "LB",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "namsai",
        districtCode: "NA",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "papum pare",
        districtCode: "PA",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "siang",
        districtCode: "SI",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tawang",
        districtCode: "TA",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tirap",
        districtCode: "TI",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "upper dibang valley",
        districtCode: "UD",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "upper siang",
        districtCode: "US",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "upper subansiri",
        districtCode: "UB",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west kameng",
        districtCode: "WK",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west siang",
        districtCode: "WS",
        state: "arunachal pradesh",
        stateCode: "AR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "baksa",
        districtCode: "BK",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "barpeta",
        districtCode: "BP",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bishwanath",
        districtCode: "BS",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bongaigaon",
        districtCode: "BO",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "cachar",
        districtCode: "CA",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "charaideo",
        districtCode: "CD",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chirang",
        districtCode: "CH",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "darrang",
        districtCode: "DR",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dhemaji",
        districtCode: "DM",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dhubri",
        districtCode: "DU",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dibrugarh",
        districtCode: "DI",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: " dima hasao",
        districtCode: "NC",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "goalpara",
        districtCode: "GP",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "golaghat",
        districtCode: "GG",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hailakandi",
        districtCode: "HA",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hojai",
        districtCode: "HJ",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jorhat",
        districtCode: "JO",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kamrup metropolitan",
        districtCode: "KM",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "karbi anglong",
        districtCode: "KG",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "karimganj",
        districtCode: "KR",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kokrajhar",
        districtCode: "KJ",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lakhimpur",
        districtCode: "LA",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "majuli",
        districtCode: "MJ",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "morigaon",
        districtCode: "MA",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nagaon",
        districtCode: "NN",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nalbari",
        districtCode: "NB",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sivasagar",
        districtCode: "ST",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south salmara mankachar",
        districtCode: "SM",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sonitpur",
        districtCode: "SO",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tinsukia",
        districtCode: "TI",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "udalguri",
        districtCode: "UD",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west karbi anglong",
        districtCode: "WK",
        state: "assam",
        stateCode: "AS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "araria",
        districtCode: "AR",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "arwal",
        districtCode: "AR",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "aurangabad",
        districtCode: "AU",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "banka",
        districtCode: "BA",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "begusarai",
        districtCode: "BE",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhagalpur",
        districtCode: "BG",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhojpur",
        districtCode: "BJ",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "buxar",
        districtCode: "BU",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "darbhanga",
        districtCode: "DA",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east champaran",
        districtCode: "EC",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gaya",
        districtCode: "GA",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gopalganj",
        districtCode: "GO",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jamui",
        districtCode: "JA",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jehanabad",
        districtCode: "JE",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kaimur",
        districtCode: "KM",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "katihar",
        districtCode: "KT",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "khagaria",
        districtCode: "KH",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kishanganj",
        districtCode: "KI",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lakhisarai",
        districtCode: "LA",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "madhepura",
        districtCode: "MP",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "madhubani",
        districtCode: "MB",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "munger",
        districtCode: "MG",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "muzaffarpur",
        districtCode: "MZ",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nalanda",
        districtCode: "NL",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nawada",
        districtCode: "NW",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "patna",
        districtCode: "PA",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "purnia",
        districtCode: "PU",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rohtas",
        districtCode: "RO",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "saharsa",
        districtCode: "SH",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "samastipur",
        districtCode: "SM",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "saran",
        districtCode: "SR",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sheikhpura",
        districtCode: "SP",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sheohar",
        districtCode: "SO",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sitamarhi",
        districtCode: "ST",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "siwan",
        districtCode: "SW",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "supaul",
        districtCode: "SU",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "vaishali",
        districtCode: "VA",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west champaran",
        districtCode: "WC",
        state: "bihar",
        stateCode: "BR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chandigarh",
        districtCode: "CH",
        state: "chandigarh",
        stateCode: "CH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "balod",
        districtCode: "BA",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "baloda bazar",
        districtCode: "BA",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "balrampur",
        districtCode: "BA",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bastar",
        districtCode: "BA",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bemetara",
        districtCode: "BE",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bijapur",
        districtCode: "BJ",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bilaspur",
        districtCode: "BI",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dantewada",
        districtCode: "DA",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dhamtari",
        districtCode: "DH",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "durg",
        districtCode: "DU",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gariaband",
        districtCode: "GA",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "janjgir- champa",
        districtCode: "JC",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jashpur",
        districtCode: "JA",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kawardha",
        districtCode: "KW",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kanker",
        districtCode: "KK",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kondagaon",
        districtCode: "KO",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "korba",
        districtCode: "KB",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "koriya",
        districtCode: "KJ",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mahasamund",
        districtCode: "MA",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mungeli",
        districtCode: "MU",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "narayanpur",
        districtCode: "NR",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "raigarh",
        districtCode: "RG",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "raipur",
        districtCode: "RP",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rajnandgaon",
        districtCode: "RN",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sukma",
        districtCode: "SK",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "surajpur",
        districtCode: "SJ",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "surguja",
        districtCode: "SJ",
        state: "chhattisgarh",
        stateCode: "CG",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dadra and nagar haveli",
        districtCode: "DN",
        state: "dadra and nagar haveli ",
        stateCode: "DN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "daman",
        districtCode: "DA",
        state: "daman and diu",
        stateCode: "DD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "diu",
        districtCode: "DI",
        state: "daman and diu",
        stateCode: "DD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "central delhi",
        districtCode: "CD",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east delhi",
        districtCode: "ED",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "new delhi",
        districtCode: "ND",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "north delhi",
        districtCode: "NO",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "north east delhi",
        districtCode: "NE",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "north west delhi",
        districtCode: "NW",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shahdara",
        districtCode: "SH",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south delhi",
        districtCode: "SD",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south east delhi",
        districtCode: "SE",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: " south west delhi",
        districtCode: "SW",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west delhi",
        districtCode: "WD",
        state: "delhi",
        stateCode: "DL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "north goa",
        districtCode: "NG",
        state: "goa",
        stateCode: "GA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south goa",
        districtCode: "SG",
        state: "goa",
        stateCode: "GA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "amreli",
        districtCode: "AM",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "anand",
        districtCode: "AN",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "aravalli",
        districtCode: "AR",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "banaskantha",
        districtCode: "BK",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bharuch",
        districtCode: "BR",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhavnagar",
        districtCode: "BV",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "botad",
        districtCode: "BO",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chhota udaipur",
        districtCode: "CU",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dahod",
        districtCode: "DA",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dang",
        districtCode: "DG",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "devbhoomi dwarka",
        districtCode: "DD",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gandhinagar",
        districtCode: "GA",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gir somnath",
        districtCode: "GS",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jamnagar",
        districtCode: "JA",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "junagadh",
        districtCode: "JU",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kheda",
        districtCode: "KH",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kutch",
        districtCode: "KA",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mahisagar",
        districtCode: "MH",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mehsana",
        districtCode: "MA",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "morbi",
        districtCode: "MO",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "narmada",
        districtCode: "NR",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "navsari",
        districtCode: "NV",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "panchmahal",
        districtCode: "PM",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "patan",
        districtCode: "PA",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "porbandar",
        districtCode: "PO",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rajkot",
        districtCode: "RA",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sabarkantha",
        districtCode: "SK",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "surat",
        districtCode: "ST",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "surendranagar",
        districtCode: "SN",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tapi",
        districtCode: "TA",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "vadodara",
        districtCode: "VD",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "valsad",
        districtCode: "VL",
        state: "gujarat",
        stateCode: "GJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ambala",
        districtCode: "AM",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhiwani",
        districtCode: "BH",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "charkhi dadri",
        districtCode: "CD",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "faridabad",
        districtCode: "FR",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "fatehabad",
        districtCode: "FT",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gurgaon",
        districtCode: "GU",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hissar",
        districtCode: "HI",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jhajjar",
        districtCode: "JH",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jind",
        districtCode: "JI",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kaithal",
        districtCode: "KT",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "karnal",
        districtCode: "KR",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kurukshetra",
        districtCode: "KU",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mahendragarh",
        districtCode: "MA",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nuh",
        districtCode: "MW",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "palwal",
        districtCode: "PW",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "panchkula",
        districtCode: "PK",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "panipat",
        districtCode: "PP",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rewari",
        districtCode: "RE",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rohtak",
        districtCode: "RO",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sirsa",
        districtCode: "SI",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sonipat",
        districtCode: "SNP",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "yamuna nagar",
        districtCode: "YN",
        state: "haryana",
        stateCode: "HR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bilaspur",
        districtCode: "BI",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chamba",
        districtCode: "CH",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hamirpur",
        districtCode: "HA",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kangra",
        districtCode: "KA",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kinnaur",
        districtCode: "KI",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kullu",
        districtCode: "KU",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lahaul and spiti",
        districtCode: "LS",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mandi",
        districtCode: "MA",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shimla",
        districtCode: "SH",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sirmaur",
        districtCode: "SI",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "solan",
        districtCode: "SO",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "una",
        districtCode: "UNA",
        state: "himachal pradesh",
        stateCode: "HP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "anantnag",
        districtCode: "AN",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bandipora",
        districtCode: "BPR",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "baramulla",
        districtCode: "BR",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "badgam",
        districtCode: "BD",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "doda",
        districtCode: "DO",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ganderbal",
        districtCode: "GB",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jammu",
        districtCode: "JA",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kargil",
        districtCode: "KR",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kathua",
        districtCode: "KT",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kishtwar",
        districtCode: "KW",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kulgam",
        districtCode: "KG",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kupwara",
        districtCode: "KU",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "leh",
        districtCode: "LE",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "poonch",
        districtCode: "PO",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pulwama",
        districtCode: "PU",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rajouri",
        districtCode: "RA",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ramban",
        districtCode: "RB",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "reasi",
        districtCode: "RS",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "samba",
        districtCode: "SB",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shopian",
        districtCode: "SH",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "srinagar",
        districtCode: "SR",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "udhampur",
        districtCode: "UD",
        state: "jammu and kashmir",
        stateCode: "JK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bokaro",
        districtCode: "BO",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chatra",
        districtCode: "CH",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "deoghar",
        districtCode: "DE",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dhanbad",
        districtCode: "DH",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dumka",
        districtCode: "DU",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east singhbhum",
        districtCode: "ES",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "garhwa",
        districtCode: "GA",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "giridih",
        districtCode: "GI",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "godda",
        districtCode: "GO",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gumla",
        districtCode: "GU",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hazaribag",
        districtCode: "HA",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jamtara",
        districtCode: "JA",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "khunti",
        districtCode: "KH",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "koderma",
        districtCode: "KO",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "latehar",
        districtCode: "LA",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lohardaga",
        districtCode: "LO",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pakur",
        districtCode: "PK",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "palamu",
        districtCode: "PL",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ramgarh",
        districtCode: "RM",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ranchi",
        districtCode: "RA",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sahibganj",
        districtCode: "SA",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "seraikela kharsawan",
        districtCode: "SK",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "simdega",
        districtCode: "SI",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west singhbhum",
        districtCode: "WS",
        state: "jharkhand",
        stateCode: "JH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bagalkot",
        districtCode: "BK",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ballari",
        districtCode: "BL",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "belagavi",
        districtCode: "BG",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bengaluru rural",
        districtCode: "BR",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bengaluru urban",
        districtCode: "BN",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bidar",
        districtCode: "BD",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chamarajnagar",
        districtCode: "CJ",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chikkaballapur",
        districtCode: "CK",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chikkamagaluru",
        districtCode: "CK",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chitradurga",
        districtCode: "CT",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dakshina kannada",
        districtCode: "DK",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "davanagere",
        districtCode: "DA",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dharwad",
        districtCode: "DH",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gadag",
        districtCode: "GA",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hassan",
        districtCode: "HS",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "haveri",
        districtCode: "HV",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kalaburagi",
        districtCode: "GU",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kodagu",
        districtCode: "KD",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kolar",
        districtCode: "KL",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "koppal",
        districtCode: "KP",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mandya",
        districtCode: "MA",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mysuru",
        districtCode: "MY",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "raichur",
        districtCode: "RA",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ramanagara",
        districtCode: "RM",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shivamogga",
        districtCode: "SH",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tumakuru",
        districtCode: "TU",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "udupi",
        districtCode: "UD",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "uttara kannada",
        districtCode: "UK",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "vijayapura",
        districtCode: "BJ",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "yadgir",
        districtCode: "YG",
        state: "karnataka",
        stateCode: "KA",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "alappuzha",
        districtCode: "AL",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ernakulam",
        districtCode: "ER",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "idukki",
        districtCode: "ID",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kannur",
        districtCode: "KN",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kasaragod",
        districtCode: "KS",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kollam",
        districtCode: "KL",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kottayam",
        districtCode: "KT",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kozhikode",
        districtCode: "KZ",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "malappuram",
        districtCode: "MA",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "palakkad",
        districtCode: "PL",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pathanamthitta",
        districtCode: "PT",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "thrissur",
        districtCode: "TS",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "thiruvananthapuram",
        districtCode: "TV",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "wayanad",
        districtCode: "WA",
        state: "kerala",
        stateCode: "KL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lakshadweep",
        districtCode: "LD",
        state: "lakshadweep",
        stateCode: "LD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "agar malwa",
        districtCode: "AG",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "alirajpur",
        districtCode: "AL",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "anuppur",
        districtCode: "AP",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ashok nagar",
        districtCode: "AS",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "balaghat",
        districtCode: "BL",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "barwani",
        districtCode: "BR",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "betul",
        districtCode: "BE",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhind",
        districtCode: "BD",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhopal",
        districtCode: "BP",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "burhanpur",
        districtCode: "BU",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chhatarpur",
        districtCode: "CT",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chhindwara",
        districtCode: "CN",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "damoh",
        districtCode: "DM",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "datia",
        districtCode: "DT",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dewas",
        districtCode: "DE",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dhar",
        districtCode: "DH",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dindori",
        districtCode: "DI",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "guna",
        districtCode: "GU",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gwalior",
        districtCode: "GW",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "harda",
        districtCode: "HA",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hoshangabad",
        districtCode: "HO",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "indore",
        districtCode: "IN",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jabalpur",
        districtCode: "JA",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jhabua",
        districtCode: "JH",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "katni",
        districtCode: "KA",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east nimar",
        districtCode: "EN",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west nimar",
        districtCode: "WN",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mandla",
        districtCode: "ML",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mandsaur",
        districtCode: "MS",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "morena",
        districtCode: "MO",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "narsinghpur",
        districtCode: "NA",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "neemuch",
        districtCode: "NE",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "panna",
        districtCode: "PA",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "raisen",
        districtCode: "RS",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rajgarh",
        districtCode: "RG",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ratlam",
        districtCode: "RL",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rewa",
        districtCode: "RE",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sagar",
        districtCode: "SG",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "satna",
        districtCode: "ST",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sehore",
        districtCode: "SR",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "seoni",
        districtCode: "SO",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shahdol",
        districtCode: "SH",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shajapur",
        districtCode: "SJ",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sheopur",
        districtCode: "SP",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shivpuri",
        districtCode: "SV",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sidhi",
        districtCode: "SI",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "singrauli",
        districtCode: "SN",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tikamgarh",
        districtCode: "TI",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ujjain",
        districtCode: "UJ",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "umaria",
        districtCode: "UM",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "vidisha",
        districtCode: "VI",
        state: "madhya pradesh",
        stateCode: "MP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ahmednagar",
        districtCode: "AH",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "akola",
        districtCode: "AK",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "amravati",
        districtCode: "AM",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "aurangabad",
        districtCode: "AU",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "beed",
        districtCode: "BI",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhandara",
        districtCode: "BH",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "buldhana",
        districtCode: "BU",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chandrapur",
        districtCode: "CH",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dhule",
        districtCode: "DH",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gadchiroli",
        districtCode: "GA",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gondia",
        districtCode: "GO",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hingoli",
        districtCode: "HI",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jalgaon",
        districtCode: "JG",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jalna",
        districtCode: "JN",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kolhapur",
        districtCode: "KO",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "latur",
        districtCode: "LA",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mumbai city",
        districtCode: "MC",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mumbai suburban",
        districtCode: "MU",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nanded",
        districtCode: "ND",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nandurban",
        districtCode: "NB",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nagpur",
        districtCode: "NG",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nashik",
        districtCode: "NS",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "osmanabad",
        districtCode: "OS",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "palghar",
        districtCode: "PA",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "parbhani",
        districtCode: "PA",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pune",
        districtCode: "PU",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "raigad",
        districtCode: "RG",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ratnagiri",
        districtCode: "RT",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sangli",
        districtCode: "SN",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "satara",
        districtCode: "ST",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sindhudurg",
        districtCode: "SI",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "solapur",
        districtCode: "SO",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "thane",
        districtCode: "TH",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "wardha",
        districtCode: "WR",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "washim",
        districtCode: "WS",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "yavatmal",
        districtCode: "YA",
        state: "maharashtra",
        stateCode: "MH",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bishnupur",
        districtCode: "BI",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "thoubal",
        districtCode: "TH",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "imphal east",
        districtCode: "EI",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "imphal west",
        districtCode: "WI",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "senapati",
        districtCode: "SE",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ukhrul",
        districtCode: "UK",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chandel",
        districtCode: "CD",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "churachandpur",
        districtCode: "CC",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tamenglong",
        districtCode: "TA",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jiribam",
        districtCode: "JI",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kangpokpi (sadar hills)",
        districtCode: "KPI",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kakching",
        districtCode: "KAK",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tengnoupal",
        districtCode: "TE",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kamjong",
        districtCode: "KA",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "noney",
        districtCode: "NO",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pherzawl",
        districtCode: "PZ",
        state: "manipur",
        stateCode: "MN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east garo hills",
        districtCode: "EG",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east khasi hills",
        districtCode: "EK",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east jaintia hills",
        districtCode: "EJ",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "north garo hills",
        districtCode: "NG",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ri bhoi",
        districtCode: "RB",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south garo hills",
        districtCode: "SG",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south west garo hills",
        districtCode: "SWG",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south west khasi hills",
        districtCode: "SWK",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west jaintia hills",
        districtCode: "WG",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west garo hills",
        districtCode: "WG",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west khasi hills",
        districtCode: "WK",
        state: "meghalaya",
        stateCode: "ML",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "aizawl",
        districtCode: "AI",
        state: "mizoram",
        stateCode: "MZ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "champhai",
        districtCode: "CH",
        state: "mizoram",
        stateCode: "MZ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kolasib",
        districtCode: "KO",
        state: "mizoram",
        stateCode: "MZ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lawngtlai",
        districtCode: "LA",
        state: "mizoram",
        stateCode: "MZ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lunglei",
        districtCode: "LU",
        state: "mizoram",
        stateCode: "MZ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mamit",
        districtCode: "MA",
        state: "mizoram",
        stateCode: "MZ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "saiha",
        districtCode: "SA",
        state: "mizoram",
        stateCode: "MZ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "serchhip",
        districtCode: "SE",
        state: "mizoram",
        stateCode: "MZ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dimapur",
        districtCode: "DI",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kiphire",
        districtCode: "KI",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kohima",
        districtCode: "KO",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "longleng",
        districtCode: "LO",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mokokchung",
        districtCode: "MK",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mon",
        districtCode: "MN",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "peren",
        districtCode: "PE",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "phek",
        districtCode: "PH",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tuensang",
        districtCode: "TU",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "wokha",
        districtCode: "WO",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "zunheboto",
        districtCode: "ZU",
        state: "nagaland",
        stateCode: "NL",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "angul",
        districtCode: "AN",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bouda",
        districtCode: "BD",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhadrak",
        districtCode: "BH",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "balangir",
        districtCode: "BL",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bargarh",
        districtCode: "BR",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "balasore",
        districtCode: "BW",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "cuttack",
        districtCode: "CU",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "debagarh",
        districtCode: "DE",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dhenkanal",
        districtCode: "DH",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ganjam",
        districtCode: "GN",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gajapati",
        districtCode: "GP",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jharsuguda",
        districtCode: "JH",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jajpur",
        districtCode: "JP",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jagatsinghpur",
        districtCode: "JS",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "khordha",
        districtCode: "KH",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kendujhar",
        districtCode: "KJ",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kalahandi",
        districtCode: "KL",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kandhamal",
        districtCode: "KN",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "koraput",
        districtCode: "KO",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kendrapara",
        districtCode: "KP",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "malkangiri",
        districtCode: "ML",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mayurbhanj",
        districtCode: "MY",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nabarangpur",
        districtCode: "NB",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nuapada",
        districtCode: "NU",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nayagarh",
        districtCode: "NY",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "puri",
        districtCode: "PU",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rayagada",
        districtCode: "RA",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sambalpur",
        districtCode: "SA",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "subarnapur (sonepur)",
        districtCode: "SO",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sundargarh",
        districtCode: "SU",
        state: "odisha",
        stateCode: "OD",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "karaikal",
        districtCode: "KA",
        state: "puducherry",
        stateCode: "PY",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mahe",
        districtCode: "MA",
        state: "puducherry",
        stateCode: "PY",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pondicherry",
        districtCode: "PO",
        state: "puducherry",
        stateCode: "PY",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "yanam",
        districtCode: "YA",
        state: "puducherry",
        stateCode: "PY",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "amritsar",
        districtCode: "AM",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "barnala",
        districtCode: "BNL",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bathinda",
        districtCode: "BA",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "firozpur",
        districtCode: "FI",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "faridkot",
        districtCode: "FR",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "fatehgarh sahib",
        districtCode: "FT",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "fazilka",
        districtCode: "FA",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gurdaspur",
        districtCode: "GU",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hoshiarpur",
        districtCode: "HO",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jalandhar",
        districtCode: "JA",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kapurthala",
        districtCode: "KA",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ludhiana",
        districtCode: "LU",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mansa",
        districtCode: "MA",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "moga",
        districtCode: "MO",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sri muktsar sahib",
        districtCode: "MU",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pathankot",
        districtCode: "PA",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "patiala",
        districtCode: "PA",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rupnagar",
        districtCode: "RU",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sahibzada ajit singh nagar",
        districtCode: "SAS",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sangrur",
        districtCode: "SA",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shahid bhagat singh nagar",
        districtCode: "PB",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tarn taran",
        districtCode: "TT",
        state: "punjab",
        stateCode: "PB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ajmer",
        districtCode: "AJ",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "alwar",
        districtCode: "AL",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bikaner",
        districtCode: "BI",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "barmer",
        districtCode: "BM",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "banswara",
        districtCode: "BN",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bharatpur",
        districtCode: "BP",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "baran",
        districtCode: "BR",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bundi",
        districtCode: "BU",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhilwara",
        districtCode: "BW",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "churu",
        districtCode: "CR",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chittorgarh",
        districtCode: "CT",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dausa",
        districtCode: "DA",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dholpur",
        districtCode: "DH",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dungarpur",
        districtCode: "DU",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ganganagar",
        districtCode: "GA",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hanumangarh",
        districtCode: "HA",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jhunjhunu",
        districtCode: "JJ",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jalore",
        districtCode: "JL",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jodhpur",
        districtCode: "JO",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jaipur",
        districtCode: "JP",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jaisalmer",
        districtCode: "JS",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jhalawar",
        districtCode: "JW",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "karauli",
        districtCode: "KA",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kota",
        districtCode: "KO",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nagaur",
        districtCode: "NA",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pali",
        districtCode: "PA",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pratapgarh",
        districtCode: "PG",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rajsamand",
        districtCode: "RA",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sikar",
        districtCode: "SK",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sawai madhopur",
        districtCode: "SM",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sirohi",
        districtCode: "SR",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tonk",
        districtCode: "TO",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "udaipur",
        districtCode: "UD",
        state: "rajasthan",
        stateCode: "RJ",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "east sikkim",
        districtCode: "ES",
        state: "sikkim",
        stateCode: "SK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "north sikkim",
        districtCode: "NS",
        state: "sikkim",
        stateCode: "SK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south sikkim",
        districtCode: "SS",
        state: "sikkim",
        stateCode: "SK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west sikkim",
        districtCode: "WS",
        state: "sikkim",
        stateCode: "SK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ariyalur",
        districtCode: "AY",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chennai (madras)",
        districtCode: "CH",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "coimbatore",
        districtCode: "CO",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "cuddalore",
        districtCode: "CU",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dharmapuri",
        districtCode: "DH",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dindigul",
        districtCode: "DI",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "erode",
        districtCode: "ER",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kanchipuram",
        districtCode: "KC",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kanyakumari",
        districtCode: "KK",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "karur",
        districtCode: "KA",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "krishnagiri",
        districtCode: "KR",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "madurai",
        districtCode: "MA",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nagapattinam",
        districtCode: "NG",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nilgiris",
        districtCode: "NI",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "namakkal",
        districtCode: "NM",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "perambalur",
        districtCode: "PE",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pudukkottai",
        districtCode: "PU",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ramanathapuram",
        districtCode: "RA",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "salem",
        districtCode: "SA",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sivaganga",
        districtCode: "SI",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tirupur",
        districtCode: "TP",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tiruchirappalli",
        districtCode: "TC",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "theni",
        districtCode: "TH",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tirunelveli",
        districtCode: "TI",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "thanjavur",
        districtCode: "TJ",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "thoothukudi",
        districtCode: "TK",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tiruvallur",
        districtCode: "TL",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tiruvarur",
        districtCode: "TR",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tiruvannamalai",
        districtCode: "TV",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "vellore",
        districtCode: "VE",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "viluppuram",
        districtCode: "VL",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "virudhunagar",
        districtCode: "VR",
        state: "tamil nadu",
        stateCode: "TN",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "adilabad",
        districtCode: "AD",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "komaram bheem asifabad",
        districtCode: "KO",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhadradri kothagudem",
        districtCode: "BH",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hyderabad",
        districtCode: "HY",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jagtial",
        districtCode: "JA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jangaon",
        districtCode: "JA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jayashankar bhupalpally",
        districtCode: "JA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jogulamba gadwal",
        districtCode: "JO",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kamareddy",
        districtCode: "KA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "karimnagar",
        districtCode: "KA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "khammam",
        districtCode: "KH",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mahabubabad",
        districtCode: "MA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mahbubnagar",
        districtCode: "MA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mancherial",
        districtCode: "MA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "medak",
        districtCode: "ME",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "medchal",
        districtCode: "ME",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nalgonda",
        districtCode: "NA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nagarkurnool",
        districtCode: "NA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nirmal",
        districtCode: "NI",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nizamabad",
        districtCode: "NI",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "peddapalli",
        districtCode: "PE",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rajanna sircilla",
        districtCode: "RA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ranga reddy",
        districtCode: "RA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sangareddy",
        districtCode: "SA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "siddipet",
        districtCode: "SI",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "suryapet",
        districtCode: "SU",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "vikarabad",
        districtCode: "VI",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "wanaparthy",
        districtCode: "WA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "warangal (urban)",
        districtCode: "WL",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "warangal (rural)",
        districtCode: "WA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "yadadri bhuvanagiri",
        districtCode: "YA",
        state: "telangana",
        stateCode: "TS",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dhalai",
        districtCode: "DH",
        state: "tripura",
        stateCode: "TR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gomati",
        districtCode: "GM",
        state: "tripura",
        stateCode: "TR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "khowai",
        districtCode: "KH",
        state: "tripura",
        stateCode: "TR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "north tripura",
        districtCode: "NT",
        state: "tripura",
        stateCode: "TR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sepahijala",
        districtCode: "SP",
        state: "tripura",
        stateCode: "TR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south tripura",
        districtCode: "ST",
        state: "tripura",
        stateCode: "TR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "unokoti",
        districtCode: "UK",
        state: "tripura",
        stateCode: "TR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "west tripura",
        districtCode: "WT",
        state: "tripura",
        stateCode: "TR",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "agra",
        districtCode: "AG",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "aligarh",
        districtCode: "AL",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "allahabad",
        districtCode: "AH",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ambedkar nagar",
        districtCode: "AN",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "amethi (chhatrapati shahuji maharaj nagar)",
        districtCode: "CS",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },


    {
        district: "amroha (jyotiba phule nagar)",
        districtCode: "JP",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "auraiya",
        districtCode: "AU",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "azamgarh",
        districtCode: "AZ",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bagpat",
        districtCode: "BG",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bahraich",
        districtCode: "BH",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ballia",
        districtCode: "BL",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "balrampur",
        districtCode: "BP",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "banda",
        districtCode: "BN",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "barabanki",
        districtCode: "BB",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bareilly",
        districtCode: "BR",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "basti",
        districtCode: "BS",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bijnor",
        districtCode: "BI",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "budaun",
        districtCode: "BD",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bulandshahr",
        districtCode: "BU",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chandauli",
        districtCode: "CD",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chitrakoot",
        districtCode: "CT",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "deoria",
        districtCode: "DE",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "etah",
        districtCode: "ET",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "etawah",
        districtCode: "EW",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "faizabad",
        districtCode: "FZ",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "farrukhabad",
        districtCode: "FR",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "fatehpur",
        districtCode: "FT",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "firozabad",
        districtCode: "FI",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gautam buddh nagar",
        districtCode: "GB",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ghaziabad",
        districtCode: "GZ",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "ghazipur",
        districtCode: "GP",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gonda",
        districtCode: "GN",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "gorakhpur",
        districtCode: "GR",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hamirpur",
        districtCode: "HM",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hapur (panchsheel nagar)",
        districtCode: "PN",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hardoi",
        districtCode: "HR",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hathras (mahamaya nagar)",
        districtCode: "HT",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jalaun",
        districtCode: "JL",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jaunpur",
        districtCode: "JU",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jhansi",
        districtCode: "JH",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kannauj",
        districtCode: "KJ",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kanpur dehat (ramabai nagar)",
        districtCode: "KD",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kanpur nagar",
        districtCode: "KN",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kasganj (kanshi ram nagar)",
        districtCode: "KR",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kaushambi",
        districtCode: "KS",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kushinagar",
        districtCode: "KU",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lakhimpur kheri",
        districtCode: "KL",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lalitpur",
        districtCode: "LA",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "lucknow",
        districtCode: "LU",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "maharajganj",
        districtCode: "MG",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mahoba",
        districtCode: "MH",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mainpuri",
        districtCode: "MP",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mathura",
        districtCode: "MT",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mau",
        districtCode: "MB",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "meerut",
        districtCode: "ME",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "mirzapur",
        districtCode: "MI",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "moradabad",
        districtCode: "MO",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "muzaffarnagar",
        districtCode: "MU",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pilibhit",
        districtCode: "PI",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pratapgarh",
        districtCode: "PR",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "raebareli",
        districtCode: "RB",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rampur",
        districtCode: "RA",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "saharanpur",
        districtCode: "SA",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sambhal (bheem nagar)",
        districtCode: "SM",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sant kabir nagar",
        districtCode: "SK",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bhadohi",
        districtCode: "SR",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shahjahanpur",
        districtCode: "SJ",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shamli",
        districtCode: "SH",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "shravasti",
        districtCode: "SV",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "siddharthnagar",
        districtCode: "SN",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sitapur",
        districtCode: "SI",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sonbhadra",
        districtCode: "SO",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "sultanpur",
        districtCode: "SU",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "unnao",
        districtCode: "UN",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "varanasi",
        districtCode: "VA",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "almora",
        districtCode: "AL",
        state: "uttarakhand",
        stateCode: "UK",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bageshwar",
        districtCode: "BA",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "chamoli",
        districtCode: "CL",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "champawat",
        districtCode: "CP",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dehradun",
        districtCode: "DD",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "haridwar",
        districtCode: "HA",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nainital",
        districtCode: "NA",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pauri garhwal",
        districtCode: "PG",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "pithoragarh",
        districtCode: "PI",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "rudraprayag",
        districtCode: "RP",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "tehri garhwal",
        districtCode: "TG",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "udham singh nagar",
        districtCode: "US",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "uttarkashi",
        districtCode: "UT",
        state: "uttar pradesh",
        stateCode: "UP",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "alipurduar",
        districtCode: "AD",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "bankura",
        districtCode: "BN",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "paschim bardhaman",
        districtCode: "BR",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "purba bardhaman",
        districtCode: "BR",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "birbhum",
        districtCode: "BI",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "cooch behar",
        districtCode: "KB",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "dakshin dinajpur",
        districtCode: "DD",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "darjeeling",
        districtCode: "DA",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "hooghly",
        districtCode: "HG",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "howrah",
        districtCode: "HR",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jalpaiguri",
        districtCode: "JA",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "jhargram",
        districtCode: "JH",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kalimpong",
        districtCode: "KA",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "kolkata",
        districtCode: "KO",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "maldah",
        districtCode: "MA",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "murshidabad",
        districtCode: "MSD",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "nadia",
        districtCode: "NA",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "north 24 parganas",
        districtCode: "PN",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "paschim medinipur",
        districtCode: "PM",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "purba medinipur",
        districtCode: "PR",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "purulia",
        districtCode: "PU",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "south 24 parganas",
        districtCode: "PS",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

    {
        district: "uttar dinajpur",
        districtCode: "UD",
        state: "west bengal",
        stateCode: "WB",
        country: "india",
        countryCode: "IN"
    },

]

const stepsList = [
    {
        step: 1,
        details: 'Sign up or Sign in to Edandra and pushlish your Promise with a cover' +
        'image/video and detailed explanation about your Idea, Project or Social Cause.'
    },
    {
        step: 2,
        details: 'Click the "Share" button on your Message and share your Message in other social medias' +
        'like Facebook, Whatsapp, Twitter etc to reach your friends, family and others.' 
    },
    {
        step: 3,
        details: 'Now People from all over India can sponsor you by clicking the "sponsor" button' +
        ' on your Promise. Raised money will be displayed on your Promise and will be transparent to other users.'
    },
    {
        step: 4,
        details: 'Raised money will be transferred to your bank account within 7 business days.' +
        'Transaction fees is 4.99%(including GST).'
    }
]

locationModel.find()
    .then(location => {
        if (location.length == 0) {
            addLoctions()
        }
    })
    .catch(err => {
        throw err
    })

iraniyamStepsModel.find()
.then(steps => {
    if (steps.length == 0) {
        addSteps()
    }
})
.catch(err => {
    throw err
})

function addLoctions() {
    locationsList.forEach( (location) => {
        locationModel.create (location).then((newDistrict) => {
            console.log("new District :" + newDistrict )
        })
    })
}

function addSteps() {
    stepsList.forEach( (step) => {
        iraniyamStepsModel.create (step).then((newStep) => {
            console.log("new Step :" + newStep )
        })
    })
}