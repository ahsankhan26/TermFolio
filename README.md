<h1 id="title" align="center">TermFolio</h1>

<h3 align="center">:desktop_computer: A Portfolio Website that looks and acts like a Terminal :computer:</h3>

<p align="center">
  <a href="#title"><img src="https://forthebadge.com/images/badges/made-with-javascript.svg"></a>
  <a href="#title"><img src="https://forthebadge.com/images/badges/built-with-love.svg"></a>
  <a href="#title"><img src="https://forthebadge.com/images/badges/designed-in-ms-paint.svg"></a>
</p>

<h1 id="preview" align="center">Preview</h1>
<p align="center">
  <a href="https://ahsankhan.me/TermFolio"><img src="https://forthebadge.com/images/badges/check-it-out.svg"></a>
</p>

<h1 id="setup">Setup</h1>

Just clone the repository and update the data.js file

```ruby
# Clone this repository
$ git clone https://github.com/ahsankhan26/TermFolio.git

# Go to the repository folder
$ cd TermFolio

# Open the file(data.js)
```
<h4>Resume</h4>

just place your resume in the 'assets' directory and add the name of the file in 'data.js'.

<h4>data.js</h4>

```javascript
var data = {
  name : 'YOUR NAME HERE',
  bio: [
    {name: 'Name', value: 'YOUR NAME HERE'},
    {name: 'Email', value: 'YOUR EMAIL HERE'}
  ],
  github: 'YOUR GITHUB USERNAME HERE',
  projects: [
    {name: 'ProjectName1', url: 'PROJECT LINK HERE'},
    {name: 'ProjectName1', url: 'PROJECT LINK HERE'}
  ],
  resume: 'ResumeName.pdf',
  socials: [
    {name: 'LinkedIn', url: 'SITE URL'},
    {name: 'Github', url: 'SITE URL'}
  ]
}
```

<h1 id="tools">Made Using :wrench:</h1>

* HTML
* CSS
* JavaScript