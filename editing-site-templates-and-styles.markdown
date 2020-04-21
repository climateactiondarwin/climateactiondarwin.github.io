---
title: Editing site templates and styles
date: 2020-04-21 19:11:00 +09:30
---

###### [Back to the site user manual](/administration/)

###### [Previous: editing Pages and Posts](/editing-pages-and-posts/)

The site uses a [static site generator called Jekyll](https://jekyllrb.com/) to generate the containers for site content, together with the Siteleaf CMS that is used to edit content.

Jekyll uses a "template engine" to combine together and repeat fragments of [HTML](https://en.wikipedia.org/wiki/HTML), and add the content for a particular Page or Post in the site.

The styling, including the colours, fonts, margins, backgrounds and more of the generated content is specified using [Cascading Style Sheets(CSS)](https://en.wikipedia.org/wiki/HTML) written in the [Sass](https://en.wikipedia.org/wiki/Sass_(stylesheet_language)) stylesheet language.

A change to a template might be as simple as altering some fixed text, or might involve changing a style variable, or adding a new template component (like a new banner or contact links).

#### Before you start

It's worth familiarising yourself with how the site is generated, even at the most basic level.

* Page layouts are in the `/_layouts` folder
* Included HTML fragments are in the `/_includes` folder
* Stylesheets are in the mostly in the `/assets/css/components` folder

#### Editing directly via GitHub

Firstly, you will need the site technical administrator's username and password.

Use these credentials to sign in to the [GitHub](https://github.com/login) version control platform, which is where all website content and assets are stored.

Once you are logged in, you need to visit the [site repository](https://github.com/climateactiondarwin/climateactiondarwin.github.io/). This is like the "root folder" of all site files. From here, you can "clone", edit, "commit" and "push" content using the [Git](https://en.wikipedia.org/wiki/Git) version control system. That may sound complicated—don't worry, because you can edit the files right here.

To edit a particular file, firstly visit the file in GitHub by clicking on links to navigate through the site filesystem.

For example, to edit the site navbar, you would visit: 

[https://github.com/climateactiondarwin/climateactiondarwin.github.io/blob/master/_includes/nav.html](https://github.com/climateactiondarwin/climateactiondarwin.github.io/blob/master/_includes/nav.html)

Then click on the **Edit** button (a "pencil" icon) at the top right of the file. The file will become editable. Locate the elements in the layout or include file that you want to change, and make the changes. For example, in the navbar, you could choose to change the words "Climate Action Darwin" to "Fracking Action Darwin".

Once you are satisfied with your edits, enter a **commit message** and click the **Commit changes** button to commit your changes to the site. You will find it is almost instantly updated on the web.

#### Cloning and editing offline

If you want to make more substantial changes, you have a slightly more difficult road ahead, as you will want to test what you're doing offline before submitting it for publication.

To "clone" a copy of the site, you will need to install a version of [Git](https://git-scm.com/downloads) software suitable for your computer, then use the clone URL of the [site repository](https://github.com/climateactiondarwin/climateactiondarwin.github.io) to make a version-tracked copy of the site.

After you've done this, you may need to install [Ruby](https://www.ruby-lang.org/en/downloads/) on your computer for a satisfying site development experience with Jekyll, and follow further instructions. However, once you're set up, you'll be able to make edits to any aspect of the site and see them reflected locally instantly, without affecting the main site.

#### Further assistance (or panic button)

To get this far, you will have had to work with the site technical administrator to obtain their credentials or been given rights to the site's GitHub repository through your own account. If you have questions about site development, or you make a mistake of some kind that you're not sure how to fix, please consult them. Because the site is version-controlled in Git, it is always easy to revert the content to any historical version, correcting any problems.