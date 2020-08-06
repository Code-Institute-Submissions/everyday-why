<a href="https://rexayo.github.io/everyday-why"><img src="assets/images/EverydayWhyLogo-01.svg"  style="margin: 0;" width="20%" height="20%"></a>

##### Click logo above to view live project

EverydayWhy is a passion project that sits at the intersection between a Personal Design Diary and Christian Apologetics. According to Wikipedia, Christian apologetics is a branch of Christian theology that defends Christianity against objections.

As a visual artist I have always struggled with finding subject matter that represents my interests and defines my belief system. I stumbled upon Chrsitian Apologetics and found its focus both exciting and challenging to represent from the eye of a creator. EverydayWhy is born of that desire to represent my thoughts, questions and perceptions about life in a way that would hopefully be of interest to designers, design enthusiasts, christians and all those with similar questions.

As a personal design diary, I also intend to use it as a platform to share my knowledge on my preferred design tools, primarily Side FX Houdini and Adobe After Effects . Knowledge about using Houdini as a design tool isn't so commom place and I feel that it would be a nice addition to make my project files available for download. Also, a future update would be to add a section for tutorials

It is my desire that I can create a hub to share my journey in visual communication, as well as, making an online space that represents my interests and skills, so as to also attract design collaborations and commisions from people with similar interests.

I am grateful for the knowledge I have gained so far on this course as it has enabled create something that was only just an imagination a few months ago.

## User Experience (UX)

- ### User Stories

    - #### First Time Visitor Goals

        a. As a First Time Visitor, I want to easily understand the main purpose of the site and feel comfortable to return.  
        b. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.  
        c. As a First Time Visitor, I want to easily find information about the author of the website and I want to be able to easily locate their social media links to see their followings on social media to determine how trusted and known they are.

    - #### Returning Visitor Goals

        a.  As a Returning Visitor, I want to be able to easily download images and project files.  
        b.  As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.  

    - #### Frequent User Goals

        a. As a Frequent User, I want to check to see if there are any newly added articles or images.  
        b. As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.


- ### Design
    - #### Colour Scheme
        -   The colour scheme across the website is a combination of gradients and solid fills based on the colours below.  
        <h2><img src="assets/images/Colour Palette.png"></h2>
    - #### Typography
        -   The Google fonts Libre Franklin and Roboto Mono are the two fonts used across the website with Sans Serif and Monospace as the alternative fonts respectively, for cases when the default options aren't loaded onto the website correctly.
        Both fonts are very legible and contrast nicely together. With Libre Franklin serving as the primary font for headlines and titles and Roboto Mono as the body text. 
    - #### Imagery
        -   Images across the website play a huge role and a created to be analogous to the sites colour palette. 
    - #### Negative Space
        -   Negative Space helps to give the viewer some breathing space between both the images and Article section which typical has a lot of text. 

*   ### Wireframes

    Initial Wireframes developed at the start of the project are <a href="assets/images/Rex Abba-Abba Milestone Project Wireframe.pdf" download>here.</a> One difference that can be observed is that I decided to make the Downloads & Resources page into the homepage which is now called Gallery. This choice to help easy navigation and provide a more welcoming homepage with appealing images. 

  

## Features

This section contains all the features of the website

### Gallery

This is the homepage and hub for all the images and downloads. Each image has three anchor tags:

- A download link to a high resolution version of the image.
- A download link to the project files and assets used to make the image and
- A link that takes to the user to the related article.

### Questions & Anecdotes

This is a collection of articles on a range of questions, structured with collapsible accordion panels.
Each article is intended to inspire or ignite more questions.

### About

This has a little bit of a bit of information concerning me and the motivation behind the EverydayWhy.

### Say Hello

This page contains features that helps the user make inquiries, sign up for email updates and follow social media handles.
The implementation uses Bootstrap's modal with three main features:

- An inquiry form which allows user to ask questions or send comments by filling out required fields.
- A email field which enables users sign up for a newsletter.
- Icons with links to EverydayWhy's social media platforms.


### Features Left to Implement

- Article archives with indexing will be useful to include as the number of articles increase. This would help the user easily find articles based around keywords. 
- A merchandise section with items connected to articles and branded with themes connected to their images.
- A tutorial section with timelapse or narrated tutorials around the creation of selected Article artwork. 

## Technologies Used

### Languages Used

- HTML5
- CSS3
- jQuery 

### Frameworks, Libraries & Programs Used

- [Bootstrap](https://getbootstrap.com/)

  - The project uses Bootstrap's library to aid responsiveness across various screen sizes and devices.

- [JQuery](https://jquery.com)
  - Bootstrap includes jQuery, which is used in both the navbar responsiveness and accordion panels. 
  - The smooth scroll feature of the "Questions & Anecdotes" page uses jQuery. 
  - The "About" tab animates on using jQuery.

- [Google Fonts](https://fonts.google.com/)
    - Google fonts were used to import the 'Libre Franklin' and the 'Roboto Mono' font into the style.css file which are used on all pages throughout the project.

- [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
    
- [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
    
- [GitHub](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.

- [Side FX Houdini](https://www.sidefx.com/products/houdini/)
    - Houdini was used to create all the 3D and procedural components of the images for the Articles on the website.

- [Illustrator](https://www.adobe.com/ie/products/illustrator.html)
    - Illustrator was used to create the logo, colour palette for the website and all vector elements required in the development of Article Images.

- [Photoshop](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to composite the images created from Houdini.

- [Balsamiq](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
   1. Go to the "Contact Us" page
   2. Try to submit the empty form and verify that an error message about the required fields appears
   3. Try to submit the form with an invalid email address and verify that a relevant error message appears
   4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits

### Content

- The text for all sections were created by my wife and I.

### Media

- The images used in this site were all designed and created by me.

### Acknowledgements

- I received inspiration for this project from websites like the rzim.org, theschooloflife.com, wearelisten.com and thebibleproject.com
