jamsolut
========

Make all relative requires following the inclusion of jamsolut use absolute paths.

Usage
=====

1. Set `baseUrl` of jam to, e.g., `static`
2. Set `packageDir` of jam to, e.g., `static/js/jam`
3. Include `jamsolut` in the jam dependencies.
4. `jam install`
5. `require(['jamsolut'])` in a source file

This will make (for example) `require(['jquery'])` load a file from
`/js/jam/jquery/jquery-1.9.1.min.js` instead of
`./js/jam/jquery/jquery-1.9.1.min.js` relative to the current path.

