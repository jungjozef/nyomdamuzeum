---
layout: layouts/base.njk
title: Kontakt
lang: sr
slug: contact
permalink: /sr/contact/
---

# Kontakt

<p>Popunite formular i odgovoricemo vam u najkracem roku.</p>

<form class="contact-form" method="post" action="#">
  <label for="name-sr">Ime</label>
  <input id="name-sr" name="name" type="text" required />

  <label for="email-sr">Email</label>
  <input id="email-sr" name="email" type="email" required />

  <label for="message-sr">Poruka</label>
  <textarea id="message-sr" name="message" rows="6" required></textarea>

  <button type="submit">Posalji</button>
</form>
