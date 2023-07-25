---
layout: post
title:  "Creating Paperless Forms"
date:   2021-05-12 10:43:15 -0700
categories: blog music
---

<style>
	img{width:80%};
</style>

In October 2020, I was tasked with migrating the Music Department forms to a paperless system, and given the responsibility of overhauling the [Student Forms](https://willamette.edu/arts-sciences/music/students/forms/index.html) page on the department website.

[![A screenshot of the old Student Resources webpage](/Images/oldmusicresources.jpg "The old Student Resources page layout")](https://web.archive.org/web/20200905001300/https://willamette.edu/arts-sciences/music/students/index.html)

The old page, a `<ul>` of links, had not been updated in a year or two and mostly linked to printable (not fillable) PDF copies of paper forms we kept on a shelf in the front office. Due to the COVID crisis, it became apparent that relying almost exclusively on printed paper forms would not be an effective solution for the 2020s and beyond. This is where I came in.

I transferred most of the old paper forms to web-based Google Forms. The rest, that required signatures or had other needs for a paper-like format (for instance, jury forms, where three printed copies were given to each judge), I made into fillable PDFs. This was a fairly straightforward operation as far as conversion was concerned---I had `.docx` originals for most of the documents so I wasn't relying on degraded photocopies, although there were one or two where I *couldn't* locate the original Word docs. Most of the form fields were pretty drag-and-drop in terms of replacing blank lines with text fields, adding checkboxes and radio buttons, and adding signature fields. The most complicated part was converting multiline fields, however Acrobat also has convenient support for that, with a little digging into the properties tab. I also ran the accessibility checker and restructured the document as needed, per university policy with regards to published online documents.

The Senior Project Proposal was a slightly different beast. Instead of providing a fillable PDF with a fixed amount of space to write in, my first approach used a Google Form to gather information from students into Google Sheets, which office staff could then download from the response spreadsheet and Mail Merge into pre-formatted Word documents to put in the student's file and print for signature approvals. 

[![A screenshot of the remodeled Student Resources webpage](/Images/newmusicresources.jpg "The new front Student Resources page")](https://web.archive.org/web/20201204072804/https://www.willamette.edu/arts-sciences/music/students/index.html)

[![A screenshot of the new Student Forms page](/Images/newmusicforms.jpg "The new, dedicated Student Forms page")](https://web.archive.org/web/20211205210449/https://willamette.edu/arts-sciences/music/students/forms/index.html)