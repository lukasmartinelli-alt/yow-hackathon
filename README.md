# yow-hackathon

[![Join the chat at https://gitter.im/lukasmartinelli/yow-hackathon](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/lukasmartinelli/yow-hackathon?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![yow Hackathon](screenshot.png)](http://yow-hackathon.lukasmartinelli.ch)

Jeder Entwickler [sollte einen Blog](http://www.hanselman.com/blog/YourBlogIsTheEngineOfCommunity.aspx) oder eine Portfolio Website haben um sich
zu präsentieren und von der breiten Masse abzuheben.

Wir werden uns am **Montag 23. Februar ab 17:00 im Raum 1.212** treffen um
zusammen an unserem persönlichen Webauftritt zu arbeiten.
Melde dich auf http://yow-hackathon.lukasmartinelli.ch an.

Ziel des Hackathons ist es, das am Ende **alle eine eigene Seite und
Domain haben** und z.B einen einfachen Entwickler Blog mit Tools wie Github
Pages aufgesetzt haben.
Du bist natürlich auch willkommen, wenn du bereits mit deiner Website begonnen
hast und Unterstützung oder Feedback brauchst.

Ich werde dieses Repo im Laufe der Woche mit zusätzlichen Materialien ergänzen,
Pull Requests sind natürlich willkommen.

## Ablauf

Zeit  | Ablauf
------|-------------------------------------------------------------
17:00 | Welcome in Raum 1.212
17:15 | Intro
17:30 | Templates / Designs aussuchen und verwenden
18:00 | **1. Ziel:** Einfache statische Site öffentlich erreichbar
18:15 | Pizzabestellung aufnehmen
19:00 | Ess- und Trinkpause :pizza:
19:00 | Dynamische Blog Posts mit Github Pages (Jekyll)
19:15 | **2. Ziel:** Blog aufsetzen
21:30 | Aufräumen
22:00 | Protectas wirft uns raus

# Get started

## Terms

### GitHub Pages

You can host a
[static website](http://nilclass.com/courses/what-is-a-static-website/)
directly from your repository with [Github Pages](https://pages.github.com/).
Read [a longer introduction](http://24ways.org/2013/get-started-with-github-pages/) if you want to skip ahead.

### Git

Git is the [most popular](http://www.sitepoint.com/version-control-software-2014-what-options/) version control system today.
It is hard to master but you can read
[the simple guide](https://rogerdudler.github.io/git-guide/) to get started.

### Static Site Generator

The first choice for creating a personal website or a blog for non-programmers
is [WordPress](https://wordpress.org/).
But [do you really need a PHP webserver](http://davidtucker.net/articles/move-to-static-site-generator/) just to host your static little site?

A static site generator transforms plain text and templates into a static website.
Advantages of a static site:

- Simplicity
- Fast
- Minimal (no database and no CMS) and secure
- No hosting fees

### Jekyll

The [most popular static site generator](https://www.staticgen.com/) is
[Jekyll](http://jekyllrb.com/) which also runs on Github
(it has been written by GitHub CEO Tom Preston-Werner).

### Markdown

Markdown is everywhere nowadays. Markdown is a way to style text
(like [Latex](http://latex-project.org/intro.html) or
[reStructuredText](http://sphinx-doc.org/rest.html)).
Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or \*.
You can master markdown in 3 minutes with
[this quick introduction](https://guides.github.com/features/mastering-markdown/).

### Twitter Bootstrap

[Twitter Bootstrap](http://getbootstrap.com/) is a HTML & CSS framework to
get started quickly. Just try, google and copy paste.

## Create a page

1. Register at [GitHub](https://github.com/)
2. [Setup Git](https://help.github.com/articles/set-up-git/)
3. Follow the steps in this [tutorial](https://pages.github.com/)
   and create a repository named `username.github.io`.

## Setup Local Developer Environment

Using Github Pages with Jekyll uses Ruby - which is easy to set up as long you
are not using Windows :smirk:.
You can either setup the environment yourself or use Cloud9 or Vagrant.
If you just building a static site you can skip this seciton for now.

Setup the environment yourself:
- **Windows:** http://jekyll-windows.juthilo.com/
- **OSX or Linux:** http://jekyllrb.com/docs/installation/

### Use Cloud9

You can use [Cloud9](https://c9.io/) to develop without installing anything
on your machine.

1. Register at [Cloud9](https://c9.io/) with your Github credentials
2. Choose your `username.github.io` repo
3. Click "Clone to edit" and choose the "Ruby on Rails" if you want to use Jekyll
4. Install Jekyll: `gem install github-pages`
5. Run in command line: `jekyll serve --port $PORT --host $HOST`
6. Click "Preview with Web Server"

### Use Vagrant

[What is Vagrant?](http://docs.vagrantup.com/v2/why-vagrant/) Vagrant let's you create portable development environments.

1. [Install Vagrant](https://www.vagrantup.com/downloads.html)
2. `git clone https://github.com/kappataumu/vagrant-up-github-pages.git`
3. In `bootstrap.sh` replace `XXX` with the URL for your GitHub pages repo
4. `vagrant up`
5. visit http://localhost:4000

You should know have a subfolder `/www` containing your GitHub pages repo
that is kept in sync with the Vagrant image. Use the editor of your choice (e.g.
[Sublime](http://www.sublimetext.com/3), [notepad++](http://notepad-plus-plus.org/), [Atom](https://atom.io/) or [Brackets](http://brackets.io/)) to edit the files.

# Design and Templates

You can build up your blog step by step from a static template
(greater learning effect) or jump directly into Jekyll and
use a ready made template.

## Get some Inspiration

Think about what your website is about and how it should look like.
If you are like me and lacking a bit of imagination it helps alot
to browse websites and templates of other people and get some
inspiration or simply steal ideas.

I prepared [a little list of websites](#inspiration-links) to look at.
Please add your own awesome sites to the list.

## Inspect other pages

Use the [Chrome Devtools](https://developer.chrome.com/devtools) or
the [Firefox Developer Tools](https://developer.mozilla.org/en/docs/Tools)
to inspect your favorite sites and mix and match.

## Use static template

Download a static template and put it in your repo or start from scratch.
I listed [some template resources](#materials) below.

## Jekyll and Poole

[Poole](http://getpoole.com/) is a very simple Jekyll starter template.
[Hyde](http://hyde.getpoole.com/) and [Lanyon](http://lanyon.getpoole.com/) are
offical Poole themes you can use.

Clone the templates into your repo:

**Pole:** `git clone https://github.com/poole/poole.git username.github.io`
**Hyde:** `git https://github.com/poole/hyde.git username.github.io`
**Lanyon:** `git clone https://github.com/poole/lanyon.git username.github.io`

If you are using Cloud9 I recommend deleting the workspace folder and
cloning the template into a `workspace` folder.

```
cd ..
rm -r workspace
git clone https://github.com/poole/poole.git workspace`
```

Now set the remote url back to your own custom repo and push the changes:

```
cd username.github.io
git remote set-url origin git@github.com:username/username.github.com.git
git push origin master
```

## Jekyll and Twitter Bootstrap

If you really want to learn some HTML and CSS I would try to stay away from
Twitter Bootstrap for now.
But you can use the [jekyllbootstrap](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) template to get up and running in 3 minutes.

```
git clone https://github.com/plusjade/jekyll-bootstrap.git username.github.io
cd username.github.com
git remote set-url origin git@github.com:username/username.github.com.git
git push origin master
```

After a couple minutes your blog will be
publicly available at http://username.github.com

## Custom domain

If you don't have a domain but got the Github Student pack
you can register a `.me` domain for free.

The easiest way to [setup a custom domain with GitHub Pages](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/)
is a CNAME record.

# Materials

## Free Twitter Bootstrap Templates

- http://bootswatch.com/
- http://startbootstrap.com/
- http://bootstrapzero.com/

## Free HTML Blog Templates

- http://themeforest.net/search?term=profile
- http://speckyboy.com/2014/03/07/30-free-responsive-html-templates/
- http://www.devfloat.com/best-free-modern-blogger-templates/
- http://makeitcg.com/minimalist-blogger-templates/2789/
- http://webdesignmoo.com/2014/20-free-blogger-templates-2014/

## Fonts

Minimalism and typography make great technical websites.
The best way to use free web fonts is
[Google Fonts](https://www.google.com/fonts/).

Ready made combinations (because we know nothing about typography):

- http://briangardner.com/google-font-combinations/
- http://hellohappy.org/beautiful-web-type/
- http://www.awwwards.com/20-best-web-fonts-from-google-web-fonts-and-font-face.html

## Other Jekyll starter templates

- https://github.com/mmistakes/minimal-mistakes
- https://github.com/jenmyers/jekyll-kickoff
- https://github.com/chibicode/jekyll-base-template
- https://mmistakes.github.io/hpstr-jekyll-theme/theme-setup/

## Blogging Essentials

- Use [Google Analytics](http://www.google.com/analytics/)
- Make sure you are found (check for search terms from the start)
- Spread your content via Twitter, Reddit and Hackernews

## Links

- **Online Blog Writer for Github:**
  You can now write your first post with an online editor like
  [prose.io](http://prose.io/) or just use Github directly.
- **Install Jekyll on Windows:**
  http://jekyllrb.com/docs/windows/
- **Using Jekyll and Poole for building a minimal blog:**
  http://joshualande.com/jekyll-github-pages-poole/
- **Creating a Archive page with Jekyll:**
  http://reyhan.org/2013/03/jekyll-archive-without-plugins.html
- **Monster workshop about creating templates with Bootstrap 3:**
  http://www.prideparrot.com/blog/archive/2014/4/blog_template_using_twitter_bootstrap3_part1

## Dynamic Elements

**Comments:** Use [Disqus](https://disqus.com/) for comments and embed
it into your sites.

**Forms:** Do you really need a contact form? Perhaps a simple mail
address will be just as good.
However there are form generators like [Wufoo](http://www.wufoo.com/).
You can also try out [Simple Form](https://getsimpleform.com/).

**Search:** People don't want to use your custom search!
Just make sure you can be found via Google.

# Inspiration Links

## Websites of HSR Students

- http://michaelburri.ch/
- http://marcjuch.li/
- https://emanuelduss.ch/
- https://dbrgn.ch/
- http://theowinter.ch/ and http://ghoul.io/
- http://scythe.ch/
- https://sbaerlocher.ch/
- http://www.patrickdoerig.ch/
- http://kapferer.ch/
- http://lukasmartinelli.ch/

## Good Looking Portfolio Sites

- http://www.gcardoso.pt/
- http://botondraduly.com/
- http://www.haveyoumetjanet.ca/
- http://www.jacobgrubbe.com/
- http://michaelvilleneuve.fr/
- http://haraldurthorleifsson.com/
- http://lisher.net/
- http://michieldegraaf.com/

## Other Dev Blogs

- http://contra.io/
- https://alexgaynor.net/
- http://sarajchipps.com/
- http://briantford.com/
- http://ejohn.org/
- http://maxogden.com/
- http://davidwalsh.name/
- https://alexsexton.com/
- http://jenmyers.net/
- http://www.hanselman.com/
- http://www.joshuanaylor.com/resume.html
- http://balupton.com/
- http://ednapiranha.com/
- http://ginatrapani.org/
- http://blog.codinghorror.com/

# Attendees

I will reference the great pages you will build in the list below.
Please notify me if you don't want to appear on the list.

- Lukas Martinelli [@lukasmartinelli](https://github.com/lukasmartinelli)
- Manuel Roth [@manuelroth](https://github.com/manuelroth)
- Samuel Kurath [@Murthy10](https://github.com/Murthy10)
- Fabian Keller [@fabiankeller](https://github.com/fabiankeller)
- Özhan Kaya [@Fizzzo42](https://github.com/Fizzzo42)
- Kevin Schmidiger [@kschmidi](https://github.com/kschmidi)
- Silvan Habegger
- Florian Merz [@flomerz](https://github.com/flomerz)
- Josip Valencic
- Oussama Zgheb
- Patrick Raths
- Werner Cheung
- Marino Melchiori [@mrevO](https://github.com/mrevO)
- Konrad Höpli [@khoepli](https://github.com/khoepli)
- Stefan Kapferer [@stefan-ka](https://github.com/stefan-ka)
- Jeyanthan Ravindran
- Simon Schaefer
- Janic Mikes [@janicmikes](https://github.com/janicmikes)
- Lukas Steiger
- Valentina Quni
- David Windler
- Andrea Hauser
- Raffael Ioannone [@RaffaelIoannone](https://github.com/RaffaelIoannone)
- Roberto Cuervo Alvarez
- Philippe Naegeli
- Rolf Furrer
- Philip Schmid
- Matthias Gabriel
- Philipp Walder
- Stefano Kals
- Tobias Schmitz
- Arianna Blanco
- Oliviero Chiodo
- Joël Egger
- Arian Gagica
- Simon Heller
- André Bachmann
