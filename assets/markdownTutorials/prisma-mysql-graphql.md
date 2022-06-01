---
title: Set up a MySQL database with a Prisma schema, create queries using GraphQL
sidebar_label: Setting up and Querying a MySQL/Prisma database using GraphQL
pagination_label: Querying a MySQL/Prisma database using GraphQL
author: Alyssa De Metro
---

In this tutorial we're going to walk through the steps to set up a [Prisma](https://www.prisma.io/) schema within an exisiting [Node.js](https://nodejs.org/en/) project, connect it to a [MySQL](https://www.mysql.com/) Database, and use [GraphQL](https://graphql.org/) to take in values from a basic contact form and push them to this newly created database.

[Prisma](https://www.prisma.io/) is wonderful for use in querying and creating data models within projects running on either Node.js or Typescript. It is an ORM, or "Object-Relational Mapping" tool. It's simplifiled Data Model format (or Schema), ability to easily sync with many different types of databases, and easy to use querying methods make it high up on the list for use by many developers. Today we're going to use it to set up a basic Schema for a contact form. This model will then be synced with a local mySQL database. 

[MySQL](https://www.mysql.com/) is one of many Structured Query Language relational database servers. It is a streamlined means by which to take in preset data models, and the arguments passed into them, and move them into easily created tables within a database. Although there are many different options in terms of relational databases to choose from, MySQL is one of the most commonly used among developers. We will be taking in values input by a user within a contact form, and pushing them into our desired table within our chosen database using a GraphQL query.

[GraphQL](https://graphql.org/) is an amazing up and coming querying language. Easily written mutations and queries can be used to communicate with your database quickly and efficiently to create, read, update and delete data as desired. We will be using it today along with Prisma Schema querying methods to easily create a contact submission containing user input values within our database.

There are several use cases in which these technologies could be used, this example is designed to walk through the basics, so as to create an understanding of the setup of each technology within a Node.js project, and how the relationships between each technology can create the desired functionality. 

For a more detailed walk-through, please view the Dabble Lab [Set up a MySQL database with a Prisma schema, create queries using GraphQL](https://www.loom.com/share/23fc9c37657142f282fb9c4a37090370) video tutorial.


## Prerequisites 

- You will need Node.js downloaded to your local system, please see [The Node.js downloads page.](https://nodejs.org/en/download/).

- You will need mySQL downloaded to your local system, and a connection set up, please see [The MySQL downloads page.](https://www.mysql.com/downloads/).

## Optional, but helpful

- In this tutorial I will be using the MySQL extension by cweijan downloaded from VS Code to create a local connection, and create/update my database. Other GUIs may be used for the purpose, however it may be easier to follow along if it is downloaded to your local system.

![1](https://i.imgur.com/fsEjk7e.jpg)

## Getting Started

1. Open a new terminal instance, use the cd command to move to the desired location of your project. 

2. Next, run the command

```
npx create-next-app <project name>
```

This command will build a brand new Nextjs project within your chosen folder.

![2](https://i.imgur.com/WhpTF9s.jpg)

3. cd into your newly created project using the command

```
cd <projectname>
```

4. Run the commands 
```
npm install
npm run build
```

5. When both of these processes complete, open your project within VS code

## Setting up Prisma within your project

1. Open the integrated terminal from your project's root folder, and run the command

```
npm install prisma
```

2. Once this process completes, run the command 

```
npx prisma init
```

This will create a new Prisma folder with the required Schema template file, and .env file with the required fields preset.

3. Navigate to the .gitignore file, and add .env to the local env files section, this is to ensure that no secret database values will be shared when your project is pushed to Github, or to Production.

![3](https://i.imgur.com/ExhMQx8.jpg)

## Create a local database connection

1. Select the database icon from the left side panel of VS code, this was added by downloading the MySQL extension by cweijan via VS code extensions (mentioned above.)

2. Click on the + symbol in right corner of the left sidebar menu to create a new connection

![4](https://i.imgur.com/QER9ZBF.jpg)

3. Fill in the Connection Name, select Current Workspace, fill in the Password, and click connect.

![5](https://i.imgur.com/1tu6awZ.jpg)

4. Now, select the + symbol next to your new connection listed in the left sidebar. Fill out a database name, and click the Run SQL button at the top of the file. See the execute success message.

![6](https://i.imgur.com/V7xiUUl.jpg)

5. Click on your newly created database in the left sidebar menu, and click on table, click the + next to it. Add the code

```
CREATE TABLE test(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    update_time DATETIME COMMENT 'Update Time',
    test VARCHAR(255) 
)
```

Click the Run SQL button and see the execute success message. This will create a basic table within your database, its contents will be updated according to a future data model, so its name and fields are unimportant at this time. 

6. Now, return to the Connect tab, and toggle the Use Connection String button

![7](https://i.imgur.com/WagnABv.jpg)

7. In the input next to Connection String add in the following according to your previous connection input values, and recently created database name.

```
DATABASE_URL=mysql://root:<password>@localhost:3306/<database>
```

Click connect.

8. Now, navigate back to your .env file, and fill in the value of DATABASE_URL with the same connection string seen in the previous step.

![8](https://i.imgur.com/XX09cWi.jpg)

## Create a Prisma Model

1. Navigate to prisma/schema.prisma, within this file, create a basic data model, or Schema for use with your contact form. Delete this file's preset contents and replace it with the code

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
    provider = "mysql"
    url = env("DATABASE_URL")
}


model contactSubmission {
  id                 String         @id @default(cuid())
  name               String         
  company            String         
  email              String         @unique
  phone              String         
  message            String?  
  createdAt          DateTime        @default(now())
}
```

## Connect your Prisma model to your MySQL Database

1. Open the integrated terminal from your project's root folder and run the command

```
npx prisma generate
```

2. Upon success of this process, run the command 

```
npx prisma migrate dev
```

This command will update your database, so you will need to type y for yes to reset your database. You will also need to name this migration.

![9](https://i.imgur.com/KFpjLly.jpg)

3. Ensure this process has worked by selecting the database symbol once again from the left sidebar, and clicking on your database. You should now see tables named _prisma_migrations and contactSubmission, which should have fields for all defined inputs within the contactSubmission data model.

![10](https://i.imgur.com/cRmXrxN.jpg)

## Set up GraphQL using an Apollo server

1. Open your integrated terminal at the root folder of your project and run the command

```
npm install apollo-server-core apollo-server-micro graphql
```
2. Now, create a folder in your project's root called graphql, add a file within it called index.js, and create a folder within it called services.

3. Navigate to graphql/index.js and add the code

```
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import services from "./services";
import prisma from "../lib/prisma/prismaClient";

const apolloServer = new ApolloServer({
  typeDefs: services.schema,
  resolvers: services.resolvers,
  context: () => {
    return { prisma };
  },
  introspection: true,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export { apolloServer };
```

4. Now create a new folder at the root of your project called lib, add a folder called prisma within it, and a file called prismaClient.js within that. Within prismaClient.js, add the code

```
import { PrismaClient } from "@prisma/client";
const prisma = global.prisma || new PrismaClient();

export default prisma;

if (process.env.VERCEL_ENV === undefined) global.prisma = prisma;
```

5. Now navigate to pages/api and add a file called graphql.js, add the code

```
import { apolloServer } from "../../graphql";

const startServer = apolloServer.start();

export const config = {
    api: {
        bodyParser: false,
    },
}

export default async function handler(req, res) {
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}
```

6. Return to graphql/services and add a new file called index.js, add the code

```
import { gql } from "apollo-server-micro";
import contactFormService from "../services/contactform"


const BaseSchema = gql`
  type Query {
    "app online"
    app: Boolean
  }
  type Mutation {
    app: Boolean
  }
`;

const BaseResolvers = {
  Query: {
    app: () => true,
  },
  Mutation: {
    app: () => true,
  },
};

const services = {
  schema: [
    BaseSchema,
    contactFormService.schema,
  ],
  resolvers: [
    BaseResolvers,
   contactFormService.resolvers,
  ],
};

export default services;
```
## Create graphQL service, and mutation to create a new Contact Submission

1. Create another new file within graphql/services called contactform.js, add the code

```
import { gql } from "apollo-server-core";

const contactFormService = {
    schema: gql`
    type contactSubmission {
      id: String
      name: String
      company: String
      email: String
      phone: String
      message: String
    }

    extend type Mutation {
      createcontactSubmission(name: String!, company: String, email: String!, phone: String, message: String!): contactSubmission
    }
  `,
    resolvers: {
        Mutation: {
            createcontactSubmission: (_, args, ctx) => {
                return ctx.prisma.contactSubmission.create({
                    data: {
                        name: args.name,
                        company: args.company,
                        email: args.email,
                        phone: args.phone,
                        message: args.message,
                    },
                });
            },
        },
    },
};

export default contactFormService;
```

## Test functionality using graphQL Plaground

1. open your integrated terminal from the root of your project, and run the command 

```
npm run dev
```

2. Open http://localhost:3000/ in your browser, and see the Next.js basic landing page.

![11](https://i.imgur.com/L4psQZf.jpg)

3. Now navigate to http://localhost:3000/api/graphql and see the graphQL playground!

![12](https://i.imgur.com/43yD12e.jpg)

4. Add in a test mutation with the necessary fields pre-defined in both our Prisma Schema, and GraphQL contact form service, as seen below, and press the play button. The mutation should only return your input name as this was written into the query.

![13](https://i.imgur.com/Rb7NNsI.jpg)

5. Now, navigate back to your project's database, and double click on the contactSubmission table, you should see the values from your query!

![14](https://i.imgur.com/B1Z4ZRi.jpg)

## Connect your query to a contact form

1. Open the integrated terminal and run the command 

```
npm install axios
```


2. Now, within pages/index.js, delete the preset content and replace with the code below, this contact form is extremely basic and does not contain any css styling, it is strictly for displaying basic set up and functionality. 

```
import { useState } from "react";
import axios from "axios";


export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    var data = JSON.stringify({
      query: `mutation{
    createContactSubmission(name:"${name}",email:"${email}", phone:"${phone}", company:"${company}", message:"${message}"){
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
    console.log(response.data)


  };
  return (
    <div className="contactForm">
      <form action="#" method="POST">

        <label for="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          id="name"
          autoComplete="name" />

        <label for="company">Company</label>
        <input
          onChange={(e) => setCompany(e.target.value)}
          value={company}
          type="text"
          name="company"
          id="company"
          autoComplete="company"
        />

        <label for="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          name="email"
          id="email"
          autoComplete="email" />

        <label for="phone">Phone</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="text"
          name="phone"
          id="phone"
          autoComplete="phone" />

        <label for="message">Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          name="message"
          id="message"
          autoComplete="message"
          rows={6} />

        <button
          type="button"
          onClick={handleSubmit}>
          Submit
        </button>

      </form>
    </div>
  )
}

```

3. Start your server using npm run dev, navigate to http://localhost:3000/ - fill in your form and click submit!

![15](https://i.imgur.com/0MUwBem.jpg)

4. Due to this being a basic example not much will happen, but return to your database contactSubmission table, refresh, and you will see your input values! Success!

![16](https://i.imgur.com/Mfn1h4B.jpg)

For a more detailed walk-through, please view the Dabble Lab [Set up a MySQL database with a Prisma schema, create queries using GraphQL](https://www.loom.com/share/23fc9c37657142f282fb9c4a37090370) video tutorial.