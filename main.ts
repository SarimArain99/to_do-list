#! /usr/bin/env node
import inquirer from "inquirer";
let toDos = []
let condition = true;

while (condition){
            let listToDo = await inquirer.prompt([
            {
                message : "What woult you like ToDo Today",
                name : "firstQuestion",
                type : "input",

            },
            {
                name:"secondQuestion",
                message:"Would you like to add more things",
                type:"confirm",
                default:"true"
            }
])
toDos.push(listToDo.firstQuestion);
console.log(toDos);
condition = listToDo.secondQuestion;
};
