//1.For the given JSON iterate using all for loops(for,foreach,forof,forin)
//Solution

let employees=[
    {
    name:"John",age:25,company:"Guvi"
    },
    {
        name:"Peter",age:30,company:"Guvi Geek"
    },
    {
        name:"Smith",age:45,company:"Guvi geek network"
    }
]
JSON.stringify(employees)
console.log("using normal For loop to display employee data")
//using normal for loop to display employee data
for(let i=0;i<employees.length;i++)
{
console.log(`Employee Name: ${employees[i].name}
Age: ${employees[i].age}
Company: ${employees[i].company}`)
}
//using forEach loop to display employee data
console.log("Using ForEach loop to display employee data")
employees.forEach((data)=>{
console.log(`Employee Name: ${data.name}
Age: ${data.age}
Company: ${data.company}`)    
})
//using forIn loop to display employee data
console.log("Using ForIN loop to display employee data")
for(details in employees)
{
console.log(`Employee Name: ${employees[details].name}
Age: ${employees[details].age}
Company: ${employees[details].company}`)    
}   
//using forOf Loop to display employee data
console.log("Using ForOf Loop to display employee data")
for (const value of employees) {
console.log(`Employee Name: ${value.name}
Age: ${value.age}
Company: ${value.company}`)
}


//output

/*using normal For loop to display employee data
Employee Name: John
Age: 25
Company: Guvi
Employee Name: Peter
Age: 30
Company: Guvi Geek
Employee Name: Smith
Age: 45
Company: Guvi geek network
Using ForEach loop to display employee data
Employee Name: John
Age: 25
Company: Guvi
Employee Name: Peter
Age: 30
Company: Guvi Geek
Employee Name: Smith
Age: 45
Company: Guvi geek network
Using ForIN loop to display employee data
Employee Name: John
Age: 25
Company: Guvi
Employee Name: Peter
Age: 30
Company: Guvi Geek
Employee Name: Smith
Age: 45
Using ForOf Loop to display employee data
Employee Name: John
Age: 25
Company: Guvi
Employee Name: Peter
Age: 30
Company: Guvi Geek
Employee Name: Smith
Age: 45
Company: Guvi geek network
*/


//2. Create your own resume data in JSON format
//Solution

console.log("CURRICULUM VITAE")
console.log("  ")
// creating personal details using objects
let data={
name:"Priya K",
address:{
     line1:"141,2nd street extn,Gandhipuram",
     city:"Coimbatore",
    pincode:641012,
    state:"Tamil Nadu"
},
email:"priyakrish2015@gmail.com",
phone:9047511100,
dob:"02/12/1997",
sex:"Female",
maritalStatus:"Married",
nationality:"Indian",
languagesKnown:{
    lang1:"Tamil",
    lang2:"Telugu",
    lang3:"English",
    lang4:"Hindi"
},
careerObjective:"To be a part of an organisation where I can devote myself fully and joyfully give out best of my talents and skill to become its strong asset",
education:{
    degree:"Bsc computer Science",
    yearOfPassOut1:2018,
    institution1:"PSGR krishnammal College For Women",
    hsc:"12th",
    yearOfPassOut2:2015,
    institution2:"Alvernia Matric Hr Sec School",
    sc:"10th",
    yearOfPassOut3:2013,
    institution3:"Alvernia Matric Hr Sec School",
},
strength:{
    strength1:"Punctuality",
    strength2:"Hard working",
    strength3:"Ability to learn new things",
    strength4:"Willing to take challenges"
},
hobbies:{
    hobby1:"Listening Music",
    hobby2:"Playing Outdoor Games"
}
}
JSON.stringify(data)//converting object data to JSON stringification
//displaying resume data using template literal
console.log(`Name: ${data.name}
Address: ${data.address.line1}
         ${data.address.city} - ${data.address.pincode}
         ${data.address.state}
Email: ${data.email}`)
console.log("  ")
console.log("PERSONAL DETAILS")
console.log("   ")
console.log(`Date Of Birth:${data.dob}
Sex: ${data.sex}
Marital Status: ${data.maritalStatus}
Nationality: ${data.nationality}
Languages known: ${data.languagesKnown.lang1}
                 ${data.languagesKnown.lang2}
                 ${data.languagesKnown.lang3}
                 ${data.languagesKnown.lang4}`)
console.log(" ")
console.log("CARRER OBJECTIVE")
console.log(`       ${data.careerObjective}`)
console.log(" ")
console.log("EDUCATIONAL QUALIFICATION")
console.log("  ")

console.log(`${data.education.degree}  Year Of Pass out:  ${data.education.yearOfPassOut1}  Institution: ${data.education.institution1}
               ${data.education.hsc}   Year Of Pass out:  ${data.education.yearOfPassOut2}  Institution: ${data.education.institution2}
               ${data.education.sc}   Year Of Pass out:  ${data.education.yearOfPassOut3}  Institution: ${data.education.institution3}`)
console.log(" ")
console.log("STRENGTH")
console.log(`          ${data.strength.strength1}
          ${data.strength.strength2}
          ${data.strength.strength3}
          ${data.strength.strength4}`)
console.log(" ")          
console.log("HOBBIES")
console.log(`          ${data.hobbies.hobby1}
          ${data.hobbies.hobby2}`)
console.log("   ")
console.log("I declare that the above furnished informations are true and to my knowledge")
console.log("   ")
console.log(`Date:27/10/22
Place:Coimbatore`)


//output

/*CURRICULUM VITAE

Name: Priya K
Address: 141,2nd street extn,Gandhipuram
         Coimbatore - 641012
         Tamil Nadu
Email: priyakrish2015@gmail.com
  
PERSONAL DETAILS

Date Of Birth:02/12/1997
Sex: Female
Marital Status: Married
Nationality: Indian
Languages known: Tamil
                 Telugu
                 English
                 Hindi

CARRER OBJECTIVE
       To be a part of an organisation where I can devote myself fully and joyfully give out best of my talents and skill to become its strong 
asset

EDUCATIONAL QUALIFICATION

Bsc computer Science  Year Of Pass out:  2018  Institution: PSGR krishnammal College For Women
               12th   Year Of Pass out:  2015  Institution: Alvernia Matric Hr Sec School
               10th   Year Of Pass out:  2013  Institution: Alvernia Matric Hr Sec School
 
STRENGTH
          Punctuality
          Hard working
          Ability to learn new things
          Willing to take challenges

HOBBIES
          Listening Music
          Playing Outdoor Games

I declare that the above furnished informations are true and to my knowledge

Date:27/10/22
Place:Coimbatore */
