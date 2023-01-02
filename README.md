# Find a Coach App with Vue
A project which uses core features of vue with guide of Max Schwarzmüller's Vue course
 
App have 2 parts, coaches and requestes. Coach part simply lists registered coaches, user can see detail of spesific coach and contact them. This page also have filter option, users can filter with areas of coaches. For contacting they can send message with email. These requests goes to request page but this reques page only shows logged coach's requests which currently not dynamic. There is also some bugs related to page routing, i will fix them later with adding of authentication.
 
I mostly done this project myself but i changed my code for making it looking similar to original code. It uses core vue features like  vuex, routers, transitions, slots etc. I am also using firebase as database, users should change database link to theirs in firebase.js. Currently there is no auth logic it only displays fixed coach's requests and because of that new registers are blocked. I will update after i learn authentication.

For installing simply use npm install and npm run serve in terminal

![image](https://user-images.githubusercontent.com/64266261/210182663-9c3dc312-e2e3-46e4-8b8a-84de49c3fec4.png)

![image](https://user-images.githubusercontent.com/64266261/210182967-6e8fc907-9551-4377-a28e-dd52e7f399af.png)

![image](https://user-images.githubusercontent.com/64266261/210182983-dbe31e53-1455-42f2-86f4-2873158ed08b.png)

![image](https://user-images.githubusercontent.com/64266261/210182670-cd4d3295-ec2c-4e3b-acf8-2ba6dc69f737.png)
