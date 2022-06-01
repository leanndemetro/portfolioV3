---
title: Using Twilio Functions to handle Autopilot Tasks
date: 2021/11/8
description: Learn to use Twilio functions in order to handle Autopilot tasks.
tag: AI bot twilio autopilot templates functions tasks
author: Alyssa De Metro
src: /images/posts/twilio-bots-tutorial/twiliobots-image1.png
---

Today were going to learn to use Twilio functions in order to handle Autopilot tasks.

Prerequisites: Please ensure you create an account to use the Twilio console. You will also need to know how to create a basic Autopilot bot.

[Get Started with Twilio](https://www.twilio.com/try-twilio)

Create a new Hello World or Demo autopilot bot, navigate to your Twilio console. Click on explore products, then autopilot. Select your newly created bot.

![](/images/posts/twilio-autopilot-tasks-tutorial/twilioautopilot-image2.jpeg) 

From the list of tasks, go to fallback, click on train, and then select swtich to program task.

![](/images/posts/twilio-autopilot-tasks-tutorial/twilioautopilot-image3.jpeg) 

Now, open a new tab and open your twilio console. Type function into the search bar, and select functions.

![](/images/posts/twilio-autopilot-tasks-tutorial/twilioautopilot-image4.jpeg) 

From the left sidebar menu, under functions (classic), select Lists, and click the button to create a new function.

Give your function a name, and create an endpoint named the same.

![](/images/posts/twilio-autopilot-tasks-tutorial/twilioautopilot-image5.jpeg) 

Scroll down to the configuration inline editor, and enter the following code, and save.

```
exports.handler = function(context, event, callback) {
	let response = {};
	response.actions = [];
	response.actions.push({"say" : "This is the fallback response"})
	callback(null, response);
};
```

Now, copy your function's URL with the created endpoint, and return to your Hello World fallback task. Select the Actions URL button, and paste your function URL. Save, build.

![](/images/posts/twilio-autopilot-tasks-tutorial/twilioautopilot-image6.jpeg) 


From the left sidebar menu, select simulator, and type in random text to trigger the fallback response, which should contain the message determined within the function you just created.

![](/images/posts/twilio-autopilot-tasks-tutorial/twilioautopilot-image7.jpeg) 

Now, navigate back to the function you created, and change your code to work for multiple cases.

```
exports.handler = function(context, event, callback) {
	let response = {};
	response.actions = [];
	
	switch(event.CurrentTask) {
	    case "greeting" :
	        response.actions.push({"say" : "Hello from a function"});
	        break;
	    case "fallback" :
	        response.actions.push({"say" : "Sorry, I don't know what to do"});
	        break;
	}
	callback(null, response);
};
```

Head back to your Hello World tasks, and replace the greeting task's URL with your function's as we did in a previous step. Save, and build. Open the simulator once again, say Hello to test the greeting task, and input something random to trigger the fallback task, and watch the magic happen!

![](/images/posts/twilio-autopilot-tasks-tutorial/twilioautopilot-image8.jpeg) 
