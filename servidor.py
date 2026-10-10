#!/usr/bin/env python3
"""
Servidor local do painel, sem cache: toda atualização da página traz os arquivos novos.

Uso:  python servidor.py        -> http://127.0.0.1:8765
(Para só consultar o painel não precisa de servidor: basta abrir o index.html.)
"""
import functools
import http.server
import os

PORTA = 8765


class SemCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    pasta = os.path.dirname(os.path.abspath(__file__))
    handler = functools.partial(SemCache, directory=pasta)
    with http.server.ThreadingHTTPServer(("127.0.0.1", PORTA), handler) as srv:
        print("Painel em http://127.0.0.1:%d (Ctrl+C para parar)" % PORTA)
        srv.serve_forever()
