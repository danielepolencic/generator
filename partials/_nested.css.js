module.exports = `
.nested-copy-line-height p,
.nested-copy-line-height ul,
.nested-copy-line-height ol {
  line-height: 1.5;
}

.nested-headline-line-height h1,
.nested-headline-line-height h2,
.nested-headline-line-height h3,
.nested-headline-line-height h4,
.nested-headline-line-height h5,
.nested-headline-line-height h6 {
  line-height: 1.25;
}

.nested-list-reset ul,
.nested-list-reset ol {
  padding-left: 0;
  margin-left: 0;
  list-style-type: none;
}

.nested-copy-indent p+p {
  text-indent: 1em;
  margin-top: 0;
  margin-bottom: 0;
}

.nested-copy-seperator p+p {
  margin-top: 1.5em;
}

.nested-img img {
  width: 100%;
  max-width: 100%;
  display: block;
}

.nested-links a {
  color: var(--blue);
  transition: color .15s ease-in;
}

.nested-links a:hover,
.nested-links a:focus {
  color: var(--light-blue);
  transition: color .15s ease-in;
}
`