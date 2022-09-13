export const environment = {
    production: true,
  //  baseURL: "https://immense-brook-06350.herokuapp.com/api/",
    baseURL: "https://nameless-ridge-77112.herokuapp.com/api/",
    Authentication: {
        SIGNIN: 'auth/signin',
        CHANGEPASSWORD:'auth/changePassword',
        CREATESECURITYPIN:'auth/createProfilePin',
        PROFILESECURITYVARIFICATION:'auth/verifyPin',
        CHECKPROFILEPIN:'auth/checkPin',
        UPDATESECURITYPLANE:'auth/updateProfilePin',
        FORGOTPASSWORD:'auth/forgotPassword',
        getAllNotification:'caregiver/booking/getallnotifications'
    },
    Department: {
        ADDDEPARTMENT: 'privatepractice/createMedicalDepartment',
        GETDEPARTMENTLIST: 'privatepractice/getAllMedicalDepartment',
        DELETEMEDICALDEPARTMENTBYID: 'privatepractice/deleteMedicalDepartment',
        UPDATEmEDICALDEPARTMENTBYID: 'privatepractice/updateMdicalDepartment',
        GETMEDICALFACILITY: 'privatepractice/medicalFacility',
        UPDATEDMEDICALFACILITYPROFILE: 'privatepractice/updateMedicalFacility',
        UPLOADPROFILEIMAGE:'auth/image/upload'
    },
    Physician: {
        CREATPHYSICIAN: 'privatepractice/createPhysician',
        GETALLDOCTORSBYMEDICAL: 'privatepractice/getALlDoctorByMedical',
        DELETEPHYSICIANBYID: 'privatepractice/physician',
        GETPHYSICIANBYID: 'privatepractice/physician',
        UPDATEPHYSICIANYID: 'privatepractice/updatePhysicians',
        GETINVOICE: 'privatepractice/getAllCompletedAppointmentByParent',
        GETINVOICEDATA: 'privatepractice/getClaimByParentId',

        POSTINVOICE: 'privatepractice/addClaim',

    


        


        
    },
    Schedule: {
      GENVIRTUALSCHEDULE: 'privatepractice/generateSlots',
      CREARSCHEDULE:'privatepractice/createSchedule',
        GETALLSCHEDULED: 'privatepractice/getAllSchedule',
        GETSOLTS: 'privatepractice/getSlotDetails',
        EDITVIRTUALSCHEDULE:'privatepractice/editSchedule',
        GETSCHEDULEBYID:'privatepractice/getSceduleById'
    },
    Appointment: {
        APPOINTMENTHISTORY: 'privatepractice/getParentAppointmentHistory',
        GETSOLTS: 'privatepractice/getSlotDetails',

        GETPARENTMEDICALDEPARTMENTBYID: 'privatepractice/getParentAppointmentByDate',
        StatusConfirmCancel:"privatepractice/changeAppointmentStatus",
        
    },
    Staff:{
        ADDSTAFF:'privatepractice/addStaff',
        GETSTAFF:'privatepractice/getStaffByParentId',
        GETSTAFFBYID:'privatepractice/getStaffById',
        EDITSTAFF:'privatepractice/editStaff',

        GETTERMS:'public/getTermsCondition',
        FAQS:'public/getFaq',
        PRIVICY:'public/getPrivacyPolicy'
 
    },
    Claims:{
        AddClaim:'privatepractice/addClaim',
        GetAlllClaims:'privatepractice/getClaimByParent',
        // GetAlllClaims:'privatepractice/getMissingClaimByParentId',

        GetPendingClaims:'privatepractice/getPendingClaimByParentId',
        GetPaidClaims:'privatepractice/getSattledClaimByParentId',
        GetRejectClaims:'privatepractice/getClaimByParentId'
    },
    Patients:{
        PATIENTSLIST:'privatepractice/getPatientHistory',
        PATIENTSLIST2:'patients/getAllPatients',
        PatientDetailsById:'patients/patient',
        ////////////////copied
        GetPhysicianVisysDetailsByPatientsId:'privatepractice/getPrescriptionByPatientId',
        GetInsuranceVisitByPatientId:'patients/getClaimByPatientId',
        GetMedicalAppointmentbyPatientId:'patients/getMedicalAppointmentByPatientId',
        GetPrivatePracticeAppointmentbyPatientId:'patients/getPracticeAppointmentByPatientId',
        GetActivity:'privatepractice/getActivity',
        GetCaregiverVisits:'patients/getAllPatientHistory',
        RecentPatients: 'privatepractice/getRecentPatients',
    },
    subscription:{
        getallplan:'public/getAllPlan',
             subscribeplan:'privatepractice/subscribe',
         GetSubscriptionDetailsByID:'privatepractice/subscribe',
         canceplan:'privatepractice/cancelSubscription',
         updateSubscription:'privatepractice/updateSubscription',
         checksuscription:'privatepractice/checkSubscription',
         newSubscribleplanapi:'privatepractice/subscribe'
    },
    TotalAppointment:{
        totalappointment:'privatepractice/getAppointmentByParentId'
            },
            Snah_Ride:{
                SnahRideList:'driver/getDriverList',
                SnahRideProfile:'driver/viewDriverProfile'
            },
            Pharmacy:{
                getPharmacyList:'pharmacy/getAllPharmacy',
                getPrescriptionById:'pharmacy/getAllPrescriptionByPharmacyId'
            },
            RevenueAndReport:{
                getRevenue:'privatepractice/getRevenue'
                    }
};