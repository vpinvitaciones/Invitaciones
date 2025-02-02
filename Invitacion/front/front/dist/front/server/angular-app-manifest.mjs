
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/inicio",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/inicio"
  },
  {
    "renderMode": 2,
    "route": "/Asistencia"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 506, hash: '56f04254668fd3ebefd3c4a68ab456527b66d99e8a306c16622e0b17d2a17b8d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '6a1326abbee6d7708e5acefce6a850495dcd10e65f26c30548ea286ab203ba02', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Asistencia/index.html': {size: 4240, hash: '9f1371a9f48af55967f68a543170ae40ccebe786bb826934845359b133460b68', text: () => import('./assets-chunks/Asistencia_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 3658, hash: '6a290b1156c721d6e1255d6ef38a8b00d0b9b90ddcf27e9bd7172867a9b6cb01', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
