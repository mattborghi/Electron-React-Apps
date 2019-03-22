
from: https://medium.com/@brockhoff/using-electron-with-react-the-basics-e93f9761f86f


list globally installed npm pakcages

$ npm list -g --depth 0

uninstall them using

$ npm -g uninstall <package_name> --save

Check outdated packages

$ npm outdated

$ npx create-react-app first-app

Missing dependencies in package.json

$ npx create-react-app first-app --use-npm

npm ERR! Error: EPERM: operation not permitted, unlink 'C:\Users\matiasb\Desktop\Projects\electron-apps\react\first-app\node_modules\.staging\cacache-dc3ec49b\README.md'

npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.

npm install --save --save-exact --loglevel error react react-dom react-scripts has failed

$ npm config set unsafe-perm=true

same error

$ npm init react-app <app_name>

worked!

$ npm install

npm ERR! Unexpected end of JSON input while parsing near '...mium-1.3.8.tgz"}},"1.'

$ npm cache clean --force

npm ERR! code EINTEGRITY

instead tryied by setting the proxy

$ npm install --proxy http://user:pass@host:port

worked.
