---
layout: layouts/base.njk
title: Contact
lang: en
slug: contact
permalink: /en/contact/
---

# Contact

<p>Fill out the form and we will reply as soon as possible.</p>

<form class="contact-form" method="post" action="#">
  <label for="name-en">Name</label>
  <input id="name-en" name="name" type="text" required />

  <label for="email-en">Email</label>
  <input id="email-en" name="email" type="email" required />

  <label for="message-en">Message</label>
  <textarea id="message-en" name="message" rows="6" required></textarea>

  <button type="submit">Send</button>
</form>
