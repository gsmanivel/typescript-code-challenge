// arrays

const Student: {
    name : string;
    age : number;
    hobbies : string[]
    marks: number[]
} =  {
    name : "manivel",
    age: 34,
    hobbies: ["Reading", "Writting" , "Sleeping"],
    marks : [1,2,3,4,5]
}

for(const hobby of Student.hobbies){
    console.log(hobby.toUpperCase())
}

let marks:number;
marks : [1,2,3,4,5]
for(const mark of Student.marks){
    console.log(mark)
}