# yow-hackathon

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
17:15 | Einführung in Github Pages
17:25 | **1. Ziel:** Einfaches Portfolio öffentlich erreichbar
17:50 | Pizzabestellung aufnehmen
18:00 | Templates / Designs aussuchen und verwenden
18:30 | Ess- und Trinkpause :pizza:
19:00 | Dynamische Blog Posts mit Github Pages (Jekyll)
19:15 | **2. Ziel:** Blog aufsetzen
21:30 | Aufräumen
22:00 | Protectas wirft uns raus

# Why Github Pages?

The first choice for creating a personal website or a blog would
probably be [WordPress](https://wordpress.org/).
But [do you really need a PHP webserver](http://davidtucker.net/articles/move-to-static-site-generator/) just to host your static little site?
As programmer we have no need for a fancy CMS - we know HTML and git.

The solution is a static site generator, where the [most popular one](https://www.staticgen.com/) is Jekyll.

# Get started

## Create a page

1. Register at [GitHub](https://github.com/)
2. [Setup Git](https://help.github.com/articles/set-up-git/)
3. Create a repository named `username.github.io`.
   More information can be found [here](https://pages.github.com/)

## Twitter Bootstrap

You can use the [jekyllbootstrap](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) template to get up and running in 3 minutes.

```
git clone https://github.com/plusjade/jekyll-bootstrap.git username.github.com
cd username.github.com
git remote set-url origin git@github.com:username/username.github.com.git
git push origin master
```

After a couple minutes your blog will be
publicly available at http://username.github.com

## Setup Local Developer Environment

Using Github Pages with Jekyll uses Ruby - which is easy to set up as long you
are not using Windows :smirk:. You can either setup the environment yourself or use Vagrant (the happy path).

Setup the environment yourself:
- **Windows:** http://jekyll-windows.juthilo.com/
- **OSX or Linux:** http://jekyllrb.com/docs/installation/

What is Vagrant? Vagrant let's you create portable development environments.

1. [Install Vagrant](https://www.vagrantup.com/downloads.html)
2. `git clone https://github.com/kappataumu/vagrant-up-github-pages.git`
3. In `bootstrap.sh` replace `XXX` with the URL for your GitHub pages repo
4. `vagrant up`
5. visit http://localhost:4000

You should know have a subfolder `/www` containing your GitHub pages repo
that is kept in sync with the Vagrant image. Use the editor of your choice
to edit the files.

# Materials

## Templates

- http://bootswatch.com/
- http://startbootstrap.com/
- http://themeforest.net/search?term=profile

## Github Pages

- http://jekyll-windows.juthilo.com/
- https://pages.github.com/
- http://jekyllbootstrap.com/
- http://jekyllrb.com/
- http://nilclass.com/courses/what-is-a-static-website/
- https://pages.github.com/
- http://24ways.org/2013/get-started-with-github-pages/
- http://jekyllrb.com/docs/windows/

## Dynamic Problems

**Comments:** Use [Disqus](https://disqus.com/) for comments and embed
it into your sites.

**Forms:** Do you really need a contact form? Perhaps a simple mail
address will be just as good.
However there are form generators like [Wufoo](http://www.wufoo.com/).

**Search:** People don't want to use your custom search!
Just make sure you can be found via Google.

# Inspiration

To see what it is all about, get inspiration or simply steal ideas.

## HSRler

Webseiten einiger HSRler oder anderer Schweizer Entwickler:

- http://michaelburri.ch/
- http://marcjuch.li/
- https://emanuelduss.ch/
- https://dbrgn.ch/
- http://scythe.ch/
- https://sbaerlocher.ch/
- http://www.patrickdoerig.ch/
- http://lukasmartinelli.ch/

## Best Portfolio Sites

- http://www.gcardoso.pt/
- http://botondraduly.com/
- http://www.haveyoumetjanet.ca
- http://www.jacobgrubbe.com/
- http://michaelvilleneuve.fr
- http://haraldurthorleifsson.com/
- http://lisher.net/
- http://michieldegraaf.com/

## Random Dev Blogs

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
