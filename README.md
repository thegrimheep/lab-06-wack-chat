401 JS --  Lab 06 wack chat
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Learning Objectives  
* Students will understand how to implement a TCP server using the net module
* Students will understand work with Node.js EventEmitters

## Resources  
* [Nodejs net docs](https://nodejs.org/api/net.html)

## Requirements  
#### Configuration  
<!-- list of files, configurations, tools, ect that are required -->
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.eslintrc** -- with the class .eslintrc file
* **.eslintignore** -- with the class .eslintignore
* **.package.json** -- with all dependencies and dev-dependencies
* **lib/**  -- directory for holding program helper modules
* **server.js** --  main server program

#### Feature Tasks  
* Create a **server.js** that start a TCP server using the `net` module
* create a **lib/parse-message.js** module for parsing client request
 * if a client sends a message that starts with `/nick some_name`
   * change their nickname to the name they have provided
 * if a client sends a message that starts with `/dm some_name some message`
   * send their message to the client with the some_name nickname
 * if a client sends a message that starts with `/users`
   * send the requester the usernames of all connected users
 * if a clinet sends a message that starts with `/troll some message`
   * send their message to all users 10 times
 * if a client sends a message that starts with `/ban user_name`
   * logout the user with the user_name (close their connection, and remove from sockets array)
 * otherwise send their message to all clients
* when a user speaks their nickname should be printed
 * **i.e.** `teapot: Sup Hacker?`

####  Documentation  
* Write a project description in your **README.md**
* Write docs on how to connect to your server with telnet

#### Testing  
*  No Testing Today :)

## Rubric  
* 2ps Configuration
* 3pts Feature Tasks
* 3pts Tests (free points today)
* 2pts Documentation

#Documentation
* Programming TCP sockets in Node requires the net module, which is an asynchronous wrapper for network programming. Using net.createServer() we created a chatroom and
used functions to make the chatroom serviceable. The code creates a simple client which connects to the server, sends a message to server, and disconnects after getting a response from the server. Read the comments to follow the code.
* Using telnet go into localhost:3000 then you may use commands /dm to send a message to a direct user, use /nick to set up a name, and
I will let you see what /ban and /troll do as commands. 
