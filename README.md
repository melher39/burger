# Eat Dat Burger!

Wecome to **Eat-Dat-Burger**, I hope you're hungry!

## Rundown 

The purpose of this app is to let the user add their own burger names to the list and then eat those burgers. The visuals of this app are minimal compared to the overall functionality. This is a single-page app following the **MVC** design pattern.

1. To begin, visit https://afternoon-shore-51606.herokuapp.com/

2. You will be presented with a simple looking web page, but there's more to it than meets the eye. (There may or may not be burgers already displayed in two columns.)

3. Follow the on-screen instructions and add a burger name of your choice. Get creative! Then select `SUBMIT`.

4. Your burger will then be displayed on the left column with a button next to it.

5. Now you're ready to **EAT DAT BURGER!**. Select the `DEVOUR IT!` button.

6. The burger will be *devoured* and moved to the right column. Pretty neat right?

7. You can repeat this process as much as you'd like, depending on how hungry you are ;).

That's pretty much it, as far as what the end user can see. Let's take a look at...

## Behind The Scenes

**Technologies/Tools Used In This App:**
* Javascript, jQuery
* HTML5, CSS3
* Materialize.css
* Heroku
* JawsDB
* MVC
* Node.js + packages used in this app: 
    * express.js
    * mySQL
    * express-handlebars

* Using a combination of the tools aforementioned, this app is storing the user data in a MySQL database connected to Heroku via the JawsDB. This data is persistent and remains on the site even after the user exits and/or refreshes the browser page.

* Challenges faced: 
    * Initially, understanding the MVC concept and creating a homemade ORM gave me trouble. Working and completing this app definitely helped me understand this concept much better.
    * Deploying to Heroku brought up some minor errors that I was able to quickly solve by Googling the error codes.

* Future Development: 
    * The overall visuals could definitely be improved.
    * Adding a delete button to the **Devoured** column.'
    * A modal when the user submits the burger and devours it.

Thanks for your time! Hope you enjoyed this project.





