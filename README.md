<a href="https://rexayo.github.io/everyday-why"><img src="assets/images/EverydayWhyLogo-01.svg"  style="margin: 0;" width="20%" height="20%"></a>

##### Click logo above to view live project

<h2 align="center"><img src="assets/images/Responsive-screenshot.png"></h2>

EverydayWhy is a passion project that sits at the intersection between a Personal Design Diary and Christian Apologetics. According to Wikipedia, Christian apologetics is a branch of Christian theology that defends Christianity against objections.

As a visual artist I have always struggled with finding subject matter that represents my interests and defines my belief system. I stumbled upon Chrsitian apologetics and found its focus both exciting and challenging to represent from the eye of a creator. EverydayWhy is born of that desire to represent my thoughts, questions and perceptions about life in a way that would hopefully be of interest to designers, design enthusiasts, christians and all those with similar questions.

As a personal design diary, I also intend to use it as a platform to share my knowledge on my preferred design tools, primarily Side FX Houdini and Adobe After Effects. Knowledge about using Houdini as a design tool is not so commom place and I feel that it would be a nice addition to make my project files available for download. A future update will be to add a section for tutorials.

It is my desire that I can create a hub to share my journey in visual communication, as well as, making an online space that represents my interests and skills, so as to also attract design collaborations and commissions from people with similar interests.

I am grateful for the knowledge I have gained so far on this course as it has enabled me create something that was only just an imagination a few months ago.

## User Experience (UX)

- ### User Stories

  - #### First Time Visitor Goals

    a. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the creators.  
     b. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.  
     c. As a First Time Visitor, I want to easily find information about the author of the website and I want to be able to easily locate their social media links to see their followings on social media to determine how trusted and known they are.

  - #### Returning Visitor Goals

    a. As a Returning Visitor, I want to be able to easily download images and project files.  
     b. As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.

  - #### Frequent User Goals

    a. As a Frequent User, I want to check to see if there are any newly added articles or images.  
     b. As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.

* ### Design
  - #### Colour Scheme
    - The colour scheme across the website is a combination of gradients and solid fills based on the colours below.
    <h2><img src="assets/images/Colour-Palette.png"></h2>
  - #### Typography
    - The Google fonts Libre Franklin and Roboto Mono are the two fonts used across the website with Sans Serif and Monospace as the alternative fonts respectively, for cases when the default options aren't loaded onto the website correctly.
      Both fonts are very legible and contrast nicely together. With Libre Franklin serving as the primary font for headlines and titles and Roboto Mono as the body text.
  - #### Imagery
    - Images across the website play a huge role and are created to be analogous to the sites colour palette.
  - #### Negative Space
    - Negative Space helps to give the viewer some breathing space between both the images and article section which typically has a lot of text.

- ### Wireframes

  Initial Wireframes developed at the start of the project are <a href="assets/images/RexAbba-AbbaMilestoneProjectWireframe.pdf" download>here.</a> One difference that can be observed is that I decided to make the Downloads & Resources page into the homepage which is now called Gallery. This choice was to help easy navigation and provide a more welcoming homepage with appealing images.

## Features

This section contains all the features of the website.

### Gallery

This is the homepage and hub for all the images and downloads. Each image has three anchor tags:

- A download link to a high resolution version of the image;
- A download link to the project files and assets used to make the image and;
- A link that takes to the user to the related article.

### Questions & Anecdotes

This is a collection of articles on a range of questions, structured with collapsible accordion panels.
Each article is intended to inspire or ignite more questions.

### About

This has a bit of information concerning me and the motivation behind the EverydayWhy.

### Say Hello

This page contains features that helps the user make inquiries, sign up for email updates and follow social media handles.
The implementation uses Bootstrap's modal with three main features:

- An inquiry form which allows users to ask questions or send comments by filling out required fields.
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

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project. No errors were found during the validation process, but a few warnings were flagged relating to certain sections not having header tags on the html pages and autoprefixing issues on the css document. These were intentional choices and they don't affect the functionality of the website.

- [W3C Markup Validator](https://validator.w3.org/#validate_by_input)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

  <a href="assets/images/Validator Results.zip" download>Download results here</a>

### Testing User Stories from User Experience (UX) Section

- #### First Time Visitor Goals

  1. As a First Time Visitor, I want to understand the main purpose of the site easily and learn more about the creators.


        1. Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice.
        2. An image grid on the homepage presents a colourful array of all artwork representing all articles on the website.
        3. The user has three options per image; download high resolution image, download project files and go to article, which takes the user straight to the article on the questions and anecdotes page.

    2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.

        1. The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link is clearly descriptive of what it contains.
        2. At the bottom of each page there is a "back to top" button to aid easy scrolling especially for when pages get very long. This is particularly helpful on mobile devices.
        3. On the Say Hello page, after a form response is submitted, the page refreshes and the user is brought back to the original page before completing the form.

    3.  As a First Time Visitor, I want to easily find information about the website's creators and easily locate their social media links to see their social media followings, in order to determine how trusted and known they are.

        1. Once the new visitor has visited the Say Hello page, they will notice the social media links.
        2. Additionally there are social media links at the footer of all pages except the Say Hello page where it is in the body of the page.

- #### Returning Visitor Goals

  1. As a Returning Visitor, I want to be able to easily download images and project files.

     1. These are clearly shown below each image presented on the homepage.

  2. As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.

     1. The navigation bar clearly highlights the "Say Hello" Page.
     2. Here they can fill out the "questions or comments" form on the page or use alternative options such as following on social media where contact can also be made with the oraganisation.
     3. The footer contains links to the organisations Facebook and Instagram page as well as the website's email.
     4. Whichever link is clicked on from the Say Hello page is opened up in a new tab to ensure the user can easily get back to the website.
     5. The email button on the footer is set up to automatically open up user's email app and autofill the website's email address in the "To" section.

* #### Frequent User Goals

  1. As a Frequent User, I want to check to see if there are any newly added articles or images.

     1. At the bottom of every page there is a footer which content is consistent throughout all pages.
     2. To the left hand side of the footer the user can see "Join our Newsletter" and are prompted to Enter their email address.
     3. There is a "Submit" button to the right hand side of the input field which is located close to the field and can easily be distinguished.
     4. Additional on the "Say Hello" there is a form with a header called "Stay in the Loop" which has also an input field that prompts users to enter their email address. There is also a "Submit" button the right hand side of the input field.

  2. As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.

     1. The user would already be comfortable with the website layout and can easily click the link to request Newsletter updates.

### Further Testing

- The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, Samsung Galaxy Note 10, Samsung S9 & iPhone8.
- A large amount of testing was done to ensure that all pages were linking correctly.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
- Additional automated testing was done using [Browser Stack](https://live.browserstack.com/)

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Rexayo/everyday-why)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://rexayo.github.io/everyday-why/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository, a copy of the original repository on the GitHub account was made to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Rexayo/everyday-why)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Rexayo/everyday-why)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

- [Bootstrap](https://getbootstrap.com/docs/3.3/getting-started/): Bootstrap Library was used throughout the project mainly to make the website responsive using the Bootstrap Grid System.

- [HTML & CSS](https://www.w3schools.com/): I researched a lot of code support from W3 Schools. Additional research on CSS was done on [CSS Tricks](https://css-tricks.com/)

- jQuery: To aid DOM manipulation and automation in certain areas I needed to use jQuery and I repurposed code from the sources below.
  - Code Pen - [Scroll to top of page](https://codepen.io/deveb22/pen/QxPmGz), [Animate "About" on click](https://codepen.io/steveberrill/pen/owKeVE)
  - Stack Overflow - [Smooth scroll to active article](https://stackoverflow.com/questions/35992900/bootstrap-accordion-scroll-to-top-of-active-open-accordion-on-click)
  - CSS Tricks - [Smooth scroll to articles from "Questions & Anecdotes" dropdown menu](https://css-tricks.com/snippets/jquery/smooth-scrolling/)
  - Github - [Opens Article on "Questions & Anecdotes" page when "Go to Article" on each image is selected](https://gist.github.com/raddevon/8958486)

## Credits

### Content

- The text for all articles were created by my wife and me.

### Media

- The images used in this site were all designed and created by me.

### Acknowledgements

- I received inspiration for this project from websites like [Ravi Zacharias Ministries](https://www.rzim.org/),[The School of Life](https://www.theschooloflife.com) and [The Bible Project](https://www.thebibleproject.com). The use of an accordion for the [Question & Anecdotes](https://rexayo.github.io/everyday-why/questions-anecdotes.html) page was inspired in part by the layout of [We are Listen](https://www.wearelisten.com).
