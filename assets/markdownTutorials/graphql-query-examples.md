---
title: GraphQL Query and Mutation Examples
date: 2022/03/15
description: several example GraphQL API Query and Mutation requests using a variety of HTTP clients
tag: tutorial
author: Alyssa De Metro
src: /public/images/posts/github-auth-in-nextjs/github-auth-in-nextjs-1.jpeg
---


# GraphQL Query and Mutation Examples

This guide will walk you through several example GraphQL API Query and Mutation requests using a variety of HTTP clients.

## HTTP Request Client Formats Covered in This Document:

[Axios](https://axios-http.com/docs/intro)

[cURL](https://curl.se/)

[Postman](https://www.postman.com/)

[GraphQL Client Library](https://graphql.org/) for use within the GraphQL Playground.


## Prerequisites 

- In order to successfully make the following HTTP requests, you will need a working database, and a live server instance up and running.

- If you would like to follow along with the examples listed below, please ensure you have this GraphQL Schema, and the required resolver and typeDef functionality written out for the following:

```
import { gql } from "apollo-server-core";

const userService = {
    schema: gql`
    type User {
      id: String
      name: String
      company: String
      email: String
      phone: String
    }

    extend type Query {
        getAllUsers: [User]
      }

    extend type Mutation {
      createUser(name: String!, company: String, email: String!, phone: String): User
      updateUser(id: String, name: String, company: String, email: String, phone: String): User
      deleteUser(id: String): User
    }
  `
```

- Please take note of the returned id from your createUser queries. You will need to replace the words "userId" within the requests with this value.

## Axios 

- For the Purposes of this guide, these Axios query and mutation examples are written within the framework of a handleSubmit function. This function would simply need to be triggered in the method of your choosing, and your returned data (response) could be used to render the data within your webpage in the desired method.

### Mutations

1. createUser:

```
import axios from "axios"

const handleSubmit = async (e) => {
    var data = JSON.stringify({
    query: `mutation createUser($name: String!, $email: String!, $phone: String!, $company: String!){
    createUser(name: $name, email: $email, phone: $phone, company: $company){
      id
    }
    }`,
      variables: {
          name: "Jarvis Lorry",
          email: "jlorry@tellsonsbank.com",
          phone: "4075551234",
          company: "Tellson's Bank"
      },
    });

    var config = {
      method: "post",
      url: "/api/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };


    const response = await axios(config);
    console.log(response)
   }
```


2. updateUser:
```
import axios from "axios"

  const handleSubmit = async (e) => {
    var data = JSON.stringify({
    query: `mutation updateUser($name: String!, $id: String!){
    updateUser(id: $id name: $name){
      name
    }
    }`,
      variables: {
          id: "userId",
          name: "J. Lorry"
      },
    });

    var config = {
      method: "post",
      url: "/api/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };


    const response = await axios(config);
    console.log(response)
    }
  ```

3. deleteUser:

```
	import axios from "axios"

   const handleSubmit = async (e) => {
  var data = JSON.stringify({
  query: `mutation deleteUser( $id: String!){
  deleteUser(id: $id){
    name
  }
  }`,
    variables: {
        id: "userId"
    },
  });

  var config = {
    method: "post",
    url: "/api/graphql",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const response = await axios(config);
  console.log(response)
      }
```

### Queries

1. getAllUsers:
```
import axios from "axios"

const handleSubmit = async (e) => {
    var data = JSON.stringify({
      query: `query{
    getAllUsers{
      name
    }
    }`,
      variables: {},
    });

    var config = {
      method: "post",
      url: "/api/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };


    const response = await axios(config);
   }
```



## GraphQL Playground


### Mutations

1. createUser:
```
mutation createUser($name: String!, $email: String!, $phone: String!, $company: String!) {
      createUser(
        name: $name, email: $email, phone: $phone, company: $company
      ){
      id
      }
    }
```

Add the following code to the Query Variables section of the playground

```
{
  name: "Jarvis Lorry",
  email: "jlorry@tellsonsbank.com",
  phone: "4075551234",
  company: "Tellson's Bank"
}
```

2. updateUser:
```
mutation updateUser($name: String!, $id: String!) {
      updateUser(
        name: $name, id: $id
      ){
      id
      }
    }
```

Add the following code to the Query Variables section of the playground

```
{
  "name": "J. Lorry",
  "id": "userId"
}
```

3. deleteUser:

```
mutation ($id: String!) {
      deleteUser(id: $id){
      name
      }
    }
```

Add the following code to the Query Variables section of the playground

```
{
  "id": "userId"
}
```

### Queries

4. getAllUsers:
```
query {
      getAllUsers{
        name
      }
    }
```


## cURL

### Mutations

1. createUser:
```
   curl \
  -H "Content-Type: application/json" \
  -d '{ "query": "mutation($name:String!, $company:String!, $email:String!, $phone:String!) { createUser( name:$name, company:$company, email:$email, phone:$phone) { id }}", "variables" : "{\"name\" : \"Jarvis Lorry\", \"company\" : \"Tellson's Bank\", \"email\" : \"jlorry@tellsonsbank.com\", \"phone\" : \"4075551234\"}"}'\
  http://localhost:3000/api/graphql
  
  ```

  
2. updateUser:

```
curl \
  -H "Content-Type: application/json" \
  -d '{ "query": "mutation($id: String!) { updateUser(  id:$id, name: \"J. Lorry\" ) { name } }", "variables" : "{\"id\" : \"userId\"}"}'\
  http://localhost:3000/api/graphql
  ```

3. deleteUser:

```
curl \
-H "Content-Type: application/json" \
  -d '{ "query": "mutation($id: String!) { deleteUser(  id:$id ) { name } }", "variables" : "{\"id\" : \"userId\"}"}'\
  http://localhost:3000/api/graphql
  ```

### Queries 

1. getAllUsers:
```
  curl \
  -H "Content-Type: application/json" \
  -d '{ "query": "{ getAllUsers { name } }" }' \
  http://localhost:3000/api/graphql
  ```


## Postman

- Open a new tab, and add your graphql endpoint in the address bar
- select body, and then graphql, and input your graphql queries 

### Mutations

1. createUser
```
mutation createUser($name: String!, $email: String!, $phone: String!, $company: String!) {
      createUser(
        name: $name, email: $email, phone: $phone, company: $company
      ){
      id
      }
    }
```

- add the following code to the the GraphQL Variables window

```
{
  name: "Jarvis Lorry",
  email: "jlorry@tellsonsbank.com",
  phone: "4075551234",
  company: "Tellson's Bank"

}
```

2. updateUser
```
mutation updateUser($name: String!, $id: String!) {
      updateUser(
        name: $name, id: $id
      ){
      id
      }
    }
```

- add the following code to the the GraphQL Variables window

```
  {
  "name": "J. Lorry",
  "id":"userId"
}
```

3.deleteUser:
```
mutation ($id: String!) {
      deleteUser(id: $id){
      name
      }
    }
```
- Add the following code to the GraphQL Variables window

```
{
 "id": "userId"
}
 ```

### Queries

 1.getAllUsers
```
 query {
      getAllUsers{
        name
      }
    }
```

## Conclusion

- For further information please see the links to the documentation for each of the technologies listed in the "HTTP Request Client Formats Covered in This Document" section of this guide.