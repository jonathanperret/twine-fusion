# Installation

```bash
$ npm install -g https://github.com/ut7/twine-fusion
```

# Usage

Export stories to be merged with Twine's _Publish to file_ command.

Stories should not have passages with the same names.

```bash
$ twine-fusion story1.html story2.html … storyN.html > merged.html
```

Now import the resulting file into Twine using the _Import from file_ command.
