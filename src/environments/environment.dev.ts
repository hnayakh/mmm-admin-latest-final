export const environment = {
  production: true,
  //  baseURL: "https://immense-brook-06350.herokuapp.com/api/",
  //baseURL: "http://13.233.130.85:3000/api/",
   baseURL: "http://localhost:3000/api/",
  Authentication: {
    ADMIN_LOGIN: "auth/admin/login",
    ADMIN_USERS: "users/admin",
    CHANGEPASSWORD: "auth/changePassword",
    CREATESECURITYPIN: "auth/createProfilePin",
    PROFILESECURITYVARIFICATION: "auth/verifyPin",
    CHECKPROFILEPIN: "auth/checkPin",
    UPDATESECURITYPLANE: "auth/updateProfilePin",
    FORGOTPASSWORD: "auth/forgotPassword",
    getAllNotification: "caregiver/booking/getallnotifications",
  },
  Master: {
    GET_ALL_COUPONS: "masters/coupons",
    ADD_AND_UPDATE_COUPONS: "masters/coupon",
    GET_ALL_REFERRALS: "masters/referrals",
    UPDATE_REFERRALS:
      "masters/referral?referralId=291ae155-d907-414e-ae0b-353d4c66dafe",
    GET_ALL_CONNECTS: "masters/connects",
    GET_CONNECT_BY_ID: "masters/connect/",
    CREATE_AND_UPDATE_CONNET: "masters/connect",
  },
  User: {
    AllVerifiedUser: "users/admin/appUsers?isVerified=0",
    AllActiveUsers: "users/admin/appUsers?isVerified=1",
  },
  Cms: {
    AllFaqs: "cms/faq/all",
    CREATE_FAQ: "cms/faq",
    CREATE_SUCCESS: "cms/success_stories",
    ALL_SUCCESS:"cms/success_stories/all"
  },
  Role: ["L1 Support", "L2 Support", "L3 Support", "Admin", "Super Admin"],
};

export const USERID = "id_token";
export const SUCCESS = "SUCCESS";
export const Gender = ["Male", "Female", "Other"];
export const Role = [
  "L1 Support",
  "L2 Support",
  "L3 Support",
  "Admin",
  "Super Admin",
];
export const MaritalStatus = [
  "Never Married",
  "Divorced",
  "Widowed",
  "Awaiting Divorce",
];
export const Manglik = ["Yes", "No", "Not Applicable"];
export const EatingHabit = ["Vegetarrian", "Eggitarrian", "Nonvegetarrian"];
export const SmokingHabit = ["Smoker", "NonSmoker", "Occasionally"];
export const DrinkingHabit = ["Alcoholic", "Nonalcoholic", "Occasionally"];
export const FamilyAfluenceLevel = [
  "Rich",
  "UpperMiddleClass",
  "MiddleClass",
  "LowerMiddleClass",
];
export const FamilyType = ["Nuclear", "Joint", "Other"];

export const FamilyValues = ["Traditional", "Moderate", "Liberal"];
export const FatherOccupation = [
  "Employed",
  "Business",
  "Retired",
  "NotEmployed",
  "PassedAway",
];

export const MotherOccupation = [
  "HomeMaker",
  "Employed",
  "Business",
  "Retired",
  "PassedAway",
];
export const AnualIncome = [
  "LessThanOneLacs",
  "OneToThreeLacs",
  "ThreeToFiveLacs",
  "FiveToSevenLacs",
  "SevenToTenLacs",
  "TenToTwelveLacs",
  "MoreThanTwelveLacs",
];
export const Relationships = [
  "Self",
  "Son",
  "Daughter",
  "Sister",
  "Brother",
  "Friend",
  "Relative",
];
