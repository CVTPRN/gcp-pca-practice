import {rm,mkdir,cp} from 'node:fs/promises';
await rm('dist',{force:true,recursive:true});
await mkdir('dist',{recursive:true});
await cp('web','dist',{recursive:true});
console.log('Built static site in dist/');
