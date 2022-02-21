
// Array: Useed to define more than one value in same type - Line # 11
function arrayDemo(){
    console.log("Array Demo:")  
    let hobblies:string[] = ["reading" , "writting", "Sleeping"]   
    for(const hobby of hobblies){
        console.log(hobby)
    }
}


//Any type - it is kind of array. But we can define different types of data in same array - Line # 21
function anyTypeDemo(){
    console.log("anyTypeDemo:")    
    let lanaguage:any[] = ["java", 10, "c++"]
    for(const lang of lanaguage){
        console.log(lang)
    }
}

//Typles are used to have different types of data in strict order - Line # 5,6
function tupesExample(){
    console.log("Tuple Demo:")    
    type role =[string,number,boolean];
    let manirole:role =["developer",50,true];
    console.log(manirole[0]);    

    for(const roles of manirole){
        console.log(roles)
    }
}


//ENUM Demo
function enumDemo(){
    console.log("Enum Demo:")  
    enum role {JAVADEVELOPER="java developer", AWSDEVELOPER="aws developer", FULLSTACKDEVELOPER="full stack developer"}
    console.log(role.AWSDEVELOPER)    
}

tupesExample()
console.log("********************")
arrayDemo()
console.log("********************")
anyTypeDemo()
console.log("********************")
enumDemo()