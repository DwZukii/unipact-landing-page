"""Local static server that mirrors Vercel's cleanUrls: /about serves about.html."""
import http.server
import os
import sys


class CleanUrlHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        resolved = super().translate_path(path)
        if not os.path.exists(resolved) and os.path.exists(resolved + ".html"):
            return resolved + ".html"
        return resolved


port = int(sys.argv[1]) if len(sys.argv) > 1 else 5500
http.server.ThreadingHTTPServer(("", port), CleanUrlHandler).serve_forever()
