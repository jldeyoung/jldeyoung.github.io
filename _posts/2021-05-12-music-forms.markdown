---
layout: post
title:  "Bringing Willamette Music into the 2020s"
date:   2022-05-12 10:43:15 -0700
categories: blog music
---

<style>
	img{width:80%};
</style>

In October 2020, I was tasked with migrating the Music Department forms to a paperless system, and given the responsibility of overhauling the [Student Forms](https://willamette.edu/arts-sciences/music/students/forms/index.html) page on the department website.

The old page, a bulleted list of links, had not been updated in a year or two and mostly linked to printable (not fillable) PDF copies of paper forms we kept on a shelf in the front office. Due to the COVID crisis, it became apparent that relying almost exclusively on printed paper forms would not be an effective solution for the 2020s and beyond. This is where I came in.

[![A screenshot of an unordered list of hyperlinks with form titles with the header "Student Forms"](/Images/oldmusicresources.png "The old list of forms on the Student Resources page")](https://web.archive.org/web/20201104040923/https://willamette.edu/arts-sciences/music/students/index.html)

The image above, as well as others in this article, are links to the Wayback Machine, where you can explore both the old page and the remodeled version in their original format and not as simple screenshots.

## Migration

I transferred most of the old paper forms to web-based Google Forms. On the backend, this reduced the need for bulky filing cabinets full of old records, and replaced some of the spreadsheets that we had to make copies of every single semester, consolidating archive data into a single, centralized workbook instead of a separate file for every academic year in directories far and wide.

I made other forms into fillable PDFs---those that required signatures or had other needs for a paper-like format (for instance, jury forms, where three printed copies were given to each judge). This was a fairly straightforward operation as far as conversion was concerned---I had `.docx` originals for most of the documents so I wasn't relying on degraded photocopies, although there were one or two where I *couldn't* locate the original Word docs. Most of the form fields were pretty drag-and-drop in terms of replacing blank lines with text fields, adding checkboxes and radio buttons, and adding signature fields. The most complicated part was converting multiline fields, however Acrobat also has convenient support for that, with a little digging into the properties tab. I also ran the accessibility checker and restructured the document as needed, per university policy with regards to published online documents.

A couple of documents, namely the Student Handbook and the Recital Planning Checklist, were purely for informational purposes, and therefore did not need to be in a fillable format, since they weren't collecting information from students. I made content updates to these based on current department policies and procedures (some of which I also had a hand in digitizing and modernizing), then exported the Word documents to PDF, simple as that!

The Senior Project Proposal was a slightly different beast. Instead of providing a fillable PDF with a fixed amount of space to write in, my first approach used a Google Form to gather information from students into Google Sheets, which office staff could then download from the response spreadsheet and Mail Merge into pre-formatted Word documents to put in the student's file and print for signature approvals. However, in 2022, when we started to use this new method, the system proved somewhat bulky, and I went back to the drawing board. Well, not quite all the way to square one, since I did have the Mail Merge formatted document! I adapted that template into a fillable PDF and a blank Google Document that students could copy to their personal Drive and fill out as needed (thus preserving the flexible length of my previous solution if it was needed).

Finally, I replaced the shelf full of forms with a QR code to the new website and a list of the forms you could find there, so that if students came to the window asking for a form, they could still find what they needed. We didn't get a lot of traffic this way during the Spring 2021 semester, since most students were either fully remote or in "hybrid" learning, a mix of Zoom and classroom instruction. However, once students were back in the building, the QR code became a convenient replacement for the shelf full of paper, thus reducing the department's paper use. Students could now fill out any form online, or they could print it themselves, removing the need for us to keep stacks of printed copies on hand at all times.

## Redesign

The second component of this project was making the website more navigable and neat-looking. A bulleted list of hyperlinks (see image at top of page) isn't totally informative of how each form is intended to be used. Looking at this page, a student would need to know the exact title of the form they were looking for, and several commonly used forms (particularly those related to performing at our weekly student recitals) were not included on the list. As such, the page languished in a sort of purgatory where students would typically ask their instructors or office staff directly for the forms rather than finding the resources they needed on the website, where they might not even be able to find the thing they were looking for in the first place.

[![A screenshot of a webpage headlined "Current Student Information"](/Images/oldmusicresources-1.png "The old Student Resources page layout")](https://web.archive.org/web/20201104040923/https://willamette.edu/arts-sciences/music/students/index.html)

Additionally, there was information not *remotely* related to student forms on this page. As you can see in the screenshot above, information about ensemble and lesson placement auditions featured prominently. There were also links to other non-form content such as the Student Handbook and a list of concert dates. It seemed more like a dumping ground for probably-useful information than a carefully constructed repository of relevant records. From a human-centered design perspective, this was frankly a terrible user experience, so with a nudge from my supervisor Stephen, I embarked on my quest to cultivate congenial computational communion. (In other words, I got down to business making the site more pleasant to work with.)

[![A screenshot of the remodeled Student Resources webpage, with several sections and an embedded Google Calendar](/Images/newmusicresources.png "The new front Student Resources page")](https://web.archive.org/web/20201204072804/https://www.willamette.edu/arts-sciences/music/students/index.html)

First, I split the forms and the non-forms, allowing the front page to showcase concert dates, the student handbook, health and safety information, and (when applicable) the audition information. This front page also had a link to the second page, where the forms all live. Having a less cluttered front page meant I could take greater liberties with the design of the forms list itself (pictured below), adding help text and clarifying how each form should be submitted.

[![A screenshot of a page titled "Student Forms," containing an accordion with sections labeled for different types of forms and some help text](/Images/newmusicforms.png "The new, dedicated Student Forms page")](https://web.archive.org/web/20211205210449/https://willamette.edu/arts-sciences/music/students/forms/index.html)

Organizing the forms into an accordion helped me structure the list by *type* of form, rather than the original approach of a single bulleted list. Now, forms could be grouped together for simpler searching, as a student would only need a couple of keywords to find the section they needed, rather than the full name of the form. This also allowed me to hide even more information "under the fold." A student looking for Recital Planning documents, for instance, doesn't need to see or scroll through the instructions for the Add/Drop form. In this format, students can also see all of the sections at a glance, since they all fit on the screen at once, as opposed to the old non-collapsible list, where a student looking for the Summer Study form would have to scroll all the way to the bottom of the list, past several sections containing sublists. Here, all the sublists are neatly tucked away into accordion sections, and each form can have help text without cluttering the page with too many words all at once.

![A screenshot of an expanded accordion section of the forms page, titled "Convocation Forms," with buttons for several forms and instructions for each form listed](/Images/convoformsdetail.png "An expanded view of one accordion section")

## Conclusion

Using a human-centered approach, I was able to design a system that works *with* people, rather than making people work for the system. I incorporated user feedback to streamline the flow of different processes, making it easier for students, staff, and faculty to navigate numerous forms without relying on printed paper for everything. Fillable PDFs do not have to be scanned before they can be emailed, and typed text is always easier to read than potentially messy handwriting. Google Forms allow some information to stay digital without ever being printed (or only being printed once), which saves both paper and time. In particular, formatting concert programs is much simpler when all an office worker needs to do is a quick `Ctrl+C` and `Ctrl+V`, rather than painstakingly parsing and transcribing handwritten notes. Collating stage setup instructions in one sheet and printing them all at once is far more efficient than sifting through a pile of plentiful papers.

This paperless system actually functions as a coherent workflow, as opposed to being a mishmash of papers and a handful of digital forms. It is easier to navigate for all users, both on the frontend and on the backend. It is also flexible enough to adapt to changing needs. Using these tools, I was able to modernize the department's approach to collecting information from students for an increasingly online world. It's a project I take a lot of personal pride in, and a big part of my enduring legacy at Willamette University.