---
title: Editing Pages and Posts
date: 2019-12-12 23:18:00 +09:30
layout: content-page
---

###### [Back to the site user manual](/administration/)

###### [Previous: creating a Gallery Post](/creating-a-gallery-post/)

The content of Pages and Posts can be edited at any time, following the same *"Edit-Save-Publish"* workflow as when they were created.

#### Deleting a Page or Post

The **Delete Page** icon below the **Page Editor** allows a Page or Post to be removed. This can also be done from the main Pages or Posts section.

Note: if a Page or Post is accidentally deleted, all is not lost. The site can be rewound to a previous revision using GitHub. However, it's best if this is done swiftly and before other site administration occurs.

#### Changing metadata and layout

**Metadata** and **Layout** can also be changed after a Page or Post is published.

#### Including HTML in Pages

[Markdown](https://en.wikipedia.org/wiki/Markdown) supports the inclusion of raw HTML inline in content blocks.

This means that custom markup can be added to any Page or Post—this might for instance include your preferred video embed code. Do this with care as some HTML might break page layout.

<script type="text/javascript">
   console.log("Test!");
</script>

#### Editing on GitHub

Using the Climate Action Darwin GitHub credentials, you can edit the content of the site directly on GitHub.

The repository for the website can be found [here](https://github.com/climateactiondarwin/climateactiondarwin.github.io). If you visit the repository page, you'll find a web page that looks like the below: 

![editing-on-github.png](/uploads/editing-on-github.png)

This complexity is what the Siteleaf interface hides you from. However, in this environment, you can also manually alter all files in the site, including its HTML templates and layouts, and its deeper configuration. You can delete and replace images and other media, and even delete the site altogether or take it offline if necessary.

###### [Next: editing site templates and styles](/editing-site-templates-and-styles/)