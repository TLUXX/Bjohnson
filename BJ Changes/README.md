# Week 12 June 22nd, 2019
No bugs that I can find are present in the current code. 

List of TODOs:

1. update CSS to display estimates in boxes
2. add a tax total
3. add an effective tax rate (total tax burden)
4. implement Google Sheets add-on




# Week 10 June 12th,2019

My API call seems to be functioning properly. I need to make the CSS prettier and more user-friendly. Right now, I am trying to narrow the focus of my program's purpose. Should it be soley an income tax calculator, or should I incorporate some new functionality such as a payroll tax estimator? The large-scale application I want for this is that it can be used as a budgeting tool where people can project out their gross and net earnings over the course of the year and track their tax withholdings. This would require me to add in a W-4 form that collects the number of allowances a person is claiming. 

Here is a link to my idea in a Google Sheets document I created: https://docs.google.com/spreadsheets/d/165DLva4E8t8iD4fVpiiYyuE4_E_sco7AgVUzFIdZRi4/edit#gid=0

If you go to 'Tools<script editor', you can see my javascript files I created weeks ago (before I integrated an API). Ideally, I'd like to incorporate a Google Sheets functionality with this project.



# Week-7


I'd like to create an income tax calculator! 

You enter in your filing year, gross income, filing status, state of residence, 
your pay period frequency and your number of exemptions and out pops your estimated FICA, 
Federal and State tax dues for the Year and for your pay period. 

I'd like to have a check box list of which taxes you'd like to include in your total 
tax amount and a section that shows you your overall tax burden. 

Ideally, I'd like to incorporate this as a Google Add-on plugin for Google Sheets that can be 
used as a budgeting tool. 

You could do this with App Scripts and even create a form that the user can fill out within 
the Sheets document to set up the program. 

There is a website called taxee.io that provides an API for federal and state tax brackets 
(so you can do whatever you'd like with them) and an API for an income tax calculator (black box). 

I'd call from this and depending on how much their calculator lines up with what I want to accomplish, 
I may or may not write my own program to calculate the taxes. 

This product would be helpful for anyone who wants to plan ahead for their taxes in the upcoming year or 
just wants to estimate how much they'd net this year. It needs to be user friendly, simple to utilize and 
powerful enough to be helpful to every user. 

I'd need to use HTML, CSS and Javascript (maybe some Query.AJAX if I'm up to it) to accomplish this project. 

Honestly, I'm wanting to do this for my project so I can budget out net and gross earnings for myself.
And I figure if it's a need for me, it's probably a need for someone else. The thing is, there are plenty 
of tax estimators online. 

The one thing I want to do with them is insert them right into my budgeting methods (hence the Google Sheets push).
