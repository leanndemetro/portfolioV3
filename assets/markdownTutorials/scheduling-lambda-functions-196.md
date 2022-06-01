---
title: Scheduling AWS Lambda Functions with CRON
date: 2021/11/9
description: Learn how to schedule AWS Lambda functions using CRON.
tag: AWS Lambda CRON
author: Alyssa De Metro
src: /public/images/posts/scheduling-lambda-functions-196/scheduling-lambda-functions.png
---

Today we're going to use a ***[CRON expression]()*** to schedule an ***[AWS Lambda function.](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-concepts.html#gettingstarted-concepts-function)***

Let's say your Alexa skill is set up to retrieve data from an external API, but you find that the slow response time causes Alexa to time out before your data is retrieved - what can you do? Scheduling a Lambda function can be particularly helpful in situations such as these. A Lambda function can be written to retrieve required data from the API and either cache it locally, or push it into a database at the scheduled time of your choosing. Your Alexa skill will be able to quickly access the data from your local file or database whenever needed.

There are several use cases in which scheduled Lambda Functions could be helpful. In this tutorial we're going to walk through a simple example of how to schedule a Lambda function that outputs a message of our choosing every minute.

For a more detailed walkthrough, please view the Dabble Lab ***[Scheduling AWS Lambda Functions with CRON](https://www.youtube.com/watch?v=YwIN3zwQlIQ)*** video tutorial.


## Prerequisites 

- You will need a general working knowledge of AWS Lambda, to learn more visit ***[the AWS Lambda documentation.](https://docs.aws.amazon.com/lambda/index.html)*** 
- You will need an Amazon Web Services (AWS) Free tier account, visit the ***[AWS homepage](https://aws.amazon.com/?nc2=h_lg)*** to create a new account.


## Getting Started

After creating an AWS free tier account, login to the AWS management console.

From the services list, select Lambda.

## Creating a Lambda Function

Within Lambda, click the create function button.
  1. Select author from scratch
  2. Name your function
  3. Select the latest node version under runtime
  4. Select arm64 architecture
  5. Click create function

Once on your created function's dashboard page, scroll down to the code source inline editor. Replace the existing code with a function to log the time and output a response that contains it.

```javascript
exports.handler = async (event) => {
    // TODO implement
    const date = new Date();
    console.log(`run at: ${date}`);
    const response = {
        statusCode: 200,
        body: JSON.stringify(`hello from Lambda at ${date}`),
    };
    
    return response;
};
```

## Test your function

Click the test button

1. Select create new test event
2. Select the hello-world template
3. Give your event a name

 Scroll down, and click create

![1](https://i.imgur.com/Gy7iu8u.png?1)

Click the deploy button and once successful, click test.

 Your output execution result will return your response defined within the function.

![2](https://i.imgur.com/7VeStci.png?1) 

## Add an Event Trigger

Scroll up to your function overview, and click the add trigger button. 
1. Search CloudwatchEvents via the search input
2. Select EventBridge (CloudwatchEvents)

Configure your trigger by selecting create new rule
1. Give your rule a name
2. Add a description (optional)
3. Select schedule expression

![3](https://i.imgur.com/wH6z1u8.png?1)

## Create a CRON expression

Now, to fill in the expression schedule input, we need a CRON expression.

Head over to the ***[CRON Maker,](http://www.cronmaker.com/?1)*** this will create a CRON expression based on your desired timing parameters. 

 1. Select every 1 minute from the minutes tab
 2. Click generate

![4](https://i.imgur.com/htk6Xds.png?1)

Scroll down, and copy the expression labeled as Cron format.

![5](https://i.imgur.com/QpaVM9R.png?1)

## Add an Event Trigger (cont.)

Return to your Cloudwatch trigger configuration
 1. add your CRON expression. (An important step, however is to remove the very first zero from the expression. This is because CRON's lowest time interval is one second, whereas Cloudwatch's lowest time interval is one minute. This is a simple re-formatting.)
 2. Click add

![6](https://i.imgur.com/KIB8T2B.png?1)

## View logs, and watch the magic happen

Now, select the monitor tab, and click on view logs in Cloudwatch.

![7](https://i.imgur.com/HWznNMM.png?1)

From the log streams section, select the most recent.

Check out the time stamp, our function is running every minute!

![8](https://i.imgur.com/b0mqT4c.png?1)



You should now know the steps to run an ***[AWS Lambda](https://docs.aws.amazon.com/lambda/index.html)*** function according to a schedule defined within a ***[CRON expression.]()*** 

For a more detailed walkthrough, please view the Dabble Lab ***[Scheduling AWS Lambda Functions with CRON](https://www.youtube.com/watch?v=YwIN3zwQlIQ)*** video tutorial.
