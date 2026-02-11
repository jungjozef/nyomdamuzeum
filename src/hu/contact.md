---
layout: layouts/base.njk
title: Kapcsolat
lang: hu
slug: contact
permalink: /hu/contact/
---

# Kapcsolat

<p>Toltse ki az urlapot, es rovid idon belul valaszolunk.</p>

<form class="contact-form" method="post" action="#">
  <label for="name-hu">Nev</label>
  <input id="name-hu" name="name" type="text" required />

  <label for="email-hu">Email</label>
  <input id="email-hu" name="email" type="email" required />

  <label for="message-hu">Uzenet</label>
  <textarea id="message-hu" name="message" rows="6" required></textarea>

  <button type="submit">Kuldes</button>
</form>
