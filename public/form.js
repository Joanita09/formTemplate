// Access fields by name
const sur = document.covid_form.surname;
const giv = document.covid_form.first_name;
const dOB = document.covid_form.dob;
const res = document.covid_form.residence;
const occ = document.covid_form.occupation;
const nat = document.covid_form.nationality;
const gen = document.covid_form.gender;
const cat = document.covid_form.category;

//Regular expressions are rules or requirements for the given fields
const nameRegex = /([A-Za-z]){1,16}/;
const residenceRegex = /([A-Za-z]){1,20}/;
const moreRegex = /([A-Za-z]){5,50}/;

//Error Messages
const surErr = (message)=>{
    let sur_Err = document.getElementById('surerr');
    sur_Err.innerText = message;
}

const givErr = (message)=>{
    let giv_Err = document.getElementById('fnamerr');
    giv_Err.innerText = message;
}

const dOBErr = (message)=>{
    let dOB_Err = document.getElementById('daterr');
    dOB_Err.innerText = message;
}
const resErr = (message)=>{
    let res_Err = document.getElementById('reserr');
    res_Err.innerText = message;
}

const occErr = (message)=>{
    let occ_Err = document.getElementById('occErr');
    occ_Err.innerText = message;
}

const natErr = (message)=>{
    let nat_Err = document.getElementById('naterr');
    nat_Err.innerText = message;
}

const gend_Err = (message)=>{
    let ma_Err = document.getElementById('generr');
    ma_Err.innerText = message;
}

const catErr = (message)=>{
    let cat_Err = document.getElementById('caterr');
    cat_Err.innerText = message;
}

//Validation
var surName = () => {
   if (sur.value == '') {
    surErr('Please enter surname');
    sur.style.border = '2px solid red';
    event.preventDefault();
    sur.focus();
    return false;
   } 

   if (sur.value.match (nameRegex)) {
       return true;
   }
   else {
    sur.style.border = '2px solid red';
    event.preventDefault();
    sur.focus();
    return false;
   }
};

var givenName = () => {
    if (giv.value == '') {
     givErr('Please enter first name');
     giv.style.border = '2px solid red';
     event.preventDefault();
     giv.focus();
     return false;
    } 
 
    if (giv.value.match (nameRegex)) {
        return true;
    }
    else {
     giv.style.border = '2px solid red';
     event.preventDefault();
     giv.focus();
     return false;
    }
 };

 var dateOfBirth = () => {
    if (dOB.value == '') {
     dOBErr('Please select date of birth');
     dOB.style.border = '2px solid red';
     event.preventDefault();
     dOB.focus();
     return false;
    } 
 
    // if (dOB.value.match ()) {
    //     return true;
    // }
    // else {
    //  dOB.style.border = '2px solid red';
    //  event.preventDefault();
    //  dOB.focus();
    //  return false;
    // }
 }

 var placeOfRes = () => {
    if (res.value == '') {
     resErr('Please enter residence');
     res.style.border = '2px solid red';
     event.preventDefault();
     res.focus();
     return false;
    } 
 
    if (res.value.match (nameRegex)) {
        return true;
    }
    else {
     res.style.border = '2px solid red';
     event.preventDefault();
     res.focus();
     return false;
    }
 }

 var occupation = () => {
    if (occ.value == '') {
     occErr('Please enter occupation');
     occ.style.border = '2px solid red';
     event.preventDefault();
     occ.focus();
     return false;
    } 
 
    if (occ.value.match (nameRegex)) {
        return true;
    }
    else {
     occ.style.border = '2px solid red';
     event.preventDefault();
     occ.focus();
     return false;
    }
 }

 var nationality = () => {
    if (nat.value == '') {
     natErr('Please enter nationality');
     nat.style.border = '2px solid red';
     event.preventDefault();
     nat.focus();
     return false;
    } 
 
    if (nat.value.match (nameRegex)) {
        return true;
    }
    else {
     nat.style.border = '2px solid red';
     event.preventDefault();
     nat.focus();
     return false;
    }
 };

 var gender = () => {
    if (gen.value === "default") {
     genErr('Please select gender');
    //gen.style.border = '2px solid red';
    event.preventDefault();
    gen.focus();
     return false;
    } 
 
    // if (get.value.match (nameRegex)) {
    //     return true;
    // }
    // else {
    //  gen.style.border = '2px solid red';
    //  event.preventDefault();
    //  gen.focus();
    //  return false;
    // }
 };

 var category = () => {
    if (cat.value == '--Select Category--') {
     catErr('Please select option');
     //cat.style.border = '2px solid red';
     event.preventDefault();
     cat.focus();
     return false;
    } 
 
    // if (cat.value.match (nameRegex)) {
    //     return true;
    // }
    // else {
    //  cat.style.border = '2px solid red';
    //  event.preventDefault();
    //  cat.focus();
    //  return false;
    // }
 };

 //Call back all the functions above as event handlers
 var validate = ()=>{
     if(surName());
     if(givenName());
     if(dateOfBirth());
     if(placeOfRes());
     if(nationality());
     if(gender());
     if(category());
     if(occupation());
 };

 document.addEventListener('submit',validate);


