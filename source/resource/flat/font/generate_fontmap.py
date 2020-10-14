#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import string


meta = None
fontmap = {}
# list names to filer
filter = [
    '.notdef'
]

# append all ascii letters to filter
filter = filter + [letter for letter in string.ascii_letters]


def main():
    # read meta file
    with open('LigatureSymbols-2.11.meta', 'r') as f:
        meta = json.loads(f.read())

    # collect names and hex values
    for name, value in meta['mapping'].items():
        if len(name) > 1 and name not in filter:
            fontmap[name.lower()] = hex(value[0])[2:]

    # write map
    with open('LigatureSymbols-2.11.map', 'w') as f:
        f.write(json.dumps(fontmap, indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
