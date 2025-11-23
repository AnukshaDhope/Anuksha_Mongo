**commands
1. npm init-y

2. npm i express

3. npm i nodemailer

4. npm i mongoose

5. npm install ejs 


<%- include('menu.ejs') %>

db.users.updateOne(
  { name: "Swarup" },       // filter
  { $set: { email: "swarup" } }     // update
);

db.users.deleteOne({ name: "Swarup" });


*GitHub
1. git init
2. git status
3. git add .
4. git config --global user.name "Anuksha"
5. git config --global user.email "anuksha1334@gmail.com"