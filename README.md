# Xepelin - Technical Assesment

WHAT I DID

1) Create basic html file with a navbar that has a Sign in button.
2) Attach a modal to the Sign in button.
3) Inside the modal construct a basic form with Email address and Password inputs. Once the form is submitted the user will be redirected to "googleSheet.html".
4) Create a js file that will contain the validation of the Sign in form. Form validation:
  a) Add an event listener to the Sign in form.
  b) Create "checkLogin" function. The main logic of the validation will be implemented in this function.
  c) Create "showMessage" function. This function will be called from "checkLogin" function with different argument values depending on the if clause from which is being called.
5) Create a basic html file with a navbar and an iframe where a google sheet will be embedded.
6) Create a google sheet with a copy of the google sheet shared by Xepelin. This step was done just because only people with access was able to open Xepelin google sheet. In order to be able to edit the google sheet from the app I needed the google sheet to be edited by anyone with the link.
7) Add an App Script to the google sheet (Send Notification on edit: https://script.google.com/u/0/home/projects/1RHEk_XXIV7GEQaCr5uFB7rO20gUt0i6sFxkLWuc99W71uW52bsrMPnnY/edit)
8) Implement an OnEdit trigger that will call an "onEdit" function everytime the google sheet is edited.
9) "onEdit" function will call "sendNotification" function only if the column that was edited was column B and the edited cell already had an idOp.
10) Implement "sendNotification" function. This function will receive two arguments, idOp and rate(tasa), and will make the requested POST call.

HOW TO EXECUTE THE PROJECT

1) Open the following link: https://milagrosbargazzi.github.io/xepelin/index.html
2) The credentials that will let the user sign in are:
  a) Email address: test@test.com
  b) Password: test
3) Edit column B (Tasa) of the google sheet. Please be aware that the current email that will receive the notification is "bargazzimili@gmail.com". If you want to test it with another account please modify the email in the POST call inside "sendNotification" function located in "Send Notification on edit" app script.
